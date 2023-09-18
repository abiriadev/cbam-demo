import jwt_decode, { JwtPayload } from "jwt-decode";

export interface TokenDecoded extends JwtPayload {
  authorities: [];
  userId: number;
  siteId: number;
}

export const tokenDecoder = (tokens: {
  accessToken: string;
  refreshToken: string;
}) => {
  const decoded: TokenDecoded = jwt_decode(tokens.accessToken);
  return {
    tokens,
    userId: decoded.userId,
    siteId: decoded.siteId,
    authorities: decoded.authorities,
  };
};
