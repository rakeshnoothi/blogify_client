const BannerPost = () => {
    return (
        <div className="max-h-max py-4 flex flex-col space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0 lg:h-80 lg:p-4">
            <div className="w-[340px] bg-red-400 mx-auto lg:w-[488.64px]">
                <img
                    src="https://images.unsplash.com/photo-1645943020355-305df166473d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
                    alt="banner image"
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="w-full flex items-center">
                <div className="space-y-4 lg:space-y-8">
                    <div className="space-y-2">
                        <h1 className="text-2xl font-bold">
                            Title of the bannerPost bladhsfh sdhsdfjskdj
                        </h1>
                        <p>
                            k Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Reprehenderit nostrum distinctio maiores
                            consectetur temporibus officiis itaque delectus?
                            Vel, ex cumque. Debitis optio officia adipisci nobis
                            harum, sed ipsam velit eius!
                        </p>
                    </div>
                    <button className="p-4 rounded-md border border-black text-black hover:bg-orange-600 hover:text-white">
                        Read now
                    </button>
                </div>
            </div>
        </div>
    );
};
export default BannerPost;
