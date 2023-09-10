import { useState } from "react";
import useBooksContext from "../../hooks/use-books-context";

import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";

// React Router
import { NavLink } from "react-router-dom";

// Icons
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";

function ShowUser({ book }) {
  const [title, setTitle] = useState(book.title);
  const [number, setNumber] = useState(book.number);

  const [isError, setIsError] = useState(false);
  const { editBookById, deleteBookById } = useBooksContext();

  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    deleteBookById(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowEdit(false);
  };

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleNumber = (e) => {
    let inputValue = e.target.value;
    if (inputValue.length > 10) {
      inputValue = inputValue.slice(0, 10); // Truncate the input value to 10 digits
    }
    setNumber(inputValue);
    setIsError(inputValue.length !== 10);
  };

  const editSubmit = (event) => {
    event.preventDefault();
    if (number.length !== 10) {
      setIsError(true);
      return; // Return early without creating the book
    }

    handleSubmit(event);
    editBookById(book.id, title, number);
  };

  let content = (
    <>
      <TableCell>
        {showEdit ? (
          <TextField
            label="Name"
            required
            size="small"
            value={title}
            onChange={handleChange}
          />
        ) : (
          book.title
        )}
      </TableCell>
      <TableCell>
        {showEdit ? (
          <TextField
            size="small"
            helperText={isError ? "Number should be 10 digits" : ""}
            label="Number"
            required
            variant="outlined"
            component="div"
            error={isError}
            type="number"
            value={number}
            onChange={handleNumber}
          />
        ) : (
          book.number
        )}
      </TableCell>
      <TableCell>
        {showEdit ? (
          <Button
            onClick={editSubmit}
            type="submit"
            variant="contained"
            color="success"
            style={{ backgroundColor: "#25353a" }}
          >
            <SaveIcon /> Save
          </Button>
        ) : (
          <Avatar style={{ backgroundColor: "#e1bee7", color: "#9c27b0" }}>
            <EditIcon onClick={handleEditClick} />
          </Avatar>
        )}
      </TableCell>
    </>
  );

  return (
    <>
      <TableRow hover role="checkbox" tabIndex={-1} key={book.id}>
        <TableCell key={book.id} style={{}}>
          {book.id}
        </TableCell>
        {content}

        <TableCell>
          <Avatar
            onClick={handleDeleteClick}
            style={{ backgroundColor: "#ffcdd2", color: "#f44336" }}
          >
            <DeleteIcon />
          </Avatar>
        </TableCell>
        <TableCell>
          <NavLink
            to={`/user/${book.id}`}
            style={({ isActive }) => ({
              backgroundColor: isActive ? "red" : "black",
              textDecoration: "none",
            })}
          >
            <Button variant="contained" style={{ backgroundColor: "#48bb78" }}>
              Details
            </Button>
          </NavLink>
        </TableCell>
      </TableRow>
    </>
  );
}

export default ShowUser;
