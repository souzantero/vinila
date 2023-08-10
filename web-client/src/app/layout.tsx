import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vinila",
  description: "A melhor loja de vinis do Brasil",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
