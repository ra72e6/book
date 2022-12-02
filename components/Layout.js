import Head from 'next/head';
import Link from 'next/link';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSession } from 'next-auth/react';

const { status, data: session } = useSession();

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + ' - NextShop' : 'NextShop'}</title>
        <meta name="description" content="Nextjs Ecommerce" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ToastContainer position="bottom-center" limit={1} />

      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 items-center px-4 justify-between shadow-md bg-slate-200">
            <Link href="/" className="text-lg font-bold">
              NextShop
            </Link>
            <div>
              <Link href="/cart" className="p-2">
                Cart
              </Link>

              {status === 'loading' ? (
                'Loading'
              ) : session?.user ? (
                session.user.name
              ) : (
                <Link href="/login">
                  <a className="p-2">Login</a>
                </Link>
              )}
              <Link href="/login" className="p-2">
                Login
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>

        <footer className="flex h-10 justify-center items-center shadow-inner bg-red-100">
          <p>Copyright &copy; 2022 NextShop</p>
        </footer>
      </div>
    </>
  );
}
