import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import formatData from "../../../utils/formatData";

const BannerPost = () => {
    const { data: featuredBlog, isLoading: featuredBlogIsLoading } = useFetch(
        `/posts/?filters[is_featured]=TRUE&populate[image]=true`
    );
    const navigate = useNavigate();

    const formattedFeaturedBlog =
        featuredBlog && formatData.manyFormatData(featuredBlog)[0];

    const redirectToReadingPage = () => {
        navigate(`/read/${formattedFeaturedBlog.id}`);
    };

    if (featuredBlogIsLoading) return <div>Blog is loading......</div>;
    if (!featuredBlog) return <div>nothing....</div>;
    return (
        <div className="max-h-max py-4 flex flex-col space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0 lg:h-80 lg:p-4">
            <div className="w-[340px] h-[287px] bg-red-400 mx-auto lg:w-[488.64px]">
                <img
                    src={`${import.meta.env.VITE_STRAPI_IMAGE_BASE_URL}${
                        formattedFeaturedBlog.data.image.data.attributes.formats
                            .small.url
                    }`}
                    alt="banner image"
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="w-full flex items-center">
                <div className="space-y-4 lg:space-y-8">
                    <div className="space-y-2">
                        <h1 className="text-2xl font-bold">
                            {formattedFeaturedBlog.data.title}
                        </h1>
                        <p>{formattedFeaturedBlog.data.overview}</p>
                    </div>
                    <button
                        className="p-4 rounded-md border border-black text-black hover:bg-orange-600 hover:text-white"
                        onClick={redirectToReadingPage}
                    >
                        Read now
                    </button>
                </div>
            </div>
        </div>
    );
};
export default BannerPost;
