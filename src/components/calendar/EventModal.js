import React, {useState} from 'react'
import styled from 'styled-components'

const EventModal = props => {
    const {submit} = props

    const [event, setEvent] = useState({
        name: '', 
        start: [], 
        end: [], 
        allDay: false
    })
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

    const handleChange = e => {
        const {name, type, value} = e.target
        console.log(name, value)
        setEvent(prevEvent => ({
            ...prevEvent,
            [name]: type === 'date' ?
                [value, ...prevEvent[name]]
            :
                type === 'time' ? 
                    [...prevEvent[name], value]
            : 
                value
        }))
    }

    const handleCheckbox = e => {
        const {checked} = e.target
        setEvent(prevEvent => ({
            ...prevEvent,
            allDay: checked ? true : false
        }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        submit(event)
    }

    // const handleChangeDateTime = e => {
    //     const {name, type, value} = e.target

    // }

    console.log(event)

    return (
        <Container>
            <Modal>
                <TitleContainer>
                    <Title>Set Your Event</Title>
                </TitleContainer>
                <Form onSubmit={handleSubmit}>
                    <Input 
                        type='text' 
                        placeholder='Event Name' 
                        onChange={handleChange}
                        value={event.name}
                        name='name'
                    />
                    <Label>Start</Label>
                    <Input
                        type='date'
                        onChange={handleChange}
                        value={event.start.date}
                        name='start'
                    />
                    <Input
                        type='time'
                        onChange={handleChange}
                        value={event.start.time}
                        name='start'
                        disabled={event.allDay}
                    />
                    <Label>End</Label>
                    <Input
                        type='date'
                        onChange={handleChange}
                        value={event.start.date}
                        name='end'
                    />
                    <Input
                        type='time'
                        onChange={handleChange}
                        value={event.start.time}
                        name='end'
                        disabled={event.allDay}
                    />
                    <Label>All Day? </Label>
                    <Checkbox
                        type='checkbox'
                        onChange={handleCheckbox}
                        value={event.allDay}
                    />
                    <Button>Set Event</Button>
                </Form>
            </Modal>
        </Container>
    )
}

const Container = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .6);
    z-index: 2;
`

const Modal = styled.div`
    height: 500px;
    width: 500px;
    margin: auto;
    background-color: white;
    margin-top: 40px;
    border-radius: 4px;
`

const TitleContainer = styled.div`
    background-color: rgb(48, 61, 78);
    width: 100%;
    height: 40px;
    border-radius: 4px 4px 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Title = styled.p`
    color: white;
    font-size: 20px;
`

const Form = styled.form`
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

const Label = styled.label``

const Input = styled.input`
    width: ${props => props.name === 'name' ? '200px' : '120px'};
`

const Checkbox = styled.input``

const Button = styled.button`
    width: 100px;
`

export default EventModal