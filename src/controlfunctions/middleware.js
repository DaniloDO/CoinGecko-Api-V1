

export const tokenExist = (req, res, next) => {
    let cookieHeader = req.headers["cookie"];
    if(cookieHeader !== undefined) {
        let cookieToken = cookieHeader.split("=")[1];
        req.token = cookieToken;
        next();
    }
    else{
        res.send("User not logged");
    }
};