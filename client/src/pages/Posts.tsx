import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { StyledCard } from "./styled/Post";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";

const Posts = (): JSX.Element => {
  const [data, setData] = useState<any[]>([]);

  const getData = async () => {
    const res = await axios.get("/posts");
    console.log(res.data);
    setData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {!data ? (
        <p>"Loading..."</p>
      ) : (
        data.map((post) => (
          <StyledCard key={post._id}>
            <CardContent>
              <Typography variant="h3" gutterBottom>
                {post.postTitle}
              </Typography>
              <Typography variant="h6">{post.postBody}</Typography>
            </CardContent>
          </StyledCard>
        ))
      )}
    </div>
  );
};

export default Posts;
