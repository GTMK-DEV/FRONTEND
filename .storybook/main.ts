import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  // 스토리북에 사용할 .mdx .stories 파일들의 경로를 지정합니다.
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  staticDirs: ['../public']
};
export default config;
