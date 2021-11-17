import fetch from "node-fetch";

const coinGecko = {
    "baseUrl": "https://api.coingecko.com/api/v3",
    "ping":"/ping"
};

const getCoinGecko = async (url) => {
    try{
        const response = await fetch(url);
        const data = response.json();
        console.log(data);
        return data;
    }
    catch (error) {
        console.log(error);
    }
};

export const landingApiRoutes = (req, res) => {res.json({"action": "api route page"})};

export const testCoinGecko = (req, res) => {
    const resData = getCoinGecko(coinGecko.baseUrl + coinGecko.ping);
    res.send(resData.data);
}