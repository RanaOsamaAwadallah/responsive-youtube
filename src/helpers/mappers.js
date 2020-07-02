import {
  YOUTUBE_CHANNEL_TYPE,
  YOUTUBE_VIDEO_TYPE
} from "./constants";

export const mapSearchListToChannelAndVideoList = (searchList) => {
  const result = searchList.result;
  const channelList = [];
  const videosList = [];
  result.items.forEach((searchItem) => {
    const snippet = searchItem.snippet;
    const kind = searchItem.id.kind;
    snippet.title = snippet.title.replace(/&amp;/g, "&").replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&quot;/g, '"').replace(/&#39;/g, "'");
    snippet.channelTitle = snippet.channelTitle.replace(/&amp;/g, "&").replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&quot;/g, '"').replace(/&#39;/g, "'");
    snippet.description = snippet.description.replace(/&amp;/g, "&").replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&quot;/g, '"').replace(/&#39;/g, "'");
    snippet.id =
      searchItem.id.videoId ||
      searchItem.id.channelId ||
      searchItem.id.playlistId;
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
    maxListCount: result.pageInfo.totalResults,
  };
};
