export const Video: React.FC<{ url: string }> = ({ url }) => {
  if (!url) {
    return <></>;
  }
  return (
    <div className="w-full h-75 ">
      <video
        className={`${url.length === 0 ? "hidden" : "block"} object-contain`}
        height="calc(100% + 1px)"
        controls
        loop
        muted
        src={url}
      ></video>
    </div>
  );
};
