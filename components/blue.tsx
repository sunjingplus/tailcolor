export default function Blue() {
    return (
      <>
        <div className="flex bg-pink-50 w-full h-full">
          <div className="w-3/5 h-3/6 transform translate-x-10 translate-y-10 opacity-50">
            <div className="w-full h-full blur-2xl">
              <div
                className="w-full h-full bg-blue-300 rotate-45 blur-2xl"
                style={{
                  clipPath:
                    "polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)",
                }}
              ></div>
            </div>
          </div>
  
          <div className="w-1/6 h-2/6 transform translate-x-2 translate-y-2 opacity-50">
            <div className="w-full h-full blur-2xl">
              <div
                className="w-full h-full bg-rose-300 rotate-45"
                style={{
                  clipPath:
                    "polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)",
                }}
              ></div>
            </div>
          </div>
        </div>
      </>
    );
  }
  