import { type Note, useNotesStore, useSelected, useVisibility } from 'lib';
import { Button, Form, Input, Modal as Popup, Radio, Select, Submit, TextArea, useZodForm } from 'ui';
import { z } from 'zod';

const opts = ['personal', 'work', 'school'];

const newNoteSchema = z.object({
  title: z.string().min(3),
  text: z.string().min(1),
  type: z.literal('personal').or(z.literal('work')).or(z.literal('school')),
  priority: z.enum(['low', 'medium', 'high']),
});

const Modal = () => {
  const form = useZodForm({ schema: newNoteSchema });
  const { control } = form;
  const { visibility, toggleVisibility } = useVisibility();
  const { selectedOpt, setSelected } = useSelected();
  const { addNote } = useNotesStore();

  const onFormCancel = () => {
    form.reset();
    toggleVisibility();
  };

  const onFormSubmit = (formData: Omit<Note, 'id'>) => {
    const newNote = {
      id: Math.floor(Math.random() * performance.now()),
      title: formData.title,
      type: formData.type,
      priority: formData.priority,
      text: formData.text,
    };
    addNote(newNote);
    toggleVisibility();
    form.reset();
  };

  return (
    <Popup show={visibility} toggleShow={toggleVisibility} title="Add a new note">
      <Form form={form} onSubmit={onFormSubmit}>
        <Input label="Name" placeholder="Name" {...form.register('title')} />
        <Select
          control={control}
          label="Note type"
          selectedOpt={selectedOpt}
          setSelected={setSelected}
          options={opts}
        />
        <Radio label="Priority" control={control} />
        <TextArea label="Note" {...form.register('text')} />
        <Submit>Create Note</Submit>
        <Button intent="secondary" onClick={onFormCancel}>
          Cancel
        </Button>
      </Form>
    </Popup>
  );
};

export default Modal;
