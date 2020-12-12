/** @format */

import auth0 from './api/utils/auth0';
import Link from 'next/link';
export default function Session({ session }) {
  const { user } = session;
  return (
    <div className="flex justify-between item-center py-4">
      <h2 className="text-2xl font-bold text-grey-800">welcome {user.nickname}</h2>
      <img src={user.picture} alt="" className="w-10 h-10" />
      <Link href="/">
        <a className="text-blue-500">go to todos</a>
      </Link>
    </div>
  );
}
export async function getStaticProps(ctx) {
  const session = await auth0.getSession(ctx.req);
  return {
    props: {
      session,
    },
  };
}
