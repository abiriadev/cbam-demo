import React, { useState } from 'react';
import { Button, Input, Form, Card } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import styles from './Login.module.scss';
import { useNavigate } from 'react-router-dom';
import { AuthService } from '../../services/AuthService';
import { tokenDecoder } from '../../utils/tokenDecoder';
import { useDispatch } from 'react-redux';
import { loginSuccess, State } from '../../store/reducer/auth';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onClickLogin = (username: string, password: string) => {
    AuthService.login({ username, password })
      .then((res) => {
        setErrorMessage('');
        setLoading(true);
        const payload = tokenDecoder(res?.data);
        dispatch(loginSuccess(payload));

        navigate('/');
        setLoading(false);
      })
      .catch((e) => {
        setErrorMessage('ID 또는 비밀번호가 올바르지 않습니다.');
      })
      .finally(() => {
        form.resetFields();
      });
  };

  const onSubmitForm = (values: any) => {
    onClickLogin(values.username, values.password);
  };

  return (
    <div className={styles.page}>
      <Card className={styles.loginForm}>
        <div className={styles.loginHeader}>
          <h1>프로젝트 이름 </h1>
          <p>프로젝트 간략한 설명</p>
        </div>
        <div>
          <Form form={form} onFinish={onSubmitForm}>
            <Form.Item
              name="username"
              //   rules={[{ validator: validateUsername }]}
            >
              <Input
                prefix={<MailOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="ID"
                // allowClear
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: '필수 항목입니다.' }]}
            >
              <Input.Password
                prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Password"
                // allowClear
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                style={{
                  width: '100%',
                  background: '#001529',
                }}
              >
                Login
              </Button>
            </Form.Item>
          </Form>
          <div style={{ color: '#DB3B21', textAlign: 'center' }}>
            {errorMessage}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Login;
