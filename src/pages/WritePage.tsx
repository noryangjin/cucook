import HeaderContainer from '../containers/common/HeaderContainer';
import Responsive from '../components/common/Responsive';
import loadable from '@loadable/component';

const Split = loadable(() => import('./Split/WritePage.split'), {
  fallback: <h2>로딩 중...</h2>,
});

const WritePage = () => {
  return (
    <>
      <HeaderContainer />
      <Responsive>
        <Split />
      </Responsive>
    </>
  );
};

export default WritePage;
