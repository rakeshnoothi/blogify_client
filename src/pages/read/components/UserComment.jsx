import formatDate from "../../../utils/dateFormat";

const UserComment = ({ comment }) => {
    return (
        <div className="border p-2 space-y-2">
            <div className="flex space-x-2">
                <img
                    src=""
                    alt="image goes here"
                    className="bg-orange-200 aspect-square"
                    width="44"
                    height="44"
                />
                <div className="flex flex-col">
                    <span className="font-semibold">
                        {comment.commentor_username}
                    </span>
                    <span>{formatDate(comment.createdAt)}</span>
                </div>
            </div>
            <p>{comment.comment_content}</p>
        </div>
    );
};
export default UserComment;
