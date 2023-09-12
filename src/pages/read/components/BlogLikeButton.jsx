import axiosInstance from "../../../utils/api/axiosInstance";

const BlogLikeButton = ({ blogData }) => {
    const likeBlog = async () => {
        const config = {
            method: "put",
            url: `/posts/${blogData.data.id}`,
            data: {
                data: {
                    like: 90,
                },
            },
        };
        const response = await axiosInstance(config);
        console.log("response from put request", response);
    };
    return (
        <div className="w-20 space-x-4 flex items-center">
            <button
                className="bg-orange-600 rounded-md text-white px-4 py-2"
                onClick={() => likeBlog()}
            >
                Like
            </button>
            <span className="text-center bg-orange-600 text-white px-4 py-2 rounded-md">
                {blogData.data.attributes.like}
            </span>
        </div>
    );
};
export default BlogLikeButton;
