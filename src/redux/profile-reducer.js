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
  let stateCopy;
  switch (action.type) {
    case ADD_POST: {
      if (state.post_current_text == "") return state;
      stateCopy = {
        ...state,
        postsData: [...state.postsData],
      };
      // stateCopy.postsData = [...state.postsData];
      stateCopy.postsData.push({
        id: 5,
        text: state.post_current_text,
        countLikes: 0,
        author: "YOU",
      });
      stateCopy.post_current_text = "";
      return stateCopy;
    }
    case POST_TEXT_CHANGE: {
      stateCopy = {...state};
      stateCopy.post_current_text = action.newText;
      return stateCopy;
    }
  }

  return state;
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const postTextChangeActionCreator = (text) => ({
  type: POST_TEXT_CHANGE,
  newText: text,
});

export default profileReducer;
