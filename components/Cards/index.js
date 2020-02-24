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

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(res=>{
    const cardsContainer = document.querySelector('.cards-container');
    
    // const obj = res.data.articles.forEach(e=>e);
    //I am supposed to get the following array, but it didn't happen Is my syntax is not right
    //['javascript','bootstrap','technology','jquery','node'];
    

    const obj = res.data.articles.javascript;
    for(let i = 0 ;i<obj.length;i++){
          cardsContainer.appendChild( cardCreator(obj[i]));
        }

        const objb = res.data.articles.bootstrap;
        for(let i = 0 ;i<objb.length;i++){
        cardsContainer.appendChild( cardCreator(objb[i]));
        
        }

        const objt = res.data.articles.technology;
        for(let i = 0 ;i<objt.length;i++){
        cardsContainer.appendChild( cardCreator(objt[i]));
        
        }
        const objq = res.data.articles.jquery;
        for(let i = 0 ;i<objq.length;i++){
        cardsContainer.appendChild( cardCreator(objq[i]));
       
        }
        const objn = res.data.articles.node;
        for(let i = 0 ;i<objn.length;i++){
        cardsContainer.appendChild( cardCreator(objn[i]));
       
        }
   
   
    
    
    
    cardsContainer.appendChild( cardCreator(obj));
})
.catch(err=>{
  console.log('failed here is the error',err)
});

const cardCreator = (obj)=>{
 
   
    
    const card = document.createElement('div');
    card.classList.add('card');

    const headline = document.createElement('div');
    headline.classList.add('headline');
    
    headline.textContent =`${obj.headline}` ;
    card.appendChild(headline);

    const author = document.createElement('div');
    author.classList.add('author');
    card.appendChild(author);

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');
    author.appendChild(imgContainer);

    const authorImage = document.createElement('img');
    authorImage.src = `${obj.authorPhoto}`;
    imgContainer.appendChild(authorImage);
    const name = document.createElement('span');
    name.textContent = `${obj.authorName}`;
    author.appendChild(name);
    
    return card;

}


