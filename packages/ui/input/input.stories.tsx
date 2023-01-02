import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FieldValues, useForm, UseFormProps, UseFormRegister } from 'react-hook-form';

import { Input as FormField } from '.';

export default {
  title: 'Forms/FormField',
  component: FormField,
  argTypes: {
    type: {
      options: ['text', 'email', 'password', 'file', 'checkbox'],
      control: {
        type: 'select',
      },
    },
  },
} as ComponentMeta<typeof FormField>;

const Template: ComponentStory<typeof FormField> = (args) => {
  const { register } = useForm();

  return <FormField {...args} />;
};

export const Text = Template.bind({});
Text.args = {
  type: 'text',
  label: 'Text Field',
  name: 'text-field',
  placeholder: 'Text goes here',
};

export const Email = Template.bind({});
Email.args = {
  type: 'email',
  name: 'email',
  label: 'Email',
  placeholder: 'john.doe@email.com',
};

export const Password = Template.bind({});
Password.args = {
  type: 'password',
  name: 'password',
  label: 'Password',
  placeholder: '********',
};
