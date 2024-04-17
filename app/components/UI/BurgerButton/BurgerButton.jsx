import "./BurgerButton.css";
import { useModals } from "@/store/useModalsStore";

export default function BurgerButton() {
  const { sidebar, openSidebar, closeSidebar } = useModals();

  const toggleSidebar = () => {
    sidebar ? closeSidebar() : openSidebar();
  };

  return (
    <button className='burger-button-wrap' onClick={toggleSidebar}>
      <div className={sidebar ? "burger-button active" : "burger-button"}>
        <span />
        <span />
        <span />
      </div>
    </button>
  );
}
