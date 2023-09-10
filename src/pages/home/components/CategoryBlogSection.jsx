import BlogPost from "./BlogPost";
import CategoryButton from "./CategoryButton";
import MostPopularBlog from "./MostPopularBlog";
import useFetch from "../../../hooks/useFetch";
import makePostModel from "../../../utils/makePostModel";

const buttonDisplayNames = ["Tech", "Food", "Travel", "Gaming"];

const CategoryBlogSection = () => {
    const { fetchData, data: fetchedCategoryPostsData } = useFetch();

    //If fetchedPosts is not null call makePostModel function on every element to format every post.
    const formattedPosts =
        fetchedCategoryPostsData &&
        fetchedCategoryPostsData.data[0].attributes.posts.data.map(post => {
            return makePostModel(post);
        });

    const fetchCategoryPosts = category => {
        //return if clicked on the same category button again.
        if (fetchedCategoryPostsData?.data[0].attributes.category === category)
            return;
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
                        />
                    ))}
                </div>
            </div>
            <div className="flex justify-center space-x-4">
                <div className="space-y-4">
                    {formattedPosts &&
                        formattedPosts.map(post => {
                            return <BlogPost key={post.id} postData={post} />;
                        })}
                </div>
                {/* most popular section */}
                <div className="hidden lg:block max-w-[551px] h-fit space-y-4 p-2 sticky top-[66px]">
                    <span className="font-bold text-xl block">
                        Most Popular
                    </span>
                    <MostPopularBlog />
                </div>
            </div>
        </div>
    );
};
export default CategoryBlogSection;
