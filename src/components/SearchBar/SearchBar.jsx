import React from 'react'
import toast from 'react-hot-toast';



const SearchBar = ({onSubmit}) => {

  const handleSubmit = (e) => {
e.preventDefault()
const searchValue = e.target.elements.searchValue.value.trim();
if(searchValue === ""){
  toast.error("Error")
  return
}
onSubmit(searchValue); 
e.target.reset(); 
}

  return (
<header >
  <form onSubmit={handleSubmit}>
    <input
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