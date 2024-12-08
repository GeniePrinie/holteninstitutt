import { useTheme } from "@mui/material/styles";
import {
  Box,
  Container,
  Link,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const theme = useTheme();
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= theme.breakpoints.values.md) {
        setDrawerOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [theme.breakpoints.values.md]);

  const menuItems = [
    { text: "Hjem", path: "/" },
    { text: "Fysioterapeuter", path: "/fysioterapeuter" },
    { text: "Kontakt", path: "/kontakt" },
  ];

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} component="a" href={item.path}>
            <ListItemText
              primary={
                <Typography
                  sx={{
                    color: theme.palette.primary.main,
                    fontWeight: "normal",
                    "&:hover": {
                      color: theme.palette.secondary.main,
                      fontWeight: 700,
                    },
                  }}
                >
                  {item.text}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: { xs: "flex-start", md: "baseline" },
        marginY: "2rem",
      }}
    >
      <Box>
        <Link href="/" variant="body1" sx={{ textDecoration: "none" }}>
          <img
            src="/images/holtenhorizontal.png"
            alt="logo"
            style={{ width: "200px", height: "auto" }}
          />
        </Link>
      </Box>

      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          gap: "3rem",
        }}
      >
        {menuItems.map((item) => (
          <Box
            key={item.text}
            sx={{
              width:
                item.text === "Fysioterapeuter"
                  ? "7.6rem"
                  : item.text === "Kontakt"
                  ? "3.9rem"
                  : "2.6rem",
            }}
          >
            <Link
              href={item.path}
              variant="body1"
              sx={{
                textDecoration: "none",
                color: theme.palette.secondary.main,
                fontWeight: isActive(item.path) ? "bold" : "normal",
                "&:hover": {
                  fontWeight: "bold",
                },
              }}
            >
              {item.text}
            </Link>
          </Box>
        ))}
      </Box>

      <IconButton
        edge="end"
        color="inherit"
        aria-label="menu"
        sx={{
          display: { xs: "block", md: "none" },
          color: theme.palette.secondary.main,
          width: "3rem",
          height: "3rem",
          mr: { xs: "0.1rem", md: "none" },
          borderRadius: "50%",
          "&:hover": {
            backgroundColor: theme.palette.tertiary.main,
          },
        }}
        onClick={toggleDrawer(true)}
      >
        <MenuIcon sx={{ fontSize: "2rem" }} />
      </IconButton>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </Container>
  );
};

export default Navbar;
