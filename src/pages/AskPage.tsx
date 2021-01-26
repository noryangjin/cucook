import Responsive from '../components/common/Responsive';
import HeaderContainer from '../containers/common/HeaderContainer';
import loadable from '@loadable/component';

const Split = loadable(() => import('../containers/ask/AskContainer'), {
  fallback: <h2>로딩 중...</h2>,
});

const AskPage = () => {
  return (
    <>
      <HeaderContainer />
      <Responsive>
        <Split />
      </Responsive>
    </>
  );
};

export default AskPage;
