import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { Header } from "./Header";
import { Navigation } from "./Navigation";

function Base(props) {
    return (
        <Box sx={{
            height: '100vh'
        }}>
            <Grid container>
                <Grid item xs={3}>
                    <Navigation></Navigation>
                </Grid>
                <Grid item xs={9}>
                    <Grid container direction='column'>
                        <Grid item xs={4}>
                            <Header title={props.title}></Header>
                        </Grid>
                        <Grid item xs={4}>
                            {props.children}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export { Base };