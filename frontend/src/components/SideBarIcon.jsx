import ImportSvg from "./ImportSvg";

const App = (props) => {
  let svgName = props.svgName || "//";
  let url = props.url || "";
  let iconLabel = props.iconLabel || "";
  let isHovered = props.isHovered || false;
  let delay = props.delay || "";

  return (
    <li
      className={
        "flex w-auto items-center justify-center flex-row gap-5 relative transition-all " +
        (isHovered ? "translate-x-0" : "translate-x-16")
      }
    >
      <img
        src="hashtag.svg"
        alt="Hashtag for Hover"
        className="absolute transition-all -translate-x-10 opacity-0 hover:opacity-100 hover:translate-x-0 -top-3 -left-3" // TODO
      />
      <a
        href={url}
        className="group/link w-full flex items-center flex-row justify-start gap-10"
      >
        <div className="h-12 w-12 flex items-center justify-center">
          <ImportSvg
            svgName={svgName}
            svgStyle="group-hover/link:fill-rose-500 transition-all"
          />
        </div>

        <div
          className={
            "text-xl transition-all " +
            delay +
            " " +
            (isHovered
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-10") +
            " text-stone-300 font-bold"
          }
        >
          {iconLabel}
        </div>
      </a>
    </li>
  );
};

export default App;
