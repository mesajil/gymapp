import React from 'react'
import SearchBtn from '../../SearchBtn/'
import LoginBtn from '../../LoginBtn'
import CartBtn from '../../CartBtn'
import ButtonGroup from '@mui/material/ButtonGroup'

export default function Navbar2() {
    return (
        <div>
            <ButtonGroup>
                <SearchBtn />
                <LoginBtn />
                <CartBtn></CartBtn>
            </ButtonGroup>
        </div>
    )
}
