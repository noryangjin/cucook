import styled from 'styled-components';
import palette from '../palette';

export const TagBoxBlock = styled.div`
  padding: 0 5px;
  width: 100%;

  h4 {
    margin: 0.5rem 0;
    letter-spacing: 2px;
  }
`;

export const TagBoxInput = styled.input`
  outline: none;
  border: none;
  flex: 1;
  padding: 0;
  padding-left: 2px;
  font-size: 1rem;
  letter-spacing: 0.5px;
  &:focus {
    background: ${palette.Header};
  }
`;

export const TagForm = styled.form`
  display: flex;
  width: 280px;
  border: 1px solid ${palette.gray[4]};
  &:hover {
    border: 1px solid ${palette.gray[5]};
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;
    letter-spacing: 2px;
    width: 70px;
    height: 30px;
  }
`;

export const TagListBlock = styled.div`
  display: flex;
  margin-top: 4px;
  flex-wrap: wrap;
  div:last-child {
    margin-right: 0;
  }
`;

export const Tag = styled.div`
  margin-right: 0.5rem;
  color: ${palette.gray[6]};
  font-size: 1.125rem;
  cursor: pointer;
`;
