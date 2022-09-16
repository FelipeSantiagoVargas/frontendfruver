import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { Base } from "../components/Base";
import axios from "axios";
import {
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Table,
  TableCell,
  TableBody,
  IconButton,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  Fab,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

function Products() {
  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState(products);
  const [edit, setEdit] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({ attributes: "" });

  const handleClickOpenEdit = (product) => {
    console.log(product);
    setSelectedProduct(product);
    setEdit(true);
  };

  const handleSearch = (e) => {
    console.log(e.target.value);
    const result = products.filter((product) =>
      product.attributes.name
        .toLowerCase()
        .includes(e.target.value.toLowerCase())
    );
    setProductsFiltered(result);
  };

  const handleClickCloseEdit = () => {
    setEdit(false);
  };

  const updateProduct = async () => {
    try {
      const { data } = await axios.put(
        `http://localhost:1337/api/products/${selectedProduct.id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            data: { name: "Mandarina", price: 100 },
          },
        }
      );
      console.log(data);
      selectedProduct.attributes.price = "100";
    } catch (error) {
      console.log(error);
    }
  };

  async function fetchData() {
    const { data } = await axios.get(
      "http://localhost:1337/api/products?populate=*",
      { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
    );
    setProducts(data.data);
    setProductsFiltered(data.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Base title="Productos">
      <Box sx={{position:"relative"}}>
        <Container>
          <FormControl sx={{ mt: 4, mb: 2, width: "100%" }} variant="outlined">
            <InputLabel>Buscar...</InputLabel>
            <OutlinedInput
              onChange={handleSearch}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton color="primary">
                    <SearchIcon></SearchIcon>
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Fab sx={{position:"fixed" , right:120}} color="secondary" aria-label="add">
          <AddIcon htmlColor="white" />
        </Fab>
          <TableContainer sx={{ maxHeight: "70vh" }} component={Paper}>
            <Table sx={{ minWidth: 450 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Id</TableCell>
                  <TableCell align="rigth">Nombre</TableCell>
                  <TableCell align="right">Precio</TableCell>
                  <TableCell align="right">Stock</TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {productsFiltered.map((product) => (
                  <TableRow
                    key={product.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center" component="th" scope="row">
                      {product.id}
                    </TableCell>
                    <TableCell align="rigth" size="medium">
                      {product.attributes.name}
                    </TableCell>
                    <TableCell align="right">
                      {product.attributes.price}
                    </TableCell>
                    <TableCell align="right">
                      {(product.attributes.stock
                        ? product.attributes.stock
                        : 0) + product.attributes.unitMeasure}
                    </TableCell>
                    <TableCell padding="none" align="right" size="small">
                      <IconButton
                        color="primary"
                        onClick={() => handleClickOpenEdit(product)}
                      >
                        <EditIcon></EditIcon>
                      </IconButton>
                    </TableCell>
                    <TableCell padding="none" align="left" size="small">
                      <IconButton color="secondary">
                        <DeleteIcon></DeleteIcon>
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>

      <Dialog open={edit} onClose={handleClickCloseEdit}>
        <DialogTitle sx={{ backgroundColor: "#00acc1", color: "white" }}>
          Actualizar Producto
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nombre"
            type="text"
            fullWidth
            variant="standard"
            value={selectedProduct.attributes.name}
          />
          <TextField
            autoFocus
            margin="dense"
            id="price"
            label="Precio"
            type="text"
            fullWidth
            variant="standard"
            value={selectedProduct.attributes.price}
          />
        </DialogContent>
        <DialogActions>
          <Button color="secondary" onClick={handleClickCloseEdit}>
            Cancelar
          </Button>
          <Button onClick={updateProduct}>Actualizar</Button>
        </DialogActions>
      </Dialog>
    </Base>
  );
}

export default Products;
