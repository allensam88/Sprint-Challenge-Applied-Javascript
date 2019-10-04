// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const headerDiv = document.createElement('div');
    const date = document.createElement('span');
    const title = document.createElement('h1');
    const temp = document.createElement('span');
    const degree = document.createElement('sup');

    headerDiv.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp')

    const currentDate = new Date();
    date.textContent = currentDate.toDateString().slice(4)
    title.textContent = 'Lambda Times';
    degree.textContent = 'o';
    temp.textContent = '98';
    
    headerDiv.appendChild(date);
    headerDiv.appendChild(title);
    headerDiv.appendChild(temp);
    temp.appendChild(degree);
    
    return headerDiv
}

const headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(Header());

