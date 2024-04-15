"use client"
import { toPng } from "html-to-image";
import { useCallback, useRef,useState} from "react";
import PinkRose from "./pinkrose";
import Blue from "./blue";
import Green from "./green";
import Orange from "./orange";
import Purple from "./purple";
import GreenBlue from "./greenblue";
import Modals from "./modal";
import Hero from "./hero";
import DownLoad from "./download";

export default function Main(){
    const PinkRoseRef = useRef<HTMLDivElement>(null);
  const BlueRef = useRef<HTMLDivElement>(null);
  const GreenRef = useRef<HTMLDivElement>(null);
  const OrangeRef = useRef<HTMLDivElement>(null);
  const PurpleRef = useRef<HTMLDivElement>(null);
  const GreenBlueRef = useRef<HTMLDivElement>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modelId, setmodelId] = useState(0);
  
  const downLoadImg = useCallback((downloadId: number) => {
    const refs = [
      PinkRoseRef,
      BlueRef,
      GreenRef,
      OrangeRef,
      PurpleRef,
      GreenBlueRef,
    ];
    const ref = refs[downloadId - 1];
    if (!ref || !ref.current) return;

    const width = 1707;
    const height = 940;

    toPng(ref.current, {
      cacheBust: true,
      style: {
        width: `${width}px`,
        height: `${height}px`,
      },
    })
      .then((dataUrl) => {
        const link = document.createElement("a");
        const url = "color space" + "?v=" + Date.now();
        link.download = url;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getValue = useCallback((value: number, downloadId: number) => {
    if (value === 1) {
      downLoadImg(downloadId);
    }
    if (value === 2) {
      setModalIsOpen(true);
      setmodelId(downloadId);
    }
  }, [downLoadImg]);

  const ModalSetdownload = useCallback((value: boolean) => {
    setModalIsOpen(value);
  }, []);

  const gradientComponents = [
    {
      Component: PinkRose,
      name: "Rosy Dawn Gradient",
      Id: 1,
      ref: PinkRoseRef,
    },
    {
      Component: Blue,
      name: "Intersecting Serenity Gradient",
      Id: 2,
      ref: BlueRef,
    },
    { Component: Green, name: "Turquoise Gradient", Id: 3, ref: GreenRef },
    {
      Component: Orange,
      name: "Golden Meadows Interlace",
      Id: 4,
      ref: OrangeRef,
    },
    {
      Component: Purple,
      name: "Twilight Amethyst Cascade",
      Id: 5,
      ref: PurpleRef,
    },
    {
      Component: GreenBlue,
      name: "Azure Tranquility Merge",
      Id: 6,
      ref: GreenBlueRef,
    },
  ];
    return(
        <> 
        <Modals
        isopen={modalIsOpen}
        setCloseModal={ModalSetdownload}
        ID={modelId}
      ></Modals>
      <Hero/>
      <div className="bg-slate-900">
        <div className="flex flex-wrap justify-around -mx-2 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 justify-center">
          {gradientComponents.map(({ Component, name, Id, ref }) => (
            <div
              key={Id}
              className="m-1 mb-20 h-60 min-w-64"
              style={{ width: "30%" }}
            >
              <div
                className="w-full h-full rounded-3xl"
                style={{ overflow: "hidden" }}
              >
                <div className="w-full h-full" ref={ref}>
                  <Component Id={1}/>
                </div>
              </div>
              <DownLoad name={name} setdownload={getValue} Id={Id} />
            </div>
          ))}
        </div>
      </div>
        </>
    )
}