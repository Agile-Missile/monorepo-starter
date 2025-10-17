import type { FC } from 'react';
import type { Metadata } from 'next';
import HomeView from './widgets/HomeView';

export const metadata: Metadata = {
  title: 'monorepo starter',
  description: 'monorepo starter',
};

const IndexPage: FC = () => {
  return (
    <section className="mx-auto w-full">
      <HomeView />
    </section>
  );
};

export default IndexPage;
