import type { Meta, StoryObj } from '@storybook/react';
import { CountrySelect } from './CountrySelect';
import { Country } from '../../model/types/country';

const meta: Meta<typeof CountrySelect> = {
  title: 'widget/CountrySelect',
  component: CountrySelect,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CountrySelect>;

export const Primary: Story = {
  args: {
    value: Country.Russia,
  },
};
