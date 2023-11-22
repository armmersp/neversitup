import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Outlet, useNavigate } from "react-router-dom";

const paths = [
  {
    url: "/permutation",
    label: "Permutation",
  },
  {
    url: "/find-odd",
    label: "Find Odd Integer",
  },
  {
    url: "/count-smiley",
    label: "Count Smiley",
  },
];

const Layout = () => {
  const navigate = useNavigate();

  const handleClick = (url) => {
    navigate(url);
  };

  return (
    <>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            {paths.map((path) => (
              <Button
                sx={{ color: "#fff" }}
                onClick={() => handleClick(path.url)}
                key={path.label}
              >
                {path.label}
              </Button>
            ))}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box display="flex" justifyContent="center" marginTop={8} padding={4}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
