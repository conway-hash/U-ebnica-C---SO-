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

        const active = document.querySelector('.ul-li-active').parentElement.href

        if (links.indexOf(active) == 0) {
            up.classList.add('button-disabled')
            up.setAttribute('disabled', '')
        }
        if (up.classList.contains('button-disabled') & links.indexOf(active) != 0) {
            up.classList.remove('button-disabled')
            up.removeAttribute('disabled')
        }

        if (links.indexOf(active) == 20) {
            down.classList.add('button-disabled')
            down.setAttribute('disabled', '')
        }
        if (down.classList.contains('button-disabled') & links.indexOf(active) != 20) {
            down.classList.remove('button-disabled')
            down.removeAttribute('disabled')
        }
    })
});

let links = []
const anchors = document.links;
for (anchor of anchors) {
    links.push(anchor.href)
}

window.onload = function () {
    window.location = links[0]
}

const up = document.getElementById('up')
const down = document.getElementById('down')
const active = document.querySelector('.ul-li-active').parentElement.href

up.addEventListener('click', () => {
    const active = document.querySelector('.ul-li-active').parentElement.href
    if (links.indexOf(active) == 1) {
        up.classList.add('button-disabled')
        up.setAttribute('disabled', '')
    }
    if (down.classList.contains('button-disabled')) {
        down.classList.remove('button-disabled')
        down.removeAttribute('disabled')
    }

    const index = links.indexOf(active) - 1

    ul_lis.forEach(ul_li2 => {
        ul_li2.classList.remove('ul-li-active')
    })

    if (anchors[index].parentElement.classList.contains('ul-inactive')) {
        anchors[index].parentElement.classList.remove('ul-inactive')
    }
    anchors[index].firstElementChild.classList.add('ul-li-active')

    window.location = links[index]
})

down.addEventListener('click', () => {
    const active = document.querySelector('.ul-li-active').parentElement.href
    if (links.indexOf(active) == 19) {
        down.classList.add('button-disabled')
        down.setAttribute('disabled', '')
    }
    if (up.classList.contains('button-disabled')) {
        up.classList.remove('button-disabled')
        up.removeAttribute('disabled')
    }

    const index = links.indexOf(active) + 1

    ul_lis.forEach(ul_li2 => {
        ul_li2.classList.remove('ul-li-active')
    })

    if (anchors[index].parentElement.classList.contains('ul-inactive')) {
        anchors[index].parentElement.classList.remove('ul-inactive')
    }
    anchors[index].firstElementChild.classList.add('ul-li-active')

    window.location = links[index]
})