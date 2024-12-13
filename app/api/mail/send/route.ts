import { getToken } from "next-auth/jwt";
import { Client } from "@microsoft/microsoft-graph-client";

export async function POST(req: Request) {
  const token = await getToken({ req, secret: process.env.AUTH_SECRET });

  if (!token?.accessToken) {
    return new Response("Unauthorized", { status: 401 });
  }

  const client = Client.init({
    authProvider: (done) => done(null, token.accessToken as string),
  });

  const sendMail = {
    message: {
      subject: "Meet for lunch?",
      body: {
        contentType: "Text",
        content: "The new cafeteria is open.",
      },
      toRecipients: [
        {
          emailAddress: {
            address: "kevinlu.email@gmail.com",
          },
        },
      ],
    },
  };

  try {
    await client.api("/me/sendMail").post(sendMail);
    return new Response("Email sent successfully", { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Error sending email", { status: 500 });
  }
}
