import CommentSection from "./components/CommentSection";
import ReadingSection from "./components/ReadingSection";

const Read = () => {
    return (
        // reading container
        <div className="flex flex-col justify-center items-center px-10 space-y-4 lg:px-36">
            {/* reading section */}
            <ReadingSection />
            {/* commnet section */}
            <CommentSection />
        </div>
    );
};
export default Read;
