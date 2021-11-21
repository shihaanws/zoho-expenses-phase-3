import React, { useState } from 'react'
import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/Layout";
import { flexbox, height } from '@mui/system';
import styles from '../styles/emailtemplate.module.css'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Toolbar,
    Link,
    Button
  } from "@mui/material";


export default function emailtemplate() {
  const[addmail,setaddmail]=useState(false);
  const[showtitle,setshowtitle]=useState(true)
function handlepopup(){
  setshowtitle(false);
  setaddmail(true); 
}
    return (
      <div className={styles.page}>
      
       
        <Head>
        <title>Email Templates | Settings</title>
      </Head>
      
   
        
     
         {showtitle ?  
         ( 
         <div style={{display:"flex",justifyContent:"space-between"}}> 
         <h2>Email Templates</h2>
          <button onClick={()=>handlepopup()} class="btn btn-primary">+New Email Templates</button> 
          </div>
         )
          : <div></div>}

        <hr/>
       {addmail ? (
        <div className={styles.popup} id="popup-1">
          <div className={styles.overlay}></div>
          <div className={styles.content}>
         <div className={styles.form}>
           <form style={{height:"auto",width:"100%",justifyContent:"center",alignItems:"center"}}>
              <div style={{display:"flex",justifyContent:"space-between"}}> 
    <h4>New Email Template</h4>
    <svg xmlns="http:www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
   <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
   <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
 </svg>
  </div>
   <div class="form-group d-flex">
     <label for="exampleFormControlSelect1">Email Type</label>
     <select class="form-control" id="exampleFormControlSelect1">
     <option></option>
       <option>Trip Notification</option>
       <option>Report Notification</option>
       <option>Advance Notification</option>
       <option>Report Refund Notification</option>
      
     </select>
   </div>
   <br/>
   <div class="form-group d-flex">
     <label for="formGroupExampleInput">Template Type</label>
     <input value="Default" type="text" class="form-control" id="formGroupExampleInput"></input>
   </div>
   <br/>
   <div class="form-group d-flex">
     <label for="formGroupExampleInput">Subject</label>
     <input type="text" class="form-control" id="formGroupExampleInput"></input>
   </div>
   <br/><br/>
   <div class="form-group">
     <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
   </div>
   <br/>
   <div class="d-flex">
     <button class="btn btn-primary">SAVE</button>
     <button class="btn btn-light">CANCEL</button>
   </div>
 </form>
  </div>
  </div>
  </div>
       ) : 
       <div></div>
       }

       <div class="card">
  
   <div class="card-body">
     <h5 class="card-title" style={{color:"orange"}}>
         <svg style={{color:"white",background:"orange"}} xmlns="http:www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-question-square" viewBox="0 0 16 16">
   <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
   <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
 </svg>
         PAGE TIPS</h5>
     <h2 class="card-text" style={{fontWeight:"100",fontSize:"30px"}}>Customize email alerts</h2>
    <p>Configure templates for emails automatically sent when inviting users to the 
        organization and when associated<br/> workflows are triggered.<a href="#">Learn More.</a></p>
 </div>
 </div>




         <Toolbar />
           <TableContainer>
        
            
             <Table>
               <TableHead>
                 <TableRow>
                  
                   <TableCell>NAME</TableCell>
                  
                   <TableCell>TYPE</TableCell>
                   <TableCell>SUBJECT AND CONTENT</TableCell>
                 </TableRow>
               </TableHead>
               <TableBody>
                   <TableRow>
                       <TableCell>Default</TableCell>
                       <TableCell>Trip Request Notification</TableCell>
                       <TableCell>Join %CompanyName%'s Zoho Expense account</TableCell>
                   </TableRow>
               </TableBody>
               </Table>
               </TableContainer> 
</div>
       
      
    )
}
