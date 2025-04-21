import { useEffect } from "react";
import "./App.css";
import SearchBar from "./SearchBar/SearchBar";
import axios from "axios";
import {Api} from "../Search"





function App() {

  useEffect(()=> {
    Api()
    .then((data) => console.log(data))
    .catch()
  }, [])


  return <>
  <SearchBar/>
  </>;
}

export default App;
