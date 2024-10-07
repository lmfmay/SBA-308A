export let wordListItems = [];

export function clearWords(){
    // const wordDiv = document.querySelector("#wordList");
    // while (wordDiv.firstChild) {
    //   wordDiv.removeChild(wordDiv.firstChild);
    // }
    wordListItems = [];
} 

export function createWord(word){
    // let wordListItems = document.createElement(`div`);
    // let wordListItem = document.createElement(`li`);
    // 
    // wordListItems.appendChild(wordListItem);
    // return wordListItems
    wordListItems.push(word);
}