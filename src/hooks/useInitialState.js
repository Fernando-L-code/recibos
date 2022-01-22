import axios from 'axios';
import { useState } from 'react';
import config from '../config';
import initialState from '../initialState';

const useInitialState = () => {
  const [data, setData] = useState(initialState);

  const requestGetAll= async(page)=>{
    await axios.get(config.urls.recibos+page)
      .then(response=>{
        setData(response.data);
      }).catch(err=>{
        console.log(err);
      })
  }

  const requestGet= async(page,id)=>{
    await axios.get(config.urls.recibos+page+id)
      .then(response=>{
        setData(response.data);
      }).catch(err=>{
        console.log(err);
      })
  }

  const requestPost= async(page,data)=>{
    await axios.post(config.urls.recibos+page,data)
      .then(response=>{
        // setData(response.data);
        setData({
          ...data,
          page: [...data.page, response],
        });
      }).catch(err=>{
        console.log(err);
      })
  }
  const requestPut= async(page,id,data)=>{
    await axios.put(config.urls.recibos+page+"/"+id,data)
      .then(response=>{
        setData(response.data);
      })
      .then(requestGetAll(page))
      .catch(err=>{
        console.log(err);
      })
  }
  const requestDelete= async(page,id)=>{
    await axios.put(config.urls.recibos+page+"/"+id)
      .then(response=>{
        // setData(response.data);
        setData({
          ...data,
          page: data.page.filter(( _ , indexCurrent) => indexCurrent !== id),
        });
      })
      .then(requestGetAll(page))
      .catch(err=>{
        console.log(err);
      })
  }



  
  return {
    requestGetAll,
    requestGet,
    requestPost,
    requestPut,
    requestDelete,
    data,
  };
};

export default useInitialState;
