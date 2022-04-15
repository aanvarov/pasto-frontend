import Axios from 'axios';
import store from '../store';
import { clearRestaurant, updateRestaurant } from '../store/auth/reducer';

const baseURL =
  process.env.NODE_ENV === 'development'
    ? 'https://yemek.alitechbot.uz/api/v1'
    : 'https://yemek.alitechbot.uz/api/v1';
const axios = Axios.create({ baseURL, withCredentials: true });

axios.interceptors.request.use((configs) => {
  const accessToken = store.getState().account.restaurant.accessToken || '';
  configs.headers.authorization = accessToken ? `Bearer ${accessToken}` : '';
  const refreshToken = store.getState().account.restaurant.refreshToken || '';
  configs.headers['x-refresh-token'] = refreshToken ? `Bearer ${refreshToken}` : '';
  return configs;
});

axios.interceptors.response.use(
  (res) => {
    console.log('res.headers[x-access-token]', { res });
    if (res.headers['x-access-token']) {
      store.dispatch(updateRestaurant({ accessToken: res.headers['x-access-token'] }));
    }
    return res;
  },
  (error) => {
    console.log('axios res error', error.response);
    if (error?.response?.status === 401) {
      return store.dispatch(clearRestaurant());
    }
    return Promise.reject(error);
  },
);

export { axios as default };
