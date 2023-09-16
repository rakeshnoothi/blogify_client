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

// const formatComments = fetchedComments => {
//     if (fetchedComments === null) return null;
//     const data = fetchedComments.data;
//     const formatedComments = data.map(fetchedComment => {
//         const commentObj = {
//             commentId: fetchedComment.id,
//             commentData: fetchedComment.attributes,
//         };
//         return commentObj;
//     });
//     return formatedComments;
// };

// const formatLikes = fetchedLikes => {
//     if (fetchedLikes === null) return null;
//     const data = fetchedLikes.data;
//     const formatedLikes = data.map(fetchedLike => {
//         const likeObj = {
//             likeId: fetchedLike.id,
//             likeData: fetchedLike.attributes,
//         };
//         return likeObj;
//     });
//     return formatedLikes;
// };

// const formatUsers = fetchedUsers => {
//     if (fetchedUsers === null) return null;
//     const data = fetchedUsers.data;
//     const formatedUsers = data.map(fetchedUser => {
//         const userObj = {
//             userId: fetchedUser.id,
//             userData: fetchedUser.attributes,
//         };
//         return userObj;
//     });
//     return formatedUsers;
// };

const formatData = fetchedData => {
    if (fetchedData === null) return null;
    const data = fetchedData.data;
    const formatedData = data.map(item => {
        const itemOBj = {
            id: item.id,
            data: item.attributes,
        };
        return itemOBj;
    });
    return formatedData;
};

// const formatData = {
//     formatComments,
//     formatLikes,
//     formatUsers,
// };

export { formatData };

export default makePostModel;
