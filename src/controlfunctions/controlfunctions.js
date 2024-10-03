import fetch from "node-fetch";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";


import {endPoints} from "../endpoints/endpoints.js";

//Core functions 

const getCoinGecko = async (url) => {
    try{
        const response = await fetch(url);
        const data = await response.json();
        //console.log(data);
        //console.log(typeof(data));
        return data;
    }
    catch (error) {
        console.log(error);
    }
};

const queryGenerator = (objectQuery, ids) => {
    if(ids !== undefined) objectQuery["ids"] = ids;
    let query = Object.keys(objectQuery).map((value) => {
        return value + "=" + objectQuery[value];
    });
    return query.join("&");
};

//Secondary functions

const dataFilterTop10 = async () => {
    let query = queryGenerator(endPoints["all_markets"]);
    let rawData = await getCoinGecko(endPoints.marketsUrl + query);
    let filterData = await rawData.filter((value) => value.market_cap_rank <= 10);
    return filterData;
};

const dataFilterSymbol = async () => {
    let query = queryGenerator(endPoints["all_markets"]);
    let rawData = await getCoinGecko(endPoints["marketsUrl"] + query);
    let filterData = await rawData.map((value) => {
        return ({
            "id": value.id,
            "symbol": value.symbol
        });
    });
    return filterData;    
};
   
//Endpoints functions:

export const landingApiRoutes = (req, res) => {res.json({"action": "api route page"})};

export const testCoinGecko = async (req, res) => {
    let resData = await getCoinGecko(endPoints.baseUrl + endPoints.ping);
    res.send(resData);  
};

export const getMarketTop = async (req, res) => {
    let resFilter = await dataFilterTop10();
    res.send(resFilter);
};

export const getMarketAllSymbol = async (req, res) => {
    let resSymbol = await dataFilterSymbol();
    res.send(resSymbol);
}; 

export const postCoinPrice = async(req, res) => {
    let nameCoin = req.body.name;
    let query = queryGenerator(endPoints["markets"], nameCoin);
    let resData = await getCoinGecko(endPoints["marketsUrl"] + query);
    res.send(resData);
};

export const postResumeCoin = async(req, res) => {
    let nameCoin = req.body.name;
    let query = queryGenerator(endPoints["markets"], nameCoin);
    let resData = await getCoinGecko(endPoints["marketsUrl"] + query);
    let resumeData = await resData.map((value) => {
        return {
            "id": value.id,
            "name": value.name,
            "current_price": value.current_price,
            "market_cap": value.market_cap, 
            "market_cap_rank": value.market_cap_rank
        };
    }).filter((value) => {
        return value.id == nameCoin;
    });
    res.send(resumeData);
};

export const getDatabase = async(req, res, next) => {
    req.getConnection(async (err, connection) => {
        if(err) return next(err);
        await connection.query('SELECT * FROM TestTable;', (err, data) => {
            res.send(data);
        });
    });
};

export const login = async (req, res, next) => {
    let {user, password} = req.body;
    req.getConnection(async (err, connection) => {
        if(err) return next(err);
        await connection.query('SELECT * FROM TestTable WHERE Name = ?', [user], 
        (err, data) => {
            if(data.length == 0){
                res.send("Invalid user");
            }
            else{
                let compare = bcrypt.compareSync(password, data[0]["Password"]);
                if(compare) {
                    jwt.sign({"user":user}, "secretKey", {"expiresIn": "1m"}, (err, token) => {
                        res.cookie("jwt", token, {"maxAge": 1000*60});
                        res.send(req.headers);
                    });
                }
                else{
                    res.send("Invalid password");
                };
            };
        });
    });
};

export const getAuthUser = (req, res, next) => {
    jwt.verify(req.token, "secretKey", (error, decoded) => {
        if(error) res.sendStatus(403);
        else{
            res.send({
                "message": "Welcome user authenticated",
                "data": decoded
            });
        };
    });
};