import Header from "@/components/header";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col gap-12 w-9/12">
      <Header />
      {children}
    </main>
  );
}
