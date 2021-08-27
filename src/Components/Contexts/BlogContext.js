import { createContext } from 'react'

const BlogContext = createContext()

export const BlogProvider = BlogContext.Provider
export const BlogConsumer = BlogContext.Consumer

export default BlogContext
