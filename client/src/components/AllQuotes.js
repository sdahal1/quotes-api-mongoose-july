import React, {useState, useEffect} from 'react';
import axios from 'axios';

const AllQuotes = () => {
    const [allQuotes, setAllQuotes] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:8000/api/quotes")
        .then(res => {
            console.log("logging response!!", res)
            setAllQuotes(res.data.results)
        
        })
        .catch(err=> console.log("errorrr with axios call", err))
    }, [])
    

    return (
        <div>
            <h1>All the quotes component</h1>

            {allQuotes.map(q=>{
                return <div class="card">
                <div class="card-body">
                    <h4 class="card-title">{q.author}</h4>
                    <p class="card-text">
                    {q.content}
                    </p>
                    <p>Quoted on this day:{q.quotedOn}</p>
                    <a href="#!" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            })}
            
        </div>
    );
};

export default AllQuotes;