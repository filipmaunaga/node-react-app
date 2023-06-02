import * as React from 'react';
import { StyledHeader, StyledLogoContainer, StyledMenuItemContainer } from './styled/Layout';
import { useNavigate } from 'react-router-dom';
import { ZeroDollarIdeaLogo } from '../assets/images/ZeroDollarIdeaLogo';
import useLogout from '../hooks/useLogout';

const Header = (): JSX.Element => {
  const navigate = useNavigate();
  const [logoutUser] = useLogout();

  const menuItems = [
    {
      itemName: 'Posts',
      itemPath: '/',
    },
    {
      itemName: 'Compose',
      itemPath: '/compose',
    },
    {
      itemName: 'Sign Up',
      itemPath: '/signup',
    },
    {
      itemName: 'Login',
      itemPath: '/login',
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
      <StyledMenuItemContainer onClick={handleLogout}>
        <p>Logout</p>
      </StyledMenuItemContainer>
    </StyledHeader>
  );
};

export default Header;
