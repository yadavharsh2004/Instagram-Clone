import {create} from 'zustand'

const usePostStore = create((set) =>({
    posts: [],
    createPost: (post) => set((state) => ({posts: [post, ...state.posts]})),

    //deletePost
    //addComments
    //setPosts

}))

export default usePostStore