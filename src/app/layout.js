// app/layout.js
import "./globals.css";

export const metadata = {
  title: "ComproBem Dashboard",
  description: "Sistema de requisições de materiais",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
