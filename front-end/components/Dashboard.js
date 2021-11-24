import { Grid, Paper,AppBar,Container,Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Graph from "../components/Graph";


export default function Dashboard() {
  return (
    <div style={{ display: "flex",marginLeft:"200px" }}>
        
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        
        <br />
      <div style={{display:"flex",justifyContent:"space-between"}}>
      <h3>Dashboard</h3>
      <a style={{color:"blue",cursor:"pointer"}}>Getting Started</a>
      </div>
      <br/>
      <br/>
        <Grid container spacing={3}>
          <Grid item xs={15} lg={10}>
            <Paper
              sx={{
                p: 1,
                display: "flex",
                flexDirection: "column",
                height: 270,
              }}
            >
              <Graph />
            </Paper>
          </Grid>
          <br/>
          <Grid item xs={12} lg={6}>
            <Paper
              sx={{
                p: 1,
                display: "flex",
                flexDirection: "column",
                height: 300,
              }}
            >
              <h3>Overall Summary</h3>
              <p style={{ textAlign: "left", marginTop: "2rem" }}>
                <ul>
                    <li>
                    Total Expenses
                    <p>Rs:0.00</p>
                    </li><br/>
                    <li>
                    Advances
                    <p>Rs:0.00</p>
                    </li><br/>
                    <li>
                    Reimbursements
                    <p>Rs:0.00</p>
                    </li><br/>
                    <li>
                    Total Trips 
                    <p>Rs:0</p>
                    </li><br/>
                </ul>
              </p>
            </Paper>
          </Grid>{" "}
          <Grid item xs={12} lg={6}>
            <Paper
              sx={{
                p: 1,
                display: "flex",
                flexDirection: "column",
                height: 300,
              }}
            >
             
             <h3>Pending Trips</h3>
             <div style={{display:"flex",justifyContent:"space-between"}}>
             <p style={{color:"#A0A0A0"}}>Approver</p>
              <p style={{color:"#A0A0A0"}}>count</p>
             </div>
             <hr/>
              <p
                style={{
                  textAlign: "center",
                  marginTop: "5rem",
                  color: "#A0A0A0",
                }}
              >
                No pending trips
              </p>
            </Paper>
          </Grid>{" "}
          <Grid item xs={12} lg={6}>
            <Paper
              sx={{
                p: 1,
                display: "flex",
                flexDirection: "column",
                height: 300,
              }}
            >

              <h3>Pending Reports</h3>
              <div style={{display:"flex"}}>
                  <p>For Approval<br/>(0)reports</p>
                  <p style={{marginLeft:"15px"}}>For Reimbursement<br/>(Rs.0.00)</p>
              </div>
              <hr/>
              <div style={{display:"flex",justifyContent:"space-between"}}>
             <p style={{color:"#A0A0A0"}}>Approver</p>
              <p style={{color:"#A0A0A0"}}>count</p>
             </div>
             
              <p
                style={{
                  textAlign: "center",
                  marginTop: "5rem",
                  color: "#A0A0A0",
                }}
              >
                No pending reports
              </p>
            </Paper>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Paper
              sx={{
                p: 1,
                display: "flex",
                flexDirection: "column",
                height: 300,
              }}
            >
              <h3>Unreported Advances</h3>
              <div style={{display:"flex",justifyContent:"space-between"}}>
             <p style={{color:"#A0A0A0"}}>User name</p>
              <p style={{color:"#A0A0A0"}}>Amount</p>
             </div>
             <hr/>
              <p
                style={{
                  textAlign: "center",
                  marginTop: "5rem",
                  color: "#A0A0A0",
                }}
              >
                No pending advances
              </p>
            </Paper>
          </Grid>
{/* //////////////////////////////////////////////////// */}
          <Grid item xs={12} lg={6}>
            <Paper
              sx={{
                p: 1,
                display: "flex",
                flexDirection: "column",
                height: 300,
              }}
            >
              <h3>Coporate Card Summary</h3>
             
            
            </Paper>
          </Grid>

          <Grid item xs={12} lg={6}>
            <Paper
              sx={{
                p: 1,
                display: "flex",
                flexDirection: "column",
                height: 300,
              }}
            >
              <h3>Expenses by category</h3>
             
              <p
                style={{
                  textAlign: "center",
                  marginTop: "5rem",
                  color: "#A0A0A0",
                }}
              >
                No matching expense found
              </p>
            </Paper>
          </Grid>


          <Grid item xs={12} lg={6}>
            <Paper
              sx={{
                p: 1,
                display: "flex",
                flexDirection: "column",
                height: 300,
              }}
            >
              <h3>Expences by Project</h3>
              
              <p
                style={{
                  textAlign: "center",
                  marginTop: "5rem",
                  color: "#A0A0A0",
                }}
              >
                No matching expense found
              </p>
            </Paper>
          </Grid>


          <Grid item xs={12} lg={6}>
            <Paper
              sx={{
                p: 1,
                display: "flex",
                flexDirection: "column",
                height: 300,
              }}
            >
              <h3>Top Policy Violations</h3>
              
              <p
                style={{
                  textAlign: "center",
                  marginTop: "5rem",
                  color: "#A0A0A0",
                }}
              >
                No matching expense found
              </p>
            </Paper>
          </Grid>


          <Grid item xs={12} lg={6}>
            <Paper
              sx={{
                p: 1,
                display: "flex",
                flexDirection: "column",
                height: 300,
              }}
            >
              <h3>Top Spending Users</h3>
             
              <p
                style={{
                  textAlign: "center",
                  marginTop: "5rem",
                  color: "#A0A0A0",
                }}
              >
                 No matching users found
              </p>
            </Paper>
          </Grid>



          <Grid item xs={12} lg={6}>
            <Paper
              sx={{
                p: 1,
                display: "flex",
                flexDirection: "column",
                height: 300,
              }}
            >
              <h3>Top Violators</h3>
              
              <p
                style={{
                  textAlign: "center",
                  marginTop: "5rem",
                  color: "#A0A0A0",
                }}
              >
                No matching users found
              </p>
            </Paper>
          </Grid>
        </Grid>
        <footer style={{display:"flex",width:"100%",height:"200px",padding:"10px",marginTop:"30px"}}>
            <div style={{marginLeft:"90px"}}>
                <ul>
                <h5>OTHER ZOHO APPS</h5><br/>
                <li style={{paddingBottom:"10px"}}><p>Accounting Software</p></li>
                <li style={{paddingBottom:"10px"}}><p>Subscription Billing</p></li>
                <li style={{paddingBottom:"10px"}}><p>Invoice Software</p></li>
                <li style={{paddingBottom:"10px"}}><p>Inventory Management</p></li>
                <li style={{paddingBottom:"10px"}}><p>HR Software</p></li>
                <li style={{paddingBottom:"10px"}}><p>CRM and Other Apps</p></li>
                </ul>
            </div>
            <div style={{marginLeft:"120px"}}>
            <ul >
                <h5>HELP & SUPPORT</h5><br/>
                <li style={{paddingBottom:"10px"}}><p>Contact Support</p></li>
                <li style={{paddingBottom:"10px"}}><p>Request a Feature</p></li>
                <li style={{paddingBottom:"10px"}}><p>Help Documentation</p></li>
                <li style={{paddingBottom:"10px"}}><p>Register for Webinar</p></li>
                <li style={{paddingBottom:"10px"}}><p>FAQ</p></li>
               
                </ul>
            </div>
            <div style={{marginLeft:"150px"}}>
            <ul>
                <h5>QUICK LINKS</h5><br/>
                <li style={{paddingBottom:"10px"}}><p>Features</p></li>
                <li style={{paddingBottom:"10px"}}><p>Integrations</p></li>
                <li style={{paddingBottom:"10px"}}><p>Mobile Apps</p></li>
                <li style={{paddingBottom:"10px"}}><p>Resources</p></li>
                <li style={{paddingBottom:"10px"}}><p>Essential Business Guides</p></li>
                <li style={{paddingBottom:"10px"}}> <p>What's New?</p></li>
                </ul>
            </div>

        </footer>
      </Box>

     
    </div>
  );
}