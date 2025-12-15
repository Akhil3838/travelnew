"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { SearchPackagesApi } from "../services/allApi";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function SearchClient() {
  const searchParams = useSearchParams();

  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const date = searchParams.get("date"); // optional

  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    if (!from || !to) return;

    const fetchPackages = async () => {
      const fd = new FormData();
      fd.append("from_location", from);
      fd.append("to_location", to);

      if (date) fd.append("date", date);

      try {
        setLoading(true);
        setHasSearched(true);

        const result = await SearchPackagesApi(fd);
        setPackages(result?.data?.package || []);
      } catch (error) {
        console.error(error);
        setPackages([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, [from, to, date]);

  return (
    <>
      <Header />

      <div className="container mt-4">
        <h4 className="mb-3">Search Results</h4>

        {loading && <p className="text-center">Loading packages...</p>}

        {!loading && hasSearched && packages.length === 0 && (
          <p className="text-center text-muted">
            No packages found. Try another search.
          </p>
        )}

        <div className="row">
          {packages.map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100 shadow-sm">
                <img
                  src={item.thumbnail}
                  alt={item.package_title}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />

                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{item.package_title}</h5>

                  <p className="text-muted mb-1">
                    Season: {item.season || "All season"}
                  </p>

                  <p className="mb-1">
                    <del className="text-muted me-2">₹{item.price}</del>
                    <strong className="text-success">
                      ₹{item.special_price}
                    </strong>
                  </p>

                  <p className="small text-muted">
                    ⭐ {item.total_review_count} reviews
                  </p>

                  <a
                    href={`/package/${item.slug}`}
                    className="btn btn-outline-primary mt-auto"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: "100px" }} />
      <Footer />
    </>
  );
}
