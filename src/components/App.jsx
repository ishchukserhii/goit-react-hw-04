import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar/SearchBar";
import axios from "axios";
import { Api } from "../Search";
import toast, { ToastBar, Toaster } from "react-hot-toast";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";

function App() {
  const [inputText, setInputText] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [img, setImg] = useState([]);
  const [total, setTotal] = useState();
  const [page, setPage] = useState(1);
  const [loadBtn, setLoadBtn] = useState(false);

  useEffect(() => {
    if (inputText === "") {
      return;
    }
    setIsLoading(!isLoading);
    async function getData() {
      setIsLoading(true);
      try {
        const data = await Api(
          inputText,
          page
        );
        setImg(...img, data.results);
        setTotal(data.total);
        setIsLoading(!isLoading);
      } catch {
        setError(true);
        toast.error("Помилка завантаження");
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [inputText]);

  const loadMore = () => {
    setPage + 1;
  };

  return (
    <>
      <Toaster />
      <SearchBar onSubmit={setInputText} setPage={setPage} />
      <ImageGallery img={img} />
      {isLoading && <Loader />}
      {loadBtn && <LoadMoreBtn setPage={setPage} page={page} />}
    </>
  );
}

export default App;
