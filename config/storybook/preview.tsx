import React from 'react';
import type { Preview  } from "@storybook/react";
import '!style-loader!css-loader!sass-loader!../../src/app/styles/'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  // decorators: [(Story) => ( <div>{Story()}</div>  )]
};

export default preview;



