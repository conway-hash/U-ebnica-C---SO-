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

        if (links.indexOf(active) == links.length - 1) {
            down.classList.add('button-disabled')
            down.setAttribute('disabled', '')
        }
        if (down.classList.contains('button-disabled') & links.indexOf(active) != links.length - 1) {
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
const home = document.getElementById('home')
const info = document.getElementById('info')

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

    const yPosElement = anchors[index].firstElementChild.offsetTop
    const nav = anchors[index].parentElement.parentElement.parentElement
    const yPosNav = nav.offsetTop
    const heightNav = nav.offsetHeight
    const yPosition = yPosElement - yPosNav

    if (yPosition > heightNav - 105) {
        nav.scrollTop += yPosition + 210
    }

    if (yPosition < nav.scrollHeight - heightNav + 105) {
        nav.scrollTop = yPosition - 210
    }

    window.location = links[index]
})

down.addEventListener('click', () => {
    const active = document.querySelector('.ul-li-active').parentElement.href
    if (links.indexOf(active) == links.length - 2) {
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

    const yPosElement = anchors[index].firstElementChild.offsetTop
    const nav = anchors[index].parentElement.parentElement.parentElement
    const yPosNav = nav.offsetTop
    const heightNav = nav.offsetHeight
    const yPosition = yPosElement - yPosNav

    if (yPosition > heightNav - 105) {
        nav.scrollTop += yPosition + 210
    }

    if (yPosition < nav.scrollHeight - heightNav + 105) {
        nav.scrollTop = yPosition - 210
    }

    window.location = links[index]
})

home.addEventListener('click', () => {
    home.firstElementChild.classList.add('button-home')
    setTimeout(() => {
        home.firstElementChild.classList.remove('button-home')
    }, 200);
    el_names.forEach(el_name => {
        el_name.parentElement.lastElementChild.classList.add('ul-inactive')
    });
    el_names[0].parentElement.lastElementChild.classList.remove('ul-inactive')

    ul_lis.forEach(ul_li2 => {
        ul_li2.classList.remove('ul-li-active')
    })
    ul_lis[0].classList.add('ul-li-active')

    const active = document.querySelector('.ul-li-active').parentElement.href
    if (links.indexOf(active) == 0) {
        up.classList.add('button-disabled')
        up.setAttribute('disabled', '')
    }
    if (down.classList.contains('button-disabled')) {
        down.classList.remove('button-disabled')
        down.removeAttribute('disabled')
    }
    window.location = links[0]
})

document.addEventListener('keydown', function (event) {
    let active = document.querySelector('.ul-li-active').parentElement.href
    let index
    if (event.key == "ArrowUp") {
        if (links.indexOf(active) == 0) {
            up.classList.add('button-animation2')
            setTimeout(() => {
                up.classList.remove('button-animation2')
            }, 100);
            return
        } else {
            active = document.querySelector('.ul-li-active').parentElement.href
            index = links.indexOf(active) - 1
            ul_lis.forEach(ul_li2 => {
                ul_li2.classList.remove('ul-li-active')
            })

            if (anchors[index].parentElement.classList.contains('ul-inactive')) {
                anchors[index].parentElement.classList.remove('ul-inactive')
            }
            anchors[index].firstElementChild.classList.add('ul-li-active')
            window.location = links[index]

            setTimeout(function () {
                window.location = links[index]
            }, 1);


            const yPosElement = anchors[index].firstElementChild.offsetTop
            const nav = anchors[index].parentElement.parentElement.parentElement
            const yPosNav = nav.offsetTop
            const heightNav = nav.offsetHeight
            const yPosition = yPosElement - yPosNav

            if (yPosition > heightNav - 105) {
                nav.scrollTop += yPosition + 210
            }

            if (yPosition < nav.scrollHeight - heightNav + 105) {
                nav.scrollTop = yPosition - 210
            }

            up.classList.add('button-animation1')
            setTimeout(() => {
                up.classList.remove('button-animation1')
            }, 100);
            if (links.indexOf(active) == 1) {
                up.classList.add('button-disabled')
                up.setAttribute('disabled', '')
            }
            if (down.classList.contains('button-disabled')) {
                down.classList.remove('button-disabled')
                down.removeAttribute('disabled')
            }

        }
    } else if (event.key == "ArrowDown") {
        if (links.indexOf(active) == links.length - 1) {
            down.classList.add('button-animation2')
            setTimeout(() => {
                down.classList.remove('button-animation2')
            }, 100);
            return
        } else {
            active = document.querySelector('.ul-li-active').parentElement.href
            index = links.indexOf(active) + 1
            ul_lis.forEach(ul_li2 => {
                ul_li2.classList.remove('ul-li-active')
            })

            if (anchors[index].parentElement.classList.contains('ul-inactive')) {
                anchors[index].parentElement.classList.remove('ul-inactive')
            }
            anchors[index].firstElementChild.classList.add('ul-li-active')

            setTimeout(function () {
                window.location = links[index]
            }, 1);


            const yPosElement = anchors[index].firstElementChild.offsetTop
            const nav = anchors[index].parentElement.parentElement.parentElement
            const yPosNav = nav.offsetTop
            const heightNav = nav.offsetHeight
            const yPosition = yPosElement - yPosNav

            if (yPosition > heightNav - 105) {
                nav.scrollTop += yPosition + 210
            }

            if (yPosition < nav.scrollHeight - heightNav + 105) {
                nav.scrollTop = yPosition - 210
            }

            down.classList.add('button-animation1')
            setTimeout(() => {
                down.classList.remove('button-animation1')
            }, 100);
            if (links.indexOf(active) == links.length - 2) {
                down.classList.add('button-disabled')
                down.setAttribute('disabled', '')
            }
            if (up.classList.contains('button-disabled')) {
                up.classList.remove('button-disabled')
                up.removeAttribute('disabled')
            }

        }
    } else if (event.key == "r") {
        el_names.forEach(el_name => {
            el_name.parentElement.lastElementChild.classList.add('ul-inactive')
        });
        el_names[0].parentElement.lastElementChild.classList.remove('ul-inactive')

        ul_lis.forEach(ul_li2 => {
            ul_li2.classList.remove('ul-li-active')
        })
        ul_lis[0].classList.add('ul-li-active')

        active = document.querySelector('.ul-li-active').parentElement.href
        if (links.indexOf(active) == 0) {
            up.classList.add('button-disabled')
            up.setAttribute('disabled', '')
        }
        if (down.classList.contains('button-disabled')) {
            down.classList.remove('button-disabled')
            down.removeAttribute('disabled')
        }
        window.location = links[0]

        home.firstElementChild.classList.add('button-home')
        home.classList.add('button-animation1')
        setTimeout(() => {
            home.classList.remove('button-animation1')
        }, 100);
        setTimeout(() => {
            home.firstElementChild.classList.remove('button-home')
        }, 200);

    } else if (event.key == "i") {
        info.classList.add('button-animation1')
        setTimeout(() => {
            info.classList.remove('button-animation1')
        }, 100);
    }

});
