import { connect } from "react-redux";
import { changeFoolowingAC, setUsersAC } from "../../redux/users-reducer";
import Users from "./Users";

let mapStateToProps = (state) => {
    return {
        users: state.users.usersData
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        change_following: user_id => dispatch(changeFoolowingAC(user_id)),
        set_users: users => dispatch(setUsersAC(users)),
    };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;