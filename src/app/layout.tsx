import Container from '@/components/Common/Container';
import { metadata } from '@/constants/metadata';
import '@/styles/globals.css';
export { metadata };
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Container>{children}</Container>
      </body>
    </html>
  );
}
