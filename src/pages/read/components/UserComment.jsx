import formatDate from "../../../utils/dateFormat";
import formatData from "../../../utils/formatData";

const UserComment = ({ comment }) => {
    const formatedUser = formatData.singleFormatData(
        comment.data.authenticated_user
    );
    return (
        <div className="border p-2 space-y-2">
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
            <p>{comment.data.comment_content}</p>
        </div>
    );
};
export default UserComment;
