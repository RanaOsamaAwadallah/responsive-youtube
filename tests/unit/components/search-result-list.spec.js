import {
    shallowMount
} from '@vue/test-utils';
import SearchResult from '@/components/search-result-list/search-result-list';


describe('SearchResult.vue', () => {
    it('renders', () => {
        const wrapper = shallowMount(SearchResult, {
            isMobile: false,
            channels: [],
            videos: [{
                title: 'Video title',
                channelTitle: 'Channel title',
                description: 'Video decription',
                thumbnails: {
                    medium: {
                        url: 'imageUrl'
                    }
                }
            }]
        })
        expect(wrapper.html()).toContain('<div class="search-result">');
    })
})
