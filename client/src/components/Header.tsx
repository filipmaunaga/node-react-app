import * as React from "react";
import { StyledHeader, StyledMenuItemContainer } from "./styled/Layout";
import { useNavigate } from "react-router-dom";

const Header = (): JSX.Element => {
  const navigate = useNavigate();
  const menuItems = [
    {
      itemName: "Posts",
      itemPath: "/",
    },
    {
      itemName: "Compose",
      itemPath: "/compose",
    },
  ];

  const redirect = (path: string): void => {
    navigate(path);
  };

  return (
    <StyledHeader>
      <div>Logo</div>
      {menuItems.map((item) => (
        <StyledMenuItemContainer onClick={() => redirect(item.itemPath)}>
          <p>{item.itemName}</p>
        </StyledMenuItemContainer>
      ))}
    </StyledHeader>
  );
};

export default Header;
