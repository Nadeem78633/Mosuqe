import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import { deepOrange, green } from "@mui/material/colors";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Avatar from "@mui/material/Avatar";
import { NavLink } from "react-router-dom";
import useBooksContext from "../../hooks/use-books-context";

function ShowUserPublic() {
  const { books } = useBooksContext();

  return (
    <Card style={{ marginTop: "100px" }}>
      <CardContent>
        <Typography
          style={{
            color: "grey",
            fontFamily: "Poppins",
            fontSize: "14px",
            fontWeight: "400",
          }}
        >
          Users
        </Typography>

        <Grid container spacing={2}>
          {books.map((book) => (
            <Grid key={book.id} item xs={12} md={6}>
              <Box sx={{ width: "100%" }}>
                <nav aria-label="main mailbox folders">
                  <List>
                    <ListItem disablePadding>
                      <ListItemIcon>
                        <Avatar
                          variant="rounded"
                          style={{
                            color: "white",
                            fontFamily: "Poppins",
                            fontWeight: "600",
                          }}
                          sx={{
                            background: `linear-gradient(135deg, #DF98FA 0%, #9055FF 100%)`,
                          }}
                        >
                          {book.title.slice(0, 1).toUpperCase()}
                        </Avatar>
                      </ListItemIcon>
                      <ListItemText>
                        <Typography
                          style={{
                            fontSize: "18px",
                            fontFamily: "Poppins",
                            fontWeight: "600",
                          }}
                        >
                          {book.title}
                        </Typography>
                        <Typography
                          style={{
                            fontSize: "14px",
                            fontFamily: "Poppins",
                            fontWeight: "500",
                            color: "#8789A3",
                          }}
                        >
                          {book.fatherName}
                        </Typography>
                      </ListItemText>
                      <Typography
                        style={{
                          color: "#8789A3",
                          fontSize: "14px",
                          fontWeight: "500",
                          paddingRight: "40px",
                          fontFamily: "Poppins",
                        }}
                      >
                        {book.number}
                      </Typography>
                      <NavLink
                        to={`/user/${book.id}`}
                        style={({ isActive }) => ({
                          textDecoration: "none",
                        })}
                      >
                        <ArrowForwardIosIcon style={{ color: "#8789A3" }} />
                      </NavLink>
                    </ListItem>
                  </List>
                </nav>
                <Divider style={{ width: "100%" }} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}

export default ShowUserPublic;
