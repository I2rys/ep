"use strict";

// Dependencies
const express = require("express")
const path = require("path")

// Variables
const web = express()
const port = process.env.PORT || 8080

// Functions
function publicFiles(file){
    return path.join(__dirname, `/public/${file}`)
}

/// Configurations
// Express
web.use(express.static(path.join(__dirname, "public")))

// Main
web.get("/", (req, res)=>res.sendFile(publicFiles("index.html")))

web.use("*", (req, res)=>res.redirect("/"))

web.listen(port, ()=>{
    console.log(`Server is running. Port: ${port}`)
})