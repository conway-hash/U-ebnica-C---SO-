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

info.addEventListener('click', () => {
    const overlay = document.createElement('div')
    overlay.classList.add('overlay')

    const overlay_main = document.createElement('div')
    overlay_main.classList.add('overlay-main')

    const buttons = document.createElement('div')
    buttons.classList.add('buttons')

    const button = document.createElement('button')
    button.classList.add('button')
    button.id = 'close'

    button.innerHTML = '<svg xmlns = "http://www.w3.org/2000/svg" viewBox = "0 0 320 512" fill = "#ededed" >< !--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>'

    button.addEventListener('click', () => {
        overlay.remove()
    })

    document.addEventListener('keydown', function (event) {
        if (event.key == "c") {
            button.classList.add('button-animation1')
            setTimeout(() => {
                button.classList.remove('button-animation1')
            }, 100);
            overlay.remove()
        }
    })

    const hide_button = document.createElement('button')
    hide_button.classList.add('button', 'hide-button')

    buttons.append(button, hide_button, hide_button.cloneNode(), hide_button.cloneNode())
    overlay_main.innerHTML =
        '<div class="title"><h1>Učebnica C</h1><h4>Základy programovania</h4></div><div class="overlay-main-row"><div class="overlay-main-column"><div class="title"><h4>Používanie</h4></div><div class="overlay-content-row"><div class="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" fill="#ededed"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M144 80c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z" /></svg></div><h4>- tlačidlo informácií a používania Učebnice C,<br> je možné taktiež použiť klávesu "i"</h4></div><div class="overlay-content-row"><div class="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#ededed"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H463.5c0 0 0 0 0 0h.4c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1V448c0 17.7 14.3 32 32 32s32-14.3 32-32V396.9l17.6 17.5 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352H176c17.7 0 32-14.3 32-32s-14.3-32-32-32H48.4c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z" /></svg></div><h4>- tlačidlo obnovenia stránky do pôvodného stavu,<br> je možné taktiež použiť klávesu "r"</h4></div><div class="overlay-content-row"><div class="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="#ededed"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" /></svg></div><h4>- tlačidlo presunutia na predchádzajúcu podkapitolu,<br> je možné taktiež použiť klávesu "↑"</h4></div><div class="overlay-content-row"><div class="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="#ededed"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg></div><h4>- tlačidlo presunutia na nasledujúcu podkapitolu,<br> je možné taktiež použiť klávesu "↓"</h4></div><div class="overlay-content-row" ><div class="button"><svg xmlns = "http://www.w3.org/2000/svg" viewBox = "0 0 320 512" fill = "#ededed" >< !--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg></div><h4>- tlačidlo pre odchod z informácií,<br> je možné taktiež použiť klávesu "c"</h4></div><div class="overlay-content-row"><div class="button button-disabled"></div><h4>- farba naznačuje nepoužiteľnosť tlačidla v danom momente</h4></div></div > <div class="overlay-main-column"><div class="title"><h4>Informácie</h4></div><div class="overlay-content-row"><h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi sit illum voluptas ea earum obcaecati debitis placeat quo odit, nemo fuga quod tenetur voluptatibus repudiandae maxime nulla at corporis delectus.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi sit illum voluptas ea earum obcaecati debitis placeat quo odit, nemo fuga quod tenetur voluptatibus repudiandae maxime nulla at corporis delectus.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi sit illum voluptas ea earum obcaecati debitis placeat quo odit, nemo fuga quod tenetur voluptatibus repudiandae maxime nulla at corporis delectus.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi sit illum voluptas ea earum obcaecati debitis placeat quo odit, nemo fuga quod tenetur voluptatibus repudiandae maxime nulla at corporis delectus.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi sit illum voluptas ea earum obcaecati debitis placeat quo odit, nemo fuga quod tenetur voluptatibus repudiandae maxime nulla at corporis delectus.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi sit illum voluptas ea earum obcaecati debitis placeat quo odit, nemo fuga quod tenetur voluptatibus repudiandae maxime nulla at corporis delectus.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi sit illum voluptas ea earum obcaecati debitis placeat quo odit, nemo fuga quod tenetur voluptatibus repudiandae maxime nulla at corporis delectus.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi sit illum voluptas ea earum obcaecati debitis placeat quo odit, nemo fuga quod tenetur voluptatibus repudiandae maxime nulla at corporis delectus.</h4></div></div></div >'
    overlay.append(overlay_main, buttons)

    document.body.appendChild(overlay)
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
        if (document.querySelector('.overlay')) {
            return
        }
        const overlay = document.createElement('div')
        overlay.classList.add('overlay')

        const overlay_main = document.createElement('div')
        overlay_main.classList.add('overlay-main')

        const buttons = document.createElement('div')
        buttons.classList.add('buttons')

        const button = document.createElement('button')
        button.classList.add('button')
        button.id = 'close'

        button.innerHTML = '<svg xmlns = "http://www.w3.org/2000/svg" viewBox = "0 0 320 512" fill = "#ededed" >< !--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>'

        button.addEventListener('click', () => {
            overlay.remove()
        })

        document.addEventListener('keydown', function (event) {
            if (event.key == "c") {
                button.classList.add('button-animation1')
                setTimeout(() => {
                    button.classList.remove('button-animation1')
                }, 100);
                overlay.remove()
            }
        })

        const hide_button = document.createElement('button')
        hide_button.classList.add('button', 'hide-button')

        buttons.append(button, hide_button, hide_button.cloneNode(), hide_button.cloneNode())
        overlay_main.innerHTML =
            '<div class="title"><h1>Učebnica C</h1><h4>Základy programovania</h4></div><div class="overlay-main-row"><div class="overlay-main-column"><div class="title"><h4>Používanie</h4></div><div class="overlay-content-row"><div class="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" fill="#ededed"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M144 80c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z" /></svg></div><h4>- tlačidlo informácií a používania Učebnice C,<br> je možné taktiež použiť klávesu "i"</h4></div><div class="overlay-content-row"><div class="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#ededed"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H463.5c0 0 0 0 0 0h.4c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1V448c0 17.7 14.3 32 32 32s32-14.3 32-32V396.9l17.6 17.5 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352H176c17.7 0 32-14.3 32-32s-14.3-32-32-32H48.4c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z" /></svg></div><h4>- tlačidlo obnovenia stránky do pôvodného stavu,<br> je možné taktiež použiť klávesu "r"</h4></div><div class="overlay-content-row"><div class="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="#ededed"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" /></svg></div><h4>- tlačidlo presunutia na predchádzajúcu podkapitolu,<br> je možné taktiež použiť klávesu "↑"</h4></div><div class="overlay-content-row"><div class="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="#ededed"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg></div><h4>- tlačidlo presunutia na nasledujúcu podkapitolu,<br> je možné taktiež použiť klávesu "↓"</h4></div><div class="overlay-content-row" ><div class="button"><svg xmlns = "http://www.w3.org/2000/svg" viewBox = "0 0 320 512" fill = "#ededed" >< !--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg></div><h4>- tlačidlo pre odchod z informácií,<br> je možné taktiež použiť klávesu "c"</h4></div><div class="overlay-content-row"><div class="button button-disabled"></div><h4>- farba naznačuje nepoužiteľnosť tlačidla v danom momente</h4></div></div > <div class="overlay-main-column"><div class="title"><h4>Informácie</h4></div><div class="overlay-content-row"><h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi sit illum voluptas ea earum obcaecati debitis placeat quo odit, nemo fuga quod tenetur voluptatibus repudiandae maxime nulla at corporis delectus.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi sit illum voluptas ea earum obcaecati debitis placeat quo odit, nemo fuga quod tenetur voluptatibus repudiandae maxime nulla at corporis delectus.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi sit illum voluptas ea earum obcaecati debitis placeat quo odit, nemo fuga quod tenetur voluptatibus repudiandae maxime nulla at corporis delectus.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi sit illum voluptas ea earum obcaecati debitis placeat quo odit, nemo fuga quod tenetur voluptatibus repudiandae maxime nulla at corporis delectus.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi sit illum voluptas ea earum obcaecati debitis placeat quo odit, nemo fuga quod tenetur voluptatibus repudiandae maxime nulla at corporis delectus.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi sit illum voluptas ea earum obcaecati debitis placeat quo odit, nemo fuga quod tenetur voluptatibus repudiandae maxime nulla at corporis delectus.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi sit illum voluptas ea earum obcaecati debitis placeat quo odit, nemo fuga quod tenetur voluptatibus repudiandae maxime nulla at corporis delectus.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi sit illum voluptas ea earum obcaecati debitis placeat quo odit, nemo fuga quod tenetur voluptatibus repudiandae maxime nulla at corporis delectus.</h4></div></div></div >'
        overlay.append(overlay_main, buttons)

        document.body.appendChild(overlay)
    }

});
