import { Router} from "express";
import * as controlFunctions from "../controlfunctions/controlfunctions.js"

const router = Router();

router.get("/", controlFunctions.landingApiRoutes);

router.get("/test", controlFunctions.testCoinGecko);

router.get("/price_coin", controlFunctions.getCoinPrice);

router.get("/markets_top",controlFunctions.getMarketTop);

router.get("/resume_coin",controlFunctions.getResumeCoin);

export default router;