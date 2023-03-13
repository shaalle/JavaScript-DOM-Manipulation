// Dom Manipulation


const title = document.querySelector('#main-heading');
// title.style.color = 'red'
console.log(title)

const listItems = document.querySelectorAll('.list-items');
for(let i = 0; i<listItems.length; i++){
listItems[i].style.color = 'teal';
  
}
console.log(listItems)