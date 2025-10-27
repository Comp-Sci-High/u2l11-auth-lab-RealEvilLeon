// In this assignment, you will navigate a new API and make two API calls
// Task 1: Account Set up
// Find the GIPHY API, make an account, and create your API key
// MAKE SURE TO SELECT API AND NOT SDK & put "Web" as your platform
// Save your API key in a variable below

let API_KEY = "rQTV8q3DUQryE2NN4Kq0ysxGppLbSYsu"
// Task 2: Endpoint Identification
// Under GIPHY API, find the GIF & Sticker endpoints
// Find the endpoint that lets you search for GIFs 
// Save the base and path in a variable below
let endpoints = ['api.giphy.com/v1/gifs/search', 'api.giphy.com/v1/stickers/search']

// Task 3: Building full request URL
// Find the request (query) parameters to build the full request URL to search for 1 raccoon GIFs
// Save it in a variable below

let requestURL = "https://api.giphy.com/v1/gifs/search?q=raccoon&limit=1&api_key=" + API_KEY


// Task 4: Making the API call
// Define the function to fetch the data and console log the url key
async function fetchGIF(url){
    let response = await fetch(url)
    let actualData = await response.json()
    console.log(actualData)

    return actualData
}


// Call the function to test it worked
// fetchGIF(requestURL)

// Task 5: Running it back
// Find the endpoint that returns a random sticker
let requestURL2 = "https://api.giphy.com/v1/stickers/search?q=cheeseburger&limit=1&api_key=" + API_KEY
// Build the request URL for a coding sticker
async function fetchSticker(url){
    let response = await fetch(url)
    let actualData = await response.json()
    console.log(actualData)

    return actualData
}

// Define and call the function that prints just the sticker URL

fetchSticker(requestURL2)


