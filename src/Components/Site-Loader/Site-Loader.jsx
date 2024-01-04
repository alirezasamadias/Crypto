import { useState } from 'react';
// Images
import Logo from '../../Assets/Images/Logo.png';
// Css
import './Site-Loader.css';

function SiteLoader() {
  const [load, setLoad] = useState();

  setTimeout(() => {
    setLoad(true);
  }, 600);

  return (
    <div className={`site-loader ${(load ? 'hide' : '')}`}>
      <div className='loader'>
        <img src={Logo} alt='logo'/>
      </div>
    </div>
  );
}

export default SiteLoader;