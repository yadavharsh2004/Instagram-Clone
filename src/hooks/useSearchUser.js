import { useState } from 'react'
import useShowToast from './useShowToast';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { firestore } from '../firebase/firebase';

const useSearchUser = () => {
  const [isLoading, setIsLoading] = useState();
  const [user, setUser] = useState(null);
  const showToast = useShowToast();
  
  const getUserProfile = async (username) =>{
    setIsLoading(true)
    setUser(null)   //for removing previously searched people 
    try {
        const q = query(collection(firestore, "users"),where("username", "==", username ) );
        const querySnapshot = await getDocs(q);  
        if(querySnapshot.empty) return showToast("Error", "Usernot found", "error");

        querySnapshot.forEach((doc) =>{
            setUser(doc.data());
        })
    } 
    catch (error) {
        showToast("Error", error.message, "error");
    }
    finally{
        setIsLoading(false)
    }
  }
  return {isLoading, getUserProfile, user, setUser}
}

export default useSearchUser