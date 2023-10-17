import { CardContent, Typography, Card, Grid, TextField, Button, Stack } from "@mui/material";

import axios from "axios";
import { useState } from "react";

const Form = () => {
    const [values, setValues] = useState({
        FirstName: '',
        LastName: "",
        Email: "",
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
            <Card style={{ maxWidth: 450, margin: '0 auto', padding: '10px 5px' }}>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid xs={12} item>
                                <Typography sx={{ color: 'red' }} gutterBottom variant="h4" align="center">
                                    <marquee bgcolor="skyblue"><i>REGISTRATION FORM</i></marquee>
                                </Typography>
                            </Grid>
                            <Grid xs={12} sm={6} item>
                                <TextField onChange={handleChange} name='FirstName' type="text" label="FirstName" size="small" placeholder="Enter Your FirstName" variant="outlined" fullWidth required />
                            </Grid>

                            <Grid xs={12} sm={6} item>
                                <TextField onChange={handleChange} name='LastName' type="text" label="LastName" size="small" placeholder="Enter Your LastName" variant="outlined" fullWidth required />
                            </Grid>

                            <Grid xs={12} item>
                                <TextField onChange={handleChange} name='Email' label="Email"  size="small" placeholder="Enter Your Email ID" variant="outlined" fullWidth required />
                            </Grid>

                            <Grid xs={12} item>
                                <TextField onChange={handleChange} name='Password' type="password" label="Password" size="small" placeholder="Enter Your Password" variant="outlined" fullWidth required />
                            </Grid>
                        
                            <Grid xs={12} item>
                                <Stack direction='row-reverse'>
                                    <Button type="Submit" size="small" variant="contained">Submit</Button>
                                </Stack>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
export default Form;
