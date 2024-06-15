// 'use strict'

// // Задача №2

// function addItem (num = 5) {
//     const body = document.body
//     let item = ''
//     for (let i = 0; i <= num; i++) {
//         item += `<li>${i}</li>`
        
//     }
//     body.insertAdjacentHTML('afterbegin', 
//         `<ul>${item}</ul>`)
// }
// addItem(20)

// // Задача №3

// const body = document.body
// body.classList.add('loaded')
// body.classList.contains('loaded') ? body.style.color = 'green' : null

// // Задача №4

// const items = document.querySelectorAll('.item')
// let number = 0
// const text = `Елемент №`

// items.forEach((element) => {
//     element.classList.add('active')
//     number++
//     element.textContent = text + number
// })

// // Задача №5


// const button = document.querySelector('.button')
// button.scrollIntoView({block:'center'})

// // Задача №6


// const link = document.querySelector('.link')

// link.setAttribute('data-number','100')
// const attribute = parseInt(link.getAttribute('data-number'))
// if (!attribute < 200) {
//     link.style.color = 'red'
// } else {
//     link.style.color = 'inherit'

// }




