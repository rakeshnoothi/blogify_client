const CategoryButton = ({
    displayName,
    fetchCategoryPosts,
    activeCategory,
}) => {
    return (
        <button
            className={`${
                activeCategory.current === displayName
                    ? "bg-orange-600 text-white"
                    : null
            } w-32 px-4 py-2 rounded-lg text-black border border-black hover:bg-orange-600 hover:text-white`}
            onClick={() => fetchCategoryPosts(displayName)}
        >
            {displayName}
        </button>
    );
};
export default CategoryButton;
