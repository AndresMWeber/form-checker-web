import { useState, useEffect } from "react";
import { Card } from "./post/Card";

export const Videos: React.FC = () => {
  const [urls, setUrls] = useState([]);
  useEffect(() => {
    const getVideos = async () => {
      const response = await fetch("https://form-api.andresmweber.com/videos", {
        method: "GET",
      });
      const videos = await response.json();
      response.body && setUrls(videos);
    };
    getVideos();
  });

  return (
    <li className="flex-col">
      {urls.map((url: string, index) => (
        <Card key={index} source={url} avatar={""} title={""} />
      ))}
    </li>
  );
};
