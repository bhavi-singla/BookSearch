import react ,{useState}from "react";
import Card from "./Card";
import axios from "axios";

import { GoogleLogout } from 'react-google-login';

const clientId = "653650831518-ig1dm8llb40asrq6ik6u32alhdsjlhf9.apps.googleusercontent.com";
const Main=(props)=>{
    //console.log(props);
    if(props.id.length<=0 )
    {
        window.location="http://localhost:8000/";
    }
    const [search,setSearch]=useState("");
    const [bookData,setData]=useState([]);
    //console.log(id);
    const searchBook=async(evt)=>{
        if(evt.key==="Enter")
        {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU'+'&maxResults=40')
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))

            evt.preventDefault();
            //console.log(props.id);

            axios.post("http://localhost:9000/post",{
                name:props.Name,
                email:props.id,
                book:search,
            });
            /*const result = fetch("http://localhost:9000/post",{
                method:'POST',
                headers:{'Content_Type':'X-www-form-urlencoded'},
                body: JSON.stringify({
                    parcel:search
                }),
                params:JSON.stringify({
                    parcel:search
                })
            })*/
            /*.then(res => res.json())
            .then(json => console.log(json));

            const resultinjson = await(result.json());
            console.log(resultinjson);*/
        }
        
    }
    
    return(
        <>
            <GoogleLogout
                    clientId={clientId}
                    buttonText="Sign Out"
                    onLogoutSuccess={props.onSignoutSuccess}
                >
            </GoogleLogout>
            <div className="header">
                <div className="row1">
                    <h1 className="bold_font">{`Hello ${props.Name}`}</h1>
                    <h1>A room without books is like<br/> a body without a soul.</h1>
                </div>
                <div className="row2">
                    <h2>Find Your Book</h2>
                    <div className="search">
                        <input type="text" placeholder="Enter Your Book Name"
                        value={search} onChange={e=>setSearch(e.target.value)}
                        onKeyPress={searchBook}/>
                        <button><i className="fas fa-search"></i></button>
                    </div>
                    <img src="./images/bg2.png" alt="" />
                </div>
            </div>

            <div className="container">
              {
                    <Card book={bookData}/>
              }  
            </div>
        </>
    )
}
export default Main;