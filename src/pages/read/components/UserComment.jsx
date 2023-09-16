import useAuthContext from "../../../hooks/useAuthContext";
import formatDate from "../../../utils/dateFormat";
import formatData from "../../../utils/formatData";

// const EditCommentButton = ({ commentorId, currentUserId }) => {
//     const commentAction = action => {
//         if (action === "edit") {
//         }
//     };
//     if (commentorId !== currentUserId) return null;
//     return (
//         <div className="flex flex-col gap-2">
//             <button
//                 className="bg-orange-500 text-white p-2"
//                 onClick={() => commentAction("edit")}
//             >
//                 Edit comment
//             </button>

//             <button
//                 className="bg-orange-500 text-white p-2"
//                 onClick={() => commentAction("delete")}
//             >
//                 Delete comment
//             </button>
//         </div>
//     );
// };

const UserComment = ({ comment }) => {
    // const { user } = useAuthContext();

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
                    value={comment.data.comment_content}
                    onChange={e => editComment(e)}
                />
            </div>
            {/* <EditCommentButton
                commentorId={comment.data.commentor_user_id}
                currentUserId={user.user.id}
            /> */}
        </div>
    );
};
export default UserComment;
