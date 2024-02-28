
// dando funcionalidade ao menu mobile 

const menuIcon = document.getElementById('mobile__menu__icon')
const menuOpen = document.getElementById('menu__mobile')
const menuItemns = document.getElementById('menu__optionsList')
const closeMenu = document.getElementById('menu__iconCloser')

menuIcon.addEventListener('click', ()=> {
    menuOpen.classList.add('opening__menu')
})

closeMenu.addEventListener('click', ()=>{
    menuOpen.classList.remove('opening__menu')
}
)

menuOpen.addEventListener('click', ()=>{
    menuOpen.classList.remove('opening__menu')
})



// ux do form 
let nameInput = document.getElementById('contactInput__name')
let emailInput = document.getElementById('contactInput__email')
let msgInput = document.getElementById('contactInput__subject')
let max = document.getElementById('contactInput__subject').getAttribute('maxlength')
let counterMsg = document.querySelector('.counter__msg')


// ux do input de nome
nameInput.addEventListener('input', () =>{
    let nameUser = nameInput.value

    if(/[0-9!@#$%¨&*()_+-=.,;/?<>]/.test(nameUser)){
        nameInput.style.color = 'red'
        nameInput.style.border = '2px solid red'
        nameInput.style.outline = 'none'
    } else{
        nameInput.style.color = 'black'
        nameInput.style.border = 'none'
        nameInput.style.outline = '2px solid #5ababa'
    }
})

//ux do input de email
emailInput.addEventListener('input', ()=>{
    let emailUser = emailInput.value

    if(/[;/,><!#$%¨&*()+=-]/.test(emailUser)){
        emailInput.style.color = 'red'
        emailInput.style.border = '2px solid red'
        emailInput.style.outline = 'none'
    } else{
        emailInput.style.color = 'black'
        emailInput.style.border = 'none'
        emailInput.style.outline = '2px solid #5ababa'
    }
})

//ux da text area
msgInput.addEventListener('input', ()=>{
    let msg = msgInput.value

    counterMsg.innerHTML = `${msg.length}/${max}`
})
