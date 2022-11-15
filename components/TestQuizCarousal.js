import React from 'react'
import Carousel from 'react-material-ui-carousel'
import CarousalItem from './CarousalItem'
import {
    NavigateNext,
    NavigateBefore,
    Home,
    LibraryAdd,
    Search,
    TrendingUp
} from '@mui/icons-material'

import {
    Button
} from '@mui/material'

const TestQuizCarousal = () => {
    var data = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        },
        {
            name: "Random Name #3",
            description: "Hello World!"
        },
        {
            name: "Random Name #4",
            description: "Hello World!"
        }
    ]
    return (<>

    <h2>General Carousal</h2>
    
        <Carousel
        next = {(next,active)=>console.log(`we left ${active}, and are now at ${next}`)}
        prev={ (prev, active) => console.log(`we left ${active}, and are now at ${prev}`)}
        
        NextIcon="Next"
        PrevIcon="Prev"

        fullHeightHover={false}
        
        navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
            style: {
                backgroundColor: 'cornflowerblue',
                borderRadius: 0,
                opacity:0.8,
            }
        }} 

        navButtonsWrapperProps={{   // Move the buttons to the bottom. Unsetting top here to override default style.
            style: {
                bottom: '0',
                top: 'unset'
            }
        }} 
        >
            {
                data.map((item, i)=>(
                    <CarousalItem key={i} data={item}/>
                ))
            }
        </Carousel>

        <br />
    <h2>Custom Nav Buttons</h2>
        {/* For complete control of Nav BUttons  */}
        <Carousel
        next = {(next,active)=>console.log(`we left ${active}, and are now at ${next}`)}
        prev={ (prev, active) => console.log(`we left ${active}, and are now at ${prev}`)}
        
        NextIcon="Next"
        PrevIcon="Prev"

        navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
            style: {
                
            }
        }} 

        NavButton={({onClick,className,style,next,prev})=>{
            // Logic

            return (
                <Button variant='contained' onClick={onClick}>
                    {next && "Next"}
                    {prev && "Previous"}
                </Button>
            )
        }}

    
        >
            {
                data.map((item, i)=>(
                    <CarousalItem key={i} data={item}/>
                ))
            }
        </Carousel>

    <h2>Custom Indicators</h2>
    <Carousel

        IndicatorIcon={[<Home/>,<Search />, <TrendingUp />,<LibraryAdd />]}
            
        indicatorIconButtonProps={{
            style: {
                padding: '10px',    // 1
                color: 'blue'       // 3
            }
        }}

        activeIndicatorIconButtonProps={{
            style: {
                backgroundColor: 'red' // 2
            }
        }}

        indicatorContainerProps={{
            style: {
                marginTop: '50px', // 5
                textAlign: 'center' // 4
            }
    
        }}

        >
            {
                data.map((item, i)=>(
                    <CarousalItem key={i} data={item}/>
                ))
            }
        </Carousel>

        


        
    </>
    )
}

export default TestQuizCarousal