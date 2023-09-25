import { useRef, useState } from "react";
import useAuthContext from "../../../hooks/useAuthContext";
import axiosInstance from "../../../utils/api/axiosInstance";

const CommentActionButtons = ({
    comment,
    setIsReadOnly,
    commentInput,
    handlDeletecommentButton,
}) => {
    const { user } = useAuthContext();
    const [buttonDisplayText, setButtonDisplayText] = useState("Edit");
    const previousInputText = useRef();

    const handleUpdatComment = async e => {
        const config = {
            method: "put",
            url: `/comments/${comment.id}`,
            data: {
                data: {
                    comment_content: commentInput,
                },
            },
        };
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
                alert("successfully update your comment");
            }
        } catch (error) {
            alert("sorry cannot update your comment at this moment");
        }
    };
    if (user.user === undefined) return;
    if (comment.data.commentor_user_id !== user.user.id) return null;
    return (
        <div className="flex flex-col gap-2">
            <button
                className="bg-orange-500 text-white p-2"
                onClick={e => handleUpdatComment(e)}
            >
                {buttonDisplayText}
            </button>

            <button
                className="bg-orange-500 text-white p-2"
                onClick={() => handlDeletecommentButton(comment.id)}
            >
                Delete comment
            </button>
        </div>
    );
};

export default CommentActionButtons;
