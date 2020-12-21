import React, {
  useState,
  useEffect,
  ChangeEvent,
  FormEvent,
  useCallback,
} from 'react';
import AuthForm from '../../components/auth/AuthForm';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../module/index';
import { changeField, initialize, register } from '../../module/auth';
import { RouteComponentProps, withRouter } from 'react-router-dom';

const RegisterForm = ({ history }: RouteComponentProps<any>) => {
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();
  const { form, authRegister, authError } = useSelector(
    ({ auth }: RootState) => ({
      form: auth.register,
      authRegister: auth.authRegister,
      authError: auth.authError,
    })
  );

  useEffect(() => {
    dispatch(initialize('register'));
  }, [dispatch]);

  useEffect(() => {
    if (authRegister) {
      alert('회원가입 성공!! 로그인해 주시기 바랍니다.');
      history.push('/login');
    }
    if (authError) {
      if (authError.response.status === 409) {
        setError('이미 존재하는 계정입니다.');
        return;
      }
      if (authError.response.status === 400) {
        setError('아이디는 3~20자 이어야 합니다.');
        return;
      }
    }
    return () => {
      setError(null);
    };
  }, [authRegister, authError, dispatch, history]);

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      dispatch(changeField({ form: 'register', key: name, value }));
    },
    [dispatch]
  );

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { username, password, confirmPassword } = form;
    if (password !== confirmPassword) {
      setError('비밀번호가 일치하지 않습니다.');
      dispatch(changeField({ form: 'register', key: 'password', value: '' }));
      dispatch(
        changeField({ form: 'register', key: 'confirmPassword', value: '' })
      );
      return;
    }
    if ([username, password, confirmPassword].includes('')) {
      setError('빈 칸을 모두 입력하세요');
      return;
    }
    dispatch(register({ username, password }));
  };

  return (
    <AuthForm
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default withRouter(RegisterForm);
