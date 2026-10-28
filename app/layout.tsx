import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "INNOVER | Sites, identidade visual e experiências digitais",
  description: "Sites, landing pages e identidade visual para marcas que querem criar conexão. Conheça os serviços e comece seu projeto.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
