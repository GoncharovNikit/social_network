const ADD_MESSAGE = "ADD-MESSAGE";
const MESSAGE_TEXT_CHANGE = "MESSAGE-TEXT-CHANGE";

let initialState = {
  messagesData: [
    { id: 1, message: "How is it going?" },
    { id: 2, message: "Whatt?" },
    { id: 3, message: "Ok, just do it" },
    { id: 4, message: 'Not every day, ok"' },
    { id: 5, message: "Show me what you can!" },
    { id: 6, message: "And what?" },
    { id: 7, message: "And what can you tell " },
    { id: 8, message: "And what can you tell " },
    { id: 9, message: "And what can you tell " },
    { id: 10, message: "And what can you tell " },
    { id: 11, message: "And what can you tell " },
    { id: 12, message: "And what can you tell " },
    { id: 13, message: "And what can you tell " },
    { id: 14, message: "And what can you tell " },
    { id: 15, message: "And what can you tell " },
    { id: 16, message: "And what can you tell " },
    { id: 17, message: "And what can you tell " },
    { id: 18, message: "And what can you tell " },
  ],
  dialogsData: [
    { id: 1, name: "Vasya" },
    { id: 2, name: "Petya" },
    { id: 3, name: "Lyosha" },
    { id: 4, name: "Vlyadik" },
    { id: 5, name: "Maksim" },
    { id: 6, name: "Ilon Mask" },
    { id: 7, name: "John" },
    { id: 8, name: "Viktor" },
    { id: 9, name: "Sharl Pyero" },
    { id: 10, name: "Winston Cherchel" },
    { id: 11, name: "Grifin" },
    { id: 12, name: "Harry Potter" },
    { id: 13, name: "David Guetta" },
    { id: 14, name: "Alice" },
    { id: 15, name: "Henry Cavill" },
    { id: 16, name: "Geralt from Rivia" },
    { id: 17, name: "Mikel Jacson" },
    { id: 18, name: "Steve Jobs" },
    { id: 19, name: "Mary" },
    { id: 20, name: "Pavel Durov" },
  ],
  message_current_text: "",
};

const messagesReducer = (state = initialState, action) => {
  let stateCopy;
  switch (action.type) {
    case ADD_MESSAGE: {
      
      if (state.message_current_text == "") return state;
      stateCopy = {
        ...state,
        message_current_text: "",
        messagesData: [
          ...state.messagesData, { id: 10, message: state.message_current_text },
        ],
      };
      return stateCopy;
    }
    case MESSAGE_TEXT_CHANGE: {
      stateCopy = { ...state };
      stateCopy.message_current_text = action.newText;
      return stateCopy;
    }
  }

  return state;
};

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const messageTextChangeActionCreator = (text) => ({
  type: MESSAGE_TEXT_CHANGE,
  newText: text,
});

export default messagesReducer;
