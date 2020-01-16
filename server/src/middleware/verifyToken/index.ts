import { NextFunction, Request, Response } from "express";
import admin from "./firebaseAdmin";
// reference: https://medium.com/@_josueperalta/using-firebase-auth-with-a-custom-node-js-server-part-1-53bdb622c89a

async function verifyToken(req: Request, res: Response, next: NextFunction) {
    try {
        if (process.env.NODE_ENV !== "production") {
            return next();
        }

        const idToken = req.headers.authorization;
        const decodedToken = await admin.auth().verifyIdToken(idToken);

        if (decodedToken) {
            req.body.uid = decodedToken.uid;

            return next();
        }

        return res.send({idToken, decodedToken});
    } catch (error) {
        console.log(error);
    }
}

export default verifyToken;
