import { Avatar } from "../shared/Avatar";

export const CardHeader = ({
  avatar = "",
  title,
}: {
  avatar: string;
  title: string;
}) => {
  return (
    <div className="flex justify-between items-center p-3">
      <div className="flex flex-row items-center">
        <Avatar url={avatar} />
        <div className="flex flex-row items-center ml-2">
          <span className="font-bold mr-1">{title}</span>{" "}
          <small className="h-1 w-1 bg-gray-300 rounded-full mr-1 mt-1"></small>{" "}
          <a href="#" className="text-blue-600 text-sm hover:text-blue-800">
            Follow
          </a>
        </div>
      </div>
      <div className="pr-2">
        <i className="fa fa-ellipsis-h text-gray-400 hover:cursor-pointer hover:text-gray-600"></i>{" "}
      </div>
    </div>
  );
};
