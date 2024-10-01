import Sidebar from "@/components/sidebar";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex w-full h-screen">
      <Sidebar />
      {children}
    </main>
  );
}
