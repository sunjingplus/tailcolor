export default function Orange() {
    return (
      <>
        <div className="flex bg-pink-50 w-full h-full">
          <div className="w-3/5 h-3/6 translate-x-3/4 translate-y-3/4 opacity-70">
            <div className="w-full h-full blur-2xl">
              <div
                className="w-full h-full bg-yellow-200 rotate-45"
                style={{
                  clipPath:
                    "polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)",
                }}
              ></div>
            </div>
          </div>
  
          <div className="w-1/6 h-2/6 translate-x-3/4 opacity-70">
            <div className="w-full h-full blur-2xl">
              <div
                className="w-full h-full bg-lime-200 rotate-45"
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
  