// import { useDispatch, useSelector } from "react-redux";
// import { modalsActions } from "../../store/modalsSlice";
import "./BurgerButton.css";

export default function BurgerButton() {
  // const dispatch = useDispatch();
  // const { sidebar } = useSelector((state) => state.modals);

  const sidebar = true;

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
