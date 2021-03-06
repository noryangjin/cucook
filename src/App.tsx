import { FunctionComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import palette from './components/styles/palette';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import WritePage from './pages/WritePage';
import PostLeadPage from './pages/PostLeadPage';
import SearchPage from './pages/SearchPage';
import UserPage from './pages/UserPage';
import MapPage from './pages/MapPage';
import AskPage from './pages/AskPage';

const App: FunctionComponent = () => {
  return (
    <Switch>
      <Route path={['/', '/chat/:chatRoomId']} component={HomePage} exact />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route
        path={['/write/chat/:chatRoomId', '/write']}
        component={WritePage}
      />
      <Route
        path={['/search/chat/:chatRoomId', '/search']}
        component={SearchPage}
      />
      <Route
        path={['/@:username/:postId/chat/:chatRoomId', '/@:username/:postId']}
        component={PostLeadPage}
      />
      <Route
        path={['/user/@:username/chat/:chatRoomId', '/user/@:username']}
        component={UserPage}
      />
      <Route path={['/map/chat/:chatRoomId', '/map']} component={MapPage} />
      <Route path="/ask" component={AskPage} />
      <Route
        render={({ location }) => (
          <div>
            <p style={{ color: `${palette.errorColor}`, textAlign: 'center' }}>
              {location.pathname}이 페이지는 존재하지 않습니다.
            </p>
          </div>
        )}
      />
    </Switch>
  );
};

export default App;
