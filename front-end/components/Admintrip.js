// import PatchedPagination from "PatchedPagination";
import {
  faEllipsisH,
  faQuestion
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";
import MaterialTable from "material-table";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { isAutheticated } from "../auth/Auth";
import { getOrg } from "../auth/Trips";
import classes from "./Admintrip.module.css";
import Approver from "./Approver";



export const IdPass = (data) => {
  let ID = data._id;

  // console.log(ID)
};

export default function AdminTrip() {
  const [maindata, setMaindata] = useState("");
  const [open, setOpen] = useState(false);

  const [datas, setdatas] = useState([]);
  const { user } = isAutheticated();
  useEffect(() => {
    getOrg(user.org_name)
      .then((data) => {
        console.log(data);
        setdatas(data);
      })
      .catch((err) => console.log("Get Admin Trpis request failed" + err));
  }, []);

  const handleClickOpen = (e) => {
    setOpen(true);
    setMaindata(e);
    console.log(e);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const Columns = [
    { title: "Trip Id", field: "_id" },

    { title: "Departure Date", field: "depart_date" },
    { title: "Arrive At", field: "arrive_at" },

    // { title: "Approver", field: "approver" },
    { title: "Email", field: "email" },
    { title: "Status", field: "status" },
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
            <Link href="/trips">
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

      <Dialog
        open={open}
        className="mainbox"
        onClose={handleClose}
        maxWidth="800px"
      >
        <DialogTitle>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <lable>Trips Details</lable>
            <Button className="head" onClick={handleClose}>
              X
            </Button>
          </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Approver rowData={maindata} />
          </DialogContentText>
        </DialogContent>
        {/* <DialogActions></DialogActions> */}
      </Dialog>

      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      ></link>
      <MaterialTable
        title={` ${user.org_name} Trips`}
        columns={Columns.map((e) => e)}
        data={
          datas &&
          datas.map((e) => {
            return {
              ...e,
              // DateTime: e.DateTime
              //   ? moment(e.DateTime, "YYYY-MM-DD").format("DD MMM YYYY")
              //   : null,
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
              <Button
                style={{
                  fontSize: 9,
                  fontWeight: 600,
                  width: 60,
                  borderRadius: 14,
                  backgroundColor: "rgb(34, 179, 120)"
                }}
                variant="contained"
              >
                View
              </Button>
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
