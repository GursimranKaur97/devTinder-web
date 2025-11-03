import React, { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { addFeed } from "../utils/feedSlice";
import { useDispatch, useSelector } from "react-redux";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  const getFeed = async () => {
    if (feed) return;
    try {
      const response = await axios.get(BASE_URL + "/user/feed", { withCredentials: true });
      dispatch(addFeed(response.data?.data));
      console.log(response?.data?.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {   
    getFeed();
  }, [])

  return <div>Feed</div>;
};

export default Feed;
