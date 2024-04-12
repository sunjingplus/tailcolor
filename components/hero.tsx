export default function Hero() {
    return (
      <>
        <header className="relative bg-slate-900">
          {" "}
          <img
            src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a26e_Background%20Hero.svg"
            alt=""
            className="absolute -z-10 inline-block h-full w-full object-cover"
          />{" "}
          <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
            {" "}
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="mb-6 pb-4 text-4xl font-bold  md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500" >
              Beautiful colors background built with Tailwind CSS
              </h1>
              <h4 className="text-white mx-auto mb-5 max-w-[528px] text-xl  lg:mb-8">
                Craft stunning grainy-style gradients using Tailwind CSS's
                extensive palette of colors, ideal for enhancing your desktop or
                mobile wallpapers.
              </h4>
            </div>{" "}
          </div>
        </header>
      </>
    );
  }
  