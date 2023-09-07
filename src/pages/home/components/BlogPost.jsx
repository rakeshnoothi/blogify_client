const BlogPost = () => {
    // lg:w-2/3
    return (
        <div className="h-[700px] w-[341px] max-w-[904px] md:min-w-[653px] p-2 flex flex-col space-y-2 box-shadow md:flex-row md:w-full md:h-72 md:space-x-2">
            <div className="min-w-[18rem] bg-red-500">
                <img
                    src="https://images.unsplash.com/photo-1645943020355-305df166473d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
                    alt="banner image"
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="grow space-y-6 flex flex-col justify-center">
                <div>
                    <div>Posted date</div>
                    <div className="font-bold">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Culpa nobis qui alias ullam sint deleniti, fuga
                        nam officia similique eligendi assumenda. Mollitia a
                        ducimus sequi perspiciatis blanditiis porro laborum
                        tempora.
                    </div>
                </div>
                <button className="p-2 border border-black rounded-md md:w-32 hover:bg-orange-600 hover:text-white">
                    Read More
                </button>
            </div>
        </div>
    );
};
export default BlogPost;
