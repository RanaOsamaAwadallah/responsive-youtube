export const handleScrollToBottom = (element, callBackFn, callBackValue) => {
  let bottomOfWindow =
    Math.abs(
      element.scrollTop - (element.scrollHeight - element.offsetHeight)
    ) < 5;
  if (bottomOfWindow) {
    callBackFn(callBackValue);
  }
};
