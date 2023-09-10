const makePostModel = post => {
    const postData = post.attributes;
    const formattedPostModel = {
        id: post.id,
        createdAt: postData.createdAt,
        title: postData.title,
        overview: postData.overview,
        content: postData.content,
        imageUrl: postData.image.data.attributes.formats.small.url,
        comments: null,
    };
    return formattedPostModel;
};

export default makePostModel;
