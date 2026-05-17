import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export const metadata = {
  title: "Create Next App",

};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
     
    >
      <body className={poppins.className}>{children}
        <Toaster richColors />
      </body>
    </html>
  );
}
