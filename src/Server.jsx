const express=require('express');
const mysql=require('mysql');
const cors=require('cors');

const app=express();
app.use(cors());
app.use(express.json());


const db=mysql.createConnection({
       host:"localhost",
       user:"root",
       password:'root',
       database:"database"
});

app.post('/database',(req,res)=>{
    const sql='INSERT INTO submit ("FirstName","LastName","Email","Password") values (?)';
    const values=[
        req.body.FirstName,
        req.body.LastName,
        req.body.Email,
        req.body.Password
    ]

    db.query(sql,[values],(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.listen(5173,()=>{
    console.log('listing');
});