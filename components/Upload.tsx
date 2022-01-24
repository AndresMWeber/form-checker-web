import { useState } from "react";
import { Spinner } from "./shared/Spinner";

export const Upload: React.FC = () => {
  const [showSpinner, setShowSpinner] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const onChange = async (event: any) => {
    setShowSpinner(true);
    event.preventDefault();
    const file = event.target.files[0];
    console.log(`Stored file of size ${(file.size * 0.000001).toFixed(2)}mb`);

    try {
      const presigned_response = await fetch(
        "https://form-api.andresmweber.com/presigned",
        {
          method: "POST",
          body: JSON.stringify({ filename: file.name }),
        }
      );
      const presigned_data = await presigned_response.json();
      console.log(`Uploading to S3 presigned url: ${presigned_data.url}`);
      const response = await fetch(presigned_data.url, {
        method: "PUT",
        body: file,
        headers: new Headers({ "Content-Type": "video/mp4" }),
      });
      await response.body?.getReader();
    } catch (error) {
      console.log(error);
      setShowSpinner(false);
    } finally {
      setShowSpinner(false);
      setShowVideo(true);
    }
  };
  return (
    <div>
      <Spinner displayed={showSpinner} />
      <label
        className={`mx-auto w-64 text-black items-center p-4 m-5 bg-white rounded-lg shadow-2xl tracking-wide uppercase border border-yellow-500 cursor-pointer hover:bg-yellow-200 ${
          showSpinner || showVideo ? "hidden" : "flex flex-col"
        }`}
      >
        <svg
          className="w-8 h-8"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        <span className="mt-2 text-base text-black leading-normal">
          Select an mp4 video
        </span>
        <input
          type="file"
          onChange={onChange}
          className="hidden"
          accept="video/mp4"
        />
      </label>
    </div>
  );
};
