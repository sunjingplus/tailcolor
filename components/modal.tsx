// components/Modal.js

import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import CodeBlock from "./codebloks";

const codeTemplates = {
  1: `
  <>
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
      </>
  `,
  2: `<>
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
  </>`,
  3: `<>
  <div className="flex bg-pink-50 w-full h-full">
    <div className="w-3/5 h-3/6 translate-x-10 translate-y-10 opacity-50">
      <div className="w-full h-full blur-2xl">
        <div
          className="w-full h-full bg-teal-300 rotate-45 blur-2xl"
          style={{
            clipPath:
              "polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)",
          }}
        ></div>
      </div>
    </div>
  
    <div className="w-1/6 h-2/6 translate-x-2 translate-y-2 opacity-70">
      <div className="w-full h-full blur-2xl">
        <div
          className="w-full h-full bg-cyan-400 rotate-45"
          style={{
            clipPath:
              "polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)",
          }}
        ></div>
      </div>
    </div>
  </div>
  </>`,
  4: `<>
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
  </>`,
  5: `<>
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
  </>`,
  6: `  <>
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
  </>`,
};

const Modals: React.FC<{
  isopen: boolean;
  setCloseModal: (value: boolean) => void;
  ID?: number;
}> = ({ isopen, setCloseModal, ID }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [code, setCode] = useState<string>("");

  useEffect(() => {
    if (isopen && typeof ID === "number") {
      setModalIsOpen(true);
      setCode(codeTemplates[ID as keyof typeof codeTemplates]);
    }
  }, [isopen, ID]);

  const copyCodeToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCloseModal(false);
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
    >
      <div>
        <CodeBlock language="javascript">{code}</CodeBlock>
      </div>
      <div className="flex">
        <div className="mr-3">
          <button
            className={`px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            onClick={closeModal}
          >
            Close Modal
          </button>
        </div>

        <div>
          <button
            onClick={copyCodeToClipboard}
            className=" px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {copied ? "Copied!" : "Copy Code"}
          </button>
        </div>
        <div className="px-4">
          <span>
            After successfully installing Tailwind CSS in your project, you can
            immediately experience the exquisite interface effects. Let's get
            started and enjoy!
          </span>
        </div>
      </div>
    </Modal>
  );
};

export default Modals;
