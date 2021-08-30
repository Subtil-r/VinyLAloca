import  {useState, useEffect} from "react";
import axios from 'axios'

export function useAxiosGet(url){
  
    const [products,setProducts] = useState({
        loading :false,
        data: null,
        error : false
      })

      useEffect(()=> {
        setProducts({
          loading:true,
          data:null,
          error : false
        })
        axios.get(url)
        .then(response => {
          
          console.log(response.data.['hydra:member'])
          setProducts({
            loading:false,
            data: response.data.['hydra:member'],
            error : false
          })
        })
        .catch(()=> {
          setProducts({
            loading:false,
            data: null,
            error : true
          })
        })
    
      },[url])

            return products
}
