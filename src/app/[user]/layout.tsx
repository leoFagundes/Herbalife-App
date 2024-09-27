import Header from "@/components/header";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col gap-14 w-9/12 pb-20 max-w-[1300px]">
      <Header />
      {children}
    </main>
  );
}
