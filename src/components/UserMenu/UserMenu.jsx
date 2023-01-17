import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { selectUser } from 'redux/auth/authSelectors';

function UserMenu() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <p>{user.email[0]}</p>
      <p>{user.email}</p>
      <button type="button" onClick={handleClick}>
        Logout
      </button>
    </div>
  );
}

export default UserMenu;
