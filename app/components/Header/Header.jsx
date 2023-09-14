import "./Header.css";
import SearchButton from "../UI/SearchButton/SearchButton";
import Navigation from "../Navigation/Navigation";

export default function Header() {
  return (
    <header className='header'>
      <img className='header__logo' alt='логотип сайта' />
      <div className='header__container'>
        <Navigation />
        <SearchButton />
      </div>
    </header>
  );
}
