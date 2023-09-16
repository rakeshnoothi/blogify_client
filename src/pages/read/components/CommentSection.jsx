import UserComment from "./UserComment";
import useFetch from "../../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useState } from "react";
import formatData from "../../../utils/formatData";
import useAuthContext from "../../../hooks/useAuthContext";
import axiosInstance from "../../../utils/api/axiosInstance";
import postNewComment from "../utils/commentActions";

const CommentSection = () => {
    const { id } = useParams();
    const { user } = useAuthContext();
    const [newComment, setNewComment] = useState("");
    const {
        data: fetchedComments,
        isLoading: CommentsIsLoading,
        fetchData: updateComments,
    } = useFetch(
        `posts/${id}?populate[comments][populate][authenticated_user][populate][profile_picture]=true`
    );

    console.log("rendered from comment section");

    const handlePostButton = async e => {
        try {
            await postNewComment(e, id, newComment, user);
            updateComments(
                `posts/${id}?populate[comments][populate][authenticated_user][populate][profile_picture]=true`
            );
            setNewComment("");
        } catch (error) {
            console.log("error occured", error);
            alert("cannot post this time");
        }
    };

    const deleteComment = async commentId => {
        const config = {
            method: "delete",
            url: `/comments/${commentId}`,
        };
        try {
            await axiosInstance(config);
            updateComments(
                `posts/${id}?populate[comments][populate][authenticated_user][populate][profile_picture]=true`
            );
        } catch (error) {
            alert("sorry cannot delete your comment at this moment");
        }
    };

    const formatedComments = formatData.manyFormatData(
        fetchedComments && fetchedComments.data.attributes.comments
    );

    return (
        <div className="flex w-full flex-col space-y-4">
            <div className="text-xl font-bold text-orange-500">Comments</div>
            <form action="" className="border flex flex-col space-y-2">
                <textarea
                    placeholder="comment your thoughts here!!!!"
                    className="resize-y max-h-[200px] min-h-[200px] p-2"
                    onChange={e => setNewComment(e.target.value)}
                    value={newComment}
                />
                <button
                    className="bg-orange-500 text-white p-2"
                    onClick={e => handlePostButton(e)}
                >
                    Post
                </button>
            </form>
            {CommentsIsLoading ? (
                <span>Loading comments.....</span>
            ) : (
                formatedComments &&
                formatedComments.map(comment => (
                    <UserComment
                        comment={comment}
                        key={comment.id}
                        deleteComment={deleteComment}
                    />
                ))
            )}
        </div>
    );
};
export default CommentSection;
