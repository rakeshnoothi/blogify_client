import BannerPost from "./components/BannerPost";
import CategoryBlogSection from "./components/CategoryBlogSection";

const Home = () => {
    // const ref = useRef();
    // const horizontalScroll = e => {
    //     ref.current.scrollLeft = ref.current.scrollLeft + -20;
    // };
    return (
        <main className="flex flex-col space-y-8">
            <p className="text-6xl font-thin">
                <span className="font-semibold text-orange-600">
                    Discover stories{" "}
                </span>
                and much more! brother and ok bro
            </p>
            <BannerPost />
            <p className="text-xl font-semibold">Categories</p>
            <CategoryBlogSection />
        </main>
    );
};
export default Home;
