import * as React from 'react';
import {
  StyledAuthContainer,
  StyledHeader,
  StyledLogoContainer,
  StyledMenuItemContainer,
  StyledUserEmail,
} from './styled/Layout';
import { useNavigate } from 'react-router-dom';
import useLogout from '../hooks/useLogout';
import { useAuthStore } from '../store/auth/useAuthStore';

const Header = (): JSX.Element => {
  const navigate = useNavigate();
  const [logoutUser] = useLogout();
  const user = useAuthStore((state) => state.user);

  const menuItems = [
    {
      itemName: 'Posts',
      itemPath: '/',
    },
    {
      itemName: 'Compose',
      itemPath: '/compose',
    },
  ];

  const redirect = (path: string): void => {
    navigate(path);
  };

  const handleLogout = () => {
    logoutUser();
  };

  return (
    <StyledHeader>
      <StyledLogoContainer onClick={() => redirect('/')}>
        <img src="https://zerosystems.com/wp-content/uploads/2022/03/ZERO-Black-Logo.png" />
      </StyledLogoContainer>
      {menuItems.map((item) => (
        <StyledMenuItemContainer key={item.itemName} onClick={() => redirect(item.itemPath)}>
          <p>{item.itemName}</p>
        </StyledMenuItemContainer>
      ))}
      {!user && (
        <StyledAuthContainer>
          <StyledMenuItemContainer onClick={() => redirect('/signup')}>
            <p>Sign up</p>
          </StyledMenuItemContainer>
          <StyledMenuItemContainer onClick={() => redirect('/login')}>
            <p>Login</p>
          </StyledMenuItemContainer>
        </StyledAuthContainer>
      )}
      {user && (
        <StyledAuthContainer>
          <StyledMenuItemContainer>
            <StyledUserEmail>{user.email}</StyledUserEmail>
          </StyledMenuItemContainer>
          <StyledMenuItemContainer onClick={handleLogout}>
            <p>Logout</p>
          </StyledMenuItemContainer>
        </StyledAuthContainer>
      )}
    </StyledHeader>
  );
};

export default Header;
