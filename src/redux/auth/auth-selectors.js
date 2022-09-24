const isAuth = ({ auth }) => auth.isLogin;
const getUserName = ({ auth }) => auth.user.name;
const getIsCurrentUser = ({ auth }) => auth.isCurrentUser;

const authSelectors = {
  isAuth,
  getUserName,
  getIsCurrentUser,
};

export default authSelectors;
