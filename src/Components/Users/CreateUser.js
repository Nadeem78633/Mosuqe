import { useState } from "react";
import useBooksContext from "../../hooks/use-books-context";

// Grid
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";

// Card
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

// React Toastify is used to show the alert
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CreateUser() {
  const [title, setTitle] = useState("");
  const [number, setNumber] = useState("");
  const [isError, setIsError] = useState(false);
  const [father, setFather] = useState("");
  const { createBook } = useBooksContext();

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleFather = (event) => {
    setFather(event.target.value);
  };
  const handleNumber = (e) => {
    let inputValue = e.target.value;
    if (inputValue.length > 10) {
      inputValue = inputValue.slice(0, 10); // Truncate the input value to 10 digits
    }
    setNumber(inputValue);
    setIsError(inputValue.length !== 10);
  };
  // Function for react toastify
  const displayLoginNotification = () => {
    toast.success("User Added Successfully !");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (number.length !== 10) {
      setIsError(true);
      return; // Return early without creating the book
    }
    createBook(title, number, father);
    setTitle("");
    setNumber("");
    setFather("");
    // Calling Toastify function inside the submit
    displayLoginNotification();
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={12}
            style={{
              flex: 1,
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
              marginTop: "50px",
            }}
          >
            <Card>
              <CardContent>
                <Typography
                  variant="h4"
                  color="text.secondary"
                  gutterBottom
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Add a User
                </Typography>
                <form onSubmit={handleSubmit}>
                  <TextField
                    variant="outlined"
                    required
                    label="Name"
                    type="string"
                    value={title}
                    onChange={handleChange}
                    component="div"
                    autoFocus={true}
                    color="secondary"
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      display: "flex",
                      alignItems: "center",
                      marginTop: "20px",
                    }}
                  />
                  <br />
                  <TextField
                    variant="outlined"
                    required
                    label="Father"
                    type="string"
                    value={father}
                    onChange={handleFather}
                    component="div"
                  
                    color="secondary"
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      display: "flex",
                      alignItems: "center",
                      marginTop: "20px",
                    }}
                  />
                  <br />
                  <TextField
                    helperText={isError ? "Number should be 10 digits" : ""}
                    label="Number"
                    required
                    value={number}
                    onChange={handleNumber}
                    variant="outlined"
                    component="div"
                    error={isError}
                    type="number"
                    color="secondary"
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      display: "flex",
                      alignItems: "center",
                      marginTop: "20px",
                    }}
                  />
                  <br />
                  <Button
                    type="submit"
                    variant="contained"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "0 auto",
                      backgroundColor: "#5e3afc",
                    }}
                  >
                    Create !
                  </Button>
                </form>
              </CardContent>
            </Card>
            {/* Toastify */}
            <ToastContainer
              position="top-right"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default CreateUser;
