
import { commonApi } from "./commonApi";
import { serverUrl } from "./serverUrl";


// get all packages

export const getAllPackages = async (filter = {}) => {
  let query = "";
  const params = new URLSearchParams();

  if (filter.categoryIds?.length) {
    params.append("category_id", filter.categoryIds.join(","));
  }
  if (filter.days?.length) {
    params.append("days", filter.days.join(","));
  }
  if (filter.minPrice !== undefined) {
    params.append("min_price", filter.minPrice);
  }
  if (filter.maxPrice !== undefined) {
    params.append("max_price", filter.maxPrice);
  }
  if (filter.page !== undefined) {
    params.append("page", filter.page);
  }

  // Only build query if there are params
  if ([...params].length > 0) {
    query = `?${params.toString()}`;
  }

  return await commonApi("GET", `${serverUrl}/get-allpackages${query}`, "", "");
};
// get signle packages

export const getSinglePackages=async(id)=>{
    return await commonApi('GET',`${serverUrl}/get-packageDetails/${id}`,"","")
}

// Trending packages
export const getTrendingPkg=async()=>{
    return await commonApi('GET',`${serverUrl}/get-trendingDestination`,"","")
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


