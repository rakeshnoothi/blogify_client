import axiosInstance from "../../../utils/api/axiosInstance";
import useAuthContext from "../../../hooks/useAuthContext";
import { useEffect, useState } from "react";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";

const BlogLikeButton = ({ blogData }) => {
    const { user } = useAuthContext();
    const [blogLikeInfo, setIsBlogLikeInfo] = useState({
        isLiked: false,
        blogLikeId: null,
        totalLikes: 0,
    });

    useEffect(() => {
        blogData.data.attributes.likes.data.find(like => {
            //if user is not authenticated.
            if (!user) {
                setIsBlogLikeInfo({
                    ...blogLikeInfo,
                    totalLikes: blogData.data.attributes.likes.data.length,
                });
                return;
            }
            //if user is authenticated -->
            if (like.attributes.user_id === user?.user?.id) {
                setIsBlogLikeInfo({
                    isLiked: true,
                    blogLikeId: like.id,
                    totalLikes: blogData.data.attributes.likes.data.length,
                });
            }
        });
    }, []);

    const handleLike = async () => {
        if (!user) alert("Login to like the post");
        if (!blogLikeInfo.isLiked) {
            const config = {
                method: "post",
                url: "/likes",
                data: {
                    data: {
                        user_id: user.user.id,
                        post: blogData.data.id,
                    },
                },
            };
            const response = await axiosInstance(config);
            setIsBlogLikeInfo({
                ...blogLikeInfo,
                isLiked: true,
                blogLikeId: response.data.data.id,
                totalLikes: blogLikeInfo.totalLikes + 1,
            });
            return;
        }
        const config = {
            method: "delete",
            url: `/likes/${blogLikeInfo.blogLikeId}`,
        };
        await axiosInstance(config);
        setIsBlogLikeInfo({
            ...blogLikeInfo,
            isLiked: false,
            totalLikes: blogLikeInfo.totalLikes - 1,
        });
    };
    return (
        <div className="w-20 space-x-4 flex items-center">
            <button className="text-white" onClick={() => handleLike()}>
                {blogLikeInfo.isLiked ? (
                    <HeartIconSolid className="h-6 w-6 text-orange-600" />
                ) : (
                    <HeartIconOutline className="h-6 w-6 text-orange-600" />
                )}
            </button>
            <span className="text-center bg-orange-600 text-white px-4 py-2 rounded-md">
                {blogLikeInfo.totalLikes}
            </span>
        </div>
    );
};
export default BlogLikeButton;
