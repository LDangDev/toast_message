function toast ({
    title = '',
    message = '',
    type = 'info',
    duration = 3000
}) {

    const main = document.getElementById('toast')
    if(main){
        const toast = document.createElement('div')
        const icons = {
            success: 'fas fa-check-circle',
            info: 'fas fa-info-circle',
            error: 'fas fa-exclamation-circle',
            warning: 'fas fa-exclamation-circle',
        }
        const icon = icons[type]
        const delay = (duration / 1000).toFixed(2)
        toast.classList.add('toast', `toast--${type}`)
        toast.style.animation = `slideInLeft ease 1s, fadeOut linear 1s ${delay}s forwards`
        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}</p>
            </div>
            <div class="toast__close">
                <i class="fas fa-times"></i>
            </div>
        `
        const autoRemoveToast = setTimeout(function(){
            main.removeChild(toast)
        }, duration + 1000)

        toast.onclick = function(e){
            if(e.target.closest('.toast__close')){
                main.removeChild(toast)
                clearTimeout(autoRemoveToast)
            }
        }
        main.appendChild(toast)
    }
}

function showErrorToast() {
    toast ({
    title: 'Error! Please try it again',
    message: 'you fyou fyou fyou fyouyou fyou fyou fyou fyou u fyou fyou fyou fyou',
    type: 'error',
    duration: 3000
})
}

function showSuccessToast() {
    toast ({
    title: 'Success! You did it',
    message: 'you fyou fyou fyou fyouyou fyou fyou fyou fyou u fyou fyou fyou fyou',
    type: 'success',
    duration: 3000
})
}