export const historyPush = ({
  history,
  postId,
  username,
  id,
  location,
}: any) => {
  if (id) {
    if (username && postId) {
      return history.push(
        `/@${username}/${postId}/chat/${id}/${location.search}`
      );
    } else if (username) {
      return history.push(`/user/@${username}/chat/${id}/${location.search}`);
    } else if (location.pathname.includes('/map')) {
      return history.push(`/map/chat/${id}/`);
    } else {
      return history.push(`/chat/${id}/${location.search}`);
    }
  } else {
    if (username && postId) {
      return history.push(`/@${username}/${postId}`);
    } else if (username) {
      return history.push(`/user/@${username}/${location.search}`);
    } else if (location.pathname.includes('/map')) {
      return history.push(`/map`);
    } else {
      return history.push(`/${location.search}`);
    }
  }
};
