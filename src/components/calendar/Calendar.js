import React, {useState} from 'react'
import EventModal from './EventModal.js'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import styled from 'styled-components'

const Calendar = () => {
    const [showModal, setShowModal] = useState(false)
    const [events, setEvents] = useState([])

    console.log(events)
    // const handleDateClick = arg => {
    //     console.log('date clicked', arg)
    // }

    // const renderEventContent = eventInfo => {
    //     console.log(eventInfo)
    //     return (
    //       <>
    //         <b>{eventInfo.timeText}</b>
    //         <i>{eventInfo.event.title}</i>
    //       </>
    //     )
    // }

    // var dateStr = prompt('Enter a date in YYYY-MM-DD format')
    // var date = new Date(dateStr + 'T00:00:00'); // will be in local time

    // if (!isNaN(date.valueOf())) { // valid?
    // FullCalendar.addEvent({
    //     title: 'dynamic event',
    //     start: date,
    //     allDay: true
    // })
    //     alert('Great. Now, update your database...')
    // } else {
    //     alert('Invalid date.')
    // }

    const handleAddEvent = event => {
        // FullCalendar.addEvent({
        //     title: event.name,
        //     start: event.start,
        //     allDay: event.allDay
        // })
        setEvents(prevEvents => ({
            ...prevEvents,
            event
        }))
    }

    const renderEventContent = events => {
        return (
            <>
                <b>{events.title}</b>
                <p>{events.start}</p>
            </>
        )
    }

    return (
        <Container>
            <FullCalendar
                plugins={[ dayGridPlugin, interactionPlugin ]}
                editable={true}
                initialView="dayGridMonth"
                // dateClick={handleDateClick}
                // eventContent={renderEventContent}
                headerToolbar={{center: 'addEventButton'}}
                customButtons={{
                    addEventButton: {
                        text: 'add event...',
                        click: () => setShowModal(true)
                    }
                }}
                eventContent={renderEventContent(events)}
            />
            {showModal && <EventModal submit={handleAddEvent}/>}
        </Container>
    )
}

const Container = styled.div`
    width: 90vw;
    max-width: 1200px;
    margin: auto;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

// const Calendar = styled(FullCalendar)``

export default Calendar