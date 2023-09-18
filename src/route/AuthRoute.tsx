import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { message } from 'antd';

export interface AuthProp {
  isAnonymousPage?: boolean;
  hasRole?: string;
  redirectPath: string;
  children: JSX.Element;
}

const AuthRoute = ({
  isAnonymousPage = false,
  redirectPath = '/',
  hasRole,
  children,
}: AuthProp) => {
  const { isLogin, authorities = [] } = useSelector((state: RootState) => {
    const auth = state.auth;
    const isLogin = auth.isLogin;
    const authorities = auth.authorities;
    return { isLogin, authorities };
  });
  const refreshToken = localStorage.getItem('refreshToken');
  const redirectNavigate = <Navigate to={redirectPath} replace />;

  if (isAnonymousPage && isLogin) {
    // 비로그인 페이지에 로그인 사용자가 접근한 경우
    return redirectNavigate;
  }

  if (isAnonymousPage) {
    // 비로그인 페이지에 비로그인 사용자가 접근시
    return children;
  }

  if (!isLogin) {
    // 로그인 안 된 사용자가 접근한 경우
    if (refreshToken) {
      // 새로고침 시 리다이렉트 하지 않음
      return children;
    } else {
      return redirectNavigate;
    }
  }

  // 권한 보유여부 확인
  if (hasRole && !authorities.some((role: string) => role === hasRole)) {
    message.error('권한이 없는 사용자입니다.');
    return redirectNavigate;
  }

  return children;
};

export default AuthRoute;
