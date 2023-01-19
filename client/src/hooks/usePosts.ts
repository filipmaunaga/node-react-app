import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const usePosts = () => {
  const [data, setData] = useState<any[]>([]);

  const getData = async () => {
    const res = await axios.get("/posts");
    setData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return [data, setData, getData] as const;
};

export default usePosts;
