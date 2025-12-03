import Script from "next/script";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Travelogue Pedia",
  description: "Discover the World with Travelogue Pedia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Fjalla+One&family=IBM+Plex+Sans:ital,wght@0,100..700;1,100..700&family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&family=Oswald:wght@200..700&display=swap" rel="stylesheet"/> 

 {/* Favicon */}
<link
  rel="icon"
  type="image/png"
  href="/icon.png"
/>

  {/* Bootstrap CSS */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          crossOrigin="anonymous"
        />

        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body className="dark-theme">
        {children}
          <Toaster position="top-right" />
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          crossOrigin="anonymous"
          defer
        />
      </body>
    </html>
  );
}