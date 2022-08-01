// import { useTheme } from "next-themes";
import Script from "next/script";

const github = "https://github.com/jcstein/ankrdocs";

export default {
  github: github,
  docsRepositoryBase: github,
  projectLink: github,
  titleSuffix: "⚓️ Ankr",
  logo: (
    <>
      <span className="mr-2 font-extrabold md:inline">Ankr Docs</span>
      <span className="text-gray-600 dark:text-gray-200 font-normal hidden md:inline">
        The Web3 Infrastructure Company
      </span>
    </>
  ),
  head: ({ meta, title }) => {
    const description =
      meta.description || "Ankr is a Web3 Infrastructure Company";
    const title_ =
      title && !title.startsWith("Ankr")
        ? title + " ⚓️ Ankr"
        : "Ankr ⚓️ The Web3 Infrastructure Company";

    return (
      <>
        {/* General */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <title>{title_}</title>
        <meta name="favicon" content="/favicon.ico" />

        {/* SEO */}
        <meta name="description" content={description} />
        <meta name="og:description" content={description} />
        <meta name="og:title" content={title_} />
        {/* <meta name="og:image" content="https://.png" /> */}

        <meta name="apple-mobile-web-app-title" content="Ankr Docs" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://nextra.vercel.app/og.png" />
        <meta name="twitter:site:domain" content="docs.multichain.wiki" />
        <meta name="twitter:url" content="https://docs.multichain.wiki" />
        <meta name="og:title" content={description} />
        <meta name="og:image" content="https://nextra.vercel.app/og.png" />
        <Script
          defer
          data-domain="docs.multichain.wiki"
          src="https://plausible.io/js/plausible.js"
        />
      </>
    );
  },
  search: true,
  prevLinks: true,
  nextLinks: true,
  nextThemes: {
    defaultTheme: "dark",
  },
  footer: true,
  footerEditLink: "Edit this page on GitHub",
  footerText: <>MIT {new Date().getFullYear()} © Ankr.com</>,
  // unstable_faviconGlyph: "🧱",
  unstable_flexsearch: true,
};
