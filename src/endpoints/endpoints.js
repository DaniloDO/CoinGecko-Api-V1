

export const endPoints = {
    "baseUrl": "https://api.coingecko.com/api/v3",
    "ping":"/ping",
    "marketsUrl": "https://api.coingecko.com/api/v3/coins/markets?",

    "markets": {
        "vs_currency": "usd",
        "ids": "bitcoin",
        "order": "market_cap_desc",
        "per_page": 100,
        "page": 1,
        "sparkline": false
    },

    "all_markets": {
        "vs_currency": "usd",
        "order": "market_cap_desc",
        "per_page": 100,
        "page": 1,
        "sparkline": false
    }
};
