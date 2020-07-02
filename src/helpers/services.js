export const handleScrollToBottom = (element, callBackFn, callBackValue) => {
    let bottomOfWindow = element.scrollTop === element.scrollHeight - element.offsetHeight;

    if (bottomOfWindow) {
        callBackFn(callBackValue);
    }
}
