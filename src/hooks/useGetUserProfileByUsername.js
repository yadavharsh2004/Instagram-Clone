import { useEffect, useState } from "react";
import useShowToast from "./useShowToast";
import { collection, getDocs, query, where } from "firebase/firestore";
import useUserProfileStore from "../store/userProfileStore";
import { firestore } from "../firebase/firebase";

const useGetUserProfileByUsername = (username ) => {
  const [isLoading, setIsLoading] = useState(true);
  const showToast = useShowToast();
  const { userProfile, setUserProfile } = useUserProfileStore();

  useEffect(() => {
    const getUserProfile = async () => {
      setIsLoading(true);

      try {
        const q = query(
          collection(firestore, "users"),
          where("username", "==", username)
        );
        // console.log("query created: ", q);

        const querySnapshot = await getDocs(q);
        // console.log("Query result:", querySnapshot.empty ? "No user found" : "User found");

        if (querySnapshot.empty) return setUserProfile(null);

        let userDoc;
        querySnapshot.forEach((doc) => {
          userDoc = doc.data();
        });

        setUserProfile(userDoc);
        // console.log(userDoc);
      } 
      catch (error) {
        showToast("Error", error.message, "error");
      }
      finally{
        setIsLoading(false)
      }
    };

    getUserProfile();
  }, [setUserProfile, username, showToast]);

  return {isLoading, userProfile};
};

export default useGetUserProfileByUsername;
