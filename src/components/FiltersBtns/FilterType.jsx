import { useDispatch, useSelector } from "react-redux";
import css from "./FiltersBtns.module.css";
import { setVehicleType } from "../../redux/filters/filterSlice";
import { selectVehicleType } from "../../redux/filters/filterSelectors";

const vehicleTypes = [
  { searchName: "panelTruck", name: "Van", icon: "./sprite.svg#icon-grid1x2" },
  {
    searchName: "fullyIntegrated",
    name: "Fully Integrated",
    icon: "./sprite.svg#icon-grid",
  },
  { searchName: "alcove", name: "Alcove", icon: "./sprite.svg#icon-grid3x3" },
];

export default function FilterType() {
  const dispatch = useDispatch();
  const selectedVehicleType = useSelector(selectVehicleType);
  const handleVehicleTypeClick = (type) => {
    if (selectedVehicleType === type) {
      dispatch(setVehicleType(null));
    } else {
      dispatch(setVehicleType(type));
    }
  };
  return (
    <div className={css.container}>
      <h4 className={css.title}>Vehicle type</h4>
      <div className={css.box}>
        {vehicleTypes.map((type) => (
          <button
            className={css.btn}
            key={type.name}
            onClick={() => handleVehicleTypeClick(type.searchName)}
            style={{
              borderColor:
                selectedVehicleType === type.searchName ? "#d84343" : "#dadde1",
            }}
          >
            <svg className={css.icon} width={32} height={32}>
              <use href={type.icon}></use>
            </svg>
            {type.name}
          </button>
        ))}
      </div>
    </div>
  );
}
