import HeaderContainer from '../containers/common/HeaderContainer';
import Responsive from '../components/common/Responsive';
import loadable from '@loadable/component';

const Split = loadable(() => import('./Split/WritePage.split'), {
  fallback: <h3>로딩 중...</h3>,
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
