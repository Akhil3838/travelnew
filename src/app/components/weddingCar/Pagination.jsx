export default function Pagination({ page, totalPages, onPageChange }) {
    console.log(totalPages);
    
  return (
    <div className="d-flex gap-2 justify-content-center my-4">

      <button 
        className="btn btn-outline-dark"
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
      >
        Previous
      </button>

      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          onClick={() => onPageChange(i + 1)}
          className={`btn ${page === i + 1 ? "btn-dark" : "btn-outline-dark"}`}
        >
          {i + 1}
        </button>
      ))}

      <button
        className="btn btn-outline-dark"
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
      >
        Next
      </button>

    </div>
  );
}
