import "./BurgerButton.css";
import { useModals } from "@/store/useModalsStore";

export default function BurgerButton() {
  const { sidebar, openSidebar, closeSidebar } = useModals();

  const toggleSidebar = () => {
    sidebar ? closeSidebar() : openSidebar();
  };

  return (
    <div className={`burger ${sidebar ? "open" : ""}`} onClick={toggleSidebar}>
      <div className='burger__button' />
    </div>
  );
}
