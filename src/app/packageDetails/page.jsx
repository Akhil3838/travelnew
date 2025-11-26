'use client';

import Link from "next/link";
import React, { useState, useEffect } from "react";
import StickyHeader from "../components/StickyHeader";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { getRentACarFiltersApi, allRentACarApi } from "../services/allApi";
import FiltersSidebar from "../components/rentAcar/FiltersSidebar";
import CarCard from "../components/rentAcar/CarCard";
import MobileFilters from "../components/rentAcar/MobileFilters";
import Pagination from "../components/rentAcar/Pagination";

export default function Page() {

  // FILTER OPTIONS FROM API
  const [filters, setFilters] = useState({
    vehicle_types: [],
    fuel_types: [],
    brands: []
  });

  // SELECTED FILTER VALUES
  const [selectedFilters, setSelectedFilters] = useState({
    brand: "",
    vehicle_type: "",
    fuel_type: "",
    min_price: 10000,
    max_price: 1000000,
    page: 1
  });

  const [totalPages, setTotalPages] = useState(1);
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState({
    filters: false,
    cars: false
  });

  // Fetch filter list for sidebar
  const fetchFilters = async () => {
    setLoading(prev => ({ ...prev, filters: true }));
    try {
      const result = await getRentACarFiltersApi();
      if (result?.status) setFilters(result.data);
    } catch (error) {
      console.error("Error fetching filters:", error);
    } finally {
      setLoading(prev => ({ ...prev, filters: false }));
    }
  };

  // Fetch cars based on selected filters
  const fetchCars = async () => {
    setLoading(prev => ({ ...prev, cars: true }));
    try {
      const res = await allRentACarApi(selectedFilters);

      if (res?.status) {
        setCars(res.data.rentcars || []);
        setTotalPages(res.data.total_pages || 1);
      }
    } catch (error) {
      console.error("Error fetching cars:", error);
    } finally {
      setLoading(prev => ({ ...prev, cars: false }));
    }
  };

  // Handle toggle filters (brand, vehicle type, fuel type)
  const handleFilterChange = (key, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [key]: prev[key] === value ? "" : value,
      page: 1 // Reset to first page when filter changes
    }));
  };

  // Load sidebar filter list
  useEffect(() => {
    fetchFilters();
  }, []);

  // Re-fetch cars on any filter change
  useEffect(() => {
    fetchCars();
  }, [selectedFilters]);

  return (
    <>
      <StickyHeader />
      <Header />

      <div className="container mt-3">

        {/* MOBILE FILTER BUTTON */}
        <button className="rentacar-mobile-filter-btn"
          data-bs-toggle="offcanvas"
          data-bs-target="#rentacarSidebarOffcanvas">
          <i className="fas fa-filter me-2"></i> Filter
        </button>

        <div className="row mt-3">

          {/* LEFT SIDEBAR */}
          <FiltersSidebar
            filters={filters}
            selectedFilters={selectedFilters}
            handleFilterChange={handleFilterChange}
            setSelectedFilters={setSelectedFilters}
            loading={loading.filters}
          />

          {/* CAR LIST */}
          <div className="col-lg-9 col-md-8 col-12 rentacar-cards-container">
            {loading.cars ? (
              <div className="text-center py-5">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading cars...</span>
                </div>
                <p className="mt-2 text-muted">Loading cars...</p>
              </div>
            ) : cars.length === 0 ? (
              <div className="text-center py-5">
                <i className="fas fa-car text-muted" style={{ fontSize: "3rem" }}></i>
                <p className="mt-3 text-muted">No cars found matching your criteria</p>
              </div>
            ) : (
              cars.map((car, i) => <CarCard key={i} car={car} />)
            )}
          </div>

          {/* PAGINATION - Only show when not loading and there are cars */}
          {!loading.cars && cars.length > 0 && (
            <Pagination
              page={selectedFilters.page}
              totalPages={totalPages}
              onPageChange={(p) =>
                setSelectedFilters(prev => ({ ...prev, page: p }))
              }
            />
          )}

        </div>
      </div>

      {/* MOBILE FILTER SIDEBAR */}
      <MobileFilters
        filters={filters}
        selectedFilters={selectedFilters}
        handleFilterChange={handleFilterChange}
        setSelectedFilters={setSelectedFilters}
        loading={loading.filters}
      />

      <div style={{ paddingTop: "150px" }}></div>
      <Footer />
    </>
  );
}