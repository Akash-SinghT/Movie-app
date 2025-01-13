import axios from "axios";

const instace = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    "content-type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzc0MDAwNDU3OTU2NGQ3MGYxMTM1YTk4NzFhZDZkZiIsIm5iZiI6MTczMTA0NzUwNS4xODQ5NTg1LCJzdWIiOiI2NzJkYWY0M2M3NDg3MThiZjA3M2ExYmQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.qoY1Q8j0lLm4bF0QHFvICZtu_pi2XwFk2xmtEpElktk",
  },
});

export default instace;
