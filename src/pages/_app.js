import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import Head from "next/head";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Bracelete Production | Event Management Company in India </title>
        <meta
          name="description"
          content="Discover seamless event planning and execution with our expert team. From corporate galas to intimate gatherings, we specialize in crafting unforgettable experiences"
        />
        {/* add keywords for seo */}
        <meta
          name="keywords"
          content="Event Management Company in Delhi, Wedding Planner in Delhi, Best Wedding Planner in Delhi, Wedding Planner in India, Wedding Decorator in Delhi, AV Sound Setup in Delhi, Event Production Company in Delhi, Event planning services, Event management company, Professional event planners, Corporate event planning, Wedding planning services, Party planners, Special event coordination, Event design and production, Event logistics and coordination, Venue selection and management, Event decoration and styling, Budget-friendly event planning, Event marketing and promotion, Event entertainment services, Destination event planning, Event registration and ticketing, Event branding and sponsorship, Social media marketing for events, Event technology solutions, Event planning checklist"
        />
        {/* Add Open Graph meta tags */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Bracelete Production | Event Management Company in India"
        />
        <meta
          property="og:description"
          content="Discover seamless event planning and execution with our expert team. From corporate galas to intimate gatherings, we specialize in crafting unforgettable experiences"
        />
        <meta
          property="og:image"
          content="https://www.braceletproductions.in/wedding_cover.jpg"
        />
        {/* image URL */}
        <meta property="og:url" content="https://www.braceletproductions.in/" />
        <meta property="og:site_name" content="Bracelete Productions" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bracelet Productions" />
        <meta
          name="twitter:description"
          content="Create unforgettable moments with our event planning services. From corporate conferences to dream weddings, we handle it all."
        />
        <meta
          name="twitter:image"
          content="https://www.braceletproductions.in/wedding_cover.jpg"
        />
        {/* site icon  */}

        <link rel="icon" href="/logo.png" />
        {/* canonical url common link  */}
        <link rel="canonical" href="https://www.braceletproductions.in/" />
      </Head>

      <div className="flex flex-col min-h-screen">
        <div className="top-0 left-0 right-0">
          <Navbar />
        </div>
        <main className="flex-grow">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}
