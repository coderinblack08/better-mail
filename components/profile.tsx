import { auth } from "../auth";
import { SignOut } from "./sign-out";

export default async function Profile() {
  const session = await auth();

  if (!session?.user) return null;

  return (
    <div>
      <p>{session.user.name}</p>
      <img src={session.user.image ?? ""} alt="User Avatar" />
      <SignOut />
    </div>
  );
}
