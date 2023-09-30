import { Fragment } from 'react';
import './App.css';
import Header from './compenents/header';
import Navigation from './compenents/navigation.jsx';
import Content from './compenents/content';
import Footer from './compenents/footer';




function App() {
  return (<>
    <Header/>
    <div id='centre'><Navigation/><Content/></div>
    <Footer/>
   
    </>)}

export default App;
