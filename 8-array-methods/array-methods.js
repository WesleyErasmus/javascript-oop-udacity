// ARRAY METHODS

// forEach()
/*
Array's forEach() method takes in a callback function and invokes that function for each element in the array. In other words, forEach() allows you to iterate (i.e., loop) through an array, similar to using a for loop. 

Check out its signature:

array.forEach(function callback(currentValue, index, array) {
    // function code here
});

*/
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function logIfOdd(n) {
  if (n % 2 !== 0) {
    console.log(n);
  }
});
// "1, 2, 3"

// map()

/*
Array's map() method is similar to forEach() in that it invokes a callback function for each element in an array. However, map() returns a new array based on what's returned from the callback function. Check out the following:
*/
const names = ["Dee", "Craig", "Janice", "Daniel"];

const namesLength = names.map(function (name) {
    return name.length;
});

console.log(namesLength);
// "[3, 5, 6, 6]"

// Another example of map():
const musicData = [
  { artist: "Adele", name: "25", sales: 1731000 },
  { artist: "Drake", name: "Views", sales: 1608000 },
  { artist: "Beyonce", name: "Lemonade", sales: 1554000 },
  { artist: "Chris Stapleton", name: "Traveller", sales: 1085000 },
  { artist: "Pentatonix", name: "A Pentatonix Christmas", sales: 904000 },
  {
    artist: "Original Broadway Cast Recording",
    name: "Hamilton: An American Musical",
    sales: 820000,
  },
  { artist: "Twenty One Pilots", name: "Blurryface", sales: 738000 },
  { artist: "Prince", name: "The Very Best of Prince", sales: 668000 },
  { artist: "Rihanna", name: "Anti", sales: 603000 },
  { artist: "Justin Bieber", name: "Purpose", sales: 554000 },
];

const albumSalesStrings = musicData.map(function (album) {
    return `${album.name} by ${album.artist} sold ${album.sales}`;
});
console.log(albumSalesStrings);
/*
0: "25 by Adele sold 1731000"
1: "Views by Drake sold 1608000"
2: "Lemonade by Beyonce sold 1554000"
3: "Traveller by Chris Stapleton sold 1085000"
4: "A Pentatonix Christmas by Pentatonix sold 904000"
5: "Hamilton: An American Musical by Original Broadway Cast Recording sold 820000"
6: "Blurryface by Twenty One Pilots sold 738000"
7: "The Very Best of Prince by Prince sold 668000"
8: "Anti by Rihanna sold 603000"
9: "Purpose by Justin Bieber sold 554000"
*/

// filter()
/*
The function passed to filter() is used as a test, and only items in the array that pass the test are included in the new array. Consider the following example:
*/
const names2 = ["Micky", "Donald", "Bugs", "Mario"];

const shortNames = names2.filter((name) => {
  return name.length < 5;
});
console.log(shortNames);
// "Bugs"

/* Using filter()
 *
 * Using the musicData array and filter():
 *   - Return only album objects where the album's name is
 *     10 characters long, 25 characters long, or anywhere in between
 *   - Store the returned data in a new `results` variable
 *
 * Note:
 *   - Do not delete the musicData variable
 *   - Do not alter any of the musicData content
 */


const results = musicData.filter((album) => {
  return album.name.length >= 10 && album.name.length <= 25;
})

console.log(results);
/*
0: {artist: 'Pentatonix', name: 'A Pentatonix Christmas', sales: 904000}
1: {artist: 'Twenty One Pilots', name: 'Blurryface', sales: 738000}
2: {artist: 'Prince', name: 'The Very Best of Prince', sales: 668000}
length: 3
*/