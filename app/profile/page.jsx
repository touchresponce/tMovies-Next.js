export const metadata = {
  title: "Кабинет",
  // description:
  //   "Каталог фильмов в хорошем качестве Full HD 720 и 1080 в онлайн-кинотеатре TasteMovies",
};

export default async function ProfilePage() {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        className='section-1'
        style={{
          margin: "100px 70px",
        }}
      >
        <h2>Здесь типо очередь на просмотр</h2>
      </div>
      <div
        className='section-2'
        style={{
          margin: "100px 70px",
        }}
      >
        <h2>Здесь типо история просмотров</h2>
      </div>
    </section>
  );
}
