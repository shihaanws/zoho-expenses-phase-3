import classes from "./Admintrip.module.css";
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import NewTrips from "./Trips";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MaterialTable from "material-table";
// import PatchedPagination from "PatchedPagination";

import {
  faEllipsisH,
  faQuestion,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

import { getOrg, updateUser } from "../auth/User";

import { signin, authenticate, isAutheticated } from "../auth/Auth";
import router from "next/router";
import Approver from "./Approver";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

export const IdPass = (data) => {
  let ID = data._id;

  // console.log(ID)
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function User() {
  const [dialogData, setDialogData] = useState();
  const [open, setOpen] = useState(false);
  const [role, setRole] = useState();
  const [datas, setdatas] = useState();
  const { user } = isAutheticated();
  useEffect(() => {
    getOrg(user.org_name)
      .then((data) => {
        setdatas(data);
        console.log(data)
      })
      .catch((err) => console.log("Get Admin Trpis request failed" + err));
  }, []);

  const handleClickOpen = (userData) => {
    setOpen(true);
    setDialogData(userData);
    setRole(userData.role);
  };

  const handleRole = (e, id) => {
    if (id !== JSON.parse(localStorage.getItem("jwt")).user._id) {
      let updatedData = {
        role: e,
      };
      console.log(updatedData);
      updateUser(updatedData, id).then(() => window.location.reload());
    } else {
      alert("oops! You can't your role");
    }
  };
  const handleClose = () => {
    setOpen(false);
  };

  const Columns = [
    { title: "User Id", field: "_id" },
    { title: "Name", field: "name" },
    { title: "Role", field: "role" },
    { title: "Email", field: "email" },
  ];

  return (
    <div className={classes.fixed}>
      <div className={classes.header}>
        <p>Pending Trips</p>&nbsp;&nbsp;
        <p style={{ marginRight: "700px" }}>All Trips</p>
        <div className={classes.headerright}>
          <button
            className={classes.addnewtrip}
            style={{ padding: "10px 15px" }}
          >
            <Link href="#">
              <a>+ New Trip</a>
            </Link>
          </button>
          <button className={classes.menu} style={{ padding: "10px 10px" }}>
            <FontAwesomeIcon icon={faEllipsisH} />
          </button>
          <button className={classes.help} style={{ padding: "10px 10px" }}>
            <FontAwesomeIcon icon={faQuestion} />
          </button>
        </div>
      </div>
      <div>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>Employee Details</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {dialogData && (
                <div>
                  <h4>
                    {"Employee Name : "}
                    {dialogData.name}
                  </h4>
                  <br />
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Role</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={role}
                      label="role"
                      onChange={(e) =>
                        handleRole(e.target.value, dialogData._id)
                      }
                      // defaultValue={dialogData.role === 1 ? 1 : 0}
                    >
                      <MenuItem value={0}>Employee</MenuItem>
                      <br />
                      <MenuItem value={1}>Approver</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              )}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
            <Button onClick={handleClose}>Done</Button>
          </DialogActions>
        </Dialog>
      </div>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      ></link>
      <MaterialTable
        title={` ${user.org_name} users`}
        columns={Columns.map((e) => e)}
        data={
          datas &&
          datas.map((e) => {
            return {
              ...e,
            };
          })
        }
        // components={{
        //   // Pagination: PatchedPagination,
        // }}
        options={{
          actionsColumnIndex: -1,
          exportAllData: true,
          exportButton: true,
          columnResizable: true,
          filtering: false,
          sorting: true,
          paging: true,
          pageSize: 5,
          emptyRowsWhenPaging: false,
          pageSizeOptions: [5, 10, 20, 30],

          headerStyle: {
            backgroundColor: "#22b378",
            color: "black",
            fontSize: "14px",
            fontWeight: "bold",
            padding: "15px 5px",
            fontFamily: "Poppins, sans-serif",
          },
          cellStyle: {
            textAlign: "left",
            fontSize: "12px",
            padding: "15px 5px",
            fontFamily: "Poppins, sans-serif",
          },
        }}
        actions={[
          (rowData) => ({
            icon: () => (
              <button
                style={{
                  fontSize: 9,
                  fontWeight: 600,
                  width: 60,
                  borderRadius: 20,
                  padding: 3,
                }}
              >
                Open
              </button>
            ),
            tooltip: "Approve",
            onClick: (e, data) => {
              // console.log(data._id)
              // localStorage.setItem("id", JSON.stringify(data._id));
              handleClickOpen(data);

              // IdPass(data)

              // router.push("/approver")
            },
          }),
        ]}
      />

      {/* 
        {datas.map((e,i)=> <div> <h6>{i+1}</h6><h6>{e.email}</h6> <h6>{e.org_name}</h6> </div>)}
        {datas.map((e,i)=> <div> <h6>{i+1}</h6><h6>{e.email}</h6> <h6>{e.org_name}</h6> </div>)} */}
    </div>
  );
}
