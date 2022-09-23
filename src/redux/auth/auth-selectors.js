const isAuth = ({ auth }) => auth.isLogin;
const getUserName = ({ auth }) => auth.user.name;

const authSelectors = {
  isAuth,
  getUserName,
};

export default authSelectors;
