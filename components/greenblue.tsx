import { useState } from "react";

interface Size {
  Id: number;
}

const GreenBlue: React.FC<Size> = ({ Id }) => {
  const [modelId, setmodelId] = useState(Id);
  return (
    <>
      {modelId === 1 ? (
        <div className="flex bg-pink-50 w-full h-full">
          <div className="w-3/5 h-3/6 translate-x-20 translate-y-20 opacity-70">
            <div className="w-full h-full blur-2xl">
              <div
                className="w-full h-full bg-lime-300 rotate-45 blur-2xl"
                style={{
                  clipPath:
                    "polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)",
                }}
              ></div>
            </div>
          </div>

          <div className="w-2/6 h-3/6 translate-x-20 translate-y-20 opacity-70">
            <div className="w-full h-full blur-xl">
              <div
                className="w-full h-full bg-yellow-200 rotate-45"
                style={{
                  clipPath:
                    "polygon(10% 25%, 35% 25%, 35% 0%, 65% 0%, 65% 25%, 90% 25%, 90% 50%, 65% 50%, 65% 100%, 35% 100%, 35% 50%, 10% 50%)",
                }}
              ></div>
            </div>
          </div>

          <div className="w-2/6 h-2/6">
            <div className="w-full h-full blur-xl opacity-70">
              <div
                className="w-full h-full bg-emerald-200 rotate-45"
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
            <div className="w-3/5 h-3/6 translate-x-1/3 translate-y-1/3 opacity-30">
              <div className="w-full h-full blur-2xl">
                <div className="w-full h-full blur-2xl">
                  <div className="w-full h-full blur-2xl">
                    <div
                      className="w-full h-full bg-lime-300 rotate-12 blur-2xl"
                      style={{
                        clipPath:
                          "polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-2/6 h-3/6 translate-x-20 translate-y-20 opacity-50">
              <div className="w-full h-full blur-2xl">
                <div className="w-full h-full blur-2xl">
                  <div className="w-full h-full blur-xl">
                    <div
                      className="w-full h-full bg-yellow-300 rotate-45"
                      style={{
                        clipPath:
                          "polygon(10% 25%, 35% 25%, 35% 0%, 65% 0%, 65% 25%, 90% 25%, 90% 50%, 65% 50%, 65% 100%, 35% 100%, 35% 50%, 10% 50%)",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-2/6 h-2/6">
              <div className="w-full h-full blur-2xl opacity-60">
                <div className="w-full h-full blur-2xl ">
                  <div className="w-full h-full blur-xl">
                    <div
                      className="w-full h-full bg-emerald-200 rotate-45"
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
        </div>
      )}
    </>
  );
};
export default GreenBlue;
