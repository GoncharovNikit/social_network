const ADD_POST = "ADD-POST";
const POST_TEXT_CHANGE = "POST-TEXT-CHANGE";

let initialState = {
  postsData: [
    { id: 1, text: "How are you, guys?", countLikes: 15, author: "John" },
    { id: 2, text: "That is my first post!", countLikes: 5, author: "Alice" },
    { id: 3, text: "I am gonna sleep..", countLikes: 1, author: "Anna" },
    { id: 4, text: "What??!", countLikes: 11, author: "Dima" },
  ],
  post_current_text: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return state.post_current_text == ""
      ? state
      : {
        ...state,
        post_current_text: '',
        postsData: [...state.postsData, {id: 5, text: state.post_current_text, countLikes: 0, author: 'YOU'}],
      };
    case POST_TEXT_CHANGE:
      return {
        ...state,
        post_current_text: action.newText,
      };
  }

  return state;
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const postTextChangeActionCreator = (text) => ({
  type: POST_TEXT_CHANGE,
  newText: text,
});

export default profileReducer;
