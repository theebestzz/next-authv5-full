import { auth, signOut } from "@/auth";

export default async function Settings() {
  const session = await auth();

  return (
    <div>
      {JSON.stringify(session)}

      <form
        action={async () => {
          "use server";

          await signOut({ redirectTo: "/auth/login" });
        }}
      >
        <button>Logout</button>
      </form>
    </div>
  );
}
