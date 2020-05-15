// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
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

axios
    .get(`https://lambda-times-backend.herokuapp.com/articles`)
    .then( response => {
        console.log(response);
            const articles = response.data.articles;
            const topicArray = Object.keys(articles);
            console.log(topicArray);
            const cardsContainer = document.querySelector('.cards-container');
            topicArray.forEach( item => {
                let topics = articles[item];
                topics.forEach( article => {
                    cardsContainer.appendChild(cardCreator(article)); 
                })
            })
    })
    .catch( err => {
        console.log("Error:", err);
    });

function cardCreator (array) {
    //Create Elements
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const authorDiv = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const authorName = document.createElement('span');

    //Create Classes
    card.classList.add('card');
    headline.classList.add('headline');
    authorDiv.classList.add('author');
    imgContainer.classList.add('img-container');

    //Create Content
    headline.textContent = array.headline;
    img.src = array.authorPhoto;
    authorName.textContent = `By ${array.authorName}`

    //Create Structure
    card.appendChild(headline);
    card.appendChild(authorDiv);
        authorDiv.appendChild(imgContainer);
            imgContainer.appendChild(img);
        authorDiv.appendChild(authorName);

    return card;
}