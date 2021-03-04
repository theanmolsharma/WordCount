// Selecting all elements from DOM which are necessary

// text-area
const textArea = document.getElementById("text-area");

// char-count
const charC = document.getElementById("char-count");

// word-count
const wordC = document.getElementById("word-count");

// reading-time
const readT = document.getElementById("reading-time");

// sentence-count
const sentenceC = document.getElementById("sentence-count");

// button
const btn = document.getElementById("generate");

// function to count character
function countChar() {
    return textArea.value.trim().length;
}

// function to count words
function countWords() {
     let count = 0;
     let s = textArea.value;
     s = s.trim();
     let n = s.length;
     if(n == 0) return 0;
     for(let i = 0; i < n; i++){
         if(s.charAt(i) == " ") count++;
     }
     return count+1
}

// function to count sentences
function countSentences() {
    let s = textArea.value.trim();
    let n = s.length;
    if(n == 0) return 0;
    let count = 0;
    for(let i = 0; i < n; i++){
        if(s.charAt(i) == "." || s.charAt(i) == "?" || s.charAt(i) == "!") count++;
    }
    if(count == 0) return 1;
    else return count;
}

// function to estimate reading time
function readTime() {
    let c = 3.5; // Average words per second
    return Math.ceil(countWords() / c);
}

// adding EventListener to Button
btn.addEventListener("click", () => {
   charC.innerHTML = "Characters : " + countChar();
   wordC.innerHTML = "Words : " + countWords();
   sentenceC.innerHTML = "Sentences : " + countSentences();
   let sec = readTime();
   let min = 0;
   while(sec >= 60) {
       min++;
       sec -= 60;
   }
   readT.innerHTML = "Reading Time : " + min + " minutes "+ sec + " seconds";
});
