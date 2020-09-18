import React from 'react';
import cake from 'aliasImgs/cake.jpg';

const Home: React.FC = () => {

  return (
    <div className="content-inner">
      <p>hello Home</p>
      <img className="cake-img" src={cake} alt="cake" />
    </div>
  );
}

export default Home;