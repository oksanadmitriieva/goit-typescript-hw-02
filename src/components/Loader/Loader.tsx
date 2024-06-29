import { DNA } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader: React.FC = () => {
  return (
    <div className={css.loader}>
      <DNA width="150" />
    </div>
  );
};
export default Loader;
