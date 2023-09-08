import BlogPost from "./BlogPost";
import CategoryButton from "./CategoryButton";
import MostPopularBlog from "./MostPopularBlog";

const buttonDisplayNames = ["Adventure", "Nature", "Sci-Fi", "Mythology"];
const posts = [1, 2, 3, 4, 5, 6];

const CategoryBlogSection = () => {
    return (
        <div className="space-y-4">
            <div
                className="overflow-auto no-scrollbar"
                // onWheel={e => horizontalScroll(e)}
                // ref={ref}
            >
                <div className="flex space-x-4 min-w-[565px]">
                    {buttonDisplayNames.map(buttonDisplayName => (
                        <CategoryButton
                            key={buttonDisplayName}
                            displayName={buttonDisplayName}
                        />
                    ))}
                </div>
            </div>
            <div className="flex justify-center space-x-4">
                <div className="space-y-4">
                    {posts.map(post => {
                        return <BlogPost key={post} />;
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
