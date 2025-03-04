import ClipLoader from "react-spinners/ClipLoader";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <ClipLoader size={40} color="#3b82f6" />
    </div>
  );
};

export default Loading;
