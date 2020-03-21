// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


const Cards = data =>{


    //Created Elements here
    const myCard = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const imgUrl = document.createElement('img');
    const authorName = document.createElement('span');


}
//the container
const cardContainer = document.querySelector('.cards-container')

axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then(card =>{
    const cardArticles = card.data.articles
     console.log('Articles:', cardArticles)

     //variables for objects and keys needed
     const key = Object.keys(cardArticles);
     console.log(key);


})
.catch(err =>{
    console.log('Something is Fd Up', err)
})