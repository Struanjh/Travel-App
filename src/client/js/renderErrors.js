
import { countDown } from "./formInputValidator";

export const renderError = (errorMsg) => {
    console.log(errorMsg);
    alert(errorMsg);
    const errMsg = errorMsg;
    return errMsg;
}