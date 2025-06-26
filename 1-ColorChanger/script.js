const buttons = document.querySelectorAll('.button')

buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        document.body.style.backgroundColor = e.target.id
    })
})