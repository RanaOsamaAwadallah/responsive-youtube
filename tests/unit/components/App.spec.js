import {
    shallowMount
} from '@vue/test-utils';
import App from '../../../src/App';

describe('App.vue', () => {
    it('Adds scroll event on creation', () => {
        window.addEventListener = jest.fn();
        shallowMount(App, {});
        expect(window.addEventListener).toHaveBeenCalled();
    });

    xit('Lazy loads more data when scroll reaches bottom', () => {
        const wrapper = shallowMount(App, {});
        const vm = wrapper.vm;

        document.documentElement.scrollTop = 100;
        window.innerHeight = 100;
        document.documentElement.style.height = '200px';
        vm.getSearchedVideos = jest.fn();
        vm.handleScroll();
        expect(vm.getSearchedVideos).toHaveBeenCalled();
    });

    it('Fetches videos on search', () => {
        const wrapper = shallowMount(App, {});
        const vm = wrapper.vm;

        vm.$gapi = {
            request: jest.fn(() => Promise.resolve('Done'))
        }
        vm.nextPageToken = '';
        vm.getSearchedVideos('Serach text');
        expect(vm.$gapi.request).toHaveBeenCalledWith({
            path: "https://www.googleapis.com/youtube/v3/search?",
            method: "GET",
            params: {
                part: "snippet",
                maxResults: 15,
                q: 'Serach text',
                nextPageToken: ''
            }
        })
    })
})
