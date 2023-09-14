import BlogPost from "./BlogPost";
import CategoryButton from "./CategoryButton";
import TopLikedBlogs from "./TopLikedBlogs";
import { useRef } from "react";
import useFetch from "../../../hooks/useFetch";
import makePostModel from "../../../utils/makePostModel";

const buttonDisplayNames = ["Tech", "Food", "Travel", "Gaming"];
const topLikedBlogsConfig = {
    method: "get",
    url: "/posts?pagination[pageSize]=3&sort[6]=like:desc&populate[image]=true",
};

const CategoryBlogSection = () => {
    const activeCategory = useRef(null);
    const {
        data: fetchedCategoryBlogsData,
        isLoading: blogPostIsloading,
        fetchData,
    } = useFetch();
    const {
        data: fetchedTopLikedBlogsData,
        isLoading: topLikedBlogsIsLoading,
    } = useFetch(topLikedBlogsConfig);

    //format the fetched data from server.
    const formattedCategoryBlogs =
        fetchedCategoryBlogsData &&
        fetchedCategoryBlogsData.data[0].attributes.posts.data.map(post => {
            return makePostModel(post);
        });

    const formattedTopLikedBlogs =
        fetchedTopLikedBlogsData &&
        fetchedTopLikedBlogsData.data.map(post => {
            return makePostModel(post);
        });

    const fetchCategoryPosts = category => {
        //return if clicked on the same category button again.
        if (activeCategory.current === category) return;
        activeCategory.current = category;
        const config = {
            method: "get",
            url: `/categories/?filters[category]=${category}&populate[posts][populate][image]=true`,
        };
        return fetchData(config);
    };

    return (
        <div className="space-y-4">
            <div className="overflow-auto no-scrollbar">
                <div className="flex space-x-4 min-w-[565px]">
                    {buttonDisplayNames.map(buttonDisplayName => (
                        <CategoryButton
                            key={buttonDisplayName}
                            displayName={buttonDisplayName}
                            fetchCategoryPosts={fetchCategoryPosts}
                            activeCategory={activeCategory}
                        />
                    ))}
                </div>
            </div>
            <div className="flex justify-center space-x-4">
                <div className="space-y-4 w-[341px] max-w-[904px] md:min-w-[653px] md:w-full">
                    {blogPostIsloading ? (
                        <div>Loading Posts....</div>
                    ) : (
                        formattedCategoryBlogs &&
                        formattedCategoryBlogs.map(post => {
                            return <BlogPost key={post.id} postData={post} />;
                        })
                    )}
                </div>
                {/* most popular section */}
                <div className="hidden lg:block max-w-[551px] h-fit space-y-4 p-2 sticky top-[66px]">
                    <span className="font-bold text-xl block">
                        Top Liked posts
                    </span>
                    {topLikedBlogsIsLoading ? (
                        <div>Loading posts....</div>
                    ) : (
                        formattedTopLikedBlogs &&
                        formattedTopLikedBlogs.map(post => {
                            return (
                                <TopLikedBlogs postData={post} key={post.id} />
                            );
                        })
                    )}
                </div>
            </div>
        </div>
    );
};
export default CategoryBlogSection;
