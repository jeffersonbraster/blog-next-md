import Head from "next/head";
import Header from "./Header";
import Search from "./Search";

const Layout = ({ title, keywords, description, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Search />

      <main className="container mx-auto my-7">{children}</main>
    </div>
  );
};

Layout.defaultProps = {
  title: "Bem vindos to Dev-Blog",
  keywords: "develop, development, coding, programming, games",
  description:
    "Um blog simples para amantes de programação e conteúdos de tecnologias.",
};

export default Layout;
