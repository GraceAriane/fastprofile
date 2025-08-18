import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoltLightning } from "@fortawesome/free-solid-svg-icons";

type cssProps = {
  css?: string;
  visibility?: string;
  colorIcon?: string;
};
export function Logo({ css, visibility,colorIcon }: cssProps) {
  return (
    <div className={`flex items-center gap-0 ${css}`}>
      <FontAwesomeIcon icon={faBoltLightning} className={`${colorIcon}`}/>
      <h1 className={`font-semibold text-2xl ${visibility}`}>FastProfile</h1>
    </div>
  );
}
