import { Box } from "@mui/system";

function Header(props) {
    return (
        <Box sx={{
            backgroundColor: 'yellow',
            paddingY: '20px',
            width: '300',
            textAlign: 'center'
        }}>
                {props.title}
        </Box>
    );
}

export {Header};