/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import('tailwindcss').Config} */
const {
  mdxScreens,
  mdxBoxShadow,
  mdxExtend,
  mdxDefaultColor,
} = require('@flatjs/nextra/tailwind-config');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: [
    './theme.config.{js,tsx}',
    './src/**/*.{md,mdx,js,tsx}',
    './src/components/**/*.{md,mdx,js,tsx}',
    './node_modules/@flatjs/nextra/dist/components/**/*.{js,tsx}',
  ],
  theme: {
    ...defaultTheme,
    screens: {
      ...defaultTheme.screens,
      ...mdxScreens,
    },
    boxShadow: mdxBoxShadow,
    extend: {
      ...mdxExtend,
      fontFamily: {
        display: [
          'Optimistic Display',
          '-apple-system',
          ...defaultTheme.fontFamily.sans,
        ],
        outline: {
          blue: ['1px auto ' + mdxDefaultColor.link, '3px'],
        },
        text: [
          'Optimistic Text',
          '-apple-system',
          ...defaultTheme.fontFamily.sans,
        ],
        mono: ['"Source Code Pro"', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        ...mdxDefaultColor,
        slate: {
          850: 'hsl(222deg 47% 16%)',
        },
        primary: '#5fc3e7',
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      mono: [
        'Monaco',
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace',
      ],
    },
  },
};
