export default function Pagination({ currentPage, pageCount, onPageChange })  {
    const handlePrevPage = () => {
      if (currentPage > 1) onPageChange(currentPage - 1);
    };
  
    const handleNextPage = () => {
      if (currentPage < pageCount) onPageChange(currentPage + 1);
    };
  
    const handlePageClick = (page) => {
      onPageChange(page);
    };
  
    return (
      <div className="flex justify-center text-sm  mt-4">
        <button onClick={handlePrevPage} disabled={currentPage === 1} className="px-2 py-1 border disabled:cursor-not-allowed">
          Prev
        </button>
        {Array.from({ length: pageCount }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageClick(page)}
            className={`px-2 py-1 border ${page === currentPage ? 'bg-red-500 text-white' : ''}`}
          >
            {page}
          </button>
        ))}
        <button onClick={handleNextPage} disabled={currentPage === pageCount} className="px-2 disabled:cursor-not-allowed py-1 border">
          Next
        </button>
      </div>
    );
  };
  