import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { db } from '../db.js';

export async function Register(req, res) {
    console.log("sign up");
    try {
        // CHECK EXISTING USER
        let q = "SELECT * FROM user WHERE email = ? OR username = ?";

        db.query(q, [
            req.body.email,
            req.body.username
        ], (err, data) => {
            if (err) {
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
            db.query(q, VALUES, (err, data) => {
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

export async function logIn(req, res) {
    try {
        // CHECK IF USERS EXISTS 
        let q = "SELECT * FROM user WHERE username = ?";
        let inputs = [
            req.body.username
        ];

        db.query(q, inputs, (err, data) => {
            if (err) {
                console.log(err);
                // don't send bussiness logic error to client
                return res.status(501).json("an error occcured and you action could not be completed");
            }
            if (data.length === 0) return res.status(404).json("user not found");

            // COMPARE USER'S PASSWORD WITH INCOMING PASSWORD
            let vlaidPassword = bcrypt.compareSync(req.body.password, data[0].password);
            if (!vlaidPassword) res.status(400).json('wrong user name or password')

            const TOKEN = jwt.sign({
                id: data[0].id,
                username: data[0].username,
            }, 'secret');
            let {password, ...others} = data[0];

            res.cookie('access_token', TOKEN, {
                httpOnly: true,
            })
            .status(200)
            .json(others);
        });
    } catch (error) {
        console.log(error);
        res.status(500).json("It's not you, it's us");
    }
}

export async function logOut() {

}