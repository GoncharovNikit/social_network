import messagesReducer from "./messages-reducer";
import navbarReducer from "./navbar-reducer";
import profileReducer from "./profile-reducer";

let store = {
  _state: {
    messages:{
      messagesData: [
        { id: 1, message: "How is it going?" },
        { id: 2, message: "Whatt?" },
        { id: 3, message: "Ok, just do it" },
        { id: 4, message: 'Not every day, ok"' },
        { id: 5, message: 'Show me what you can!' },
        { id: 6, message: 'And what?' },
        { id: 7, message: 'And what can you tell ' },
        { id: 8, message: 'And what can you tell ' },
        { id: 9, message: 'And what can you tell ' },
        { id: 9, message: 'And what can you tell ' },
        { id: 9, message: 'And what can you tell ' },
        { id: 9, message: 'And what can you tell ' },
        { id: 9, message: 'And what can you tell ' },
        { id: 9, message: 'And what can you tell ' },
        { id: 9, message: 'And what can you tell ' },
        { id: 9, message: 'And what can you tell ' },
        { id: 9, message: 'And what can you tell ' },
        { id: 9, message: 'And what can you tell ' },
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
      newMessageText: '',
    },
    profile: {
      postsData: [
        { id: 1, text: "How are you, guys?", countLikes: 15, author: "John" },
        { id: 2, text: "That is my first post!", countLikes: 5, author: "Alice" },
        { id: 3, text: "I am gonna sleep..", countLikes: 1, author: "Anna" },
        { id: 4, text: "What??!", countLikes: 11, author: "Dima" },
      ],
      newPostText: '',
    },
    navbar: {
      friends: [
        { id: 1, name: "Vasya" },
        { id: 2, name: "Petya" },
        { id: 3, name: "Lyosha" },
        { id: 4, name: "Vlyadik" },
        { id: 5, name: "Maksim" },
        { id: 6, name: "Ilon Mask" },
        { id: 7, name: "John" },
      ],
    },

  },
  _callSubscriber() {
    console.log('State has changed');
  },
  getState() {
    return this._state;
  },

  // addPost() {
    
  // },
  // addMessage() {
    
  // },
  // newPostTextChange(newText) {
    
  // },
  // messageTextChange(newText){
    
  // },

  subscribe(observer) {  //observer - наблюдатель
    // закинем ререндер нормальный из index.js
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profile = profileReducer(this.getState().profile, action);
    this._state.messages = messagesReducer(this.getState().messages, action);
    this._state.navbar = navbarReducer(this.getState().navbar, action);
    
    this._callSubscriber();    
  }
};

export default store;
window.store = store;  // чтоб из консоли глобально можно было обращаться к объекту