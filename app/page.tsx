import { auth } from "@/auth";
import Profile from "@/components/profile";
import { SignIn } from "@/components/sign-in";
import SendEmail from "@/components/send-email";
export default async function Home() {
  const session = await auth();

  if (!session)
    return (
      <div>
        <p>Not authenticated</p>
        <SignIn />
      </div>
    );

  return (
    <div>
      <Profile />
      <SendEmail />
    </div>
  );
}
