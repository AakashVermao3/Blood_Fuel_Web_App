import axios from "axios";

// function App() {
//     return(
//         <div>
//             <h1>Blood Fuel </h1>
//         </div>
//     )
// }

const API = axios.create({ baseURL: process.env.REACT_APP_BASEURL });          //  |
                                                                               //  |
API.interceptors.request.use((req) => {                                        //  | ------ Insepter         
  if (localStorage.getItem("token")) {                                         //  |           
    req.headers.Authorization = `Bearer ${localStorage.getItem("token")} `;    //  |
  }
  return req;
});

export default API;


