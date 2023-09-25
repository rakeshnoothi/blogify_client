const CategoryButtons = ({ category, selectedCategory, selectCategory }) => {
    return (
        <button
            className={`border hover:bg-orange-500 p-2 hover:text-white text-black ${
                selectedCategory && selectedCategory.name === category
                    ? "bg-orange-500 text-white"
                    : "bg-white text-black"
            }`}
            id={category}
            onClick={e => selectCategory(e)}
        >
            {category}
        </button>
    );
};
export default CategoryButtons;
