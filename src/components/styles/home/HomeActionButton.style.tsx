import styled from 'styled-components';
import Button from '../../common/Button';

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

  .categoryImg {
    margin-left: 2rem;
    display: flex;
    position: relative;
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
          opacity: 50%;
        }
        100% {
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

      span {
        letter-spacing: 2px;
        opacity: 0;
        font-weight: bold;
        text-align: center;
        position: absolute;
      }
    }
  }
`;
