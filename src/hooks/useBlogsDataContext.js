import { useContext } from "react";
import { BlogsDataContext } from "../context/BlogsDataContextProvider";

const useBlogsDataContext = () => useContext(BlogsDataContext);

export default useBlogsDataContext;
