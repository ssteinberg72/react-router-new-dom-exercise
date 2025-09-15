    // Home.jsx
    import React from 'react';
    import { Link } from 'react-router-dom'; // If you need navigation links

    const Home = () => {
      return (
        <div>
          <h1>Welcome to the Homepage!</h1>
          <p>This is the main page of your application.</p>
          {/* Example of a navigation link */}
          <Link to="/about">Learn more about us</Link>
        </div>
      );
    };

    export default Home;