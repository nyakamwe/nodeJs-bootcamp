const express = require('express');
const mongoose = require('mongoose')

// getting routes
const routes = require("./routes")

// Connect to MongoDB database

mongoose.connect("mongodb://localhost:27017/myposts", { useNewUrlParser: true })
	.then(() => {
		//creating express app
        const app =express();
        app.use(express.json());
        app.use("/api", routes);


		//listening to the request on server
        app.listen(3000, ()=>{
            console.log('Server started listening')
        });
	})
