'use client';
import { ScrollArea } from '@/components/website/scroll-area';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { Header } from '@/components/header';

type NavigationItem = {
  name: string;
  href: string;
  isNew?: boolean;
};

type NavigationGroup = {
  name: string;
  children: NavigationItem[];
};

const NAVIGATION: NavigationGroup[] = [
  {
    name: 'Getting started',
    children: [
      {
        name: 'Introduction',
        href: '/docs',
      },
    ],
  },
  {
    name: 'Components',
    children: [
      {
        name: 'Hero Background',
        href: '/docs/hero-background',
      },
      {
        name: 'Cards',
        href: '/docs/cards',
      },
    ],
  },
];

function NavigationDesktop() {
  const pathname = usePathname();

  return (
    <aside className='sticky hidden h-[calc(100dvh-theme(spacing.16))] w-[220px] shrink-0 pt-8 md:block lg:pt-12'>
      <ScrollArea>
        <nav>
          <ul role='list' className='h-full'>
            {NAVIGATION.map((item, index) => {
              return (
                <li className='mb-6' key={`${item.name}-${index}`}>
                  <div className='text-sm/6 font-medium'>{item.name}</div>
                  <ul role='list' className='mt-4 space-y-3.5 border-l'>
                    {item.children.map((child) => {
                      const isActive = pathname === child.href;

                      return (
                        <li key={child.href}>
                          <Link
                            className={cn(
                              'relative inline-flex items-center space-x-1 pl-4 text-sm font-medium',
                              isActive &&
                                'before:absolute before:inset-y-0 before:left-[-1.5px] before:w-[2px] before:rounded-full'
                            )}
                            href={child.href}
                          >
                            <span>{child.name}</span>
                            {child?.isNew && (
                              <span className='whitespace-nowrap rounded-lg px-2 text-[10px] font-semibold'>
                                New
                              </span>
                            )}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </nav>
      </ScrollArea>
    </aside>
  );
}

function NavigationMobile() {
  const router = useRouter();
  const pathname = usePathname();
  const [selectedHref, setSelectedHref] = React.useState(pathname);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const href = e.target.value;
    setSelectedHref(href);
    router.push(href);
  };

  return (
    <div className='block w-full pt-8 md:hidden'>
      <select
        className='block w-full appearance-none rounded-lg border px-4 py-2 text-sm font-medium'
        value={selectedHref}
        onChange={handleChange}
      >
        {NAVIGATION.map((item) => {
          return (
            <optgroup label={item.name} key={item.name}>
              {item.children.map((child) => (
                <option key={child.href} value={child.href}>
                  {child.name}
                </option>
              ))}
            </optgroup>
          );
        })}
      </select>
    </div>
  );
}

export default function ComponentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className='px-6 lg:px-8'>
        <div className='mx-auto md:max-w-7xl'>
          <div className='mx-auto flex w-full flex-col items-start md:flex-row md:space-x-12'>
            <NavigationDesktop />
            <NavigationMobile />
            <main className='prose min-w-0 max-w-full flex-1 bg-background pb-16 pt-8 text-foreground dark:prose-invert prose-h1:text-2xl prose-h1:font-semibold prose-h2:text-xl prose-h2:font-medium prose-h3:text-base prose-h3:font-medium prose-strong:font-medium prose-table:block prose-table:overflow-y-auto lg:pt-12'>
              {children}
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
