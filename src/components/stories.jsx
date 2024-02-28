import { Heading } from './Heading';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: '',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const template = (args) => <Heading {...args} />;
