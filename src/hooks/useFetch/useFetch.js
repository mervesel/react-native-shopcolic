import React,{useState,useEffect} from "react";
import axios from "axios";

const useFetch=(url)=>{
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
          const response = await axios.get(url);
          setList(response.data);
          setLoading(false);
        } catch (err) {
          setError(err.message);
          setLoading(false);
        }
      };

    useEffect(()=>{
        fetchData();

    },[]);

    return {list,error,loading}
}

export default useFetch;