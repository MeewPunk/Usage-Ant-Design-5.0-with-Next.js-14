import { AntdRegistry } from '@ant-design/nextjs-registry';
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AntdRegistry>{children}</AntdRegistry>
    </html>
  );
}
