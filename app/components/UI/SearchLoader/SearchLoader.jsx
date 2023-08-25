import "./SearchLoader.css";

export default function SearchLoader() {
  return (
    <div className='search-loader'>
      <span className='search-loader__dot' />
      <div className='search-loader__dots'>
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
