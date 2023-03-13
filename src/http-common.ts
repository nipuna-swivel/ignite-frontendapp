import axios from "axios";

export default axios.create({
 // baseURL: "http://localhost:3000",
  baseURL: "https://ignite-backend.herokuapp.com",
  headers: {
    "Content-type": "application/json",
    
  }
  
});
