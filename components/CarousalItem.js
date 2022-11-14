import React from 'react'
import {Paper, Button} from '@mui/material'

const CarousalItem = ({data}) => {
    return (
        <Paper>
            <h2>{data.name}</h2>
            <p>{data.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}

export default CarousalItem