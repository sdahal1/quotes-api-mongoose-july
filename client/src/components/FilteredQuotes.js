import React, {useState, useEffect} from 'react';
import axios from 'axios'


const FilteredQuotes = () => {
    const [allQuotes, setAllQuotes] = useState([])
    const [popularityClicked, setPopularityClicked] = useState(false)

    useEffect(()=>{
        axios.get("http://localhost:8000/api/quotes")
        .then(res => {
            console.log("logging response!!", res)
            setAllQuotes(res.data.results)
        
        })
        .catch(err=> console.log("errorrr with axios call", err))
    }, [popularityClicked])


    const increasePopularity =(e, quote)=>{
        console.log("button clicked to increase popularity")
        console.log(quote)
        quote.popularityLevel+= 1
        console.log(quote)
        axios.put(`http://localhost:8000/api/quotes/${quote._id}`, quote )
            .then(res=>{
                console.log("UPDATED SOMETHING!", res)
                setPopularityClicked(!popularityClicked)
            })
            .catch(err=> console.log(err))
        

    }


    return (
        <div>
            <h3>QUOTES ALL ORGANIZED BY THEIR POPULARITY LEVEL</h3>
            <div className="row">
                <div className="col border">
                    <h4>Quotes with popularity level between 1-5</h4>
                    {allQuotes.filter(q=> q.popularityLevel <=5).map((q,i)=>{
                        return <div key={i} className="card">
                        <div className="card-body">
                            <h4 className="card-title">{q.author}</h4>
                            <p className="card-text">
                            {q.content}
                            </p>
                            <p>Popularity level: {q.popularityLevel}</p>
                            <button onClick={e=>increasePopularity(e, q)} className="btn-success">Raise Popularity by 1</button>
                            {/* <p>Quoted on this day:{q.quotedOn}</p> */}
                           
        
                        </div>
                    </div>
                    })}
                </div>
                <div className="col border">
                    <h4>Quotes with popularity level between 6-8</h4>
                    {allQuotes.filter(q=> q.popularityLevel >=6 && q.popularityLevel <= 8).map((q,i)=>{
                        return <div key={i} className="card">
                        <div className="card-body">
                            <h4 className="card-title">{q.author}</h4>
                            <p className="card-text">
                            {q.content}
                            </p>
                            <p>Popularity level: {q.popularityLevel}</p>
                            <button onClick={e=>increasePopularity(e, q)} className="btn-success">Raise Popularity by 1</button>

                            {/* <p>Quoted on this day:{q.quotedOn}</p> */}
                           
        
                        </div>
                    </div>
                    })}
                </div>
                <div className="col border">
                    <h4>Quotes with popularity level between 8-10</h4>
                    {allQuotes.filter(q=> q.popularityLevel >8).map((q,i)=>{
                        return <div key={i} className="card">
                        <div className="card-body">
                            <h4 className="card-title">{q.author}</h4>
                            <p className="card-text">
                            {q.content}
                            </p>
                            <p>Popularity level: {q.popularityLevel}</p>
                            <button onClick={e=>increasePopularity(e, q)} className="btn-success">Raise Popularity by 1</button>

                            {/* <p>Quoted on this day:{q.quotedOn}</p> */}
                           
        
                        </div>
                    </div>
                    })}
                </div>
            </div>
        </div>
    );
};


export default FilteredQuotes;