import React from 'react';
import { Input, Button } from 'semantic-ui-react';
import './Header.css';

const Header = ({ showLogin, showPostPage }) => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">DEV@Deakin</div>
        <div className="search-bar">
          <Input fluid icon="search" placeholder="Search..." />
        </div>
        <div className="header-buttons">
          {/* Post button triggers showPostPage */}
          <Button className="post-btn" onClick={showPostPage}>
            Post
          </Button>
          {/* Login button triggers showLogin */}
          <Button className="login-btn" onClick={showLogin}>
            Login
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
