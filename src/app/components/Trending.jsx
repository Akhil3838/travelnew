import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { getTrendingPkg } from '../services/allApi';


function Trending() {
      const [trendingPackages, setTrendingPackages] = useState([]);

  const fetchTrendingPackages = async () => {
    try {
      const result = await getTrendingPkg();
      setTrendingPackages(result?.data?.trending_packages || []);
    } catch (error) {
      console.error('Error fetching packages:', error);
    }
  };

  useEffect(() => {
    fetchTrendingPackages();
  }, []);
console.log(trendingPackages);


  return (
    <>
      {/* <div className="container">
        <h2 className="display-5 text-white fw-bold mb-3  text-center">Trending Destinations</h2>
        <p className="lead  text-light text-center">Explore the most popular travel spots this season</p>
        
    <div id="locationsCarousel" className="carousel slide"> 
      <div className="carousel-inner">        
        <div className="carousel-inner">
          {trendingPackages.length > 0 ? (
            <div className="carousel-item active">
              <div className="row g-4">
                {trendingPackages.map((pkg) => (
                  <div key={pkg.id} className="col-md-6 col-lg-3">
<Link href={`/package/${pkg.slug}`} style={{ textDecoration: 'none' }}>
                      <div className="location-card">
                        <div className="location-image-container">
                          <img
                            src={pkg.thumbnails?.[0]?.image}
                            alt={pkg.package_title}
                            className="location-image"
                          />
                          {pkg.add_badge_status !== 'no' && (
                            <div className="location-badge">{pkg.add_badge_status}</div>
                          )}
                        </div>
                        <div className="location-info p-3">
                          <h3 className="location-name">{pkg.package_title}</h3>
                          <div className="location-meta d-flex justify-content-between align-items-center">
                            <span className="location-price">From ₹{pkg.price || 'N/A'}</span>
                            <span className="location-rating">⭐ {pkg.rating || '4.8'}</span>
                          </div>
                        </div>
                      </div>
  
</Link>                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p className="text-center my-4">No trending packages found</p>
          )}
        </div>
            
            
          </div>
          
          <button className="carousel-control-prev" type="button" data-bs-target="#locationsCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#locationsCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#locationsCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#locationsCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          </div>
        </div>
        
<Link href={'/packages'} style={{ textDecoration: 'none' }}>
            <div className="text-center mt-4">
              <button className="btn  view-all-btn px-4 py-2 d-flex align-items-center justify-content-center">
                <span >View All Destinations</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
        
                  className="bi bi-arrow-right ms-2"
                  viewBox="0 0 16 16"
                >
                  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-4.147-4.146a.5.5 0 1 1 .708-.708l5 5a.5.5 0 0 1 0 .708l-5 5a.5.5 0 1 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                </svg>
              </button>
            </div>
    
</Link>     
 </div> */}



 <div className="container">
  <h1 className="section-title">Top Destinations</h1>

  <div className="destinations-container">
    {/* Munnar */}
    <div className="destination-card">
      <img
        src="https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        alt="Munnar"
        className="destination-image"
      />
      <div className="destination-name">Munnar</div>
      <div className="tour-count">2 Tours</div>
    </div>

    {/* Thailand */}
    <div className="destination-card">
      <img
        src="https://images.unsplash.com/photo-1528181304800-259b08848526?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        alt="Thailand"
        className="destination-image"
      />
      <div className="destination-name">Thailand</div>
      <div className="tour-count">2 Tours</div>
    </div>

    {/* Ooty */}
    <div className="destination-card">
      <img
        src="https://s3.india.com/wp-content/uploads/2024/07/Historical-Places-To-Visit-In-Ooty.jpg##image/jpg"
        alt="Ooty"
        className="destination-image"
      />
      <div className="destination-name">Ooty</div>
      <div className="tour-count">4 Tours</div>
    </div>

    {/* Shimla */}
    <div className="destination-card">
      <img
        src="https://lp-cms-production.imgix.net/2019-06/4b8ec4d679d3f74c6b5f87a448d28196-shimla.jpg?auto=format,compress&q=72&w=1095&fit=crop&crop=faces,edges"
        alt="Shimla"
        className="destination-image"
      />
      <div className="destination-name">Shimla</div>
      <div className="tour-count">2 Tours</div>
    </div>

    {/* Kashmir */}
    <div className="destination-card">
      <img
        src="https://wanderon-images.gumlet.io/gallery/new/2025/08/08/1754654165130-places-to-visit-in-kashmir.jpg"
        alt="Kashmir"
        className="destination-image"
      />
      <div className="destination-name">Kashmir</div>
      <div className="tour-count">1 Tour</div>
    </div>

    {/* Bali */}
    <div className="destination-card">
      <img
        src="https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        alt="Bali"
        className="destination-image"
      />
      <div className="destination-name">Bali</div>
      <div className="tour-count">1 Tour</div>
    </div>
  </div>
</div>

    
    </>
  )
}

export default Trending