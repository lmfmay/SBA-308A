export let searchInput = document.getElementById(`searchCategory`);
let searchValue;

export function searchHandler(){
    searchValue = searchInput.value;
    console.log(searchValue)
    return searchValue.toLowerCase()
}