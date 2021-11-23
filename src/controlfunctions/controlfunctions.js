import fetch from "node-fetch";

const coinGecko = {
    "baseUrl": "https://api.coingecko.com/api/v3",
    "ping":"/ping"
};

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

export const landingApiRoutes = (req, res) => {res.json({"action": "api route page"})};

export const testCoinGecko = async (req, res) => {
    const resData = await getCoinGecko(coinGecko.baseUrl + coinGecko.ping)
    res.send(resData);
    
};