import React from 'react';

// import from locals
import Products from 'aliasComps/Products';
import iceCreamImg from 'aliasImgs/ice_cream.jpg';

const About: React.FC = () => {

    return (
        <div className="content-inner">
            <p>hello About</p>
            <img className="food-img" src={iceCreamImg} alt="ice cream"/>
            <Products message={'i am message'} />
        </div>
    );
}

export default About;