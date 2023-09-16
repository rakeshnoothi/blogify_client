import axiosInstance from "../../../utils/api/axiosInstance";

const postNewComment = (e, postId, newComment, user) => {
    e.preventDefault();
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
    return axiosInstance(config);
};

export default postNewComment;
