'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Session } from 'next-auth';
import { Button } from './ui/button';
import { signIn, signOut } from 'next-auth/react';

const UserButton = ({ session }: { session: Session | null }) => {
  if (!session) return <Button onClick={() => signIn()}>登入</Button>;

  return (
    session && (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            {/* <AvatarImage src='https://github.com/shadcn.png' /> */}
            <AvatarImage src={session.user?.image} />
            <AvatarFallback>{session.user?.name}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => signOut()}>登出</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  );
};

export default UserButton;
