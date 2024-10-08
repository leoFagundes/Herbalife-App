import Sidebar from "@/app/(auth)/admin/sidebar";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex w-full g-full">
      <Sidebar />
      {children}
    </main>
  );
}
