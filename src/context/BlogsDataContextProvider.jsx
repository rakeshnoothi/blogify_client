import { createContext } from "react";
import useFetch from "../hooks/useFetch";
import makePostModel from "../utils/makePostModel";

export const BlogsDataContext = createContext();
const mostPopularBlogsConfig = {
    method: "get",
    url: "/posts?pagination[pageSize]=3&sort[6]=like:desc&populate[image]=true",
};

const BlogsContextProvider = ({ children }) => {
    const {
        data: fetchedCategoryBlogsData,
        isLoading: blogPostsIsloading,
        fetchData,
    } = useFetch();

    const {
        data: fetchedTopLikedBlogsData,
        isLoading: topLikedBlogsIsLoading,
    } = useFetch(mostPopularBlogsConfig);

    const formattedTopLikedBlogs =
        fetchedTopLikedBlogsData &&
        fetchedTopLikedBlogsData.data.map(post => {
            return makePostModel(post);
        });

    const formattedCategoryBlogs =
        fetchedCategoryBlogsData &&
        fetchedCategoryBlogsData.data[0].attributes.posts.data.map(post => {
            return makePostModel(post);
        });

    const categoryBlogs = {
        formattedCategoryBlogs,
        blogPostsIsloading,
        fetchData,
    };

    const topLikedBlogs = {
        formattedTopLikedBlogs,
        topLikedBlogsIsLoading,
    };

    const contextValue = {
        categoryBlogs,
        topLikedBlogs,
    };

    return (
        <BlogsDataContext.Provider value={contextValue}>
            {children}
        </BlogsDataContext.Provider>
    );
};
export default BlogsContextProvider;
