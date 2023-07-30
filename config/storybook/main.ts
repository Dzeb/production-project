import path from 'path';
import { BuildPaths } from '../build/types/config';
import type { StorybookConfig } from '@storybook/react-webpack5';
import { buildCssLoaders } from '../build/loaders/builsCssLoaders';

const config: StorybookConfig = {
  stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-styling',
    'storybook-addon-themes',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  webpackFinal: async (config) => {
    const paths: BuildPaths = {
      entry: '',
      build: '',
      html: '',
      src: path.resolve(__dirname, '..', '..', 'src'),
    };

    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push('.tsx', '.ts', '.js');
    config.module?.rules?.push(buildCssLoaders(true));
    return config;
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
