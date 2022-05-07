import type { ReactNode } from 'react';
import { SWRConfig } from 'swr';
import axios from 'axios';

const Axios = axios.create({
  baseURL: process.env['APP_URL'] + '/api',
});

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <SWRConfig
      value={{
        fetcher: async (url, ...config) => {
          const { data } = await Axios(url, ...config);
          return data;
        },
      }}
    >
      {children}
    </SWRConfig>
  );
};

export default Layout;
