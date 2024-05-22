import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Layout from "./components/layout";
import StyledComponentsRegistry from "./lib/registry";
import StoreProvider from "./StoreProvider";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MKS Sistemas",
  description: "Desafio de um website de produtos com carrinho de compras.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">

      <body className={montserrat.className}>


        <StoreProvider>

          <StyledComponentsRegistry>
            <Layout>

              {children}

            </Layout>
          </StyledComponentsRegistry>

        </StoreProvider>

      </body>

    </html>
  );
}
