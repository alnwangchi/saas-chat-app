import Image from 'next/image';
import Link from 'next/link';
import logo from '@/images/logo.svg';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { DarkModeToggle } from './DarkModeToggle';

const Header = () => {
  return (
    <header className='sticky top-0 z-50 bg-white dark:bg-gray-900'>
      <nav className='flex flex-col sm:flex-row'>
        <Link href='/' prefetch={false} className='overflow-hidden'>
          <div className='flex items-center w-12'>
            <AspectRatio ratio={1 / 1} className='flex items-center justify-center'>
              <Image
                src={logo}
                width={90}
                height={90}
                alt='alt'
                className='dark:filter dark:invert'
              />
            </AspectRatio>
          </div>
        </Link>
        <div className='flex-1 flex items-center justify-end gap-4'>
          <DarkModeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Header;
