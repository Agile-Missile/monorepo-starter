import { type FC, type PropsWithChildren, type ReactNode } from 'react';
import { type AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import 'nextra-theme-docs/style.css';
import 'xterm/css/xterm.css';
import '../styles.css';

type Props = AppProps & {
  Component: {
    Layout?: FC<{
      children: ReactNode;
    }>;
  };
};

const Noop: FC<PropsWithChildren> = ({ children }) => <>{children}</>;

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: Props) {
  const Layout = Component['Layout'] || Noop;

  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
