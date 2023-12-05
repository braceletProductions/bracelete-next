import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="top-0 left-0 right-0">
        <Navbar />
      </div>
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
