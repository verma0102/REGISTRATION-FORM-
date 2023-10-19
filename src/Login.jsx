import { CardContent,  Card, Grid, TextField, Button, Stack } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';

const Login = () => {
    const [values, setValues] = useState({
        Username: "",
        Password: "",
    });
   
    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
       

        console.log('Ragisterd successfuly', values)
         axios.post('http://localhost:3000/add_data',{values})
         .then(res=>console.log('Ragisterd successfuly'))
         .catch(err=>console.log(err))   
    }
  
    return (
        <div className="content" >
            <Card style={{ maxWidth: 225, margin: '0 auto', padding: '10px 5px' }}>
                <CardContent>
                    <form  noValidate autoComplete="off" onSubmit={handleSubmit} >
                        <Grid container spacing={2}>
                            <Grid xs={12} item>
                              
                           
                            </Grid>
                            <Grid xs={12} item display="flex" justifyContent="center" alignItems="center">
                                <Stack direction="row" spacing={2}>
                                <Avatar
                                   sx={{ bgcolor: deepOrange[500]   }} />
                                </Stack>
                            </Grid>
                           
                            <Grid xs={12} item >
                                <TextField onChange={handleChange} name='Username'  type="email"  label="Username"  size="small" placeholder="Enter Your Email ID" variant="outlined"  fullWidth required />
                            </Grid>

                            <Grid xs={12} item>
                                <TextField onChange={handleChange} name='Password' type="password"  label="Password" size="small" placeholder="Enter Your Password" variant="outlined" fullWidth required />
                            </Grid>
                        
                            <Grid xs={12} item>
                                    <Button type="Submit" size="small" variant="contained" fullWidth>Login</Button>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
export default Login;


