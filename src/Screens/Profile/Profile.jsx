import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import TextField from '@mui/material/TextField';
import { useEffect } from 'react';
import Buttons  from '../../components/Button';
import { Link } from 'react-router-dom';
import axios from 'axios'
function Profile() {
  const [userData, setUserData] = useState({
    fName: '',
    lName: '',
    contactNumber: '',
    balance: '',
    uId: '',
    address: '',
    city: '',
    state: 'Maharashtra',
    postalCode: '',
  });
  const uId = localStorage.getItem("uId");  
  const fetchUserData = async () => {
    const uId = localStorage.getItem('uId');
    try {
      const response = await axios.get(`http://localhost:5000/api/user/userProfile?uId=${uId}`); // Replace with your backend API endpoint
      if (response) {

        setUserData(response.data.userProfile); // Set the user data in state
      } else {
        console.error('Failed to fetch user data');
      }
    } catch (error) {
      console.error('Error fetching user data', error);
    }
  };
  
  useEffect(() => {
    fetchUserData(uId);
  }, [uId]);

  return(
    <Paper>
    <Navbar />
    <Grid container spacing={2} marginLeft={2} marginTop={5}>
    <Grid item xs>
  <h4>Personal Details</h4>
  </Grid>
  </Grid>
  <Grid container spacing={2} marginLeft={2} marginTop={2}>
  <Grid item xs>

  <TextField
         style={{width:'300px'}}
          id="standard-read-only-input"
          label=""
          value={userData.fName}
          
          defaultValue="Name"
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
        />
     {/* {userData.fName} */}
      {/* {JSON.stringify(userData)} */}
  </Grid>
  <Grid item xs>
  <TextField
         style={{width:'300px'}}
         id="standard-read-only-input"
         label="Second Name"
         value={userData.lName}
         name="lName"
         defaultValue="Second Name"
         InputProps={{
           readOnly: true,
         }}
         variant="outlined"
       />
  </Grid>
  <Grid item xs>
    <TextField
         style={{width:'300px'}}
         id="standard-read-only-input"
         label="Contact Number"
         value={userData.contactNumber}
         name="contactNumber"
         
         defaultValue="Contact Number"
         InputProps={{
           readOnly: true,
         }}
         variant="outlined"
       />
    </Grid>
    <Grid item xs>
     {/* <TextField
         style={{width:'300px'}}
         id="standard-read-only-input"
         label="Balance"
         value={userData.balance}
         name="balance"
         
         defaultValue="Balance"
         InputProps={{
           readOnly: true,
         }}
         variant="outlined"
       /> */}
    </Grid>
    <Grid item xs>
    <TextField
         style={{width:'300px'}}
         id="standard-read-only-input"
         label="uId"
         value={userData.uId}
         name="uId"
         
         defaultValue="uId"
         InputProps={{
           readOnly: true,
         }}
         variant="outlined"
       />
  </Grid>
  </Grid>
   <Grid container spacing={2} marginLeft={2} marginTop={2}>
    <Grid item xs>
  <h4>Address Details</h4>
    </Grid>
    </Grid>
  <Grid container spacing={2}  marginLeft={2} marginTop={2} marginBottom={5} >
  <Grid item xs>
  <TextField
         style={{width:'300px'}}
         id="standard-read-only-input"
         label="Address"
         value={userData.address}
         name="address"
         
         defaultValue="Address"
         InputProps={{
           readOnly: true,
         }}
         variant="outlined"
       />
  </Grid>
  <Grid item xs>
  <TextField
         style={{width:'300px'}}
         id="standard-read-only-input"
         label="City"
         value={userData.city}
         name="city"
         
         defaultValue="City"
         InputProps={{
           readOnly: true,
         }}
         variant="outlined"
       />
        
       
  </Grid>
  <Grid item xs>
  {/* <TextField
         style={{width:'300px'}}
         id="standard-read-only-input"
         label="State"
         value="Maharashtra"
         name="state"
                  
         InputProps={{
           readOnly: true,
         }}
         variant="outlined"
       /> */}
  </Grid>
  
  <Grid item xs={12}>
  <TextField
         style={{width:'300px'}}
         id="standard-read-only-input"
         label="PostalCode"
         value={userData.postalCode}
         name="postalCode"
         
         
         defaultValue="PostalCode"
         InputProps={{
           readOnly: true,
         }}
         variant="outlined"
       />
  </Grid>
  </Grid>
  <Grid container marginBottom={2}>
    <Grid item xs>
    <Link to="/changeprofile">
      <Buttons
        variant="contained"
        text="Edit Profile"
      />
    </Link>
    </Grid>
  </Grid>
   <Footer />
    </Paper>
    
  );
 
}

export default Profile