import { useState } from "react";
import useAuthContext from "../../hooks/useAuthContext";
import axiosInstance from "../../utils/api/axiosInstance";
import CategoryButtons from "./CategoryButtons";

const initialCategory = ["Food", "Travel", "Gaming", "Tech"];

const Write = () => {
    const { user } = useAuthContext();
    const [selectedCategory, setCategory] = useState(null);
    const [writeBlogData, setWriteBlogData] = useState({
        title: "",
        content: "",
        overview: "",
        image: null,
    });

    const selectCategory = e => {
        switch (e.target.id) {
            case "Food": {
                setCategory({
                    name: "Food",
                    id: 2,
                });
                break;
            }
            case "Travel": {
                setCategory({
                    name: "Travel",
                    id: 4,
                });
                break;
            }
            case "Tech": {
                setCategory({
                    name: "Tech",
                    id: 1,
                });
                break;
            }
            case "Gaming": {
                setCategory({
                    name: "Gaming",
                    id: 3,
                });
                break;
            }
            default: {
                setCategory(null);
            }
        }
    };

    const updateBlog = e => {
        console.log(e);
        if (e.target.id === "title") {
            setWriteBlogData({
                ...writeBlogData,
                title: e.target.value,
            });
            return;
        }
        if (e.target.id === "image") {
            setWriteBlogData({
                ...writeBlogData,
                image: e.target.files[0],
            });
            return;
        }
        if (e.target.id === "overview") {
            setWriteBlogData({
                ...writeBlogData,
                overview: e.target.value,
            });
            return;
        }
        setWriteBlogData({
            ...writeBlogData,
            content: e.target.value,
        });
        return;
    };

    console.log(writeBlogData);

    const postBlog = async () => {
        const config = {
            method: "post",
            url: `/posts`,
            data: {
                data: {
                    title: writeBlogData.title,
                    overview: writeBlogData.overview,
                    content: writeBlogData.content,
                    user: user.user.id,
                    category: selectedCategory.id,
                    posted_by: user.user.id,
                },
            },
        };
        const response = await axiosInstance(config);
        const formData = new FormData();
        formData.append("files", writeBlogData.image);
        formData.append("ref", "api::post.post");
        formData.append("refId", response.data.data.id);
        formData.append("field", "image");

        const imageConfig = {
            method: "post",
            url: "/upload",
            data: formData,
        };
        await axiosInstance(imageConfig);
        alert("blog posted successfully!!!!");
    };

    return (
        <div className="space-y-4 ">
            <div className=" space-y-4 ">
                <div className="text-orange-500 text-xl">
                    Choose Category you want to post to
                </div>
                <div className="space-x-2">
                    {initialCategory.map(c => {
                        return (
                            <CategoryButtons
                                category={c}
                                selectedCategory={selectedCategory}
                                key={c}
                                selectCategory={selectCategory}
                            />
                        );
                    })}
                </div>
            </div>
            <div className="flex justify-between">
                <div className="flex flex-col space-y-2">
                    <span className="text-xl text-orange-500">
                        Choose an image to upload
                    </span>
                    <input
                        type="file"
                        name="files"
                        id="image"
                        className=""
                        onChange={e => updateBlog(e)}
                    />
                </div>
                <button
                    className="px-6  bg-orange-500 text-white"
                    onClick={postBlog}
                >
                    Post
                </button>
            </div>
            <form action="" className="flex flex-col space-y-4">
                <span className="text-xl text-orange-500 font-bold">Title</span>
                <textarea
                    name="title"
                    id="title"
                    cols="30"
                    rows="10"
                    className="max-h-9 min-h-[36px] border border-black"
                    onChange={e => updateBlog(e)}
                    value={writeBlogData.title}
                ></textarea>
                <span className="text-xl text-orange-500 font-bold">
                    Overview
                </span>
                <textarea
                    name="title"
                    id="overview"
                    cols="30"
                    rows="10"
                    className="max-h-20 min-h-[80px] border border-black"
                    onChange={e => updateBlog(e)}
                    value={writeBlogData.overview}
                ></textarea>
                <span className="text-xl text-orange-500 font-bold">
                    Write Here
                </span>
                <textarea
                    name="content"
                    id="content"
                    cols="30"
                    rows="10"
                    className="border border-black min-h-screen"
                    onChange={e => updateBlog(e)}
                    value={writeBlogData.content}
                ></textarea>
            </form>
        </div>
    );
};
export default Write;
