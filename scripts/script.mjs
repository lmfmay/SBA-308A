import * as Words from "./words.mjs";
import { wordListItems} from "./words.mjs";

// Enable user manipulation of data within the API through the use of POST, PUT, or PATCH requests. Ensure your chosen API supports this feature before beginning.

// Organize your JavaScript code into at least three (3) different module files, and import functions and data across files as necessary.
// Ensure the program runs as expected, without any undesired behavior caused by misunderstanding of the JavaScript event loop (such as race conditions, API calls being handled out of order, etc.).
// Create an engaging user experience through the use of HTML and CSS.
// Ensure that the program runs without errors (comment out things that do not work, and explain your blockers - you can still receive partial credit).
// Commit frequently to the git repository.
// Include a README file that contains a description of your application.
// Level of effort displayed in creativity, presentation, and user experience


const categorySelect = document.getElementById(`category`);
const wordList = document.getElementById(`wordList`);
const formData = document.getElementById(`formData`);
let wordCloudImg = document.getElementById(`wordCloudImg`);
//const fs = require('fs').promises;  // Promises-based file system API

// Use the fetch API or Axios to communicate with an external web API. Use the data provided by this API to populate your application’s content and features.
// Create user interaction with the API through a search feature, paginated gallery, or similar. This feature should use GET requests to retrieve associated data.
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

categorySelect.addEventListener(`change`,categoryHandler)
formData.addEventListener("submit", submitHandler)

async function categoryHandler(){
    const response = await axios.get(`https://www.wordgamedb.com/api/v1/words/`);
    let words = response.data;
    let category = categorySelect.value
    Words.clearWords()
    words.forEach(word => {
        if (word.category===category){
            //wordList.appendChild(Words.createWord(word.word));
            Words.createWord(word.word)
        }
    });
    let wordListStr = wordListItems.toString()
    console.log(wordListStr)
    wordCloud(wordListStr)
}

async function wordCloud(text) {
    const response = await axios.get(`https://quickchart.io/wordcloud?text=${text}`
    // , {
    //     'format': 'png',
    //     'width': 1000,
    //     'height': 1000,
    //     'fontScale': 15,
    //     'scale': 'linear',
    //     //'useWordList': true,
    //     'text': wordListItems.flat()
    // }, {
    //     headers: {
    //         'Content-Type': 'application/json'
    //       },
    //       responseType: 'arraybuffer'  // This is important to handle binary data (image)
    )
    //setAttributes(wordCloudImg,response.data)
    console.log(response.data)
    wordCloudImg.setAttribute("src",response.data)
}

function submitHandler(e) {
    e.preventDefault();
    wordCloud(categoryHandler());
}

function setAttributes(el, attrs) {
    for(let key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }