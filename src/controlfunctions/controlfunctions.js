import fetch from "node-fetch";
import { endPoints } from "../endpoints/endpoints.js";

const getCoinGecko = async (url) => {
    try{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        console.log(typeof(data));
        return await data;
    }
    catch (error) {
        console.log(error);
    }
};

const dataFilterTop10 = async () => {
    let rawData = await getCoinGecko(endPoints.baseUrl + endPoints.all_markets);
    const filterData = rawData.filter((value) => value.market_cap_rank <= 10);
    return filterData;
};

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