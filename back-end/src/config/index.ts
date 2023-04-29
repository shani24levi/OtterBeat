// import  from "../global"

export default {
  Development: process.env.USER_SERVICE_URL ?? '',
  EtlUrl: process.env.ETL_SERVICE_URL ?? '',
};

export const getConfig = (): ENV => {
  return {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI,
  };
};
