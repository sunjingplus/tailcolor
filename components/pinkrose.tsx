import { useState } from "react";

interface Size {
  Id: number;
}

const PinkRose: React.FC<Size> = ({ Id }) => {
  const [modelId, setmodelId] = useState(Id);
  return (
    <>
      {modelId === 1 ? (
        <div className="flex bg-pink-50 w-full h-full">
          <div className="w-1/6 h-2/6 translate-y-6 opacity-40">
            <div className="w-full h-full blur-xl">
              <div
                className="w-full h-full bg-red-400 rotate-45 blur-xl"
                style={{
                  clipPath:
                    "polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)",
                }}
              ></div>
            </div>
          </div>

          <div className="w-2/5 h-3/6 rotate-30 opacity-60 blur-xl">
            <div className="w-full h-full">
              <div
                className="w-full h-full bg-red-300"
                style={{
                  clipPath: "polygon(55% 88%, 100% 0%, 100% 48%, 24% 78%)",
                }}
              ></div>
            </div>
          </div>

          <div className="w-6/12 opacity-40">
            <div className="w-full h-full blur-2xl">
              <div
                className="w-full h-full bg-rose-500"
                style={{
                  clipPath:
                    "polygon(61% 43%, 100% 24%, 75% 100%, 6% 55%, 63% 4%, 0 5%)",
                }}
              ></div>
            </div>
          </div>

          <div className="w-1/12 h-1/12 opacity-60 blur-xl">
            <div
              className="w-full h-full bg-pink-300"
              style={{
                clipPath: "polygon(78% 24%, 28% 91%, 33% 44%)",
              }}
            ></div>
          </div>
        </div>
      ) : (
          <div className="flex bg-pink-50  w-full h-full overflow-hidden" style={{
            minWidth: "1600px",
            minHeight: "850px",
            maxHeight: "100vh",
            maxWidth: "100vw",
          }}>
            <div className="w-1/6 h-2/6 translate-y-6 opacity-20  ">
              <div className="w-full h-full blur-2xl opacity-60">
                <div className="w-full h-full blur-2xl">
                  <div
                    className="w-full h-full bg-red-400 rotate-45 blur-2xl"
                    style={{
                      clipPath:
                        "polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)",
                    }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="w-2/5 h-3/6 rotate-30 opacity-60 blur-xl">
              <div className="w-full h-full blur-2xl">
                <div className="w-full h-full blur-xl opacity-70">
                  <div
                    className="w-full h-full bg-red-200"
                    style={{
                      clipPath: "polygon(55% 88%, 100% 0%, 100% 48%, 24% 78%)",
                    }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="w-5/12 h-4/6 translate-y-1/3 opacity-40 blur-2xl">
              <div className="w-full h-full blur-2xl">
                <div className="w-full h-full  blur-2xl">
                  <div
                    className="w-full h-full bg-rose-300  blur-2xl"
                    style={{
                      clipPath:
                        "polygon(26% 2%, 100% 0%, 94% 63%, 25% 100%, 0% 50%)",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
      )}
    </>
  );
};
export default PinkRose;
