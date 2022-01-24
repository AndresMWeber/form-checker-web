import Image from "next/image";

export const Avatar: React.FC<{ url: string }> = ({ url }) => {
  if (!url.length) {
    return <></>;
  }
  return (
    <Image
      src={url}
      alt="User Avatar"
      className="rounded-full"
      width="40"
      height="40"
    />
  );
};
