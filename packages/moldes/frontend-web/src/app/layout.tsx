import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FABRICA-SOFTWARE',
  description: 'Plataforma multi-tenant enterprise',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
