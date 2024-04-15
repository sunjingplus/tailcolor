import { useState } from "react";

interface Size {
  Id: number;
}

const Purple: React.FC<Size> = ({ Id }) => {
  const [modelId, setmodelId] = useState(Id);
  return (
    <>
      {modelId === 1 ? (
        <div className="flex bg-pink-50 w-full h-full">
          <div className="w-1/6 h-2/6">
            <div className="w-full h-full blur-2xl">
              <div
                className="w-full h-full bg-fuchsia-300 rotate-45"
                style={{
                  clipPath:
                    "polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)",
                }}
              ></div>
            </div>
          </div>

          <div className="w-3/5 h-3/6 translate-x-3/4 translate-y-3/4 opacity-70">
            <div className="w-full h-full blur-2xl">
              <div
                className="w-full h-full bg-violet-500 rotate-45"
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
                className="w-full h-full bg-fuchsia-300 rotate-45"
                style={{
                  clipPath:
                    "polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)",
                }}
              ></div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="flex bg-pink-50  w-full h-full overflow-hidden"
          style={{
            minWidth: "1600px",
            minHeight: "850px",
            maxHeight: "100vh",
            maxWidth: "100vw",
          }}
        >
          <div className="flex bg-pink-50 w-full h-full">
            <div className="w-1/6 h-2/6">
              <div className="w-full h-full blur-2xl opacity-30">
                <div
                  className="w-full h-full bg-fuchsia-300 rotate-45"
                  style={{
                    clipPath:
                      "polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)",
                  }}
                ></div>
              </div>
            </div>

            <div className="w-3/5 h-3/6 translate-x-3/4 translate-y-3/4 opacity-60">
              <div className="w-full h-full blur-2xl opacity-60">
                <div className="w-full h-full blur-2xl">
                  <div className="w-full h-full blur-2xl">
                    <div className="w-full h-full blur-2xl">
                      <div
                        className="w-full h-full bg-violet-500 rotate-12 blur-2xl"
                        style={{
                          clipPath:
                            "polygon(39% 12%, 100% 38%, 100% 91%, 18% 100%, 0% 38%)",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-1/6 h-2/6 translate-x-3/4 opacity-60">
              <div className="w-full h-full blur-2xl">
                <div className="w-full h-full blur-2xl">
                  <div
                    className="w-full h-full bg-violet-500 rotate-45"
                    style={{
                      clipPath:
                        "polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Purple;
