import ProfileInfo from "../components/ProfileInfo/ProfileInfo";
import ProfileSavedMovies from "../components/ProfileSavedMovies/ProfileSavedMovies";

export const metadata = {
  title: "Аккаунт",
};

export default function ProfilePage() {
  return (
    <>
      <ProfileSavedMovies />
      <ProfileInfo />
    </>
  );
}
