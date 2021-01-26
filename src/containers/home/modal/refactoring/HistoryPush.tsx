export const historyPush = ({
  history,
  postId,
  username,
  id,
  location,
}: any) => {
  const { search, pathname } = location;
  const includes = (value: string) => {
    return pathname.includes(value);
  };

  if (id) {
    if (username && postId) {
      return history.push(`/@${username}/${postId}/chat/${id}/${search}`);
    } else if (username) {
      return history.push(`/user/@${username}/chat/${id}/${search}`);
    } else if (includes('/map')) {
      return history.push(`/map/chat/${id}/`);
    } else if (includes('/write')) {
      return history.push(`/write/chat/${id}`);
    } else {
      return history.push(`/chat/${id}/${search}`);
    }
  } else {
    if (username && postId) {
      return history.push(`/@${username}/${postId}`);
    } else if (username) {
      return history.push(`/user/@${username}/${search}`);
    } else if (includes('/map')) {
      return history.push(`/map`);
    } else if (includes('/write')) {
      return history.push(`/write`);
    } else {
      return history.push(`/${search}`);
    }
  }
};
