import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import c from "./Messages.module.css";
import Message from "./MessageItem/MessageItem";
import Dialog from "./DialogItem/DialogItem";
/*
class Messages extends React.Component {
  constructor(props) {
    debugger;
    super(props);
    
    this.dialogsJsx = props.state.dialogsData.map((d) => (
      <Dialog name={d.name} id={d.id} />
    ));
    this.messagesJsx = props.state.messagesData.map((m) => (
      <Message message={m.message} left={m.id % 2} />
    ));

    this.msgTextArea = React.createRef();

    this.addMessage = props.addMessage;
    this.btn_send_click = () => {
      debugger;
      if(this.msgTextArea.current.value != '') this.addMessage(this.msgTextArea.current.value);
      this.msgTextArea.current.value = '';
    };

    this.messagesDivRef = React.createRef();
  }

  render() {
    return (
      <div className={c.main}>
        <Redirect to="/messages/2" />

        <ul className={c.dialogs}>{this.dialogsJsx}</ul>

        <div>
          <div ref={this.messagesDivRef} className={c.messages}>{this.messagesJsx}</div>

          <div className={c.area_btn_wrap}>
            <textarea
              ref={this.msgTextArea}
              cols="30"
              rows="10"
              className={c.message_text_area}
              placeholder=" Message.."
              ></textarea>
            <button className={c.btn_send_msg} onClick={this.btn_send_click}>
              SEND
            </button>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount(){
    this.messagesDivRef.current.scrollTop = this.messagesDivRef.current.scrollHeight;
  }
  
}*/

const Messages = (props) => {
  //  МАПИМ ДАННЫЕ
  // debugger;
  let dialogsJsx = props.state.dialogsData.map((d) => (
    <Dialog name={d.name} key={d.id} id={d.id} />
  ));
  let messagesJsx = props.state.messagesData.map((m) => (
    <Message message={m.message} key={m.id} left={m.id % 2} />
  ));

  //  РЕФЫ
  // let msgTextArea = React.createRef();
  let messagesDivRef = React.createRef();

  //  ОБРАБОТЧИКИ
  let on_click_btn_send = () => {
    props.add_message();
  };
  let on_message_text_change = (event) => {
    props.message_text_change(event.target.value);
  };

  useEffect(() => {
    messagesDivRef.current.scrollTop = messagesDivRef.current.scrollHeight;
  });

  return (
    <div className={c.main}>
      <Redirect to="/messages/2" />
      <ul className={c.dialogs}>{dialogsJsx}</ul>
      <div>
        <div ref={messagesDivRef} className={c.messages}>
          {messagesJsx}
        </div>
        <div className={c.area_btn_wrap}>
          <textarea
            // ref={msgTextArea}
            value={props.message_current_text}
            cols="30"
            rows="10"
            className={c.message_text_area}
            placeholder=" Message.."
            onChange={on_message_text_change}
          ></textarea>
          <button className={c.btn_send_msg} onClick={on_click_btn_send}>
            SEND
          </button>
        </div>
      </div>
    </div>
  );
};

export default Messages;
