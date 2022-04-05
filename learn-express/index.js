const express = require('express');
const mongoose = require('mongoose')

// getting routes
const routes = require("./routes")

// Connect to MongoDB database

const dbURI ="mongodb+srv://dbUser:test12345@node-applications.fe4au.mongodb.net/node-tutorial?retryWrites=true&w=majority"
mongoose.connect(dbURI,{useNewUrlParser:true, useUnifiedTopology:true}).then((result)=>{
		//creating express app
        const app =express();
        app.use(express.json());
        app.use("/api", routes);

		//listening to the request on server
        app.listen(7000, ()=>{
            console.log('Server started listening')
        });
	})
