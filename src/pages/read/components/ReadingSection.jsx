import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import BlogLikeButton from "./BlogLikeButton";
import formatDate from "../../../utils/dateFormat";
import ReactMarkdown from "react-markdown";

const ReadingSection = () => {
    const { id } = useParams();
    const { data: blogData, isLoading: isBlogLoading } = useFetch(
        `/posts/${id}?populate[likes]=true&populate[image]=true&populate[user][populate][profile_picture]=true`
    );
    console.log(blogData);

    if (isBlogLoading) return <div className="h-[744px]">Loading Blog....</div>;
    if (!blogData) return <div>Nothing here...</div>;
    return (
        <div className="space-y-4">
            <span className="font-bold text-3xl">
                {blogData.data.attributes.title}
            </span>
            {/* author info  */}
            <div className="flex justify-between">
                <div className="flex space-x-2">
                    <img
                        src={`http://localhost:1337${blogData.data.attributes.user.data.attributes.profile_picture.data.attributes.formats.small.url}`}
                        alt="image goes here"
                        className="bg-orange-200 aspect-square"
                        width="44"
                        height="44"
                    />
                    <div className="flex flex-col">
                        <span className="font-semibold">
                            {
                                blogData.data.attributes.user.data.attributes
                                    .first_name
                            }
                        </span>
                        <span>
                            {formatDate(blogData.data.attributes.createdAt)}
                        </span>
                    </div>
                </div>
                <BlogLikeButton blogData={blogData} />
            </div>
            {/* reading content */}
            <div className="w-full flex justify-center h-[500px]">
                <img
                    src={`http://localhost:1337${blogData.data.attributes.image.data.attributes.formats.small.url}`}
                    alt="image here"
                />
            </div>
            <ReactMarkdown>{blogData.data.attributes.content}</ReactMarkdown>
        </div>
    );
};
export default ReadingSection;
