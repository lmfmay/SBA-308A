export function clearWords(){
    const wordDiv = document.querySelector("#wordList");
    while (wordDiv.firstChild) {
      wordDiv.removeChild(wordDiv.firstChild);
    }
} 

export function createWord(){
    let wordListItems = document.createElement(`div`);
    let wordListItem = wordListItems.createElement(`li`);
    wordListItem.innerHTML=word.word;
    wordList.appendChild(wordListItem);
}