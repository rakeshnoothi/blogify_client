import axiosInstance from "../../../utils/api/axiosInstance";
import useAuthContext from "../../../hooks/useAuthContext";
import { useEffect, useState } from "react";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";
import { useParams } from "react-router-dom";

const BlogLikeButton = ({ blogData }) => {
    const { user } = useAuthContext();
    const { id } = useParams();
    const [blogLikeInfo, setIsBlogLikeInfo] = useState({
        isLiked: false,
        blogLikeId: null,
        totalLikes: 0,
    });

    console.log("from blog like button", blogData);

    useEffect(() => {
        blogData.likes.data.find(like => {
            //if user is not authenticated.
            if (!user) {
                setIsBlogLikeInfo({
                    ...blogLikeInfo,
                    totalLikes: blogData.likes.data.length,
                });
                return;
            }
            //if user is authenticated -->
            if (like.attributes.user_id === user?.user?.id) {
                setIsBlogLikeInfo({
                    isLiked: true,
                    blogLikeId: like.id,
                    totalLikes: blogData.likes.data.length,
                });
            }
        });
    }, []);

    const handleLike = async () => {
        if (!user) alert("Login to like the post");

        //if user did not liked the post he can like
        if (!blogLikeInfo.isLiked) {
            const config = {
                method: "post",
                url: "/likes",
                data: {
                    data: {
                        user_id: user.user.id,
                        post: id,
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

        // If user already liked the post clicking on the like button again removes the like from database and updates the ui.
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
