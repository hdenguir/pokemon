export const toggleLikes = (likes, payload) => {
  if (likes.indexOf(payload) > -1)
    likes = likes.filter((like) => like !== payload);
  else likes.push(payload);

  localStorage.setItem('likes', JSON.stringify(likes));
  return likes;
};
