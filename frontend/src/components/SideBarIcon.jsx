import ImportSvg from "./ImportSvg";

const App = (props) => {
  let svgName = props.svgName || "//";
  let url = props.url || "";
  let iconLabel = props.iconLabel || "";

  return (
    <li className="flex w-auto group-hover/nav:w-48 items-center justify-end flex-row gap-5 relative">
      <img
        src="hashtag.svg"
        alt="Hashtag for Hover"
        className="absolute transition-all -translate-x-10 opacity-0 hover:opacity-100 hover:translate-x-0 -top-3 -left-3" // TODO
      />
      <a
        href={url}
        className="group/link w-full flex items-center justify-center group-hover/nav:justify-start gap-10"
      >
        <div className="h-12 w-12 flex items-center justify-center">
          <ImportSvg
            svgName={svgName}
            svgStyle="group-hover/link:fill-rose-500 transition-all"
          />
        </div>

        <div className="group/nav text-xl transition-all delay-1000 hidden opacity-0 group-hover/nav:flex group-hover/nav:opacity-100 text-stone-300 font-bold">
          {iconLabel}
        </div>
      </a>
    </li>
  );
};

export default App;
