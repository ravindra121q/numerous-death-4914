import React from "react";
import NavBar from "../Components/NavBar";
import axios from "axios";
import { useEffect } from "react";
// import { Box } from "@chakra-ui/react";
import "./prodctpage.css";
import { useState } from "react";
// import { SimpleGrid } from "@chakra-ui/react";
export const ProdctPage = () => {
  const [data, setData] = useState([]);
  const Datahandler = () => {
    return axios.get("http://localhost:8080/posts");
  };
  useEffect(() => {
    Datahandler().then((res) => {
      setData(res.data);
    });
  }, []);
  const Myfun = (image) => {
    // console.log(image.image);
    return (
      <div id="photo">
        <img src={image.image} alt="" />
      </div>
    );
  };
  console.log(data);
  return (
    <>
      <NavBar />
      <div id="post">
        {data.map((e) => {
          const key = e.albumId;
          return <Myfun key={key} image={e.thumbnailUrl} />;
        })}
      </div>
    </>
  );
};
