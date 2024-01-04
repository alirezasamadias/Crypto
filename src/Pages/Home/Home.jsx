import React, { useState, useEffect } from 'react';
// API
import { getCoin } from '../../Services/Api';
// Components
import Coin from '../../Parts/Coin/Coin';
import Loading from '../../Components/Loader/Loader';
// Hooks
import useTabTitle from '../../Hooks/useTabTitle'; 
// Css
import "./Home.css";

const Home = () => {
    // title
    useTabTitle('Home');

    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchAPI = async () => {
            const data = await getCoin();
            setCoins(data);
        }

        fetchAPI();
    }, []);

    const searchHandler = event => {
        setSearch(event.target.value);
    };

    const searchedCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <main className='main container'>
            <input className='search-box' type="text" placeholder="Search" value={search} onChange={searchHandler} />

            {
                coins.length ?
                <ul className='list'>
                    <span className='list-item list-title'>
                        <span>logo</span>
                        <span>name</span>
                        <span>symbol</span>
                        <span>price</span>
                        <span>price change</span>
                        <span>market cap</span>
                    </span>
                    {searchedCoins.map(coin => {
                        const {id,name,image,symbol,current_price,market_cap,price_change_percentage_24h} = coin;
                        
                        return(
                            <Coin
                                key={id}
                                image={image}
                                name={name}
                                symbol={symbol}
                                price={current_price}
                                priceChange={price_change_percentage_24h}
                                marketCap={market_cap}
                            />
                        );
                    })}
                </ul> :
                <Loading />
            }
        </main>
    );
};

export default Home;