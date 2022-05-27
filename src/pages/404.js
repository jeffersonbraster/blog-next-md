import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";

const NotFoundPage = () => {
  return (
    <Layout title="Pagina não encontrada">
      <div className="flex flex-col items-center mt-20">
        <Image
          src="/images/logo.png"
          width={70}
          height={70}
          alt="logo blog dev"
          className="bg-gray-800 rounded-2xl"
        />

        <h1 className="text-6xl my-5">Ops..</h1>

        <h2 className="text-4xl text-gray-400 mb-5">
          Essa pagina não foi encontrada no blog
        </h2>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
