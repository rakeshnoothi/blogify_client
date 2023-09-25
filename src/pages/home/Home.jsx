import BannerPost from "./components/BannerPost";
import CategoryBlogSection from "./components/CategoryBlogSection";

const Home = () => {
    return (
        <div className="flex flex-col space-y-8">
            <p className="text-6xl font-thin">
                <span className="font-semibold text-orange-600">
                    Discover stories{" "}
                </span>
                and much more!
            </p>
            <BannerPost />
            <p className="text-xl font-semibold">Categories</p>
            <CategoryBlogSection />
        </div>
    );
};
export default Home;
