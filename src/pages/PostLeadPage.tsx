import { useRef } from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import Responsive from '../components/common/Responsive';
import PostViewerContainer from '../containers/post/PostViewerContainer';
import { ScrollButton } from '../components/styles/common/ScrollToTop.style';
import { BiArrowToTop } from 'react-icons/bi';

const scrollToRef = (ref: any) => window.scrollTo(0, ref.current.offsetTop);

const PostLeadPage = () => {
  const myRef = useRef<any>(null);
  const executeScroll = () => scrollToRef(myRef);

  return (
    <>
      <p ref={myRef} style={{ margin: '0' }}></p>
      <HeaderContainer />
      <Responsive>
        <PostViewerContainer />
      </Responsive>
      <ScrollButton onClick={executeScroll}>
        <BiArrowToTop size="30" />
      </ScrollButton>
    </>
  );
};

export default PostLeadPage;
