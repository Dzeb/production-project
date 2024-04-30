import path from 'path';
import type { StorybookConfig } from '@storybook/react-webpack5';
import { DefinePlugin, RuleSetRule } from 'webpack';
import { BuildPaths } from '../build/types/config';
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
    config.resolve?.modules?.unshift(paths.src);
    config.resolve?.extensions?.push('.tsx', '.ts', '.js');

    if (config.module?.rules) {
      // eslint-disable-next-line no-param-reassign
      config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
          return { ...rule, exclude: /\.svg$/i };
        }
        return rule;
      });
    }
    config.module?.rules?.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
        },
      ],
    });
    config.module?.rules?.push(buildCssLoaders(true));

    config.plugins?.push(
      new DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify(''),
      }),
    );
    return config;
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
