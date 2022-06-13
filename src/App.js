import React ,{useState,useEffect}from 'react';
import './App.css';
import Main from './Components/Main';
import { Route, BrowserRouter,Routes,useNavigate} from 'react-router-dom';
import Login from './login';
import './Components/style.css';

function App() {

  /*const routs = (
  < BrowserRouter >
     <div>
       <Routes>
        <Route exact path="/" component={Login} />
        <Route path="/search" component={ App } />
        </Routes>
     </div>
  </ BrowserRouter >
);
*/ 
const navigate = useNavigate();
const [personId,setpersonId]=useState({Name:"",id:""});

  const onLoginSuccess = (res) => {
    setpersonId({Name:res.profileObj.name,id:res.profileObj.email});
    
    //console.log('Login Success:', res.profileObj);
    navigate('/search',{
      personId,onSignoutSuccess,
    })
    //window.location="http://localhost:8000/search";
    //setShowSearchPage(true);   
  };
  const onSignoutSuccess = () => {
    alert("You have been logged out successfully");
    console.clear();
    window.location="http://localhost:8000";

    //setShowSearchPage(false);
  };

  /*useEffect( () => {
    //console.log(showSearchPage);

    if(showSearchPage && window.location.toString()==="http://localhost:8000/")
    {
      console.log(showSearchPage);
      //window.location="http://localhost:8000/search";
      //<Navigate to="http://localhost:8000/search" replace={true}/>
    }
    else if(!showSearchPage && window.location.toString()==="http://localhost:8000/search"){
      console.log(showSearchPage);
      //window.location="http://localhost:8000/";
      //<Navigate to='/' />
    }
},[showSearchPage]);*/

  /*const changePage = () => {
    if(showSearchPage && window.location==="http://localhost:8000")
    {
      console.log(showSearchPage);
      window.location="http://localhost:8000/search";
      //<Navigate to="http://localhost:8000/search" replace={true}/>
    }
    else if(!showSearchPage && window.location==="http://localhost:8000/search"){
      console.log(showSearchPage);
      window.location="http://localhost:8000/";
      //<Navigate to='/' />
    }
  }*/
  
  /*if(showSearchPage)
  {
    console.log(showSearchPage);
    <Navigate to="http://localhost:8000/search" replace={true}/>
  }
  else{
    <Navigate to='/' />
  }*/

  return (
    <div className="App">
    <div>
      <Routes>
       <Route exact path="/" element={<Login onLoginSuccessfully={onLoginSuccess} />} />
        
       <Route path="/search" element={<Main {...personId} onSignoutSuccess={onSignoutSuccess}/>} />
        
       </Routes>
    </div>
   {//routs
   }
   </div>
  );
}

export default App;
