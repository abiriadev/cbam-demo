import jwt_decode, { JwtPayload } from 'jwt-decode';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

export const setWithExpiry = (key: string, value: any) => {
  const decodeRefreshToken = jwt_decode(value) as JwtPayload;
  const item = {
    value: value,
    // expiry: new Date((decodeRefreshToken.exp as number) * ttl),
    expiry: dayjs
      .unix(decodeRefreshToken.exp as number)
      .utc()
      .format(),
  };
  localStorage.setItem(key, JSON.stringify(item));
};

export const getWithExpiry = (key: any) => {
  // token 을 읽을때 만료날짜를 받아와서 비교한다.
  const itemStr = localStorage.getItem(key);
  // if the item doesn't exist, return null
  if (!itemStr) {
    return null;
  }

  const item = JSON.parse(itemStr);
  const now = new Date();

  // compare the expiry time of the item with the current time
  if (now.getTime() > item.expiry) {
    // If the item is expired, delete the item from storage
    // and return null
    localStorage.removeItem(key);
    return null;
  }
  return item.value;
};
