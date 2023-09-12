const formatDate = date => {
    const regex = /\d{4}-\d{2}-\d{2}/gm;
    return date.match(regex);
};
export default formatDate;
