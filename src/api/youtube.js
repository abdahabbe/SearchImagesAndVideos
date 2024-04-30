import axios from "axios"

const apiKey = "AIzaSyBKwXjrdVRUn54_mVnO2nzWQKAf1s6PNb8";
export default axios.create({
  
    baseURL: "https://www.googleapis.com",
    params: {
        key: apiKey, 
        type: "video", 
        part: "snippet",
        maxResults: 10,
    }
})