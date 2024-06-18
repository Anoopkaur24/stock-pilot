import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import StockList from './components/StockList';
import StockDetail from './components/StockDetail';
import axios from 'axios';
import './App.css';

const AlphaVantageApiKey = 'ZWYPP17RRPR4MTIE';

const App = () => {
    const [stocks, setStocks] = useState([]);
    const [selectedStock, setSelectedStock] = useState(null);

    const fetchStockData = async (symbol) => {
        try {
            const response = await axios.get(
                `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${symbol}&apikey=${AlphaVantageApiKey}`
            );
            setStocks(response.data.bestMatches);
        } catch (error) {
            console.error('Error fetching stock data:', error);
            setStocks([]); // Set stocks to empty array in case of error
        }
    };

    const handleSearch = async (query) => {
        await fetchStockData(query);
    };

    const handleSelectStock = (symbol) => {
        setSelectedStock(symbol);
    };

    return (
        <div className="App">
            <Header />
            <SearchBar onSearch={handleSearch} />
            <StockList stocks={stocks} onSelectStock={handleSelectStock} />
            <StockDetail symbol={selectedStock} />
        </div>
    );
};

export default App;
