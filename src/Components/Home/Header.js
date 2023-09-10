import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

// Hook for the scroll up and down to hide appbar
import { useScrollTrigger } from "@mui/material";

import menu from "../icons/menu.svg";
import search from "../icons/search.svg";
import logo from "../icons/logo.svg";

import { NavLink, Outlet } from "react-router-dom";

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  return (
    <>
      <AppBar
        position="fixed"
        style={{ backgroundColor: "white", color: "black" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                display: { xs: "none", md: "flex" },

                fontFamily: "Poppins",
                textDecoration: "none",
              }}
            >
              <img
                src={logo}
                style={{ width: "30px", height: "30px" }}
                alt="Logo"
              />
              Jama Masjid
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              {/*
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
              */}
              <img
                src={menu}
                alt="menu"
                style={{ width: "24px", height: "24px" }}
              />
              {/*
              </IconButton>
              */}
            </Box>

            <Typography
              variant="h6"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 6,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "Poppins",
                color: "#672CBC",
                textDecoration: "none",
              }}
            >
              <img
                src={logo}
                style={{ width: "30px", height: "30px" }}
                alt="Logo"
              />
              Jama Masjid
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <img
                src={search}
                alt="search"
                style={{ width: "24px", height: "24px" }}
              />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <>
        <Outlet />
      </>
    </>
  );
};
export default Header;
