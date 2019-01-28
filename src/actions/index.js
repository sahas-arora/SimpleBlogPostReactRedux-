import _ from "lodash";

import blogs from "../api/blogs";

export let fetchPostsAndUsers = () => {
  return async (dispatch, getState) => {
    await dispatch(fetchPosts());

    let userIds = _.uniq(_.map(getState().posts, "userId"));

    userIds.forEach(id => dispatch(fetchUser(id)));
  };
};

export let fetchPosts = () => {
  return async dispatch => {
    let response = await blogs.get("/posts");

    dispatch({
      type: "FETCH_POSTS",
      payload: response.data
    });
  };
};

export let fetchUser = id => {
  return async dispatch => {
    let response = await blogs.get("/users/" + id);

    dispatch({
      type: "FETCH_USER",
      payload: response.data
    });
  };
};

// export let fetchUser = id => dispatch => {
//   _fetchUser(id, dispatch);
// };
//
// let _fetchUser = _.memoize(async (id, dispatch) => {
//   let response = await blogs.get("/users/" + id);
//
//   dispatch({
//     type: "FETCH_USER",
//     payload: response.data
//   });
// });
