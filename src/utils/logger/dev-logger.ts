import { ENVIRONMENT } from "../constants/env-variable";

// For Making Log on Develop Mode
export const logOnDev = (message: string) => {
    if (ENVIRONMENT === "dev") {
      console.log(message);
    }
};