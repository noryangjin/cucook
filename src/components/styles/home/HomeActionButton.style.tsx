import styled, { css } from 'styled-components';
import Button from '../../common/Button';
import palette from '../palette';

export const HomeActionButtonBlock = styled.div`
  text-align: right;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    height: 40px;
    width: 40px;
    border-radius: 70%;
    object-fit: cover;
  }
`;

export const WriteButton = styled(Button)`
  width: 150px;
  height: 30px;
  @media (max-width: 700px) {
    width: 88px;
  }
`;

export const SortCategory = styled.div`
  display: flex;
  align-items: center;
  select {
    outline: none;
    border: 1px solid ${palette.gray[4]};
    border-radius: 4px;
    height: 30px;
    width: 100px;
    &:hover,
    &:focus {
      background: ${palette.Header};
    }
  }
`;

type Props = {
  vals: string;
  keys: string;
};

export const CategoryImgBlock = styled.span<Props>`
  margin-left: 1rem;
  display: flex;
  position: relative;

  .ALL_text {
    opacity: 100%;
  }

  .ALL {
    display: flex;
    align-items: center;
    width: 40px;
    height: 40px;
    justify-content: center;
    border: 1px solid ${palette.gray[4]};
    border-radius: 70%;
  }

  a + a {
    margin-left: 1rem;
  }

  .korean,
  .western,
  .japanese,
  .chinese,
  .dessert {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    @keyframes categoryAnimation {
      50% {
        z-index: 1;
        opacity: 40%;
      }
      100% {
        z-index: 1;
        opacity: 100%;
      }
    }
    &:hover {
      img {
        opacity: 50%;
      }
      span {
        animation: categoryAnimation 0.5s linear forwards;
      }
    }
    span,
    div {
      letter-spacing: 2px;
      opacity: 0;
      font-weight: bold;
      text-align: center;
      position: absolute;
    }

    ${(props) =>
      props.keys === '?category' &&
      css`
        .${props.vals}_img {
          opacity: 40%;
        }
        .${props.vals} {
          z-index: 1;
          opacity: 100%;
          color: ${palette.cyan[4]};
          font-size: 1.5rem;
        }
      `}
  }
`;

export const Spacer = styled.span`
  border: 1px solid ${palette.Header};
  height: 40px;
  margin: 0 1rem;
  background: ${palette.Header};
  width: 4px;
`;
