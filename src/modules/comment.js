import { invAPI } from './api.js';

const commentURL = invAPI + 'comments?item_id=';

const getComment = async (id) => {
  const res = await fetch(commentURL + id);
  const data = await res.json();
  console.log(data.result);
  return data.result;
};

// const displayComment = async () => {
//   const commentList = await getComment();
//   commentList.forEach((item) => {

//   })
// }

const addComment = async (id, user, desc) => {
  const res = await fetch(commentURL+id, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=UTF-8' },
    body: JSON.stringify({ item_id: id, username: user, comment: desc }),
  });
  const data = await res.json();
  return data.result;
};

export {getComment, addComment}