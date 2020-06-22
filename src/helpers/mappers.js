export const mapSearchListToVideoList = (searchList) => {
    return searchList.map(searchItem => searchItem.snippet);
}
