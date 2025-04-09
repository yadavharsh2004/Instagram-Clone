import { useState } from 'react'
import useShowToast from './useShowToast';
import useUserProfileStore from '../store/userProfileStore';

const uploadToCLoudinary = () => {
    const [isUploading, setIsUploading] = useState(false);
    // const [downloadURL, setDownloadURL] = useState("");

    const showToast = useShowToast();

    const uploadImage = async (selectedFile, folderName, public_id=null) =>{
        let downloadURL = "";
        try {
            const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
            const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

            const uploadUrl = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
            const formData = new FormData();

            formData.append("file", selectedFile); // selectedFile is data URL or File object
            formData.append("upload_preset", uploadPreset);
            // Optional: Specify folder or public_id if needed and allowed by preset
            if(folderName) formData.append("folder", folderName);

            // formData.append("public_id", postDocRef.id);
            if (public_id) {
                formData.append("public_id", public_id);
                // formData.append("overwrite", "true"); // Usually needed if using public_id to replace
            }

            const response = await fetch(uploadUrl, {
                method: "POST",
                body: formData,
            });
            const data = await response.json(); // Parse the response

            if (!response.ok) {
                console.error("Cloudinary Upload Error Response:", data);
                throw new Error(
                data.error?.message || `Cloudinary upload failed: ${response.status}`
                );
            }

            // If upload succeeded, get the secure URL
            downloadURL = (data.secure_url);
        } catch (error) {
            showToast("Error", error.message, "error");
        }

        return downloadURL;
    }
    
    return {uploadImage}
}

export default uploadToCLoudinary