import Layout from "@components/Layout";
import HeroBanner from "@components/HeroBanner";
import Clients from "@components/Clients";
import Form from "@components/Form";
import Plans from "@components/Plans";

export default function Home() {
  return (
    <Layout>
      <HeroBanner />
      <Clients />
      <Form />
      <Plans />
    </Layout>
  );
}
