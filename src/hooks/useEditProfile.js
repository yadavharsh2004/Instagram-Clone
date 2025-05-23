import { useState } from 'react'
import useAuthStore from '../store/authStore';
import useShowToast from './useShowToast';
import { firestore, storage } from '../firebase/firebase';
import { ref, uploadString } from 'firebase/storage';
import { doc, updateDoc } from 'firebase/firestore';
import useUserProfileStore from '../store/userProfileStore';
import uploadToCLoudinary from './uploadToCLoudinary';

const useEditProfile = () => {

    const [isUpdating, setIsUpdating] = useState(false);
    const authUser = useAuthStore((state) => state.user);
    const setAuthUser = useAuthStore((state) => state.setUser);
    const setUserProfile = useUserProfileStore((state)=>state.setUserProfile); 
    const {uploadImage} = uploadToCLoudinary();

    const showToast = useShowToast();

    const editProfile = async (inputs, selectedFile) =>{

      if(isUpdating || !authUser) return;
      setIsUpdating(true);

      // const storageRef = ref(storage, `profilePics/${authUser.uid}`)
      const userDocRef = doc(firestore, "users", authUser.uid);

      let URL = authUser.profilePicUrl || null;
      try {
        if(selectedFile){
          // await uploadString(storageRef, selectedFile, "data_url");
          // URL = await getDownloadURL(ref(storage, `profilePics/${authUser.uid}`))

          const newURL = await uploadImage(selectedFile,  "profilePics", authUser.uid );
          if (!newURL) {
              // Upload failed (error shown by useUploadToCloudinary), stop the edit process
              return;
          }
          URL = newURL;
        }

        const updatedUser = {
          ...authUser,
          fullName: inputs.fullName || authUser.fullName,
          username: inputs.username || authUser.username,
          bio: inputs.bio || authUser.bio,
          profilePicUrl: URL || authUser.profilePicUrl
        }

        await updateDoc(userDocRef, updatedUser);
        localStorage.setItem("user-info", JSON.stringify(updatedUser));
        setAuthUser(updatedUser)
        setUserProfile(updatedUser)
        showToast("Success", "Profile Updated Successfully", "success");
      } 
      catch (error) {
        showToast("Error", error.message, "error");
      }
    }

  return {editProfile, isUpdating}
}

export default useEditProfile