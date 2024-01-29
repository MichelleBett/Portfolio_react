import axios from 'axios';
import { useState } from 'react';


const FetchData = () => {
    const [quote, setQuote] = useState('')
    
    axios.get('https://api.quotable.io/random')
    .then(res => {
        console.log(res.data.content)
        setQuote(res.data.content)
    }).catch(err =>{
        console.log(err)
    })
    return ( 
      <div className="about-info">
        <button onClick={FetchData }>Get Quote</button>
        { quote ? <p>{quote}</p> : null}

      </div>  
      
     );
}
 
export default FetchData;




 /*const [record, setRecords] = useState([])

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json() )
        .then(data => setRecords(data))
        .catch(err => console.log(err))
    }, [])
    return(
        
    <div>
        <ul>
            {setRecords.map((list, index)=>(
                <li key={index}>{list.id} | {list.name}</li>

            ))}
        </ul>
    </div>
    )*/