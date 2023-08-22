export default function MovieSearch() {
  // const location = useLocation();
  // const dispatch = useDispatch();
  // const { link } = useSelector((state) => state.filters);

  // //сносим тип для того чтоб в последующий раз
  // //при переходе на страницу не было 2х запросов к серверу
  // useEffect(() => {
  //   return () => {
  //     dispatch(searchActions.reset());
  //     dispatch(filtersActions.reset());
  //   };
  // }, []);

  // // смена тип контента
  // useEffect(() => {
  //   dispatch(
  //     filtersActions.changeFiltersState({
  //       name: "type",
  //       value: location.pathname.substring(1),
  //     })
  //   );
  // }, [location]);

  // // запрос на смену фильтра
  // useEffect(() => {
  //   if (link.length) {
  //     dispatch(searchActions.reset());
  //     dispatch(fetchContent(link));
  //   }
  // }, [link]);

  return (
    <section className='movieSearch'>
      <Filters />
      <SearchList />
    </section>
  );
}
