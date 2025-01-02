const signUp = document.querySelector('.signup_form')
const logIn = document.querySelector('.login')
const create = document.querySelector('.create')
const log = document.querySelector('.log')


create.addEventListener('click', () => {
    console.log('clicked')

    signUp.style.display = 'flex'
    logIn.style.display = 'none'
    create.style.display = 'none'
    log.style.display = 'flex'
})

log.addEventListener('click', () => {
    signUp.style.display = 'none';
    logIn.style.display = 'flex';
    create.style.display = 'flex';
    log.style.display = 'none';
})