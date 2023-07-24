import Head from "next/head";
import { MainLayout } from "@/layouts/mainLayout";
import Swap from "@/components/swap/swap";

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Swapper</title>
      </Head>
      <Swap/>
     

    </MainLayout>
  );
}
