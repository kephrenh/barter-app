export default function FrontLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex-1 py-16 lg:py-0 w-full flex flex-col justify-center items-center">
      {children}
    </main>
  );
}
