import { Box } from "@mui/system";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/Inbox";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import ReceiptIcon from "@mui/icons-material/Receipt";
import AppleIcon from "@mui/icons-material/Apple";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import AssessmentIcon from "@mui/icons-material/Assessment";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Divider, Grid, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

function Navigation(props) {
  const [modules, setModules] = useState([]);

  async function fetchData() {
    const { data } = await axios.get(
      "http://localhost:1337/api/users/me?populate=*",
      { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
    );
    setModules(data.modules);
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(modules);

  return (
    <Box
      sx={{
        backgroundColor: "white",
        height: "100vh",
        borderRight: "1px solid #E2E2E2",
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ paddingY: "5.7px" }}
      >
        <Grid item xs={4} sx={{ textAlign: "center" }}>
          <Link href="/home">
            <IconButton>
              <AccountCircleIcon color="primary" style={{ fontSize: 60 }} />
            </IconButton>
          </Link>
        </Grid>
        <Grid item xs={8} style={{ fontSize: 22 }}>
          Username
        </Grid>
      </Grid>
      <Divider />
      <List>
        {modules.map((module) => (
          <Link href={module.route}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {/* Icono personalizado */}
                  <NoteAddIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary={module.name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
        {/* <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <NoteAddIcon />
                        </ListItemIcon>
                        <ListItemText primary="Inbox" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Drafts" />
                    </ListItemButton>
                </ListItem> */}
      </List>
    </Box>
  );
}

export { Navigation };
