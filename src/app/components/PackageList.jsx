import React, { useState } from "react";
import PackageCard from "./PackageCard";

const PackageList = ({ packages, totalpage, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (page) => {
    if (page >= 1 && page <= totalpage) {
      setCurrentPage(page);
      if (onPageChange) onPageChange(page); // notify parent
    }
  };
  return (
    <>
              <div className="col-lg-9">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div className="text-dark">
                <span className="me-2">Showing</span>
                <strong>1-{packages.length}</strong> of {packages.length} tours
              </div>
              <div>
                <select className="form-select form-select-lg rounded-pill">
                  <option>Sort by: Recommended</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Rating</option>
                  <option>Duration</option>
                </select>
              </div>
            </div>
            
            {packages.map((pkg) => (
                <PackageCard key={pkg.id} pkg={pkg} />

            ))}
            
{/* Modern Pagination with CSS & Bootstrap */}
<nav aria-label="Pagination" className="mt-5">
  <ul className="pagination justify-content-center modern-pagination">
    {/* Previous Button */}
    <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
      <button
        className="page-link modern-page-link"
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <i className="bi bi-chevron-left me-2"></i>
        Previous
      </button>
    </li>

    {/* Page Numbers */}
    {[...Array(totalpage)].map((_, index) => {
      const pageNum = index + 1;
      return (
        <li
          key={pageNum}
          className={`page-item ${currentPage === pageNum ? "active" : ""}`}
        >
          <button
            className="page-link modern-page-link"
            onClick={() => handlePageClick(pageNum)}
          >
            {pageNum}
          </button>
        </li>
      );
    })}

    {/* Next Button */}
    <li className={`page-item ${currentPage === totalpage ? "disabled" : ""}`}>
      <button
        className="page-link modern-page-link"
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalpage}
      >
        Next
        <i className="bi bi-chevron-right ms-2"></i>
      </button>
    </li>
  </ul>
</nav>          </div>

    </>
  )
}

export default PackageList