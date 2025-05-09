import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import {auth, firestore} from '../firebase/firebase'
import { collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore';
import useShowToast from './useShowToast';
import useAuthStore from '../store/authStore';

const useSignupWithEmailAndPassword = () => {

    const [ createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

    const showToast = useShowToast();
    const loginUser = useAuthStore((state) => state.login);

    
    const signup = async (inputs) =>{
        if(!inputs.email || !inputs.fullName || !inputs.password || !inputs.username ){
            showToast("Error", "Please fill all the fields !!", "error");
            return ;
        }
        
        // Checking if username exists 
        const usersRef = collection(firestore, "users");
        const q = query(usersRef, where("username", "==", inputs.username));
    
        const querySnapshot = await getDocs(q);
        if(!querySnapshot.empty) {
            showToast("Error", "Username already exists", "error");
            return;
        }


        try{
            const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password);
            if(!newUser && error) { 
                showToast("Error", error.message, "error");
                return
            }
            if(newUser) {
                const userDoc = {
                    uid : newUser.user.uid,
                    email : inputs.email,
                    fullName: inputs.fullName,
                    username: inputs.username,
                    bio: "",
                    profilePicUrl: "",
                    followers: [],
                    following: [],
                    posts: [],
                    createdAt: Date.now()
                }
            

                await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
                localStorage.setItem("user-info", JSON.stringify(userDoc));
                loginUser(userDoc);
            }    

        }
        catch(error){
            showToast("Error", error.message, "error")
        }
    }

  return {loading, error, signup}
}

export default useSignupWithEmailAndPassword