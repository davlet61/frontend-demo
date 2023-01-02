import { Container, Form, useZodForm, Input, Submit, Select, Button } from 'ui';
import { z } from 'zod';

const newNoteSchema = z.object({
  text: z.string().min(1),
});

export const NewNote = () => {
  const form = useZodForm({ schema: newNoteSchema });
  const opts = [{ value: 'Thriller' }, { value: 'Comedy' }];

  return (
    <Container title="New Note">
      <Form form={form} onSubmit={({ text }) => window.alert('create')}>
        <Input label="Name" {...form.register('text')} />
        {/* <Select selected={selected} setSelected={setSelected} options={opts} /> */}
        <Submit>Create Note</Submit>
        <Button intent="secondary">Cancel</Button>
      </Form>
    </Container>
  );
};
