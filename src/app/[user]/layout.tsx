import Header from "@/app/[user]/header";
import Footer from "@/components/footer";

export default function UserLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: {
    user: string;
  };
}>) {
  return (
    <main className="flex flex-col gap-14 w-9/12 pb-20 max-w-[1300px]">
      <Header params={params} />
      {children}
      <Footer />
    </main>
  );
}
