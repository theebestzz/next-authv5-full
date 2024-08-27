"use client";

import { logout } from "@/server/logout";

export function LogoutButton({ children }: { children: React.ReactNode }) {
  const onClick = () => {
    logout();
  };
  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
}
