import { Video } from "./Video";
import { CardFooter } from "./CardFooter";
import { CardHeader } from "./CardHeader";

export const Card: React.FC<{
  source: string;
  avatar: string;
  title: string;
}> = ({ source, avatar, title }) => {
  return (
    <article className="my-4 bg-gray-300">
      <div className="px-2">
        <div className="max-w-lg mx-auto bg-white shadow-lg rounded-md overflow-hidden md:max-w-md">
          <div className="md:flex">
            <div className="w-full">
              <CardHeader avatar={avatar} title={title} />
              <Video url={source} />
              <CardFooter />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
