const manyFormatData = fetchedData => {
    if (fetchedData === null) return null;
    const data = fetchedData.data;
    const formatedData = data.map(item => {
        const itemObj = {
            id: item.id,
            data: item.attributes,
        };
        return itemObj;
    });
    return formatedData;
};

const singleFormatData = fetchedData => {
    if (fetchedData === null) return null;
    const formatedData = {
        id: fetchedData.data.id,
        data: fetchedData.data.attributes,
    };
    return formatedData;
};

const formatData = {
    manyFormatData,
    singleFormatData,
};
export default formatData;
