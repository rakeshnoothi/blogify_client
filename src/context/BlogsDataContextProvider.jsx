import { createContext } from "react";
import useFetch from "../hooks/useFetch";

export const BlogsDataContext = createContext();
const mostPopularBlogsConfig = {
    method: "get",
    url: "/posts?pagination[pageSize]=3&sort[6]=like:desc&populate[image]=true",
};

const BlogsContextProvider = ({ children }) => {
    const {
        data: fetchedCategoryPostsData,
        isLoading: blogPostsIsloading,
        fetchData,
    } = useFetch();
    const {
        data: fetchedTopLikedBlogsData,
        isLoading: topLikedBlogsIsLoading,
    } = useFetch(mostPopularBlogsConfig);

    const blogPosts = {
        fetchedCategoryPostsData,
        blogPostsIsloading,
        fetchData,
    };

    const topLikedBlogs = {
        fetchedTopLikedBlogsData,
        topLikedBlogsIsLoading,
    };

    const contextValue = {
        blogPosts,
        topLikedBlogs,
    };

    return (
        <BlogsDataContext.Provider value={contextValue}>
            {children}
        </BlogsDataContext.Provider>
    );
};
export default BlogsContextProvider;
