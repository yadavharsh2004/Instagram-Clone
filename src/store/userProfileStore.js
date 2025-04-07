import { create } from "zustand";

const useUserProfileStore = create((set) => ({
    userProfile : null,
    setUserProfile: (userProfile) => set({userProfile}),
    //used to add the number of posts in profile Page
    addPost: (post) => set(state => ({
        userProfile: {...state.userProfile, posts: [post.id, ...state.userProfile.posts]}
    })) ,
    deletePost: (postId) => set(state => ({
        userProfile: {
            ...state.userProfile,
            posts: state.userProfile.posts.filter((id) => id !== postId),
        }
    }))
}))

export default useUserProfileStore