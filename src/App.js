import React from "react";
import { Routes, Route } from "react-router-dom";


import Header from "./components/Header"
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Page404 from "./pages/Page404";
import Test from "./pages/Test";


import './scss/app.scss';


export const SearchContext = React.createContext();

function App() {

  const [searchValue, setSearchValue] = React.useState('');
  console.log('pre-production active')
  console.log('NewBranch active')
  console.log('NewBranch2 activate')

  return (
    <div className="wrapper">
    
     <SearchContext.Provider value={{searchValue, setSearchValue}}>

     <Header />
      <div className="content">
      
         <Routes>
         <Route path="/Home" element={<Home  />}/>
          <Route path="/" element={<Home  />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="*" element={<Page404 />}/>
          <Route path="/test" element={<Test />}/>
         </Routes>
        
      </div>

     </SearchContext.Provider>
      
    </div>
  );
}

export default App;
