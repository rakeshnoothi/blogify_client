import BlogPost from "./BlogPost";
import CategoryButton from "./CategoryButton";

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
                <div className="hidden lg:block bg-orange-200 max-w-[551px] h-fit">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                    adipisci expedita pariatur facere voluptatem odio culpa,
                    voluptate exercitationem unde quibusdam minus quas alias
                    dolore, quaerat sit tenetur ut ducimus temporibus!
                </div>
            </div>
        </div>
    );
};
export default CategoryBlogSection;
