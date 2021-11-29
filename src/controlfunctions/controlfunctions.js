import fetch from "node-fetch";
import { endPoints } from "../endpoints/endpoints.js";
import { idCoin } from "./inputfunctions.js";

const getCoinGecko = async (url) => {
    try{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        console.log(typeof(data));
        return data;
    }
    catch (error) {
        console.log(error);
    }
};

const dataFilterTop10 = async () => {
    let rawData = await getCoinGecko(endPoints.baseUrl + endPoints.all_markets);
    let filterData = await rawData.filter((value) => value.market_cap_rank <= 10);
    return filterData;
};

const resumeCoin = async () => {
    let rawData = await getCoinGecko(endPoints.baseUrl + endPoints.markets);
    let resumeData = await rawData.map((value) => { 
        return({
            "id": value.id,
            "name": value.name,
            "current_price": value.current_price,
            "market_cap": value.market_cap, 
            "market_cap_rank": value.market_cap_rank
        });
    }).filter((value) => {
        return value.id == "bitcoin"
    });
    return resumeData;
}    


//Endpoints functions:

export const landingApiRoutes = (req, res) => {res.json({"action": "api route page"})};

export const testCoinGecko = async (req, res) => {
    let resData = await getCoinGecko(endPoints.baseUrl + endPoints.ping);
    res.send(resData);  
};

export const getCoinPrice = async (req, res) => {
    let resData = await getCoinGecko(endPoints.baseUrl + endPoints.markets);
    res.send(resData);    
};

export const getMarketTop = async (req, res) => {
    let resFilter = await dataFilterTop10();
    res.send(resFilter);
}

export const getResumeCoin = async (req, res) => {
    let resResume = await resumeCoin();
    res.send(resResume);   
}