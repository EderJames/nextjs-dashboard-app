import '@/app/ui/global.css';
import { x } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${x[0].className} antialiased`}>{children}</body>
    </html>
  );
}