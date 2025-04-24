import React from 'react'
import toast from 'react-hot-toast';
import css from "./SearchBar.module.css"


const SearchBar = ({onSubmit, setPage, setImg}) => {

  const handleSubmit = (e) => {
e.preventDefault()
const searchValue = e.target.elements.searchValue.value.trim();
if(searchValue === ""){
  toast.error("Error", {position:"top-right"})
  return
}
setImg([])
setPage(1)
onSubmit(searchValue); 
e.target.reset(); 
}

  return (
<header >
  <form className={css.container}onSubmit={handleSubmit}>
    <input
    className={css.input}      
    type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      name='searchValue'
    />
    <button type="submit">Search</button>
  </form>
</header>
  )
}

export default SearchBar