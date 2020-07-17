const $menubtn = document.querySelector('#menu-btn')
const $menuList = document.querySelector('#social-media-dropdownlist')

var isOpen = false;

$menubtn.addEventListener('click', () => {
    if(!isOpen) {
        $menubtn.classList.add('open')
        $menuList.classList.add('visible')
        isOpen = true
    } else {
        $menubtn.classList.remove('open')
        $menuList.classList.remove('visible')
        isOpen = false
    }
})

