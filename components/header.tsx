import Link from 'next/link';
import GitHubIcon from './website/icons/github';
import XIcon from './website/icons/x';
import ThemeSwitch from './website/theme-switch';

export async function Header() {
  return (
    <header className='relative top-0 z-10 bg-white px-6 py-5 dark:border-white/10 dark:bg-zinc-950 lg:z-10 lg:flex lg:h-16 lg:items-center lg:px-8 lg:py-0'>
      <div className='mx-auto flex w-full items-center justify-between md:max-w-7xl'>
        <Link href='/' className='relative flex items-center'>
          <div className='text-zinc-950 dark:text-white'>DesignLand</div>
        </Link>
        <nav className='flex items-center gap-2'>
          <a
            href='https://twitter.com/Ibelick'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex h-9 w-9 items-center justify-center'
          >
            <XIcon className='h-4 w-4 fill-zinc-950 dark:fill-white' />
          </a>
          <a
            href='https://github.com/ibelick/motion-primitives'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex h-9 w-9 items-center justify-center'
          >
            <GitHubIcon className='h-4 w-4 fill-zinc-950 dark:fill-white' />
          </a>
          <ThemeSwitch />
        </nav>
      </div>
    </header>
  );
}
