import React from 'react';

function Header() {
  return (
    <header>
      <h1>Ashutosh Munde</h1>
      <p>Cyber Security Researcher</p>
      {/* Add your contact information and social links here */}
      <p>Email: ashutoshmunde6@gmail.com | Phone: 9022248082</p>
      <p>
        <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a> | {/* Replace with your actual LinkedIn */}
        <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer">Twitter</a> | {/* Replace with your actual Twitter */}
        {/* Add more social links */}
      </p>
    </header>
  );
}

export default Header;
