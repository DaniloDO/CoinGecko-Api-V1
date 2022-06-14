# CoinGecko-Api-V1
REST Api for Coingecko data

### GET App Main Page
Main page that allows to get information about the API.

### GET API Landing Page
Lading page for API's endpoints.

### GET Test Coingecko
Check server API status.

  - Endpoint example: `http://localhost:3000/api_routes/test`
  - Response example:
  
    ```
    {
      "gecko_says": "(V3) To the Moon!"
    }
    ```

### GET Markets Top 10
Get the top 10 cryptocurrencies by market capitalization.

  - Endpoint example: `http://localhost:3000/api_routes/markets_top`
  - Response example:
  
    <details>
    <summary>Click to expand</summary>
  
    ```
    [
      {
        "id": "bitcoin",
        "symbol": "btc",
        "name": "Bitcoin",
        "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
        "current_price": 21506,
        "market_cap": 411046452577,
        "market_cap_rank": 1,
        "fully_diluted_valuation": 452705180952,
        "total_volume": 48492638379,
        "high_24h": 23082,
        "low_24h": 21047,
        "price_change_24h": -1503.8147900447257,
        "price_change_percentage_24h": -6.53565,
        "market_cap_change_24h": -29861181517.40912,
        "market_cap_change_percentage_24h": -6.77266,
        "circulating_supply": 19067543,
        "total_supply": 21000000,
        "max_supply": 21000000,
        "ath": 69045,
        "ath_change_percentage": -68.77766,
        "ath_date": "2021-11-10T14:24:11.849Z",
        "atl": 67.81,
        "atl_change_percentage": 31691.33975,
        "atl_date": "2013-07-06T00:00:00.000Z",
        "roi": null,
        "last_updated": "2022-06-14T21:45:38.493Z"
      },
      {
        "id": "ethereum",
        "symbol": "eth",
        "name": "Ethereum",
        "image": "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
        "current_price": 1167.7,
        "market_cap": 141562495148,
        "market_cap_rank": 2,
        "fully_diluted_valuation": null,
        "total_volume": 32766441418,
        "high_24h": 1250.17,
        "low_24h": 1095.02,
        "price_change_24h": -63.88431072369349,
        "price_change_percentage_24h": -5.18718,
        "market_cap_change_24h": -8179899146.126068,
        "market_cap_change_percentage_24h": -5.46265,
        "circulating_supply": 121173301.9365,
        "total_supply": null,
        "max_supply": null,
        "ath": 4878.26,
        "ath_change_percentage": -76.0516,
        "ath_date": "2021-11-10T14:24:19.604Z",
        "atl": 0.432979,
        "atl_change_percentage": 269720.43337,
        "atl_date": "2015-10-20T00:00:00.000Z",
        "roi": {
            "times": 71.46525747742699,
            "currency": "btc",
            "percentage": 7146.5257477426985
        },
        "last_updated": "2022-06-14T21:45:56.723Z"
      },
      {
        "id": "tether",
        "symbol": "usdt",
        "name": "Tether",
        "image": "https://assets.coingecko.com/coins/images/325/large/Tether-logo.png?1598003707",
        "current_price": 1.002,
        "market_cap": 71652687196,
        "market_cap_rank": 3,
        "fully_diluted_valuation": null,
        "total_volume": 77911881039,
        "high_24h": 1.011,
        "low_24h": 0.994329,
        "price_change_24h": 0.00351203,
        "price_change_percentage_24h": 0.35179,
        "market_cap_change_24h": -713453957.1932831,
        "market_cap_change_percentage_24h": -0.98589,
        "circulating_supply": 71599130290.9458,
        "total_supply": 71599130290.9458,
        "max_supply": null,
        "ath": 1.32,
        "ath_change_percentage": -24.36312,
        "ath_date": "2018-07-24T00:00:00.000Z",
        "atl": 0.572521,
        "atl_change_percentage": 74.79673,
        "atl_date": "2015-03-02T00:00:00.000Z",
        "roi": null,
        "last_updated": "2022-06-14T21:41:06.910Z"
      },
      {
        "id": "usd-coin",
        "symbol": "usdc",
        "name": "USD Coin",
        "image": "https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png?1547042389",
        "current_price": 1.001,
        "market_cap": 54091319145,
        "market_cap_rank": 4,
        "fully_diluted_valuation": null,
        "total_volume": 9026700411,
        "high_24h": 1.012,
        "low_24h": 0.994294,
        "price_change_24h": -0.003327257548177754,
        "price_change_percentage_24h": -0.33129,
        "market_cap_change_24h": -109908891.09612274,
        "market_cap_change_percentage_24h": -0.20278,
        "circulating_supply": 54040265041.808,
        "total_supply": 54040222357.2332,
        "max_supply": null,
        "ath": 1.17,
        "ath_change_percentage": -14.68441,
        "ath_date": "2019-05-08T00:40:28.300Z",
        "atl": 0.891848,
        "atl_change_percentage": 12.18293,
        "atl_date": "2021-05-19T13:14:05.611Z",
        "roi": null,
        "last_updated": "2022-06-14T21:45:07.277Z"
      },
      {
        "id": "binancecoin",
        "symbol": "bnb",
        "name": "BNB",
        "image": "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850",
        "current_price": 216.54,
        "market_cap": 35403887938,
        "market_cap_rank": 5,
        "fully_diluted_valuation": 35802814702,
        "total_volume": 1368853077,
        "high_24h": 230.41,
        "low_24h": 205.82,
        "price_change_24h": -8.573032585781363,
        "price_change_percentage_24h": -3.8083,
        "market_cap_change_24h": -1541043625.8950577,
        "market_cap_change_percentage_24h": -4.17119,
        "circulating_supply": 163276974.63,
        "total_supply": 163276974.63,
        "max_supply": 165116760,
        "ath": 686.31,
        "ath_change_percentage": -68.41064,
        "ath_date": "2021-05-10T07:24:17.097Z",
        "atl": 0.0398177,
        "atl_change_percentage": 544381.21066,
        "atl_date": "2017-10-19T00:00:00.000Z",
        "roi": null,
        "last_updated": "2022-06-14T21:45:18.860Z"
      },
      {
        "id": "binance-usd",
        "symbol": "busd",
        "name": "Binance USD",
        "image": "https://assets.coingecko.com/coins/images/9576/large/BUSD.png?1568947766",
        "current_price": 0.988434,
        "market_cap": 17146458738,
        "market_cap_rank": 6,
        "fully_diluted_valuation": null,
        "total_volume": 7626190980,
        "high_24h": 1.026,
        "low_24h": 0.984154,
        "price_change_24h": -0.00794482502131755,
        "price_change_percentage_24h": -0.79737,
        "market_cap_change_24h": -443734881.23287964,
        "market_cap_change_percentage_24h": -2.52263,
        "circulating_supply": 17422532802.12,
        "total_supply": 17422532802.12,
        "max_supply": null,
        "ath": 1.15,
        "ath_change_percentage": -14.73308,
        "ath_date": "2020-03-13T02:35:42.953Z",
        "atl": 0.901127,
        "atl_change_percentage": 9.21368,
        "atl_date": "2021-05-19T13:04:37.445Z",
        "roi": null,
        "last_updated": "2022-06-14T21:45:11.334Z"
      },
      {
        "id": "cardano",
        "symbol": "ada",
        "name": "Cardano",
        "image": "https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860",
        "current_price": 0.467744,
        "market_cap": 15790280976,
        "market_cap_rank": 7,
        "fully_diluted_valuation": 21009968300,
        "total_volume": 2069223074,
        "high_24h": 0.517486,
        "low_24h": 0.442622,
        "price_change_24h": -0.007490459418891593,
        "price_change_percentage_24h": -1.57616,
        "market_cap_change_24h": -412559728.1072712,
        "market_cap_change_percentage_24h": -2.54622,
        "circulating_supply": 33820262543.95,
        "total_supply": 45000000000,
        "max_supply": 45000000000,
        "ath": 3.09,
        "ath_change_percentage": -84.86886,
        "ath_date": "2021-09-02T06:00:10.474Z",
        "atl": 0.01925275,
        "atl_change_percentage": 2326.06809,
        "atl_date": "2020-03-13T02:22:55.044Z",
        "roi": null,
        "last_updated": "2022-06-14T21:45:22.220Z"
      },
      {
        "id": "ripple",
        "symbol": "xrp",
        "name": "XRP",
        "image": "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731",
        "current_price": 0.312649,
        "market_cap": 15174130476,
        "market_cap_rank": 8,
        "fully_diluted_valuation": 31388409308,
        "total_volume": 2069539055,
        "high_24h": 0.324,
        "low_24h": 0.296847,
        "price_change_24h": -0.004379327993649485,
        "price_change_percentage_24h": -1.38137,
        "market_cap_change_24h": -239618791.00572205,
        "market_cap_change_percentage_24h": -1.55458,
        "circulating_supply": 48343101197,
        "total_supply": 99989535142,
        "max_supply": 100000000000,
        "ath": 3.4,
        "ath_change_percentage": -90.76855,
        "ath_date": "2018-01-07T00:00:00.000Z",
        "atl": 0.00268621,
        "atl_change_percentage": 11579.15526,
        "atl_date": "2014-05-22T00:00:00.000Z",
        "roi": null,
        "last_updated": "2022-06-14T21:44:59.279Z"
      },
      {
        "id": "solana",
        "symbol": "sol",
        "name": "Solana",
        "image": "https://assets.coingecko.com/coins/images/4128/large/solana.png?1640133422",
        "current_price": 28.56,
        "market_cap": 9805986238,
        "market_cap_rank": 9,
        "fully_diluted_valuation": null,
        "total_volume": 2207364157,
        "high_24h": 31.52,
        "low_24h": 26.22,
        "price_change_24h": 0.04439002,
        "price_change_percentage_24h": 0.15569,
        "market_cap_change_24h": 87927585,
        "market_cap_change_percentage_24h": 0.90479,
        "circulating_supply": 342208369.100855,
        "total_supply": 508180963.57,
        "max_supply": null,
        "ath": 259.96,
        "ath_change_percentage": -88.97561,
        "ath_date": "2021-11-06T21:54:35.825Z",
        "atl": 0.500801,
        "atl_change_percentage": 5622.61189,
        "atl_date": "2020-05-11T19:35:23.449Z",
        "roi": null,
        "last_updated": "2022-06-14T21:46:22.574Z"
      },
      {
        "id": "polkadot",
        "symbol": "dot",
        "name": "Polkadot",
        "image": "https://assets.coingecko.com/coins/images/12171/large/polkadot.png?1639712644",
        "current_price": 7.13,
        "market_cap": 8018385214,
        "market_cap_rank": 10,
        "fully_diluted_valuation": null,
        "total_volume": 748946088,
        "high_24h": 7.52,
        "low_24h": 6.74,
        "price_change_24h": 0.04019094,
        "price_change_percentage_24h": 0.56668,
        "market_cap_change_24h": 44805798,
        "market_cap_change_percentage_24h": 0.56193,
        "circulating_supply": 1121826369.78838,
        "total_supply": 1202775502.62408,
        "max_supply": null,
        "ath": 54.98,
        "ath_change_percentage": -86.99836,
        "ath_date": "2021-11-04T14:10:09.301Z",
        "atl": 2.7,
        "atl_change_percentage": 165.00598,
        "atl_date": "2020-08-20T05:48:11.359Z",
        "roi": null,
        "last_updated": "2022-06-14T21:45:39.194Z"
      }
    ]
    ```


### GET All Symbols
Get all the available cryptocurrency symbols in the Coingecko API.
  
  - Endpoint example: `http://localhost:3000/api_routes/markets_all_symbol`
  - Response example:
    
    <details>
    <summary>Click to expand</summary>
  
    ```
    [
      {
        "id": "bitcoin",
        "symbol": "btc"
      },
      {
        "id": "ethereum",
        "symbol": "eth"
      },
      {
        "id": "tether",
        "symbol": "usdt"
      },
      {
        "id": "usd-coin",
        "symbol": "usdc"
      },
      {
        "id": "binancecoin",
        "symbol": "bnb"
      },
      {
        "id": "binance-usd",
        "symbol": "busd"
      },
      {
        "id": "cardano",
        "symbol": "ada"
      },
      {
        "id": "ripple",
        "symbol": "xrp"
      },
      {
        "id": "solana",
        "symbol": "sol"
      },
      {
        "id": "polkadot",
        "symbol": "dot"
      },
      {
        "id": "dogecoin",
        "symbol": "doge"
      },
      {
        "id": "dai",
        "symbol": "dai"
      },
      {
        "id": "wrapped-bitcoin",
        "symbol": "wbtc"
      },
      {
        "id": "leo-token",
        "symbol": "leo"
      },
      {
        "id": "tron",
        "symbol": "trx"
      },
      {
        "id": "staked-ether",
        "symbol": "steth"
      },
      {
        "id": "shiba-inu",
        "symbol": "shib"
      },
      {
        "id": "avalanche-2",
        "symbol": "avax"
      },
      {
        "id": "ftx-token",
        "symbol": "ftt"
      },
      {
        "id": "litecoin",
        "symbol": "ltc"
      },
      {
        "id": "chainlink",
        "symbol": "link"
      },
      {
        "id": "crypto-com-chain",
        "symbol": "cro"
      },
      {
        "id": "okb",
        "symbol": "okb"
      },
      {
        "id": "stellar",
        "symbol": "xlm"
      },
      {
        "id": "matic-network",
        "symbol": "matic"
      },
      {
        "id": "bitcoin-cash",
        "symbol": "bch"
      },
      {
        "id": "near",
        "symbol": "near"
      },
      {
        "id": "monero",
        "symbol": "xmr"
      },
      {
        "id": "algorand",
        "symbol": "algo"
      },
      {
        "id": "ethereum-classic",
        "symbol": "etc"
      },
      {
        "id": "theta-fuel",
        "symbol": "tfuel"
      },
      {
        "id": "chain-2",
        "symbol": "xcn"
      },
      {
        "id": "cosmos",
        "symbol": "atom"
      },
      {
        "id": "vechain",
        "symbol": "vet"
      },
      {
        "id": "uniswap",
        "symbol": "uni"
      },
      {
        "id": "flow",
        "symbol": "flow"
      },
      {
        "id": "frax",
        "symbol": "frax"
      },
      {
        "id": "hedera-hashgraph",
        "symbol": "hbar"
      },
      {
        "id": "internet-computer",
        "symbol": "icp"
      },
      {
        "id": "tezos",
        "symbol": "xtz"
      },
      {
        "id": "true-usd",
        "symbol": "tusd"
      },
      {
        "id": "decentraland",
        "symbol": "mana"
      },
      {
        "id": "filecoin",
        "symbol": "fil"
      },
      {
        "id": "kucoin-shares",
        "symbol": "kcs"
      },
      {
        "id": "theta-token",
        "symbol": "theta"
      },
      {
        "id": "axie-infinity",
        "symbol": "axs"
      },
      {
        "id": "the-sandbox",
        "symbol": "sand"
      },
      {
        "id": "apecoin",
        "symbol": "ape"
      },
      {
        "id": "elrond-erd-2",
        "symbol": "egld"
      },
      {
        "id": "bitcoin-cash-sv",
        "symbol": "bsv"
      },
      {
        "id": "compound-usd-coin",
        "symbol": "cusdc"
      },
      {
        "id": "helium",
        "symbol": "hnt"
      },
      {
        "id": "eos",
        "symbol": "eos"
      },
      {
        "id": "paxos-standard",
        "symbol": "usdp"
      },
      {
        "id": "huobi-token",
        "symbol": "ht"
      },
      {
        "id": "huobi-btc",
        "symbol": "hbtc"
      },
      {
        "id": "aave",
        "symbol": "aave"
      },
      {
        "id": "compound-ether",
        "symbol": "ceth"
      },
      {
        "id": "zcash",
        "symbol": "zec"
      },
      {
        "id": "neutrino",
        "symbol": "usdn"
      },
      {
        "id": "the-graph",
        "symbol": "grt"
      },
      {
        "id": "bittorrent",
        "symbol": "btt"
      },
      {
        "id": "iota",
        "symbol": "miota"
      },
      {
        "id": "usdd",
        "symbol": "usdd"
      },
      {
        "id": "klay-token",
        "symbol": "klay"
      },
      {
        "id": "ecash",
        "symbol": "xec"
      },
      {
        "id": "maker",
        "symbol": "mkr"
      },
      {
        "id": "defichain",
        "symbol": "dfi"
      },
      {
        "id": "neo",
        "symbol": "neo"
      },
      {
        "id": "gatechain-token",
        "symbol": "gt"
      },
      {
        "id": "quant-network",
        "symbol": "qnt"
      },
      {
        "id": "cdai",
        "symbol": "cdai"
      },
      {
        "id": "radix",
        "symbol": "xrd"
      },
      {
        "id": "pax-gold",
        "symbol": "paxg"
      },
      {
        "id": "fantom",
        "symbol": "ftm"
      },
      {
        "id": "thorchain",
        "symbol": "rune"
      },
      {
        "id": "bitdao",
        "symbol": "bit"
      },
      {
        "id": "compound-usdt",
        "symbol": "cusdt"
      },
      {
        "id": "chiliz",
        "symbol": "chz"
      },
      {
        "id": "flex-coin",
        "symbol": "flex"
      },
      {
        "id": "zilliqa",
        "symbol": "zil"
      },
      {
        "id": "pancakeswap-token",
        "symbol": "cake"
      },
      {
        "id": "waves",
        "symbol": "waves"
      },
      {
        "id": "amp-token",
        "symbol": "amp"
      },
      {
        "id": "loopring",
        "symbol": "lrc"
      },
      {
        "id": "tether-gold",
        "symbol": "xaut"
      },
      {
        "id": "dash",
        "symbol": "dash"
      },
      {
        "id": "kusama",
        "symbol": "ksm"
      },
      {
        "id": "gala",
        "symbol": "gala"
      },
      {
        "id": "arweave",
        "symbol": "ar"
      },
      {
        "id": "nexo",
        "symbol": "nexo"
      },
      {
        "id": "basic-attention-token",
        "symbol": "bat"
      },
      {
        "id": "gemini-dollar",
        "symbol": "gusd"
      },
      {
        "id": "enjincoin",
        "symbol": "enj"
      },
      {
        "id": "fei-usd",
        "symbol": "fei"
      },
      {
        "id": "celo",
        "symbol": "celo"
      },
      {
        "id": "havven",
        "symbol": "snx"
      },
      {
        "id": "stepn",
        "symbol": "gmt"
      },
      {
        "id": "xdce-crowd-sale",
        "symbol": "xdc"
      },
      {
        "id": "holotoken",
        "symbol": "hot"
      }
    ]
    ```
    </details>
  
  
### POST Full Coin
Get full description of a cryptocurrency.
  - Endpoint example: `http://localhost:3000/api_routes/full_coin`
  - Request example:
   
    Body (raw json)
    ```
    {
      "name": "bitcoin"
    }
    ```
  - Response example: 
    <details>
    <summary>Click to expand</summary>
  
    ```
    [
      {
        "id": "bitcoin",
        "symbol": "btc",
        "name": "Bitcoin",
        "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
        "current_price": 21580,
        "market_cap": 414898593765,
        "market_cap_rank": 1,
        "fully_diluted_valuation": 456948016451,
        "total_volume": 48560992879,
        "high_24h": 23266,
        "low_24h": 21047,
        "price_change_24h": -1685.6447355200435,
        "price_change_percentage_24h": -7.24506,
        "market_cap_change_24h": -28718551522.36371,
        "market_cap_change_percentage_24h": -6.47372,
        "circulating_supply": 19067531,
        "total_supply": 21000000,
        "max_supply": 21000000,
        "ath": 69045,
        "ath_change_percentage": -68.10702,
        "ath_date": "2021-11-10T14:24:11.849Z",
        "atl": 67.81,
        "atl_change_percentage": 32374.20159,
        "atl_date": "2013-07-06T00:00:00.000Z",
        "roi": null,
        "last_updated": "2022-06-14T21:32:48.073Z"
      }
    ]
    ```
    </details>

### POST Resume Coin
Get short description of a cryptocurrency.

  - Endpoint example: `http://localhost:3000/api_routes/full_coin`
  - Request example:
   
    Body (raw json)
    ```
    {
      "name": "bitcoin"
    }
    ```
  - Response example: 
    <details>
    <summary>Click to expand</summary>
  
    ```
    [
      {
        "id": "bitcoin",
        "name": "Bitcoin",
        "current_price": 21562,
        "market_cap": 414898593765,
        "market_cap_rank": 1
      }
    ]
    ```
    </details>

