const makePostModel = post => {
    const regex = /\d{4}-\d{2}-\d{2}/gm;
    const postData = post.attributes;
    const formattedPostModel = {
        id: post.id,
        createdAt: postData.createdAt.match(regex),
        title: postData.title,
        overview: postData.overview,
        content: postData.content,
        imageUrl: postData.image.data.attributes.formats.small.url,
        like: postData.like,
        comments: null,
    };
    return formattedPostModel;
};

export default makePostModel;
