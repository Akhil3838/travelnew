
import { commonApi } from "./commonApi";
import { serverUrl } from "./serverUrl";


export const getAllPackages = async (filter = {}) => {
  const params = new URLSearchParams();

  const appendList = (key, list) => {
    if (Array.isArray(list) && list.length) {
      params.append(key, list.join(","));
    }
  };

  appendList("category_id", filter.categoryIds);
  appendList("destinations", filter.destinations);
  appendList("days", filter.days);

  if (filter.minPrice !== undefined) params.append("min_price", filter.minPrice);
  if (filter.maxPrice !== undefined) params.append("max_price", filter.maxPrice);
  if (filter.page !== undefined) params.append("page", filter.page);

  const query = params.toString() ? `?${params.toString()}` : "";

  console.log("QUERY:", query);

  return await commonApi("GET", `${serverUrl}/get-allpackages${query}`);
};

// get signle packages

export const getSinglePackages=async(id)=>{
    return await commonApi('GET',`${serverUrl}/get-packageDetails/${id}`,"","")
}

// Trending packages
export const getTrendingPkg=async()=>{
    return await commonApi('GET',`${serverUrl}/get-destinationLocation`,"","")
}

// get filter datas

export const PackageFilters=async()=>{
    return await commonApi('GET',`${serverUrl}/get-filters`,"","")
}

//get category

export const getCategories=async()=>{
    return await commonApi('GET',`${serverUrl}/get-categories`,"","")
}

//save enquery

export const saveEnquery=async(reqBody)=>{
  console.log(reqBody);
  
    
    return await commonApi('POST',`${serverUrl}/save-planbooking`,reqBody,"")
}
// new packages

// Trending packages
export const getNewPkg=async()=>{
    return await commonApi('GET',`${serverUrl}/get-top-tours`,"","")
}

//search packages
export const searchPackageApi =async(search)=>{
    return await commonApi('GET',`${serverUrl}/search-package?search=${search}`,"","")
}

export const socialLinksApi =async()=>{
    return await commonApi('GET',`${serverUrl}/get-allData`,"","")
}

export const getTrekPkg=async()=>{
    return await commonApi('GET',`${serverUrl}/get-top-trecking`,"","")
}

export const getPilgrimPkg=async()=>{
    return await commonApi('GET',`${serverUrl}/get-pilgrims`,"","")
}

export const getHonymoonPkg=async()=>{
    return await commonApi('GET',`${serverUrl}/get-honeymoon-packages`,"","")
}


export const getHonymoonPkgApi=async(reqBody)=>{
  console.log(reqBody);
  
    return await commonApi('POST',`${serverUrl}/get-honeymoon-packages`,reqBody,"")
}


// gallery
export const getGallery=async()=>{
    return await commonApi('GET',`${serverUrl}/get-allimages`,"","")
}

// one way root
export const oneWayRoot=async()=>{
    return await commonApi('GET',`${serverUrl}/get-taxi_routes`,"","")
}


// REnt a car
export const rentACar=async()=>{
    return await commonApi('GET',`${serverUrl}/get-all_rent_cars`,"","")
}

// wedding car booking
export const weddingCar=async()=>{
    return await commonApi('GET',`${serverUrl}/get-all_wedding_cars`,"","")
}


// one way root
export const allOneWayRootsApi=async()=>{
    return await commonApi('GET',`${serverUrl}/get-all_taxi_routes`,"","")
}


export const ContactUsApi=async(reqBody)=>{
  console.log(reqBody);
  
    return await commonApi('POST',`${serverUrl}/save-contact_us`,reqBody,"")
}

// get all blogs

export const getAllBlogs=async()=>{
    return await commonApi('GET',`${serverUrl}/get-all_blogs`,"","")
}

// blog details

export const getBlogDetails=async(slug)=>{
    return await commonApi('GET',`${serverUrl}/get-blog_details?slug=${slug}`,"","")
}

// blog related posts

export const getBlogRelatedPosts=async()=>{
    return await commonApi('GET',`${serverUrl}/get-related_blogs`,"","")
}

// get rent a carfilters

export const getRentACarFiltersApi=async()=>{
    return await commonApi('GET',`${serverUrl}/get-rentcar_filters`,"","")
}

// all rent a car

export const allRentACarApi=async(reqBody)=>{
  console.log(reqBody);
  
    return await commonApi('POST',`${serverUrl}/get-rent_cars`,reqBody,"")
}

// get rent a carfilters

export const getWeddingCarFiltersApi=async()=>{
    return await commonApi('GET',`${serverUrl}/get-weddingcar_filters`,"","")
}

// all rent a car

export const allWeddingACarApi=async(reqBody)=>{
  console.log(reqBody);
  
    return await commonApi('POST',`${serverUrl}/get-wedding_cars`,reqBody,"")
}


// get recent posts

export const getRecentPostsApi=async()=>{
    return await commonApi('GET',`${serverUrl}/get-recentpackages`,"","")
}


// get Testimonials

export const getTestimonialsApi=async()=>{
    return await commonApi('GET',`${serverUrl}/get-testimonials`,"","")
}



