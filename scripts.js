const el_names = document.querySelectorAll('.el-name')
el_names.forEach(el_name => {
    el_name.addEventListener('click', () => {
        el_name.parentElement.lastElementChild.classList.toggle('ul-inactive')
    })
});

const ul_lis = document.querySelectorAll('.ul-li')
const main_inner = document.querySelector('.main-inner')
ul_lis.forEach(ul_li => {
    ul_li.addEventListener('click', () => {
        ul_lis.forEach(ul_li2 => {
            ul_li2.classList.remove('ul-li-active')
        })
        ul_li.classList.add('ul-li-active')
    })
});