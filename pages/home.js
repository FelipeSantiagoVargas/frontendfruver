import { Box } from "@mui/system";
import { Base } from "../components/Base";
import axios from "axios";

function Home(props) {
    return (
        <Base title="Home">
            <Box bgcolor='primary' sx={{
                backgroundColor: 'primary'
            }}>
                Home
            </Box>
        </Base>
    );
}

//   export async function getServerSideProps(context) {
//     const { data } = await axios.get('http://localhost:1337/api/users', {
//                 identifier: username,
//                 password: password,
//             });
//     return {
//       props: {}, // will be passed to the page component as props
//     }
//   }

export default Home;