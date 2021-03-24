const CHANGE_FOLLOWING = "CHANGE-FOLLOWING";
const SET_USERS = "SET-USERS";

let initialState = {
  usersData: [
    {
      id: 1,
      followed: true,
      name: "Pavel Durov",
      status: "God of the programming",
      location: { city: "Kharkiv", country: "Ukraine" },
    },
    {
      id: 2,
      followed: false,
      name: "Ilon Mask",
      status: "SpaceX to space",
      location: { city: "Dnipro", country: "Ukraine" },
    },
    {
      id: 3,
      followed: true,
      name: "Steve Jobs",
      status: "IOS SEO",
      location: { city: "Moscow", country: "Russia" },
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FOLLOWING:
      return {
        ...state,
        usersData: state.usersData.map((user) => {
          return user.id == action.user_id
            ? { ...user, followed: !user.followed }
            : user;
        }),
      };
    case SET_USERS:
        return {
            ...state,
            usersData: [...state.usersData, ...action.users]
        };
    default:
      break;
  }

  return state;
};

// action creator
export const changeFoolowingAC = (user_id) => ({
  type: CHANGE_FOLLOWING,
  user_id: user_id,
});
export const setUsersAC = (users) => ({ type: SET_USERS, users: users });

export default usersReducer;