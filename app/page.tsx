import Link from 'next/link';
import React from 'react';
import GitHubIcon from '@/components/website/icons/github';
import { ChevronRight } from 'lucide-react';
import { Header } from '@/components/header';

function Button({
  children,
  variant = 'primary',
}: {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}) {
  const buttonVariants = {
    primary:
      'bg-zinc-50 border border-zinc-100 text-zinc-950 hover:bg-zinc-100 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:text-zinc-50 dark:border-zinc-900',
    secondary:
      'bg-zinc-900 text-white hover:bg-zinc-700 dark:bg-zinc-100 dark:hover:bg-zinc-300 dark:text-zinc-950',
  };

  return (
    <button
      className={`inline-flex items-center rounded-md px-2.5 py-1.5 text-sm ${buttonVariants[variant]}`}
    >
      {children}
    </button>
  );
}

function CardExample({ children }: { children: React.ReactNode }) {
  return (
    <div className='relative'>
      <div className='relative w-full overflow-hidden rounded-xl bg-zinc-50 p-4 shadow-[0px_0px_0px_1px_theme(colors.zinc.100),0px_2px_2px_0px_theme(colors.zinc.50)] dark:border dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-none'>
        <div className='flex h-[350px] w-full items-center justify-center'>
          {children}
        </div>
      </div>
    </div>
  );
}

export default function Motion() {
  return (
    <>
      <Header />
      <div className='px-6 py-4 pb-20'>
        <section className='mx-auto flex h-full max-w-7xl flex-col pt-20'>
          <div className='flex w-full max-w-lg flex-col items-center'>
            <h1 className='relative mb-4 text-4xl font-medium text-zinc-950 dark:text-zinc-50'>
              Build beautiful animated components
            </h1>
            <p className='text-zinc-600 dark:text-zinc-200'>
              Beautifully designed motions components. Easy copy-paste.
              Customizable. Open Source. Built for engineers and designers.
            </p>
          </div>
          <div className='flex w-fit items-center space-x-4 py-6'>
            <Link href='/docs'>
              <Button>
                Explore Docs
                <ChevronRight className='ml-1.5 h-4 w-4 fill-white dark:fill-zinc-950' />
              </Button>
            </Link>
            <a
              href='https://github.com/ibelick/motion-primitives'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button variant='secondary'>
                <GitHubIcon className='mr-1.5 h-4 w-4 fill-white dark:fill-zinc-950' />
                Star on GitHub
              </Button>
            </a>
          </div>
        </section>
        <div className='mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
          {/* <section className='mx-auto w-full'>
            <CardExample>
              <DialogBasicOne />
            </CardExample>
          </section> */}
        </div>
      </div>
    </>
  );
}
