import data from './data.json' assert {type: 'json'}

const containers = document.querySelectorAll('.container')
const today = new Date().getDay()

containers.forEach(container => {
    renderBar(container)   
})

function renderBar(container) {
    const bar = container.querySelector('.bar')
    const day = container.querySelector('p').textContent.trim()
    const hover = container.querySelector('.data')
    const amount = data.find(d => d.day == day).amount
    hover.textContent = amount
    bar.style.height = `${amount * 2}px`
    barStyle(bar)
}

function barStyle(bar) {
    if (bar.dataset.day == today) {
        bar.classList.remove("bg-SoftRed", "hover:bg-SoftRedHov")
        bar.classList.add("bg-Cyan", "hover:bg-CyanHov")
    }
    else {
        bar.classList.remove("bg-Cyan", "hover:bg-CyanHov")
        bar.classList.add("bg-SoftRed", "hover:bg-SoftRedHov")
    }
}