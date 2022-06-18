import React,{useState , useEffect} from 'react';
//api
import { getCoin } from '../services/api';
//components
import Loader from './Loader';
import Coin from './Coin';
//styles
import styles from './Landing.module.css';
const Landing = () => {
    const [coins , setCoins]=useState([]);
    const [search , setSearch]=useState("");
    useEffect(()=>{
        const fetchApi=async()=>{
            const data=await getCoin();
            console.log(data);
            setCoins(data);
        }
        fetchApi();
    },[])
    const searchHandler =event=>{
        setSearch(event.target.value)
    }
    const searchedCoin=coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));
    return (
        <div className={styles.container}>
        
            <input className={styles.input} type="text" placeholder="Search" value={search} onChange={searchHandler}/>
            {
                coins.length ?
                <div className={styles.coinContainer}>
                {
                    searchedCoin.map(coin => <Coin
                        key={coin.id}
                        name={coin.name}
                        image={coin.image}
                        symbol={coin.symbol}
                        price={coin.current_price}
                        marketCap={coin.market_cap}
                        priceChange={coin.price_change_percentage_24h}
                    />)
                }
            </div> :
            <Loader/>
            }  
        </div>
    );
};

export default Landing;