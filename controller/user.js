//controller is used to handle our api calls

import { response } from "express"


export const getUser=(req, res)=>{
    console.log("I am in getUser function")
    res.status(200).send("Rahul")
}
export const addUser=(req, res)=>{
    console.log("I am  in addUser function")
  
    console.log(req.body.name)
    res.status(201).send({
        message:"Your data got saved"
    })
}