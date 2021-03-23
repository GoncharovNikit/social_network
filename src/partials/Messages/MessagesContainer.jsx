import React from "react";
import { connect } from "react-redux";
import {
  addMessageActionCreator,
  messageTextChangeActionCreator,
} from "../../redux/messages-reducer";
// import StoreContext from "../../StoreContext";
import Messages from "./Messages";

// const MessagesContainer = (props) => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState().messages;
//         //  ОБРАБОТЧИКИ
//         let add_message = () => {
//           store.dispatch(addMessageActionCreator());
//         };
//         let message_text_change = (text) => {
//           store.dispatch(messageTextChangeActionCreator(text));
//         };

//         return (
//           <Messages
//             message_text_change={message_text_change}
//             add_message={add_message}
//             message_current_text={state.message_current_text}
//             state={state}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

let mapStateToProps = (state) => {
  return {
    state: state.messages,
    message_current_text: state.messages.message_current_text,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    message_text_change: text => dispatch(messageTextChangeActionCreator(text)),
    add_message: () => dispatch(addMessageActionCreator()),
  };
};

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages); //первый коннект вернет функцию - мы ее вызовем

export default MessagesContainer;

/*const MessagesContainer = (props) => {
  let state = props.store.getState().messages;

  //  ОБРАБОТЧИКИ
  let add_message = () => {
    props.store.dispatch(addMessageActionCreator());
  };
  let message_text_change = (text) => {
    props.store.dispatch(messageTextChangeActionCreator(text));
  };
  debugger;
  return (
      <Messages
        message_text_change={message_text_change}
        add_message={add_message}
        message_current_text={state.message_current_text}
        state={state}
      />
  );
};*/
