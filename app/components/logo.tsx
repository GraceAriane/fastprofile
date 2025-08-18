import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoltLightning } from "@fortawesome/free-solid-svg-icons";

type cssProps = {
  css?: string;
  visibility?: string;
};
export function Logo({ css, visibility }: cssProps) {
  return (
    <div className={`flex items-center gap-0 ${css}`}>
      <FontAwesomeIcon icon={faBoltLightning} />
      <h1 className={`font-semibold text-2xl ${visibility}`}>FastProfile</h1>
    </div>
  );
}
