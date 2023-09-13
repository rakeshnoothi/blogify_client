import BlogPost from "./BlogPost";
import CategoryButton from "./CategoryButton";
import MostLikedBlogs from "./MostLikedBlogs";
import useBlogsDataContext from "../../../hooks/useBlogsDataContext";
import { useRef } from "react";

const buttonDisplayNames = ["Tech", "Food", "Travel", "Gaming"];

const CategoryBlogSection = () => {
    const { categoryBlogs } = useBlogsDataContext();
    const { topLikedBlogs } = useBlogsDataContext();
    const activeCategory = useRef(null);

    const fetchCategoryPosts = category => {
        //return if clicked on the same category button again.
        if (activeCategory.current === category) return;
        activeCategory.current = category;
        const config = {
            method: "get",
            url: `/categories/?filters[category]=${category}&populate[posts][populate][image]=true`,
        };
        return categoryBlogs.fetchData(config);
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
                    {categoryBlogs.blogPostsIsLoading ? (
                        <div>Loading Posts....</div>
                    ) : (
                        categoryBlogs.formattedCategoryBlogs &&
                        categoryBlogs.formattedCategoryBlogs.map(post => {
                            return <BlogPost key={post.id} postData={post} />;
                        })
                    )}
                </div>
                {/* most popular section */}
                <div className="hidden lg:block max-w-[551px] h-fit space-y-4 p-2 sticky top-[66px]">
                    <span className="font-bold text-xl block">
                        Top Liked posts
                    </span>
                    {topLikedBlogs.topLikedBlogsIsLoadingg ? (
                        <div>Loading posts....</div>
                    ) : (
                        topLikedBlogs.formattedTopLikedBlogs &&
                        topLikedBlogs.formattedTopLikedBlogs.map(post => {
                            return (
                                <MostLikedBlogs postData={post} key={post.id} />
                            );
                        })
                    )}
                </div>
            </div>
        </div>
    );
};
export default CategoryBlogSection;
