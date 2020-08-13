let btn = document.getElementById('btn')
btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (!!(btn.style.animation = 'animate 1.5s linear infinite')) {
        return (btn.style.animation = 'strech .4s 1 forwards',
            btn.innerText = "AWESOME"

        )
    }
    if (!!(btn.style.animation = 'strech .4s 1 forwards')) {
        return btn.style.animation = 'animate 1.5s linear infinite'
    }

})