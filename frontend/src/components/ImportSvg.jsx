import { lazy, Suspense } from "react";

const importSVG = (props) => {
  let svgName = props.svgName || "";
  let svgStyle = props.svgStyle || "";

  const Svg = lazy(() => import(`./icons/${svgName}`));

  return (
    <Suspense>
      <Svg svgStyle={svgStyle} />
    </Suspense>
  );
};

export default importSVG;
