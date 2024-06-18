import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AlphaVantageApiKey = 'ZWYPP17RRPR4MTIE';

const StockData = ({ symbol }) => {
    const [stockData, setStockData] = useState(null);

    useEffect(() => {
        const fetchStockData = async (symbol) => {
            try {
                const response = await axios.get(
                    `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${symbol}&apikey=${AlphaVantageApiKey}`
                );
                setStockData(response.data.bestMatches);
            } catch (error) {
                console.error('Error fetching stock data:', error);
            }
        };

        if (symbol) {
            fetchStockData(symbol);
        }
    }, [symbol]);

    if (!stockData) return <p>Loading...</p>;

    // Example: Displaying the first match details
    const firstMatch = stockData[0];
    if (!firstMatch) return <p>No data found for {symbol}</p>;

    return (
        <div>
            <h2>{firstMatch['2. name']} ({firstMatch['1. symbol']})</h2>
            <p>Type: {firstMatch['3. type']}</p>
            {/* Display more details as needed */}
        </div>
    );
};

export default StockData;
