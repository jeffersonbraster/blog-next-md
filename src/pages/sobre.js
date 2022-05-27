import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout title="Sobre Dev-Blog">
      <h1 className="text-5xl border-b-4 pb-5 font-bold">Sobre</h1>

      <div className="bg-white shadow-md rounded-lg px-10 py-6 mt-6">
        <h3 className="text-2xl mb-5">Dev-Blog</h3>

        <p className="mb-3">
          Um blog criado com nextjs, tailwindcss e markdown.
        </p>

        <p className="font-bold">Versão 0.1.0</p>
      </div>
    </Layout>
  );
};

export default About;
