

// Enable user manipulation of data within the API through the use of POST, PUT, or PATCH requests. Ensure your chosen API supports this feature before beginning.

// Organize your JavaScript code into at least three (3) different module files, and import functions and data across files as necessary.
// Ensure the program runs as expected, without any undesired behavior caused by misunderstanding of the JavaScript event loop (such as race conditions, API calls being handled out of order, etc.).
// Create an engaging user experience through the use of HTML and CSS.
// Ensure that the program runs without errors (comment out things that do not work, and explain your blockers - you can still receive partial credit).
// Commit frequently to the git repository.
// Include a README file that contains a description of your application.
// Level of effort displayed in creativity, presentation, and user experience


const categorySelect = document.getElementById(`category`);

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