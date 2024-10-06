
export function clearWords(){
    const wordDiv = document.querySelector("#wordList");
    while (wordDiv.firstChild) {
      wordDiv.removeChild(wordDiv.firstChild);
    }
} 

export function createWord(word){
    let wordListItems = document.createElement(`div`);
    let wordListItem = document.createElement(`li`);
    wordListItem.innerHTML=word;
    wordListItems.appendChild(wordListItem);
    return wordListItems
}