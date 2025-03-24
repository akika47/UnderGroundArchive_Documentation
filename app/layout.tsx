import { Footer, LastUpdated, Layout, Navbar } from "nextra-theme-docs";
import { Head, Search } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import "./globals.css"


export const metadata = {
  title: "UnderGroundArchive Dokumentum",
};

const lastUpdated = (
  <LastUpdated locale='hu-HU'>Utolsó módosítás dátuma: </LastUpdated>
);


const navbar = (
  <Navbar
    logo={<b>UnderGroundArchive</b>}
    logoLink={"https://bhavyadang.in"}
    projectLink="https://github.com/bhavya-dang"
    chatLink="https://discord.gg/"
  />
);
const footer = (
  <Footer>MIT {new Date().getFullYear()} © UnderGroundArchive</Footer>
);

const search = <Search placeholder="Keresés.."></Search>;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      // Not required, but good for SEO
      lang="hu"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/bhavya-dang/my-project"
          footer={footer}
          search={search}
          editLink={null}
          feedback={{ content: null }}
          lastUpdated={lastUpdated}
          toc={{title : "Ezen az oldalon", backToTop : "Vissza a tetejére"}}
          
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
