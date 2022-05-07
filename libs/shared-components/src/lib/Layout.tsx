import { SWRConfig } from 'swr';
import axios from 'axios';

const Axios = axios.create({
  baseURL: process.env['APP_URL'] + '/api',
});

const Layout = () => {
  return (
    <SWRConfig
      value={{
        fetcher: async (url, ...config) => {
          const { data } = await Axios(url, ...config);
          return data;
        },
      }}
    ></SWRConfig>
  );
};

export default Layout;
