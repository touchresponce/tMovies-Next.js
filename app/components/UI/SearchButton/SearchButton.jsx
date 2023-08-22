import "./SearchButton.css";

export default function SearchButton() {
  const search = false;

  return (
    <button
      className='search-button'
      // onClick={toggleSearch}
    >
      <span
        // className={`search-button__span ${
        //   search
        //     ? "search-button__span_type_open"
        //     : "search-button__span_type_close"
        // }`}
        className='search-button__span search-button__span_type_close'
      />
    </button>
  );
}
