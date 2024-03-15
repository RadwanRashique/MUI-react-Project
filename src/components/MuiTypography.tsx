import React from 'react'

import {Typography}  from '@mui/material'

export const  MUI=()=>{


    return(
       <div>

        <Typography variant='h1'  >Hello 1</Typography>
        <Typography variant='h2' gutterBottom>Hello 2</Typography>
        <Typography variant='h3'gutterBottom>Hello 3</Typography>
        <Typography variant='h4' gutterBottom>Hello 4</Typography>
        <Typography variant='h5' gutterBottom>Hello 5</Typography>
        <Typography  variant= 'h6' gutterBottom>Hello 6</Typography>
        <Typography variant='subtitle1' gutterBottom>subtitle 1</Typography>
        <Typography variant='subtitle2' gutterBottom>subtitle 2</Typography>
        <Typography variant='body1' gutterBottom>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMak</Typography>
        <Typography variant='body2' >body 2</Typography>
       </div>
    )
}
export default MUI