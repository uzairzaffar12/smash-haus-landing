import { ReactNode } from 'react';
import ClientConfigration from './_components/ClientConfigration';
import Navbar from './_components/Navbar';
import Footer from './_components/Footer';

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <ClientConfigration>
      <Navbar />
      <main className='overflow-hidden'>{children}</main>
      <Footer />
    </ClientConfigration>
  );
}
