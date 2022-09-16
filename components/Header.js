import { Typography } from "@mui/material";
import { Box } from "@mui/system";

function Header(props) {
    return (
        <Box sx={{
            backgroundColor: '#00acc1',
            paddingY: '20px',
            width: '300',
            textAlign: 'center',
        }}>
               <Typography color="white" fontSize={32}>{props.title}</Typography>
        </Box>
    );
}

export {Header};