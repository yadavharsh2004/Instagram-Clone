import { useEffect, useState } from 'react'
import useAuthStore from '../store/authStore';
import useUserProfileStore from '../store/userProfileStore';
import useShowToast from './useShowToast';
import { auth, firestore } from '../firebase/firebase';
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore';

const useFollowUser = (userId) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);

  const authUser = useAuthStore((state)=>state.user);
  const setAuthUser = useAuthStore((state)=>state.setUser);
  const {userProfile, setUserProfile} = useUserProfileStore();

  const showToast = useShowToast();



  const handleFollowUser = async () =>{
    setIsUpdating(true);

    try {
      const currentUser = doc(firestore, "users", authUser.uid);
      const userToFollowOrUnfollow = doc(firestore, "users", userId);

      await updateDoc(currentUser,{
        following: isFollowing? arrayRemove(userId) : arrayUnion(userId)
      })

      await updateDoc(userToFollowOrUnfollow,{
        following: isFollowing? arrayRemove(authUser.uid) : arrayUnion(authUser.uid)
      })

      if(isFollowing){       //unfollow
        setAuthUser({
          ...authUser,
          following: authUser.following.filter(uid => uid !== userId)
        })
        
        setUserProfile({
          ...userProfile,
          followers: userProfile.followers.filter(uid => uid !== authUser.uid)
        })
        
        localStorage.setItem("user-info", JSON.stringify({
          ...authUser,
          following: authUser.following.filter(uid => uid !== userId)
        }))

        setIsFollowing(false)
      }
      else{                   //follow
        setAuthUser({
          ...authUser,
          following: [...authUser.following, userId]
        })
        
        setUserProfile({
          ...userProfile,
          followers: [...userProfile.followers, authUser.uid]
        })
        
        localStorage.setItem("user-info", JSON.stringify({
          ...authUser,
          following: [...authUser.following, userId]
        }))

        setIsFollowing(true)
      }
    } 
    catch (error) {
      showToast("Error", error.message, "error");  
    }
    finally{
      setIsUpdating(false);
    }
  }

  useEffect(() => {
    if(authUser){
      const isFollowing = authUser.following.includes(userId);
      setIsFollowing(isFollowing);
    }
  }, [authUser, userId])
  
  return {isFollowing, isUpdating, handleFollowUser}
}

export default useFollowUser