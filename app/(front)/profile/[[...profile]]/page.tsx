import { UserProfile } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const ProfilePage = async () => {
  const { userId } = auth();
  const isAuth = !!userId;

  if (!isAuth) {
    redirect("/sign-in");
  }
  return <UserProfile path="/profile" />;
};
export default ProfilePage;
