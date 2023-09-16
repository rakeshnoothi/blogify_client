import { useState } from "react";
import formatDate from "../../../utils/dateFormat";
import formatData from "../../../utils/formatData";

import CommentActionButtons from "./CommentActionButtons";

const UserComment = ({ comment, deleteComment }) => {
    const [commentInput, setCommentInput] = useState(
        comment.data.comment_content
    );
    const [isReadOnly, setIsReadOnly] = useState(true);

    const formatedUser = formatData.singleFormatData(
        comment.data.authenticated_user
    );

    return (
        <div className="border p-2 space-y-2 flex justify-between">
            <div className="space-y-2">
                <div className="flex space-x-2">
                    <img
                        src={`${import.meta.env.VITE_STRAPI_IMAGE_BASE_URL}${
                            formatedUser.data.profile_picture.data.attributes
                                .formats.small.url
                        }`}
                        alt="image goes here"
                        className="bg-orange-200 aspect-square"
                        width="44"
                        height="44"
                    />
                    <div className="flex flex-col">
                        <span className="font-semibold">
                            {comment.data.commentor_username}
                        </span>
                        <span>{formatDate(comment.data.createdAt)}</span>
                    </div>
                </div>
                <input
                    type="text"
                    value={commentInput}
                    onChange={e => setCommentInput(e.target.value)}
                    readOnly={isReadOnly}
                />
            </div>
            <CommentActionButtons
                comment={comment}
                setIsReadOnly={setIsReadOnly}
                commentInput={commentInput}
                deleteComment={deleteComment}
            />
        </div>
    );
};
export default UserComment;
