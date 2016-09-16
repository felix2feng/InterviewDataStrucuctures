/* 
"The quick brown fox jumped over the lazy dog." -> "dog. lazy the over jumped fox brown quick The"
abc def
*/

function reverseLetters(string, start, end) {
  var result = string.split('');
  var start = start;
  var end = end;
  while (start < end) {
    var temp = result[start];
    result[start] = result[end];
    result[end] = temp;
    start++;
    end--;

  }
  return result.join('');
}

function reverseWordsInString(string) {
  // Better to do it inplace
  string.reverse; // fed cba
  var start = 0;
  var end = 0;
  while (string[start]) {
    while (string[end] !== ' ') {
      end++;
    }
    reverseLetters(string, start, end - 1);
    start = end + 1;
    end++;
  }
  return string;
}

// console.log(reverseWordsInString("The quick brown fox jumped over the lazy dog."));

function removeDuplicates(string) {
  // Create a hash map in the order it was created

  // Loop through string and add unique values
}