const Loader = ({ message }: { message: string }) => {
  return (
    <>
      <div className="loading w-full h-[100vh] fixed flex items-center justify-center top-0 bg-white/40 backdrop-blur-md z-50 flex-col">
        <div className="w-28 h-28 flex flex-col items-center justify-center flex-wrap rotateLoader">
          <div className="flex gap-3 pb-1">
            <div className="box h-8 w-8 bg-indigo-500 rounded-full"></div>
            <div className="box h-8 w-8 bg-indigo-500 rounded-full"></div>
          </div>
          <div className="box h-8 w-8 bg-indigo-500 rounded-full"></div>
        </div>
        <p className="text-xl text-indigo-500 py-2 font-medium">{message}</p>
      </div>
    </>
  );
};

export default Loader;
