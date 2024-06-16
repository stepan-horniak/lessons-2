'use strict'

document.addEventListener('DOMContentLoaded', () => {
    
    // Задача №2

    const body = document.body.classList.add('body-visibl')

    //  Задача №1
   
    document.addEventListener("click", documentAction);

    function documentAction(e) {
        const elementTarget = e.target;
        const currentElement = elementTarget.closest('.item');

        if (currentElement) {
            currentElement.classList.toggle('active');
        }
    }


    // // Задача №3

    const header = document.querySelector('.wrapper-answer__header');
    const footer = document.querySelector('.wrapper-answer__footer');

    header.addEventListener("mouseenter", colorFooter);
    header.addEventListener("mouseleave", colorFooter);

    function colorFooter(e) {
        if (e.type === "mouseenter") {
            footer.classList.add('active-color');
        } else  if (e.type === "mouseleave") {
            footer.classList.remove('active-color');
        }
    }
        
    // Задача №4


    function startCounting(element) {
        const delay = parseInt(element.getAttribute('data-delay') || 1000)
        const limit = parseInt(element.getAttribute('data-limit') || 20)
        let count = 0;

        const interval = setInterval(() => {
            count++;
            element.textContent = count;
            if (count >= limit) {
                clearInterval(interval);
            }
        }, delay);
    }
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounting(element);
                element.style.transform = 'translateX(0)';
                observer.unobserve(element);
            }
        });
    }, {
        threshold: 0.7 
    });

    
    const element = document.querySelector('.element');
    const elementWrapper = document.querySelector('.element-wrapper')

    observer.observe(elementWrapper);












})