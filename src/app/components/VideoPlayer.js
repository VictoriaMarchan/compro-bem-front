"use client";

import { useEffect, useState } from "react";

export default function VideoPlayer() {
  const [url, setUrl] = useState("");

  useEffect(() => {
    fetch("/api/video")
      .then((res) => res.json())
      .then((data) => setUrl(data.url));
  }, []);

  return (
    <div className="card">
      <h3>Vídeo Institucional</h3>

      <div className="video-wrapper">
        {url && (
          <video width="100%" controls>
            <source src={url} type="video/mp4" />
          </video>
        )}
      </div>
    </div>
  );
}
