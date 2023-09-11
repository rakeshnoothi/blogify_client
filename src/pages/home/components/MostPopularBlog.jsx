const MostPopularBlog = ({ postData }) => {
    const { title, overview, createdAt } = postData;
    return (
        <div className="space-y-2 box-shadow p-2 hover:cursor-pointer">
            <span className="block text-orange-600">{createdAt}</span>
            <span className="font-bold block">{title}</span>
            <p>{overview}</p>
        </div>
    );
};
export default MostPopularBlog;
