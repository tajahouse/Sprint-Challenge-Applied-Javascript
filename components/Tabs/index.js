// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const Tab = data =>{
    const theTabs = document.createElement('div')

    theTabs.textContent = data

    theTabs.classList.add('tab')

return theTabs
}


axios.get("https://lambda-times-backend.herokuapp.com/topics")
.then(response =>{
    // console.log('Structure', response.data.topics);
    const data = response.data.topics

    data.forEach(tab =>{
        const newTabs = Tab(tab)
        topics.appendChild(newTabs)
        // console.log(newTabs)
    })

})
.catch(err =>{
    console.log('All wrong girl!', err)
});

// Variables for tab section to append Tab
let tabsWrapper = document.querySelector('.tabs')
let topics = document.querySelector('.topics')
tabsWrapper.appendChild(topics)
// console.log(topics)




