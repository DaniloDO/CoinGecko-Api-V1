import { Router} from "express";
import * as controlFunctions from "../controlfunctions/controlfunctions.js"

const router = Router();

router.get("/", controlFunctions.landingApiRoutes);

router.get("/test", controlFunctions.testCoinGecko); 

export default router;