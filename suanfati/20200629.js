/* 
return a string where:

1) the first and last characters remain in original place for each word
2) characters between the first and last characters must be sorted alphabetically
3) punctuation should remain at the same place as it started, for example: shan't -> sahn't
 
*/
ScrambleWords = function(str) {
    return str.replace(/[a-z]+([\',\-])?[a-z]+/g, function(m, m1) {
        let index = m.indexOf("'");
        let index2 = m.indexOf("-", 1);
        let letters = m.split("").filter((item) => /[a-z]/.test(item));
        let result = letters.slice(1, -1);
        result = result.sort();
        result.unshift(letters[0]);
        result.push(letters[letters.length - 1]);
        if (m1)
            index >= 0 ? result.splice(index, 0, "'") : result.splice(index2, 0, "-");
        return result.join("");
    });
};

ScrambleWords(
    "-you-ve gotta dance like there's nobody watching, love like you'll never be hurt, sing like there's nobody listening, and live like it's heaven on earth."
);