import { useRef, useState } from "react";
import axiosInstance from "../../../utils/api/axiosInstance";
import useAuthContext from "../../../hooks/useAuthContext";

const CommentActionButtons = ({
    comment,
    setIsReadOnly,
    commentInput,
    deleteComment,
}) => {
    const { user } = useAuthContext();
    const [buttonDisplayText, setButtonDisplayText] = useState("Edit");
    const previousInputText = useRef();

    const config = {
        method: "put",
        url: `/comments/${comment.id}`,
        data: {
            data: {
                comment_content: commentInput,
            },
        },
    };

    const updateComment = async e => {
        try {
            if (e.target.innerText === "Edit") {
                previousInputText.current = commentInput;
                setButtonDisplayText("Update");
                setIsReadOnly(false);
            } else {
                setButtonDisplayText("Edit");
                setIsReadOnly(true);
                //check if user updated the check if not return
                if (previousInputText.current === commentInput) return;
                await axiosInstance(config);
                alert("success fully update your comment");
            }
        } catch (error) {
            alert("sorry cannot update your comment at this moment");
        }
    };

    if (comment.data.commentor_user_id !== user.user.id) return null;
    return (
        <div className="flex flex-col gap-2">
            <button
                className="bg-orange-500 text-white p-2"
                onClick={e => updateComment(e)}
            >
                {buttonDisplayText}
            </button>

            <button
                className="bg-orange-500 text-white p-2"
                onClick={() => deleteComment(comment.id)}
            >
                Delete comment
            </button>
        </div>
    );
};

export default CommentActionButtons;
