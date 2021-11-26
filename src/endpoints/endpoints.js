
export const endPoints = {
    "baseUrl": "https://api.coingecko.com/api/v3",
    "ping":"/ping",
    "markets": "/coins/markets?vs_currency=usd&ids=bitcoin&order=market_cap_desc&per_page=100&page=1&sparkline=false",
    "all_markets": "/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
};