import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { Base } from "../components/Base";
import axios from "axios";
import {Container} from "@mui/system";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

function Products() {

    const [products, setProducts] = useState([])

    async function fetchData() {
        const { data } = await axios.get('http://localhost:1337/api/products?populate=*', { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
        setProducts(data.data)
    }

    function productList() {
        const pro = products.map((product) => {
            product.attributes.id = product.id;
            return product.attributes
        })
        console.log(pro)
        return pro
    }

    useEffect(() => {
        fetchData()
    }, [])


    const columns = [
        { field: 'id', headerName: 'id', width: 130 },
        { field: 'name', headerName: 'name', width: 130 },
        { field: 'price', headerName: 'price', width: 130 },
        {
            field: 'stock',
            headerName: 'stock',
            type: 'number',
            width: 90,
        },
    ];



    return (
        <Base title="Productos">
            <Box sx={{
                
            }}>
                <Container style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={productList()}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
                </Container>
            </Box>
        </Base>
    );
}



export default Products