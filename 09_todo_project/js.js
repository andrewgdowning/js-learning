let search = document.querySelector('#search')
let searchForm = document.querySelector('#search-form')
let listItems = Array.from(document.querySelectorAll('li'))
let list = document.querySelector('#list')


console.log(listItems)

searchForm.addEventListener('submit',(e) => {
    e.preventDefault()
});

search.addEventListener('keydown',(e) => {
    let filterList = listItems.filter((item) => {
        return item.textContent.includes(e.target.value)
    });
    list.innerHTML = ""
    filterList.forEach(listItem => {
        list.appendChild(listItem)
    });
});

