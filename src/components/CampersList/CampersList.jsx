import { useSelector } from "react-redux";
import { selectCampers } from "../../redux/campers/camperSelectors";
import CamperItem from "../CamperItem/CamperItem";
import css from "./CampersList.module.css";

export default function CampersList() {
  const campers = useSelector(selectCampers);

  return (
    <div>
      <ul className={css.list}>
        {campers.map((camper) => (
          <li key={camper.id} className={css.item}>
            <CamperItem camper={camper} />
          </li>
        ))}
      </ul>
    </div>
  );
}