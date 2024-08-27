import { currentUser } from "@/lib/auth";

export default async function Server() {
  const user = await currentUser();
  return <div>{JSON.stringify(user)}</div>;
}
