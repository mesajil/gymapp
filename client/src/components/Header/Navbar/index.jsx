import React from 'react'
import ClassesBtn from '../../ClassesBtn'
import ContactBtn from '../../ContactBtn'
import StoreBtn from '../../StoreBtn'
import TrainersBtn from '../../TrainersBtn/'
import ButtonGroup from '@mui/material/ButtonGroup'

export default function NavBar() {
    return (
        <div>
            <ButtonGroup>
                <ClassesBtn></ClassesBtn>
                <ContactBtn></ContactBtn>
                <StoreBtn></StoreBtn>
                <TrainersBtn></TrainersBtn>
            </ButtonGroup>
        </div>
    )
}
