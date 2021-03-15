setTimeout(
  () => {
    console.log('Hello after 4 seconds');
  },
  4 * 1000
);
// NOTE: This is measured in milliseconds. You must multiply the second
// argument by 1000 if the desired unit of time is seconds.
