import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Login from './Login';
import SignUp from './SignUp';
import PostPage from './PostPage';

function App() {
  const [currentView, setCurrentView] = useState('');

  const showLogin = () => setCurrentView('login');
  const showSignUp = () => setCurrentView('signup');
  const redirectToHome = () => setCurrentView('home');
  const showPostPage = () => setCurrentView('post'); // Add function for Post Page

  return (
    <div>
      {/* Pass showPostPage to Header */}
      <Header showLogin={showLogin} showPostPage={showPostPage} />
      {/* Conditional rendering based on currentView */}
      {currentView === 'login' && <Login showSignUp={showSignUp} redirectToHome={redirectToHome} />}
      {currentView === 'signup' && <SignUp showLogin={showLogin} />}
      {currentView === 'home' && <h1>Welcome to the Home Page!</h1>}
      {currentView === 'post' && <PostPage />} {/* Render PostPage */}
    </div>
  );
}

export default App;
