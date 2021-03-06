import styled from 'styled-components';
import palette from '../palette';
import button from '../../common/Button';

export const Alert = styled.div`
  margin-bottom: 10px;
  div {
    text-align: center;
  }
`;

export const AskBlock = styled.div`
  display: flex;
  justify-content: center;
  input {
    width: 100%;
    height: 30px;
    font-size: 1.125rem;
  }
  textarea {
    width: 100%;
    resize: none;
    height: 220px;
    font-size: 1.5rem;
    letter-spacing: 1px;
  }
  label + input,
  label + textarea {
    margin-top: 5px;
  }
  div + div {
    margin-top: 1rem;
  }
`;

export const WrapperForm = styled.form`
  padding: 5px 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  width: 600px;
  background: ${palette.Header};
  .error {
    color: ${palette.errorColor};
    text-align: center;
    margin-bottom: 5px;
    letter-spacing: 2px;
  }
`;

export const ButtonBlock = styled.div`
  display: flex;
  margin-bottom: 1rem;
  button + button {
    margin-left: 1rem;
  }
  .back {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    outline: none;
    font-size: 1rem;
    padding: 5px 10px;
    background: ${palette.gray[3]};
    &:hover {
      background: ${palette.gray[5]};
    }
  }
`;

export const Button = styled(button)`
  width: 100%;
`;
