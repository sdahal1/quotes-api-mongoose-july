import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';

const AllQuotes = () => {
    const [allQuotes, setAllQuotes] = useState([])
    const [deleteclicked, setDeleteClicked] = useState(false)

    useEffect(()=>{
        axios.get("http://localhost:8000/api/quotes")
        .then(res => {
            console.log("logging response!!", res)
            setAllQuotes(res.data.results)
        
        })
        .catch(err=> console.log("errorrr with axios call", err))
    }, [deleteclicked])
    

    const deleteQuote=(e, quoteid )=>{
        console.log("deleting the quote thooooo")
        console.log(quoteid)
        axios.delete(`http://localhost:8000/api/quotes/${quoteid}`)
            .then(res=>{
                console.log("*******")
                console.log(res)
                console.log("*******")
                setDeleteClicked(!deleteclicked)

            })
            .catch(err=> console.log(err))

    }

    return (
        <div>
            <h1>All the quotes component</h1>

            {allQuotes.map(q=>{
                return <div className="card">
                <div className="card-body">
                    <h4 className="card-title">{q.author}</h4>
                    <p className="card-text">
                    {q.content}
                    </p>
                    {/* <p>Quoted on this day:{q.quotedOn}</p> */}
                    
                    <Link to= {`/quotes/info/${q._id}`} className="btn btn-primary m-2">More Info</Link>
                    <button onClick={(e)=>deleteQuote(e, q._id)} className="btn btn-danger">Delete</button>
                </div>
            </div>
            })}
            
        </div>
    );
};

export default AllQuotes;