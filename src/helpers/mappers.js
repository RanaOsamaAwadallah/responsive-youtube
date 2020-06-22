import {
    YOUTUBE_CHANNEL_TYPE,
    YOUTUBE_VIDEO_TYPE
} from './constants';

export const mapSearchListToChannelAndVideoList = (searchList) => {
    const result = searchList.result;
    const channelList = [];
    const videosList = [];
    result.items.forEach(searchItem => {
        const snippet = searchItem.snippet;
        const kind = searchItem.id.kind;
        if (kind === YOUTUBE_CHANNEL_TYPE) {
            channelList.push(snippet);
        } else if (kind === YOUTUBE_VIDEO_TYPE) {
            videosList.push(snippet);
        }
    });
    return {
        channelList,
        videosList,
        nextPageToken: result.nextPageToken,
        maxListCount: result.pageInfo.totalResults
    };
}
