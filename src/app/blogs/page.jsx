import Link from 'next/link';
import React from 'react';
import StickyHeader from '../components/StickyHeader';

function BlogList() {
  // Sample blog data
  const blogPosts = [
    {
      id: 1,
      title: "10 Hidden Gems in Southeast Asia You Must Visit",
      excerpt: "Discover the less-traveled paths and authentic experiences that will make your Southeast Asian adventure unforgettable.",
      image: "https://images.unsplash.com/photo-1528181304800-259b08848526?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Adventure Travel",
      author: "Sarah Chen",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      featured: true
    },
    {
      id: 2,
      title: "The Ultimate Guide to Sustainable Travel in 2024",
      excerpt: "Learn how to explore the world responsibly while minimizing your environmental impact and supporting local communities.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Sustainable Travel",
      author: "Mike Rodriguez",
      date: "Dec 12, 2024",
      readTime: "6 min read",
      featured: false
    },
    {
      id: 3,
      title: "Digital Nomad Life: Best Cities for Remote Work",
      excerpt: "From Bali to Lisbon, explore the top destinations that offer perfect work-life balance for digital nomads.",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Digital Nomad",
      author: "Emma Watson",
      date: "Dec 10, 2024",
      readTime: "10 min read",
      featured: false
    },
    {
      id: 4,
      title: "Culinary Journeys: Street Food Tours Around the World",
      excerpt: "Embark on a gastronomic adventure through the vibrant street food scenes of Asia, Europe, and Latin America.",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Food Travel",
      author: "David Kim",
      date: "Dec 8, 2024",
      readTime: "7 min read",
      featured: false
    },
    {
      id: 5,
      title: "Winter Wonderlands: Best Snow Destinations for 2024",
      excerpt: "From the Alps to the Rockies, discover the most magical winter destinations for skiing and snow adventures.",
      image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Winter Travel",
      author: "Lisa Wang",
      date: "Dec 5, 2024",
      readTime: "9 min read",
      featured: false
    },
    {
      id: 6,
      title: "Budget Travel: How to See Europe for Under $50 a Day",
      excerpt: "Proven strategies and insider tips for experiencing Europe's wonders without breaking the bank.",
      image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Budget Travel",
      author: "Alex Thompson",
      date: "Dec 3, 2024",
      readTime: "11 min read",
      featured: false
    }
  ];

  const categories = [
    "All Topics",
    "Adventure Travel",
    "Sustainable Travel",
    "Digital Nomad",
    "Food Travel",
    "Winter Travel",
    "Budget Travel",
    "Luxury Travel",
    "Family Travel"
  ];

  return (
    <div className="blog-list-page">
      <StickyHeader/>

            <header className="main-header">
        <div className="container d-flex justify-content-between align-items-center py-3">
          <Link href={'/'} style={{textDecoration:'none'}}>
              <div className="logo-container d-flex align-items-center">
                <span className="logo-icon">✈️</span>
                <span className="logo-text text-dark"> Travelogue Pedia</span>
              </div>
          </Link>

          <nav className="main-nav d-none d-md-flex gap-4">
            <a href="/about" className="nav-link">About Us</a>
            <a href="/contactus" className="nav-link">Contact Us</a>
            <a href="/blogs" className="nav-link">Blog</a>
          </nav>

          <button
            className="mobile-menu-btn btn d-md-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileMenu"
            aria-controls="mobileMenu"
          >
            ☰
          </button>
        </div>
      </header>

      {/* Hero Section */}
      {/* Categories Filter */}
      <section className="categories-section py-4">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="categories-scroll">
                {categories.map((category, index) => (
                  <button 
                    key={index}
                    className={`category-btn ${index === 0 ? 'active' : ''}`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="featured-post py-5">
        <div className="container">
          {blogPosts.filter(post => post.featured).map(featuredPost => (
            <div key={featuredPost.id} className="featured-card">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="featured-image">
                    <img src={featuredPost.image} alt={featuredPost.title} />
                    <div className="featured-badge">
                      <i className="fas fa-star me-1"></i>
                      Featured Story
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="featured-content p-4 p-lg-5">
                    <span className="category-tag">{featuredPost.category}</span>
                    <h2 className="featured-title">{featuredPost.title}</h2>
                    <p className="featured-excerpt">{featuredPost.excerpt}</p>
                    <div className="post-meta d-flex align-items-center">
                      <img 
                        src={`https://i.pravatar.cc/40?img=${featuredPost.id}`} 
                        alt={featuredPost.author}
                        className="author-avatar me-3"
                      />
                      <div>
                        <div className="author-name">{featuredPost.author}</div>
                        <div className="post-date">
                          {featuredPost.date} · {featuredPost.readTime}
                        </div>
                      </div>
                    </div>
                    <button className="btn btn-primary mt-4">
                      Read Full Story
                      <i className="fas fa-arrow-right ms-2"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Grid */}
      <section className="blog-grid pb-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12">
              <h2 className="section-title">Latest Travel Stories</h2>
              <p className="section-subtitle">Fresh perspectives and new adventures from around the globe</p>
            </div>
          </div>

          <div className="row g-4">
            {blogPosts.filter(post => !post.featured).map(post => (
              <div key={post.id} className="col-lg-4 col-md-6">
                <div className="blog-card">
                  <div className="blog-image">
                    <img src={post.image} alt={post.title} />
                    <div className="category-badge">{post.category}</div>
                    <div className="read-time">{post.readTime}</div>
                  </div>
                  <div className="blog-content">
                    <h3 className="blog-title">{post.title}</h3>
                    <p className="blog-excerpt">{post.excerpt}</p>
                    <div className="blog-meta">
                      <div className="author-info">
                        <img 
                          src={`https://i.pravatar.cc/30?img=${post.id + 10}`} 
                          alt={post.author}
                          className="author-avatar-sm"
                        />
                        <span className="author-name-sm">{post.author}</span>
                      </div>
                      <span className="post-date-sm">{post.date}</span>
                    </div>
                    <button className="btn-read-more">
                      Continue Reading
                      <i className="fas fa-arrow-right ms-2"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="row mt-5">
            <div className="col-12 text-center">
              <button className="btn btn-outline-primary btn-load-more">
                Load More Stories
                <i className="fas fa-plus ms-2"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
    </div>
  );
}

export default BlogList;