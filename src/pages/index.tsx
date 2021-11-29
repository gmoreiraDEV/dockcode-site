import Head from "next/head";
import Layout from "@components/Layout";
import HeroBanner from "@components/HeroBanner";
import Clients from "@components/Clients";
import Form from "@components/Form";
import Plans from "@components/Plans";
import { Works } from "@components/Works";
import { Schedule } from "@components/Schedule";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>DOCKCODE</title>
      </Head>
      <HeroBanner />
      <Clients />
      <Form />
      <Plans />
      <Works />
      <Schedule />
    </Layout>
  );
}
