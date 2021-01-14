import { FunctionComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import WritePage from './pages/WritePage';
import PostLeadPage from './pages/PostLeadPage';
import SearchPage from './pages/SearchPage';

const App: FunctionComponent = () => {
  return (
    <Switch>
      <Route path={['/', '/chat/:chatRoomId']} component={HomePage} exact />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/write" component={WritePage} />
      <Route path="/search" component={SearchPage} />
      <Route
        path={['/@:username/:postId/chat/:chatRoomId', '/@:username/:postId']}
        component={PostLeadPage}
      />
      <Route
        render={({ location }) => (
          <div>
            <p>{location.pathname}이 페이지는 존재하지 않습니다.</p>
          </div>
        )}
      />
    </Switch>
  );
};

export default App;
