

const p = document.getElementById('count')
const span = document.getElementById('step')
const incBtn = document.getElementById('inc')
const decrBtn = document.getElementById('decr')
const incStepBtn = document.getElementById('incStep')
const decrStepBtn = document.getElementById('decrStep')
const modalInput = document.getElementById('modalInput')
const modalBtn = document.getElementById('modalBtn')
const modal = document.getElementById('modal')
const userName = document.getElementById('user')
const closingBtn = document.querySelector('closingBtn')

let count = JSON.parse(localStorage.getItem('count')) || 0;
let step = JSON.parse(localStorage.getItem('step')) || 1;
let user = JSON.parse(localStorage.getItem('user')) || 'Guest';

p.innerText = count
span.innerText = step

const changeCount = (option) => {
    count = option === 'inc' ? count += step : count -= step
    p.innerText = count

    localStorage.setItem('count', count)
}

incBtn.addEventListener('click', () => {
    changeCount('inc')
})

decrBtn.addEventListener('click', changeCount)

const changeStep = (option) => {
    if(step === 1 && option !== 'inc') return alert('positive')
    step = option === 'inc' ? step += 1 : step -= 1
    span.innerText = step

    localStorage.setItem('step', step)

}

incStepBtn.addEventListener('click', () => {
    changeStep('inc')
})

decrStepBtn.addEventListener('click', changeStep)

const renderPage = () => {
    let user = JSON.parse(localStorage.getItem('user')) || 'Guest';
    userName.innerText = user

    if(user === 'Guest') {
        modal.classList.add('showModal')

    } else  {
        modal.classList.remove('showModal')
      
    }
   
    span.innerText = 1
    p.innerText = 0
}

renderPage()

const addUser = () => {
    if (modalInput.value === '') return alert('enter your name')
    localStorage.setItem('user', JSON.stringify(modalInput.value))
    modalInput.value = ''
    renderPage()
}

modalBtn.addEventListener('click', addUser)


function reset()  {
    localStorage.clear()
    renderPage()
}

closingBtn.addEventListener('click', () => {
    modal.classList.remove('showModal')
})

renderPage()
