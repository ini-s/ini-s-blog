import Header from "@/components/Header";
import Head from "next/head";

import { FC, ReactNode } from "react";

interface IGeneralLayoutProps {
  children: ReactNode;
}

const GeneralLayout: FC<IGeneralLayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Ini&apos;s Blog</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-ini.ico" />
      </Head>

      <Header />

      <main>{children}</main>
    </>
  );
};

export default GeneralLayout;
