import { useNavigate } from "react-router-dom";
import formatDate from "../../../utils/dateFormat";

const TopLikedBlogs = ({ blog }) => {
    const navigate = useNavigate();
    const redirectToReadingPage = () => {
        navigate(`/read/${blog.id}`);
    };
    return (
        <div
            className="space-y-2 box-shadow p-2 hover:cursor-pointer"
            onClick={() => redirectToReadingPage()}
        >
            <span className="block text-orange-600">
                {formatDate(blog.data.createdAt)}
            </span>
            <span className="font-bold block">{blog.data.title}</span>
            <p>{blog.data.overview}</p>
        </div>
    );
};
export default TopLikedBlogs;
