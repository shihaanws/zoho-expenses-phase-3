import React, { useState, useEffect } from "react";
import classes from "./InputBudget.module.css";
import Link from "next/link";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
export default function InputBudget() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <div
        className={classes.navbar}
        style={{ backgroundColor: "#f4f4fb!important" }}
      >
        <h5
          className={classes.topic}
          style={{ marginLeft: "20px", color: "#2e3151" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="icon-medium align-middle mr-2 "
            style={{ width: "15px", height: "15px" }}
          >
            <path d="M380.7 16H131.3C90.3 16 57 49.3 57 90.3v331.5c0 41 33.3 74.3 74.3 74.3h249.5c41 0 74.3-33.3 74.3-74.3V90.3c-.1-41-33.4-74.3-74.4-74.3zm-34.9 274.4c-8.3 0-15 6.7-15 15V331H271v-25.6c0-8.3-6.7-15-15-15s-15 6.7-15 15V331H87V181h64.2v25.6c0 8.3 6.7 15 15 15s15-6.7 15-15V181H241v25.6c0 8.3 6.7 15 15 15s15-6.7 15-15V181h154v150h-64.2v-25.6c0-8.2-6.7-15-15-15zM131.3 46h249.5c24.4 0 44.3 19.9 44.3 44.3V151H271v-25.6c0-8.3-6.7-15-15-15s-15 6.7-15 15V151h-59.8v-25.6c0-8.3-6.7-15-15-15s-15 6.7-15 15V151H87V90.3C87 65.9 106.9 46 131.3 46zm249.4 420H131.3c-24.4 0-44.3-19.9-44.3-44.3V361h154v25.6c0 8.3 6.7 15 15 15s15-6.7 15-15V361h59.8v25.6c0 8.3 6.7 15 15 15s15-6.7 15-15V361H425v60.7c0 24.4-19.9 44.3-44.3 44.3z"></path>
          </svg>
          &nbsp; New Budget
        </h5>
        <div>
          <button className={classes.exitbtn}>
            <Link href="#">
              <a>close</a>
            </Link>
          </button>
        </div>
      </div>
      <br />

      <div className={classes.tripname} style={{ marginLeft: "20px" }}>
        <label className={classes.tripnamereq}>Name </label>
        <br />
        <input
          //  placeholder="eg: Trip to New York"
          className={classes.tripnameinput}
          type="text"
          style={{ width: "350px" }}
          //  value={values.trip_name}
          required
        />
      </div>
      <br />
      <div className={classes.tripname} style={{ marginLeft: "20px" }}>
        <label className={classes.tripnamereq}>Fiscal Year </label>
        <br />
      </div>
      <FormControl
        sx={{
          m: 1,
          minWidth: 120,
          marginLeft: "20px",
          width: "350px",
          height: "100px",
        }}
      >
        <Select
          // value={age}
          value={30}
          onChange={handleChange}
          inputProps={{ "aria-label": "Without label" }}
        >
          {/* <MenuItem value="">
            <em>April  2021- Mar 2022</em>
          </MenuItem> */}
          {/* <NativeSelect
          defaultValue={30}
          
        > */}

          <MenuItem value={10}>April 2019- Mar 2020</MenuItem>
          <MenuItem value={20}>April 2020- Mar 2021</MenuItem>
          <MenuItem value={30}>April 2021- Mar 2022</MenuItem>
          <MenuItem value={40}>April 2022- Mar 2023</MenuItem>
          <MenuItem value={50}>April 2023- Mar 2024</MenuItem>
        </Select>
      </FormControl>

      <div
        className={classes.tripname}
        style={{ marginLeft: "20px", marginTop: "-30px" }}
      >
        <label className={classes.tripnamereq}>Budget Period</label>
        <br />
      </div>
      <FormControl
        sx={{
          m: 1,
          minWidth: 120,
          marginLeft: "20px",
          width: "350px",
          height: "100px",
        }}
      >
        <Select
          value={60}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          {/* <MenuItem value="">
            <em>Monthly</em>
          </MenuItem> */}
          {/* <NativeSelect
          defaultValue={30}
          
        > */}
          <MenuItem value={60}>Monthly</MenuItem>
          <MenuItem value={70}>Quarterly</MenuItem>
          <MenuItem value={80}>Half Yearly</MenuItem>
          <MenuItem value={90}>Yearly</MenuItem>

          {/* </NativeSelect> */}
        </Select>
      </FormControl>
      <br />
      <div
        style={{
          marginLeft: "20px",
          marginTop: "-30px",
          color: "#408dfb",
          cursor: "pointer",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="icon align-text-top"
          style={{ width: "15px", height: "15px" }}
        >
          <path
            fill="#408dfb"
            d="M503.5 274.1L233 3.5c-2.3-2.3-5.3-3.5-8.5-3.5L11.5.3c-6.6 0-12 5.4-12 12v212.1c0 3.2 1.3 6.2 3.5 8.5l270.4 270.7c4.7 4.7 12.3 4.7 17 0l213.1-212.5c4.7-4.7 4.7-12.3 0-17zM154.2 145.8c-18.4 18.7-48.2 18.7-66.5 0-18.4-18.7-18.4-48.9 0-67.6 18.4-18.7 48.2-18.7 66.5 0 18.4 18.7 18.4 49 0 67.6z"
          ></path>
        </svg>
        &nbsp; Create this budget for a specific tag or project
      </div>
    </>
  );
}
