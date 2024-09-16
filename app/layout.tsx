import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/website/theme-provider';
import { GeistMono } from 'geist/font/mono';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DesignLand',
  description:
    'DesignLand, a collection of open-source, customizable motion components built with Framer Motion and Tailwind CSS. Perfect for enhancing your web projects with beautiful, smooth animations.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} ${GeistMono.variable}`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <div className='isolate min-h-screen'>{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
