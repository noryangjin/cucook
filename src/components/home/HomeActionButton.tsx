import {
  HomeActionButtonBlock,
  WriteButton,
  SortCategory,
} from '../styles/home/HomeActionButton.style';
import { Link } from 'react-router-dom';

import Korean from './img/한식.jpg';
import Western from './img/양식.jpg';
import Chinese from './img/중식.jpg';
import Dessert from './img/간식.jpg';
import Japanese from './img/일식.jpg';

const HomeActionButton = ({ user }: any) => {
  return (
    <HomeActionButtonBlock>
      <SortCategory>
        <span>분류</span>
        <span className="categoryImg">
          <Link to="?category=한식" className="korean">
            <img src={Korean} alt="" />
            <span>한식</span>
          </Link>
          <Link to="?category=양식" className="western">
            <img src={Western} alt="" />
            <span>양식</span>
          </Link>
          <Link to="?category=일식" className="japanese">
            <img src={Japanese} alt="" />
            <span>일식</span>
          </Link>
          <Link to="?category=중식" className="chinese">
            <img src={Chinese} alt="" />
            <span>중식</span>
          </Link>
          <Link to="?category=간식" className="dessert">
            <img src={Dessert} alt="" />
            <span>간식</span>
          </Link>
        </span>
      </SortCategory>
      {user && (
        <WriteButton to="/write" cyan>
          글쓰기
        </WriteButton>
      )}
    </HomeActionButtonBlock>
  );
};

export default HomeActionButton;
