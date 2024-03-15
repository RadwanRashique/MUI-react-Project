import React from 'react';
import { Button, Stack ,IconButton,ButtonGroup} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ButtonCom = () => {
    return (

        <Stack   spacing={4}>

            <Stack   direction="row" justifyContent="space-around" spacing={6} sx={{pt:'20px'}}>

            <Button variant="contained" disableRipple color="success" startIcon={<DeleteIcon />} disableElevation>
                Save
            </Button>
            <Button variant="outlined" disableRipple endIcon={<SaveAsIcon />}>
                Contact
            </Button>
            <Button variant="text" disableRipple>
                Delete
            </Button>

            </Stack>
            
            <Stack direction="column" spacing={4}>
                <Button variant="outlined" startIcon={<ShoppingCartIcon />} disableRipple>
                    Buy
                </Button>
                <Button variant="outlined" startIcon={<ContentPasteIcon />} disableRipple>
                    content
                </Button>
                <Button variant="outlined" startIcon={<ShoppingCartIcon />} disableRipple>
                    Buy
                </Button>
                <Button variant="outlined" startIcon={<ContentPasteIcon />} disableRipple>
                    content
                </Button>
                
            </Stack>

            <Stack direction='row' justifyContent='flex-end' sx={{ paddingRight: '60px' }} >
            <IconButton disableRipple><ContentPasteIcon /></IconButton>
            </Stack>

            <Stack  direction='row' justifyContent='flex-start' sx={{paddingLeft:'30px'}} >

            <ButtonGroup variant='contained'  orientation='horizontal' color='primary' disableRipple>
<Button>
Left
</Button>
<Button>
center
</Button>
<Button>
Right
</Button>

</ButtonGroup>
            </Stack>

            
        </Stack>

     
       
    );
};

export default ButtonCom;
