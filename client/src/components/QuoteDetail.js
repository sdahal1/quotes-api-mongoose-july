import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';



const QuoteDetail = (props) => {

    const [quoteInfo, setQuoteInfo] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/quotes/${props.id}`)
            .then(res=> {
                console.log("GOT ONE QUOTE******")
                console.log(res.data.results)
                console.log("GOT ONE QUOTE******")
                setQuoteInfo(res.data.results)

            })
            .catch(err=> console.log("error", err))
    },[])


    const deleteQuote =(e)=>{
        console.log("deleting something")
        axios.delete(`http://localhost:8000/api/quotes/${props.id}`)
            .then(res=>{
                console.log("deleting somethanggggg")
                console.log(res)
                console.log("deleting somethanggggg")
                navigate("/")

            })
            .catch(err=> console.log("errorrrrrr", err))
    }
    
    return (
        <div>
            <h3>Details about this quote.</h3>
            <p>Id of the quote: {props.id} </p>
            <p>Quote Author: {quoteInfo.author}</p>
            <p>Quote Content: {quoteInfo.content}</p>
            <p>Quoted on this date: {quoteInfo.quotedOn}</p>
            <button onClick= {deleteQuote} className="btn btn-danger">Delete</button>

        </div>
    );
};


export default QuoteDetail;