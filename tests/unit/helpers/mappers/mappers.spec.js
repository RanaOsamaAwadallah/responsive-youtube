import {
    mapSearchListToChannelAndVideoList
} from '../../../../src/helpers/mappers';
import {
    YOUTUBE_CHANNEL_TYPE,
    YOUTUBE_VIDEO_TYPE
} from '../../../../src/helpers/constants';

describe('Mappers tests', () => {
    it('maps search api response to formatted response', () => {
        const apiResponse = {
            result: {
                items: [{
                    snippet: 'video snippet',
                    id: {
                        kind: YOUTUBE_VIDEO_TYPE
                    }
                }, {
                    snippet: 'channel snippet',
                    id: {
                        kind: YOUTUBE_CHANNEL_TYPE
                    }
                }],
                nextPageToken: 'Cb123',
                pageInfo: {
                    totalResults: 10000
                }
            }
        }
        const expectedFormattedResponse = {
            channelList: ['channel snippet'],
            videosList: ['video snippet'],
            nextPageToken: 'Cb123',
            maxListCount: 10000
        }
        const formattedResponse = mapSearchListToChannelAndVideoList(apiResponse);
        expect(formattedResponse).toEqual(expectedFormattedResponse);
    })
})
