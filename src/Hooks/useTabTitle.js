import { useEffect, useState } from 'react';

function useTabTitle(pageName) {
    const [title , setTitle] = useState('Crypto');
    
    useEffect(()=>{
        setTitle(`${pageName} - ${title}`);
    },[]);

    window.document.title = title;
}

export default useTabTitle;