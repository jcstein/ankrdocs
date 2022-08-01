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

        <meta name="apple-mobile-web-app-title" content="Ankr Docs" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://nextra.vercel.app/og.png" />
        <meta name="twitter:site:domain" content="docs.multichain.wiki" />
        <meta name="twitter:url" content="https://docs.multichain.wiki" />
        <meta name="og:image" content="https://nextra.vercel.app/og.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <Script
          defer
          data-domain="docs.multichain.wiki"
          src="https://plausible.io/js/plausible.js"
        />
      </>
    );
  },
  nextThemes: {
    defaultTheme: "dark",
  },
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: "Edit this page on GitHub →",
  footerText: (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 space-between">
      <div className="flex flex-col">
        MIT {new Date().getFullYear()} © Ankr.com
      </div>
      <div className="flex flex-col">
        <div className="text-current font-bold pb-3">Products</div>
        <a
          href="https://www.ankr.com/build/nodes/"
          target="_blank"
          rel="noopener"
          className="no-underline text-current font-semibold"
        >
          Node Service
        </a>
        <a
          href="https://www.ankr.com/staking/"
          target="_blank"
          rel="noopener"
          className="no-underline text-current font-semibold"
        >
          Ankr Staking
        </a>
        <a
          href="https://www.ankr.com/ankr-protocol/"
          target="_blank"
          rel="noopener"
          className="no-underline text-current font-semibold"
        >
          Ankr Protocol
        </a>
      </div>
      <div className="flex flex-col">
        <div className="text-current font-bold pb-3">About us</div>
        <a
          href="https://www.ankr.com/docs/learn/reference/ankr-vision"
          target="_blank"
          rel="noopener"
          className="no-underline text-current font-semibold"
        >
          Our Vision
        </a>
        <a
          href="https://www.ankr.com/about/our-purpose/"
          target="_blank"
          rel="noopener"
          className="no-underline text-current font-semibold"
        >
          Our Story
        </a>
        <a
          href="https://www.ankr.com/about/careers/"
          target="_blank"
          rel="noopener"
          className="no-underline text-current font-semibold"
        >
          Careers
        </a>
        <a
          href="https://www.ankr.com/about/team/"
          target="_blank"
          rel="noopener"
          className="no-underline text-current font-semibold"
        >
          Team
        </a>
        <a
          href="https://medium.com/ankr-network"
          target="_blank"
          rel="noopener"
          className="no-underline text-current font-semibold"
        >
          Community
        </a>
      </div>
      <div className="flex flex-col">
        <div className="text-current font-bold pb-3">Socials</div>
        <a
          href="https://twitter.com/ankr"
          target="_blank"
          rel="noopener"
          className="no-underline text-current font-semibold"
        >
          Twitter
        </a>
        <a
          href="https://t.me/ankrnetwork"
          target="_blank"
          rel="noopener"
          className="no-underline text-current font-semibold"
        >
          Telegram
        </a>
        <a
          href="https://discord.gg/ankr/"
          target="_blank"
          rel="noopener"
          className="no-underline text-current font-semibold"
        >
          Discord
        </a>
        <a
          href="https://medium.com/ankr-network"
          target="_blank"
          rel="noopener"
          className="no-underline text-current font-semibold"
        >
          Medium
        </a>
        <a
          href="https://www.reddit.com/r/Ankrofficial/"
          target="_blank"
          rel="noopener"
          className="no-underline text-current font-semibold"
        >
          Reddit
        </a>
      </div>
    </div>
  ),
  unstable_faviconGlyph: "⚓️",
  unstable_flexsearch: true,
};
