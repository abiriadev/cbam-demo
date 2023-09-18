import axios, { AxiosResponse } from 'axios';
import { setWithExpiry, getWithExpiry } from '../utils/storage';

const apiUrl = process.env.REACT_APP_AUTH_API_URL;

interface LoginInfo {
  username: string;
  password: string;
}

export const AuthService = {
  async login(loginInfo: LoginInfo): Promise<AxiosResponse<any>> {
    const response = await axios.post(`${apiUrl}/auth/login`, loginInfo);

    const { refreshToken, accessToken } = response.data;

    await setWithExpiry('accessToken', accessToken);
    await setWithExpiry('refreshToken', refreshToken);

    return response;
  },

  async logout(): Promise<AxiosResponse<any>> {
    const refreshToken = getWithExpiry('refreshToken');
    const headers = { 'REFRESH-TOKEN': refreshToken };
    const response = await axios.post(`${apiUrl}/auth/logout`, {}, { headers });
    localStorage.clear();
    return response;
  },

  async refresh(): Promise<AxiosResponse<any>> {
    const refreshToken = await getWithExpiry('refreshToken'); // 만기 됐는지 확인
    const headers = { 'REFRESH-TOKEN': refreshToken };
    const response = await axios.post(
      `${apiUrl}/auth/refresh`,
      {},
      { headers },
    );
    return response;
  },
};
