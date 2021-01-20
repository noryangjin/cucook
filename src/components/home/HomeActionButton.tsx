import React from 'react';
import {
  HomeActionButtonBlock,
  WriteButton,
  SortCategory,
  CategoryImgBlock,
  Spacer,
} from '../styles/home/HomeActionButton.style';
import { Link } from 'react-router-dom';

import Korean from './img/한식.jpg';
import Western from './img/양식.jpg';
import Chinese from './img/중식.jpg';
import Dessert from './img/간식.jpg';
import Japanese from './img/일식.jpg';

const HomeActionButton = ({ user, onChange, key_, val_ }: any) => {
  const val =
    key_.filter((k: string) => k === 'sort')[0] ||
    key_.filter((k: string) => k === '?sort')[0]
      ? '&sort=views'
      : '';

  return (
    <HomeActionButtonBlock>
      <SortCategory>
        <select onChange={onChange} value={val.split('&')[1] || ''}>
          <option value="">정렬</option>
          <option value="sort=views">조회수 순</option>
        </select>
        <CategoryImgBlock vals={val_[0]} keys={key_[0]}>
          <Link to={`?${val}`} className="ALL">
            <span className="ALL_text">ALL</span>
          </Link>
          <Spacer />
          <Link to={`?category=한식${val}`} className="korean">
            <img src={Korean} alt="" className="한식_img" />
            <span>한식</span>
            <div className="한식">✔</div>
          </Link>
          <Link to={`?category=양식${val}`} className="western">
            <img src={Western} alt="" className="양식_img" />
            <span>양식</span>
            <div className="양식">✔</div>
          </Link>
          <Link to={`?category=일식${val}`} className="japanese">
            <img src={Japanese} alt="" className="일식_img" />
            <span>일식</span>
            <div className="일식">✔</div>
          </Link>
          <Link to={`?category=중식${val}`} className="chinese">
            <img src={Chinese} alt="" className="중식_img" />
            <span>중식</span>
            <div className="중식">✔</div>
          </Link>
          <Link to={`?category=간식${val}`} className="dessert">
            <img src={Dessert} alt="" className="간식_img" />
            <span>간식</span>
            <div className="간식">✔</div>
          </Link>
        </CategoryImgBlock>
      </SortCategory>
      {user && (
        <WriteButton to="/write" cyan>
          글쓰기
        </WriteButton>
      )}
    </HomeActionButtonBlock>
  );
};

export default React.memo(HomeActionButton);
