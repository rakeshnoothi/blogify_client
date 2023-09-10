const CategoryButton = ({ displayName, fetchCategoryPosts }) => {
    return (
        <button
            className="w-32 px-4 py-2 rounded-lg text-black border border-black hover:bg-orange-600 hover:text-white"
            onClick={() => fetchCategoryPosts(displayName)}
        >
            {displayName}
        </button>
    );
};
export default CategoryButton;
