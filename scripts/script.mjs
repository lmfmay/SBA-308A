// Organize your JavaScript code into at least three (3) different module files, and import functions and data across files as necessary.
import * as Words from "./words.mjs";
import * as Search from "./search.mjs"
import { wordListItems} from "./words.mjs";
import { searchInput } from "./search.mjs";

const categorySelect = document.getElementById(`category`);
let wordCloudContain = document.getElementById(`wordCloudContain`);

// Use the fetch API or Axios to communicate with an external web API. Use the data provided by this API to populate your application’s content and features.
// Make use of Promises and async/await syntax as appropriate.
async function loadCategories() {
    const response = await axios.get(`https://www.wordgamedb.com/api/v1/categories`);
    let categories = response.data;
    categories.forEach(category => {
        let categoryOpt = document.createElement(`option`);
        categoryOpt.setAttribute = (`value`,category);
        categoryOpt.innerHTML = category;
        categorySelect.appendChild(categoryOpt);
    });
}
loadCategories()

// Create user interaction with the API through a search feature, paginated gallery, or similar. This feature should use GET requests to retrieve associated data.
searchInput.addEventListener("change",categoryHandler)
categorySelect.addEventListener(`change`,categoryHandler)
//formData.addEventListener("submit", submitHandler)

//get data from word API and generate word cloud from category
async function categoryHandler(){
    try {
        const response = await axios.get(`https://www.wordgamedb.com/api/v1/words/`);
        let words = response.data;
        let category = categorySelect.value
        let searchCat = Search.searchHandler()
        
        //error handling if search term is not in API data
        let isValidCategory = words.some(word => word.category === searchCat);
        if (!isValidCategory && searchCat!=``) {
            wordCloudContain.innerHTML=`Please search for only the following categories: animal, country, food, plant, sport.`
            throw new Error("This API only supports the following categories: animal, country, food, plant, sport.");
        }        
        Words.clearWords()
        words.forEach(word => {
            if (word.category===category || word.category===searchCat){
                Words.createWord(word.word)
            } 
        });
        let wordListStr = wordListItems.toString()
        wordCloud(wordListStr)
} catch (error) {
    console.log(error);
}
}

async function wordCloud(text) {
    const response = await axios.get(`https://quickchart.io/wordcloud?text=${text}`)
    wordCloudContain.innerHTML = response.data;
}