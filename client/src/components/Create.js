import React, {useState} from 'react';
import axios from 'axios';
import {navigate} from "@reach/router"

const Create = () => {
    const [formInfo, setFormInfo] = useState({
        content:"",
        author:"",
        quotedOn:"",
        isMotivational: false
    })

    const [formErrors, setFormErrors] = useState({})


    const changeHandler = (e)=>{
        console.log("changing some input now!!!!")
        console.log(e.target.type)
        console.log(e.target.name)
        console.log(e.target.value)
        if(e.target.type == "checkbox"){
            setFormInfo({
                ...formInfo,
                [e.target.name]:e.target.checked
            })
        }else{
            setFormInfo({
                ...formInfo,
                [e.target.name]:e.target.value
            })

        }
    }


    const submitHandler = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/quotes/create", formInfo)
            .then(res=> {
                console.log("RESPONSEEEEE INBETWEEN")
                console.log(res)
                console.log("***RESPONSEEEEE INBETWEEN***")
                if(res.data.results){
                    navigate("/")
    
                }else{
                    console.log("OOPSIEEE you gota fill this out properly!")
                    setFormErrors(res.data.error.errors)
                }

            })
            .catch(err=> console.log("errorr thooo when submitting the form!", err))
    }

    return (
        <div className = "container">
          <h3>Use this form to upload a new quote!</h3>  
          <form onSubmit={submitHandler}>
              <div className="form-group">
                  <label>Quoted By(Author):</label>
                  <input onChange= {changeHandler} type="text" name="author" id="" className="form-control" />
                  {formErrors.author? <p className="text-danger">{formErrors.author.message}</p>:""}
              </div>
              <div className="form-group">
                  <label>Content</label>
                  <textarea  onChange= {changeHandler} name="content" id="" cols="30" rows="10" className="form-control"></textarea>
                  {formErrors.content? <p className="text-danger">{formErrors.content.message}</p>: ""}

              </div>
              <div className="form-group">
                  <label>Quoted on:</label>
                  <input  onChange= {changeHandler} type="date" name="quotedOn" id="" className="form-control" />
              </div>
              <div className="form-group">
                  <label>Is Motivational?</label>
                  <input onChange = {changeHandler} type="checkbox" name="isMotivational" id="" />
              </div>
              <input type="submit" value="Upload Quote!" />
          </form>
        </div>
    );
};


export default Create;