import { useNavigate } from "react-router-dom";

const BlogPost = ({ postData }) => {
    const { createdAt, title, overview, imageUrl } = postData;
    const navigate = useNavigate();
    const redirectToReadingPage = () => {
        navigate(`/read/${postData.id}`);
    };

    return (
        <div className="h-[700px]  p-2 flex flex-col space-y-2 box-shadow md:flex-row  md:h-80 md:space-x-2">
            <div className="min-w-[18rem] h-[325px] md:max-h-[304px] bg-red-500">
                <img
                    src={`http://localhost:1337${imageUrl}`}
                    alt="banner image"
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="grow space-y-6 flex flex-col justify-center">
                <div className="space-y-2">
                    <div className="text-orange-600">{createdAt}</div>
                    <div className="font-bold">{title}</div>
                    <div className=" overflow-hidden max-h-[120px]">
                        <p className="text-ellipsis">{overview}</p>
                    </div>
                </div>
                <button
                    className="p-2 border border-black rounded-md md:w-32 hover:bg-orange-600 hover:text-white"
                    onClick={() => redirectToReadingPage()}
                >
                    Read More
                </button>
            </div>
        </div>
    );
};
export default BlogPost;
