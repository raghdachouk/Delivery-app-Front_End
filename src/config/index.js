import debugConfig from "./debug";
import appConfig from "./app";

export default (__DEV__ ? debugConfig : appConfig);
