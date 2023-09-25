import UserComment from "./UserComment";
import { useParams } from "react-router-dom";
import { useState } from "react";
import formatData from "../../../utils/formatData";
import useAuthContext from "../../../hooks/useAuthContext";
import useCommentAction from "../../../hooks/useCommentAction";

console.log("from outside the component");

const CommentSection = () => {
    const { id } = useParams();
    const { user } = useAuthContext();
    const [newComment, setNewComment] = useState("");
    const {
        data: fetchedComments,
        isLoading: CommentsIsLoading,
        requestServer,
    } = useCommentAction(
        `posts/${id}?populate[comments][populate][authenticated_user][populate][profile_picture]=true`
    );

    console.log("rendered from comment section");

    const handlePostCommentButton = async e => {
        e.preventDefault();
        if (user.user === undefined) {
            alert("Please login to comment");
            return;
        }
        await requestServer.postNewComment(id, newComment, user);
        setNewComment("");
    };

    const handlDeletecommentButton = async commentId => {
        requestServer.deleteComment(commentId, id);
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
                    onClick={e => handlePostCommentButton(e)}
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
                        handlDeletecommentButton={handlDeletecommentButton}
                    />
                ))
            )}
        </div>
    );
};
export default CommentSection;
