import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


// Css

// Card
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

const UserDetails = () => {
  const [user, setUser] = useState({});
  const params = useParams();

  const [filterYear, setFilterYear] = useState(""); // State for selected year filter

  // Data Fetching
  const fetchData = async () => {
    const response = await axios.get(
      `http://localhost:3001/books/${params.id}`
    );
    setUser(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(user);

  // Converting months into string
  const getMonthName = (monthNumber) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return months[monthNumber - 1] || "";
  };
  // Extract unique years from user data
  const availableYears = Array.from(
    new Set(user?.years?.map((year) => year.year))
  );

  // Handle year filter change
  const handleFilterChange = (event) => {
    setFilterYear(event.target.value);
  };
  return (
    <div style={{ marginTop: "100px" }}>
      <Card>
        <CardContent>
          <Typography
            style={{
              fontSize: "18px",
              fontFamily: "Poppins",
              fontWeight: "600",
            }}
          >
            {user.title}
          </Typography>
          <Typography
            style={{
              fontSize: "14px",
              fontFamily: "Poppins",
              fontWeight: "500",
              color: "#8789A3",
            }}
          >
            {user.fatherName}
          </Typography>

          {/* Filter container */}
          <div
            style={{
              position: "relative",
            }}
          >
            <FormControl
              style={{
                position: "absolute",
                top: "-40px",
                right: "10px",
                zIndex: 1, // Ensure the filter is above content
              }}
            >
              <Select
                value={filterYear}
                onChange={handleFilterChange}
                displayEmpty
                variant="outlined"
                style={{
                  height: "40px",
                  color: "#9055FF",
                  fontSize: "16px",
                  fontFamily: "Poppins",
                  fontWeight: "600",
           
                }}
              >
                <MenuItem value="">All Years</MenuItem>
                {availableYears.map((year) => (
                  <MenuItem key={year} value={year}>
                    {year}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          {user?.years?.map(
            (yearData) =>
              // Apply year filter if selected, or display all years
              (!filterYear || filterYear === yearData.year) && (
                <div key={yearData.year} style={{ marginTop: "20px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center", // Center vertically
                      fontSize: "18px",
                      fontFamily: "Poppins",
                      fontWeight: "600",
                      color: `#9055FF`,
                      marginBottom: "10px",
                    }}
                  >
                    <span
                      style={{
                        marginRight: "8px",
                        color: "black",
                      }}
                    >
                      Year
                    </span>
                    <KeyboardArrowRightRoundedIcon
                      style={{
                        width: "20px",
                        height: "20px",
                        color: "#8789A3",
                      }}
                    />
                    {yearData.year}
                  </div>
                  <Grid container>
                    {yearData?.months?.map((month, index) => (
                      <Grid item xs={12} md={3} key={month.month}>
                        <div>
                          <Typography
                            style={{
                              fontSize: "15px",
                              fontFamily: "Poppins",
                              fontWeight: "600",
                              backgroundColor: "#eaf9f6",
                              color: "#19b89e",

                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between", // To space items horizontally
                              marginLeft: "4px",
                              marginTop: "5px",
                              marginBottom: "5px",
                              borderRadius: "5px",
                            }}
                          >
                            <div style={{ paddingLeft: "10px" }}>
                              {month.date}-{getMonthName(month.month)}
                            </div>
                            <div style={{ paddingRight: "10px" }}>
                              {month.amount} &#8377;
                            </div>
                          </Typography>
                        </div>
                      </Grid>
                    ))}
                  </Grid>
                </div>
              )
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default UserDetails;
