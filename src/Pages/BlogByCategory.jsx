import React, { useState } from "react";
import { useParams } from "react-router-dom";

import CategoryBlogList from "../Components/CategoryBlogList.jsx";
import Loader from "./Loader.jsx";

const BlogByCategory = () => {
  const { category } = useParams();
  const [loading,setLoading]=useState(false)

  ///for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);


  ///pagination
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
    return;
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
    return;
  };

  return (
    <>
     { console.log(" loading ..........",loading) }

     {loading && <Loader/>}
     
       <div className="blog_app">
       <main>
         <CategoryBlogList
           currentPage={currentPage}
           category={category}
           totalPages={totalPages}
           setTotalPages={setTotalPages}
           setLoading={setLoading}
           loading={loading}
         />
       </main>

       {!loading && (
             <div id="pagination-footer">
             <button
               id="prev-page"
               className="pagination-button"
               disabled={currentPage == 1}
               onClick={handlePreviousPage}
             >
               <i className="fa-solid fa-angle-left"></i>
             </button>
    
             <button
               id="next-page"
               className="pagination-button"
               disabled={currentPage == totalPages}
               onClick={handleNextPage}
             >
               <i className="fa-solid fa-angle-right"></i>
             </button>
             </div>

       )}
    
           
         
       

       
      
     </div>

     
     
    </>
  );
};

export default BlogByCategory;
