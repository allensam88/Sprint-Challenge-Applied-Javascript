// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
axios
    .get(`https://lambda-times-backend.herokuapp.com/topics`)
    .then( response => {
        console.log(response.data.topics);
        let tabArray = response.data.topics;
        console.log(tabArray);
        tabCreator(tabArray);

    })
    .catch( err => {
        console.log("Error:", err);
    });
  
function tabCreator (array){
    array.forEach(item => {
        const tab = document.createElement('div');
        tab.classList.add('tab');
        tab.textContent = item;
        
        const topics = document.querySelector('.topics');
        topics.appendChild(tab);
    });
    return tab;
}