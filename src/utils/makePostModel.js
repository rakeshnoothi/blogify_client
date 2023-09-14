import formatDate from "./dateFormat";

const makePostModel = post => {
    const postData = post.attributes;
    const formattedPostModel = {
        id: post.id,
        postedBy: post.posted_by,
        createdAt: formatDate(postData.createdAt),
        title: postData.title,
        overview: postData.overview,
        imageUrl: postData.image.data.attributes.formats.small.url,
        like: postData.like,
    };
    return formattedPostModel;
};

export default makePostModel;
