import UserComment from "./UserComment";
import useFetch from "../../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useState } from "react";

const CommentSection = () => {
    const { id } = useParams();
    const [newComment, setNewComment] = useState("");
    const { data: fetchedComments, isLoading: CommentsIsLoading } = useFetch(
        `posts/${id}?populate[comments][populate][authenticated_user][populate][profile_picture]=true`
    );

    console.log("fetched comments", fetchedComments);
    const postNewComment = () => {};

    const commentsDataArr =
        fetchedComments && fetchedComments.data.attributes.comments.data;
    console.log(fetchedComments);
    console.log(commentsDataArr);

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
                    onClick={() => postNewComment()}
                >
                    Post
                </button>
            </form>
            {CommentsIsLoading ? (
                <span>Loading comments.....</span>
            ) : (
                commentsDataArr &&
                commentsDataArr.map(comment => (
                    <UserComment
                        comment={comment.attributes}
                        key={comment.id}
                    />
                ))
            )}
        </div>
    );
};
export default CommentSection;
