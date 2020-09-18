import React from 'react';

type ProductsProps = {
    message?: string
}

const Products: React.FC<ProductsProps> = ({ message }) => {

    return (
        <div>hello Products: {message}</div>
    );
}

export default Products;