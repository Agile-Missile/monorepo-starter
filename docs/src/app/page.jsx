import Link from 'next/link';

export default function IndexPage() {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Background Layer */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23304050' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              opacity: 0.3,
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center min-h-screen px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="mb-8">
            <div className="inline-block p-2 bg-gray-800 rounded-lg mb-6">
              <svg
                className="w-12 h-12 text-blue-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Documentation
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Welcome to our documentation. Find everything you need to get
            started.
          </p>
          <Link
            href="/docs"
            className="bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
          >
            <span>Get Started</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
          {[
            {
              title: 'Quick Start',
              description:
                'Get up and running in minutes with our quick start guide.',
              link: '/docs/quick-start',
            },
            {
              title: 'API Reference',
              description: 'Detailed API documentation for developers.',
              link: '/docs/api',
            },
            {
              title: 'Examples',
              description: 'Learn from practical examples and use cases.',
              link: '/docs/examples',
            },
            {
              title: 'Guides',
              description: 'Step-by-step guides for common scenarios.',
              link: '/docs/guides',
            },
            {
              title: 'Best Practices',
              description: 'Learn recommended patterns and best practices.',
              link: '/docs/best-practices',
            },
            {
              title: 'FAQ',
              description: 'Find answers to frequently asked questions.',
              link: '/docs/faq',
            },
          ].map((feature, i) => (
            <Link
              key={i}
              href={feature.link}
              className="block p-6 border border-gray-800 rounded-lg hover:shadow-lg transition-all hover:border-gray-700 bg-gray-900/50 backdrop-blur-sm"
            >
              <h2 className="text-xl font-semibold mb-2 text-gray-100">
                {feature.title}
              </h2>
              <p className="text-gray-400">{feature.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
