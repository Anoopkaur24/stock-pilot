import React from 'react';

const StockList = ({ stocks, onSelectStock }) => {
    if (!stocks) {
        return <p>Loading...</p>; // or some other loading indicator
    }

    if (stocks.length === 0) {
        return <p>No stocks found</p>; // handle case where stocks array is empty
    }

    return (
        <div>
            <h2>Stock List</h2>
            <ul>
                {stocks.map((stock, index) => (
                    <li key={index} onClick={() => onSelectStock(stock.symbol)}>
                        {stock.name} ({stock.symbol})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StockList;
