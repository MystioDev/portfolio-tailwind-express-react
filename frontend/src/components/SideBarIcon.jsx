const App = (props) => {
  let iconUrl = props.iconUrl || "";
  let iconLabel = props.iconLabel || "";
  let url = props.url || "";

  return (
    <li className="flex items-center justify-center gap-5">
      <a href={url}>
        <img
          src={iconUrl}
          alt={iconLabel}
          className="h-6 lg:h-[38px] w-6 lg:w-[38px]"
        />
      </a>
      {/* <div className="text-stone-300 font-bold">{iconLabel}</div> */}
    </li>
  );
};

export default App;
