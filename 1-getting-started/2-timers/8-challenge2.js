// Print "Hello World"
// Every second
// And stop after 5 times
i = 0;
const intervalId = setInterval(
    () => {
        console.log('Hello World');
        ++i;
        if(i > 4){
            console.log('Done');
            clearInterval(intervalId);
        }
    },
    1000
);
// After 5 times. Print "Done" and let Node exit.
//
/*
 * THOUGHTS: This challenge is really difficult if you have no prior experience
 * with node or thinking in terms of the event loop. The instruction given by
 * Samer Buna in this course is tricky because he is introducing a few things
 * that are completely foreign to people with no experience with this way of
 * writting code. Before this "challenge" there were no examples of writing an
 * anonymous function where a value would change inside of it like 'i' or an
 * index. There were also no examples or explanations about clearing the
 * intervalId from within the anonymous function within the setInterval()
 * function. That isn't to say this was impossible, but it was hard to know
 * about these concepts if you've never seen them before.
 *
 * LESSONS:
 * 1) It looks like the anonymous functions are first-class citizens and have
 * the same access and rights as a named function.
 * 2) There are more ways to loop then explicit loops like while and for.
 * 3) It appears that the eventloop might actually change this in seemingly
 * unexpected ways. I'll have to check back into this. Maybe I'm wrong.
 */
