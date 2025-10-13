const panels = document.querySelectorAll('.panel')

// This adds all the panels to the the variable 'panels' and then store them in a nodelist (like an array)

panels.forEach((panel) => {
    panel.addEventListener('mouseenter', () => { //mouseenter is the action of hover
        removeActiveClasses() // this will remove the class of active from the rest of the panels when they are not clicked
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}
