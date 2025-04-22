import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar/SearchBar";
import axios from "axios";
import {Api} from "../Search"
import toast, { ToastBar, Toaster } from "react-hot-toast";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";





function App() {

const [inputText, setInputText] = useState("")
const [error, setError] = useState(false);
const [isLoading, setIsLoading] = useState(false);
const [img, setImg] = useState([])
const [page, setPage] = useState()













  useEffect(()=> {
    if(inputText === ""){
      return
    }
  setIsLoading(!isLoading)
async function getData() {
  setIsLoading(true);
try{
  const data = await Api(inputText)
  setImg(data.results)
  setPage(data.total)
  setIsLoading(!isLoading)
}catch{
  setError(true);
  toast.error('Помилка завантаження');
}finally{
  setIsLoading(false);
}
}
getData();
  }, [inputText]);



  return <>
  <Toaster/>
  <SearchBar onSubmit={setInputText}/>
  <ImageGallery img={img}/>
  {isLoading && <Loader/>}
  </>
}

export default App;
