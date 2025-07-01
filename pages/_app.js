import "@/styles/globals.css";
import { Bricolage_Grotesque} from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={bricolage.variable}>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </main>
  );
}
