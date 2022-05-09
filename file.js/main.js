const token = window.localStorage.getItem('token');
const postForm = document.querySelector('.post_form');
const headerInput = postForm.querySelector('.header_input');
const descriptionInput = postForm.querySelector('.description_input');
const elContainer = document.querySelector('.container');
const elTemplate = document.querySelector('.template').content;


if(!token) {
    window.location.href = '../file.index/login.html';
}
const fetchArr = async () => {
    const response = await fetch('http://localhost:3000/posts');
    const data = await response.json();
    renderArr(data, elContainer);
}
fetchArr()
function renderArr(arr, list) {
    list.inneHTML = null
    arr?.forEach(item => {
        let cloneTemplate = elTemplate.cloneNode(true)
        selectElem('.header', cloneTemplate).textContent = item.title;
        selectElem('.description', cloneTemplate).textContent = item.description;
        let newBtn = cloneTemplate.querySelector('.delete-btn');
        newBtn.dataset.id = item.id
        newBtn.addEventListener('click', (e) => {
            let dataId = e.target.dataset.id
           fetch(`http://localhost:3000/posts/${dataId}`, {
               method: 'DELETE'
           })
        })
        list.appendChild(cloneTemplate)
    })    
}
postForm.addEventListener('submit', (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: {
           'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: new Date(),
            title: headerInput.value.trim(),
            description: descriptionInput.value.trim(),
            isCompleted: false
        })
    });
})





