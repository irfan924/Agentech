

export const getSearchRes =  (search, collection) => {
    if (search && collection && collection.length > 0) {
        const filtered = jobs.filter((res) =>
            res.title.toLowerCase().includes(search.toLowerCase())
        );
        return filtered;
    } else {
        console.log('Nothing Found');
        return [];
    }
};