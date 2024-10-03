import { Router} from "express";

import * as controlFunctions from "../controlfunctions/controlfunctions.js"
import * as middleware from "../controlfunctions/middleware.js";

const router = Router();

//Get routes

router.get("/", controlFunctions.landingApiRoutes);

router.get("/test", controlFunctions.testCoinGecko);

router.get("/markets_top",controlFunctions.getMarketTop);

router.get("/markets_all_symbol", controlFunctions.getMarketAllSymbol);

router.get("/checkdatabase", controlFunctions.getDatabase);

router.get("/auth_route", middleware.tokenExist, controlFunctions.getAuthUser);

//Post routes

router.post("/price_coin", controlFunctions.postCoinPrice);

router.post("/resume_coin", controlFunctions.postResumeCoin);

router.post("/login", controlFunctions.login);

export default router;