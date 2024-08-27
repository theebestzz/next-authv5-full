"use client";

import { logout } from "@/server/logout";
import { useCurrentUser } from "@/hooks/use-current-user";

export default function Settings() {
  const user = useCurrentUser();
  const onClick = () => {
    logout();
  };
  return (
    <div className="bg-white p-10 rounded-xl">
      {JSON.stringify(user)}
      <button onClick={onClick} type="submit">
        Sign out
      </button>
    </div>
  );
}
