import React, { useState } from "react";
import PackageCard from "./PackageCard";

const PackageList = ({ packages = [], totalpage = 1, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (page) => {
    if (page >= 1 && page <= totalpage && page !== currentPage) {
      setCurrentPage(page);
      if (onPageChange) onPageChange(page);
    }
  };

  // 🔹 Generate short pagination numbers
  const getPagination = () => {
    const pages = [];
    const delta = 1; // pages around current

    for (let i = 1; i <= totalpage; i++) {
      if (
        i === 1 ||
        i === totalpage ||
        (i >= currentPage - delta && i <= currentPage + delta)
      ) {
        pages.push(i);
      }
    }

    // Add dots (...)
    const finalPages = [];
    let lastPage = null;

    pages.forEach((page) => {
      if (lastPage && page - lastPage > 1) {
        finalPages.push("...");
      }
      finalPages.push(page);
      lastPage = page;
    });

    return finalPages;
  };

  return (
    <>
      <div className="col-lg-9">
        {/* Top Bar */}
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

        {/* Package Cards */}
        {packages.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} />
        ))}

        {/* Pagination */}
        {totalpage > 1 && (
          <nav aria-label="Pagination" className="mt-5">
            <ul className="pagination justify-content-center modern-pagination">
              {/* Previous */}
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
              {getPagination().map((page, index) =>
                page === "..." ? (
                  <li key={`dots-${index}`} className="page-item disabled">
                    <span className="page-link modern-page-link">...</span>
                  </li>
                ) : (
                  <li
                    key={page}
                    className={`page-item ${
                      currentPage === page ? "active" : ""
                    }`}
                  >
                    <button
                      className="page-link modern-page-link"
                      onClick={() => handlePageClick(page)}
                    >
                      {page}
                    </button>
                  </li>
                )
              )}

              {/* Next */}
              <li
                className={`page-item ${
                  currentPage === totalpage ? "disabled" : ""
                }`}
              >
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
          </nav>
        )}
      </div>
    </>
  );
};

export default PackageList;
