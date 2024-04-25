const App = (props) => {
  let iconUrl = props.iconUrl || "";
  let iconLabel = props.iconLabel || "";

  let url = props.url || "";
  let target = props.target || "";

  return (
    <a
      href={url}
      target={target}
      className="flex items-center justify-center gap-5"
    >
      <img
        src={iconUrl}
        alt={iconLabel}
        className="h-6 lg:h-[28px] w-6 lg:w-[28px]"
      />
      <div className="hidden text-stone-300 font-bold">{iconLabel}</div>
    </a>
  );
};

export default App;
