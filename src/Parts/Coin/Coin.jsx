// Css
import "./Coin.css";

const Coin = (props) => {
    const {name,image,symbol,price,marketCap,priceChange} = props;
    
    return (
        <li className='list-item'>
            <img className='image' src={image} alt={name} />
            <span className='name' >{name}</span>
            <span className='symbol'>{symbol.toUpperCase()}</span>
            <span className='currentPrice' >$ {price.toLocaleString()}</span>
            <span className={priceChange > 0 ? 'green-price' : 'red-price'}>{priceChange.toFixed(2)}</span>
            <span className='marketCap' >$ {marketCap.toLocaleString()}</span>
        </li>
    );
};

export default Coin;