import { toaster } from "@/components/ui/toaster"
import { useCallback } from "react";


const useShowToast = () => {
    //usecallback is used to prevent infinite loop, by caching the function 
    // it just memoizes( not making same function again but reusing by storing it )
    const showToast =  useCallback((title, description, type) => {
        toaster.create({
            title: title,
            description: description,
            type : type,
            duration: 3000,
            action: {label: "Undo"},
        })
    }, [toaster])

  return showToast;  
}

export default useShowToast