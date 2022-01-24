export const CardFooter: React.FC = () => {
  return (
    <div className="p-4 flex justify-between items-center">
      <div className="flex flex-row items-center">
        {" "}
        <i className="fa fa-heart-o mr-2 fa-1x hover:text-gray-600"></i>{" "}
        <i className="fa fa-comment-o mr-2 fa-1x hover:text-gray-600"></i>{" "}
        <i className="fa fa-send-o mr-2 fa-1x hover:text-gray-600"></i>{" "}
      </div>
      <div>
        {" "}
        <i className="fa fa-bookmark-o fa-1x hover:text-gray-600"></i>{" "}
      </div>
    </div>
  );
};
