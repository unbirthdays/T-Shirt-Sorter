/* Write a function that will take in a string containing only s, m, and l characters. Ex: slsmmsllsmsmlmsls

This string essentially represents a bunch of t-shirts in an unsorted pile.
Your function should return this pile of t-shirts sorted by small, then medium, then large.
The above example would be returned sssssssmmmmmlllll.

The given string will never include characters outside of the lowercase s, m, and l. The string will also never contain any spaces.
*/

// function tshirtSorter(shirt) {
//     const sm = []; // represents small and medium shirts
//     const large = []; // represents large shirts
//     for(let i = 0; i < shirt.length; i++) {
//         if(shirt[i] === 's') {
//             sm.unshift(shirt[i]);
//         } else if (shirt[i] === 'm') {
//             sm.push(shirt[i]);
//         } else {
//             large.push(shirt[i]);
//         }
//     }
//     const sortedSM = sm.join('');
//     const sortedL = large.join('');
//     return sortedSM + sortedL;
// }


function tshirtSorter(shirt) {
        let sm = ''; // represents small and medium shirts
        let large = ''; // represents large shirts
        for(let i = 0; i < shirt.length; i++) {
            if(shirt[i] === 's') {
                sm = shirt[i] + sm;
            } else if (shirt[i] === 'm') {
                sm += shirt[i];
            } else {
                large += shirt[i];
            }
        }
        return sm + large;
    }

console.log(tshirtSorter('lms')); // sml
console.log(tshirtSorter('smllms')); //ssmmll
console.log(tshirtSorter('slsmmsllsmsmlmsls')); // sssssssmmmmmlllll
