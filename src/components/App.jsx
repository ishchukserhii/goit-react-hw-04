import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar/SearchBar";
import { Api } from "../Search";
import toast, { ToastBar, Toaster } from "react-hot-toast";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import Modal from "react-modal";
import ImageModal from "./ImageModal/ImageModal";

function App() {
  const [inputText, setInputText] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [img, setImg] = useState([]);
  const [page, setPage] = useState(1);
  const [loadBtn, setLoadBtn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  Modal.setAppElement("#root");

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const perPage = 12;

  useEffect(() => {
    if (inputText === "") {
      return;
    }
    async function getData() {
      setIsLoading(true);
      try {
        setError(false);
        const data = await Api(inputText, page, perPage);

        setImg((img) => {
          const updatedImg = [...img, ...data.results];
          if (data.total - updatedImg.length > 0) {
            setLoadBtn(true);
          } else {
            setLoadBtn(false);
          }
return updatedImg
        });
      } catch {
        setError(true);
        setLoadBtn(false);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [inputText, page]);

  const loadMore = ()=>{
    setPage(page + 1)
  }

  return (
    <>
      <Toaster />
      <SearchBar onSubmit={setInputText} setPage={setPage} setImg={setImg} />
      {img.length > 0 && <ImageGallery  img={img} onImageClick={handleImageClick} />}
      {error && <ErrorMessage />}
      {isLoading && <Loader />}
      {img.length > 0 && loadBtn && <LoadMoreBtn loadMore={loadMore} />}
      <ImageModal  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  imageUrl={selectedImage}/>
    </>
  );
}

export default App;
