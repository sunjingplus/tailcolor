
interface HeaderName {
  setdownload: (value: number,downloadId:number) => void;
  name: string;
  Id:number
}

const DownButton: React.FC<HeaderName> = ({ name,setdownload,Id }) => {
  const onButtonClick=()=>{
    setdownload(1,Id)
  }
  const onClickCode=()=>{
    setdownload(2,Id)
  }

  return (
    <>
      <div className="bg-slate-900 h-16 w-full  rounded-3xl -translate-y-6 ">
        <div className="text-white antialiased font-bold translate-y-6 translate-x-6">
          {name}
        </div>
        <div className="flex justify-end ">
          <div className="translate-y-6 bg-slate-800 rounded-lg mr-2 hover:bg-slate-600"
          onClick={onClickCode}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 stroke-slate-300 m-2.5"
            >
              <path
                d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
              />
            </svg>
          </div>

          <div
            className="translate-y-6 bg-slate-800 rounded-lg mr-2 hover:bg-slate-600"
            onClick={onButtonClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 stroke-slate-300 m-2.5 "
            >
              <path
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default DownButton;
