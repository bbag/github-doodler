const gridButtons = document.querySelectorAll('button[data-id]')

gridButtons.forEach((button) => {
    const id = parseInt(button.dataset.id)

    button.addEventListener('click', () => {
        const level = parseInt(button.dataset.level)
        if (level >= 4) {
            button.dataset.level = '0'
        } else {
            (button.dataset.level++).toString()
        }
    })
})

let scheduleArray = []
const schedule = document.getElementById('schedule')
const genButton = document.getElementById('generate')

genButton.addEventListener('click', () => {
    console.log('generating...')

    // Clear the schedule list
    schedule.innerHTML = ''

    // Clear the schedule
    scheduleArray = [
        // {
        //   id: 3,
        //   date: new Date('1/14/2024'),
        //   contributions: 3
        // },
        // {
        //   id: 4,
        //   date: new Date('4/23/2024'),
        //   contributions: 1
        // },
        // {
        //   id: 12,
        //   date: new Date('11/3/2024'),
        //   contributions: 4
        // }
    ]

    //     // Repopulate the schedule list with the new items
    //     scheduleArray.forEach(item => {
    //         console.log('adding new item')
    //         const li = document.createElement('li')

    //         const dateString = new Intl.DateTimeFormat('en-US', {
    //             weekday: 'long',
    //             month: 'long',
    //             day: 'numeric',
    //             year: 'numeric'
    //         }).format(item.date)

    //         li.innerHTML = `${dateString} — Make ${item.contributions} commit${item.contributions != 1 ? 's' : ''}`
    //         schedule.appendChild(li)
    //     })

    const firstDay = null
    const today = new Date().getDay() // Sunday = 0, Monday = 1, etc...

    gridButtons.forEach((button) => {
        const date = new Date() // Will start as today's date, but have days added as needed
        const id = parseInt(button.dataset.id)
        const level = parseInt(button.dataset.level)
        let dayOffset = 0

        if (level > 0) {
            // If firstDay is null
            if (firstDay === null) {
                // Initialize the firstDate object
                firstDay = { id, date }

                // Then check if today is less than or equal to (id % 7)
                if (today <= id % 7) {
                    // firstDay.date = today's date + ((id % 7) - today) days
                    firstDay.date.setDate(firstDay.date)
                } else {
                    // firstDay.date = today's date + (7 - (today - (id % 7))) days
                }
            }

            // Else, if firstDay is NOT null
            else {
            }

            // scheduleArray.push({
            //   id: #,
            //   date: new Date(),
            //   contributions: #
            // })
        }
    })
})

function handlePreset(preset) {
    switch (preset) {
        case 'snake':
            break
        default:
            break
    }
}