import { withAuth } from 'next-auth/middleware';

export default withAuth;

export const config = {
  macher: ['/', '/chat', 'chat/:id*', '/register'],
};
