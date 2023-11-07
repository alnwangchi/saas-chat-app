import Image from 'next/image';
import Link from 'next/link';
import logo from '@/images/logo.svg';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { DarkModeToggle } from './DarkModeToggle';
import UserButton from './UserButton';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/auth';

// server component 透過此方式取得 session
const Header = async () => {
  const session = await getServerSession(authOptions);
  console.log('🚀 ~ session:', session);

  return (
    <header className='sticky top-0 z-50 bg-white dark:bg-gray-900'>
      <nav className='container flex flex-col sm:flex-row py-3'>
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
          <UserButton session={session}></UserButton>
        </div>
      </nav>
    </header>
  );
};

export default Header;
