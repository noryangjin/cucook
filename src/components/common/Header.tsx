import styled from 'styled-components';
import Responsive from './Responsive';
import Button from './Button';
import palette from '../styles/palette';
import { Link } from 'react-router-dom';

const HeaderBlock = styled.div`
  width: 100%;
  position: fixed;
  border-bottom: 1px solid ${palette.gray[3]};
  box-shadow: 0px 3px 1px rgba(41, 33, 33, 0.08);
`;

const Wrapper = styled(Responsive)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;

  .logo {
    letter-spacing: 2px;
    text-transform: uppercase;
    font-size: 1.125rem;
  }
  a {
    text-transform: uppercase;
  }
`;

const Spacer = styled.div`
  height: 4.5rem;
`;

const Header = () => {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <div className="logo">
            <Link to="/">cucook</Link>
          </div>
          <Button to="/login">login</Button>
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default Header;
