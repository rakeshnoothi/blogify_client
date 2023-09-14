import { useNavigate } from "react-router-dom";

const TopLikedBlogs = ({ postData }) => {
    const navigate = useNavigate();
    const { title, overview, createdAt } = postData;
    const redirectToReadingPage = () => {
        navigate(`/read/${postData.id}`);
    };
    return (
        <div
            className="space-y-2 box-shadow p-2 hover:cursor-pointer"
            onClick={() => redirectToReadingPage()}
        >
            <span className="block text-orange-600">{createdAt}</span>
            <span className="font-bold block">{title}</span>
            <p>{overview}</p>
        </div>
    );
};
export default TopLikedBlogs;
