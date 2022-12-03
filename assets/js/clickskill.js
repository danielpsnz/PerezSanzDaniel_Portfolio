const changeDescription = (nameCard, text) => {
    let infoSkills = document.querySelector('#info-skills')
    let cardName = document.querySelector('.card-name')

    document.querySelector(nameCard).addEventListener('mouseover', () => {
        infoSkills.innerHTML = text
        if(nameCard === '.html') {
            cardName.innerHTML = ' HTML '
        } 
        if(nameCard === '.css') {
            cardName.innerHTML = ' CSS '
        }
        if(nameCard === '.js') {
            cardName.innerHTML = ' JavaScript '
        }
        if(nameCard === '.git') {
            cardName.innerHTML = ' Git '
        } 
    })

    document.querySelector(nameCard).addEventListener('mouseout', () => {
        infoSkills.innerHTML = '* Place your cursor in one icon to know more about it. *'
        cardName.innerHTML = ""
    })
}

changeDescription(
    '.html',
    'Standardized system for tagging text files to achieve font, colour, graphic, and hyperlink effects on World Wide Web pages.'
)

changeDescription(
    '.css',
    'Style sheet language used for describing the presentation of a document written in a markup language such as HTML.'
)

changeDescription(
    '.js',
    'An object-oriented computer programming language commonly used to create interactive effects within web browsers.'
)

changeDescription(
    '.git',
    'Git is a version control software designed by Linus Torvalds, thinking about the efficiency, reliability and compatibility of application version maintenance when they have a large number of source code files.'
)