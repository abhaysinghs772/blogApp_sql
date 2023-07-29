import bcrypt from 'bcryptjs';
import {db} from '../db.js';

export async function Register(req, res){
    try {
        // CHECK EXISTING USER
        let q = "SELECT * FROM user WHERE email = ? OR username = ?";

        db.query(q, [
            req.body.email,
            req.body.username
        ], (err, data)=> {
            if(err) {
                console.log(err);
                // don't send bussiness logic error to client
                return res.status(501).json("an error occcured and you action could not be completed");
            }
            if (data.length) return res.status(409).json('user already exist');

            // HAS PASWORD 
            const SALT = bcrypt.genSaltSync(10);
            const HASH = bcrypt.hashSync(req.body.password, SALT);

            let q = "INSERT INTO user (`username`, `email`, `password`) VALUES(?, ?, ?)";
            const VALUES = [
                req.body.username,
                req.body.email,
                HASH
            ];
            db.query(q, VALUES, (err, data)=> {
                if (err) {
                    console.log(err);
                    // don't send bussiness logic error to client
                    return res.status(501).json("an error occcured and you action could not be completed");
                }
                return res.status(200).json("user has been successfully created");
            })
        });
    } catch (error) {
        console.log(error);
        res.status(500).json("It's not you, it's us");
    }
}

export function logIn(){
    
}

export function logOut(){
    
}