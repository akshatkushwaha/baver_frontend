import axios from "axios";

const url = "http://localhost:8000/api/";

const fetchListings = async () => {
  const response = await axios.get(url + "listings");
  return response.data;
};

const fetchListing = async (id) => {
  const response = await axios.get(url + "listings/" + id);
  return response.data;
};

const postListing = async (listing) => {
  const response = await axios.post(url + "listings", listing);
  return response.data;
};

export { fetchListings, fetchListing, postListing };
