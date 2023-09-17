import { useEffect, useState } from "react";
import axiosInstance from "../utils/api/axiosInstance";

const useCommentAction = config => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const postNewComment = async (postId, newComment, user) => {
        setIsLoading(true);
        const config = {
            method: "post",
            url: "/comments",
            data: {
                data: {
                    post: postId,
                    comment_content: newComment,
                    commentor_user_id: user.user.id,
                    commentor_username: user.user.username,
                    authenticated_user: user.user.id,
                },
            },
        };
        try {
            await axiosInstance(config);
            const response = await axiosInstance(
                `posts/${postId}?populate[comments][populate][authenticated_user][populate][profile_picture]=true`
            );
            setData(response.data);
            console.log("ran after updatcomments");
        } catch (error) {
            console.log("error occured", error);
            alert("cannot post this time");
        } finally {
            setIsLoading(false);
        }
    };

    const deleteComment = async (commentId, postId) => {
        setIsLoading(true);
        const config = {
            method: "delete",
            url: `/comments/${commentId}`,
        };
        try {
            await axiosInstance(config);
            const response = await axiosInstance(
                `posts/${postId}?populate[comments][populate][authenticated_user][populate][profile_picture]=true`
            );
            setData(response.data);
        } catch (error) {
            alert("sorry cannot delete your comment at this moment");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        const getComments = async config => {
            setIsLoading(true);
            try {
                const response = await axiosInstance(config);
                setData(response.data);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        };
        getComments(config);
    }, []);

    const requestServer = {
        postNewComment,
        deleteComment,
    };

    return {
        data,
        isLoading,
        requestServer,
    };
};

export default useCommentAction;
