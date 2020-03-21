// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
axios.get("https://lambda-times-backend.herokuapp.com/topics")
.then(response =>{
    console.log('Structure', response.data.topics);
    const data = response.data.topics


    data.forEach(obj =>{
        const tabsSect = Tab(obj)
     topics.appendChild(tabsSect);
    })

})
.catch(err =>{
    console.log('All wrong girl!', err)
});

//Variables for tab section to append Tab
// let tabsWrapper = document.querySelector('.tabs')
let topics = document.querySelector('.topics')
// tabsWrapper.appendChild(topics)
// console.log(topics)


function Tab (data) {

const tabs = document.createElement('div')    
const tab = document.createElement('p')
const tabTwo = document.createElement('p')
const tabThree = document.createElement('p')
const tabFour = document.createElement('p')
const tabFive = document.createElement('p')

tab.textContent = data;
tabTwo.textContent = data;
tabThree.textContent = data;
tabFour.textContent = data;
tabFive.textContent = data;

tabs.classList.add('tabs');
tab.classList.add('tab')
tabTwo.classList.add('tab')
tabThree.classList.add('tab')
tabFour.classList.add('tab')
tabFive.classList.add('tab')

tabs.appendChild(tab)
tabs.appendChild(tabTwo)
tabs.appendChild(tabThree)
tabs.appendChild(tabFour)
tabs.appendChild(tabFive)

return tabs

}

