// import { useDispatch, useSelector } from "react-redux";
// import { modalsActions } from "../../store/modalsSlice";
import "./BurgerButton.css";
// import { useModals } from "@/store";

export default function BurgerButton() {
  // const dispatch = useDispatch();
  // const { sidebar } = useSelector((state) => state.modals);

  const sidebar = true;
  // const { fastSearch } = useModals();

  // const toggleSidebar = () => {
  // sidebar
  // ? dispatch(modalsActions.closeSidebar())
  // : dispatch(modalsActions.openSidebar());
  // };

  return (
    <div
      className={`burger ${sidebar ? "open" : ""}`}
      // onClick={toggleSidebar}
    >
      <div className='burger__button' />
    </div>
  );
}
