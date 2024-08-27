import { Navbar } from "./_components/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full flex flex-col gap-y-10 items-center justify-center">
      <Navbar />
      {children}
    </div>
  );
}
