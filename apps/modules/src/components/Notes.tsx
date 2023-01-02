import { useNotesStore } from 'lib';
import { Button, Container } from 'ui';

const Notes = () => {
  const { notes, deleteNote } = useNotesStore();

  const assignBgColor = (priority: string) => {
    switch (priority) {
      case 'low':
        return 'bg-teal-300';
      case 'medium':
        return 'bg-orange-400';
      case 'high':
        return 'bg-red-400';

      default:
        return 'bg-transparent';
    }
  };

  return (
    <section className="flex flex-wrap p-12">
      {notes.map((note) => (
        <Container
          key={note.id}
          title={note.title}
          action={
            <Button intent="danger" onClick={() => deleteNote(note.id)}>
              Delete Note
            </Button>
          }
        >
          <div className="flex gap-4">
            <p className="text-brand-800 p-1 underline">{note.type}</p>
            <p className={`rounded ${assignBgColor(note.priority)} p-1 text-center font-bold text-white`}>
              {note.priority}
            </p>
          </div>
          <div className="prose-xl py-2">{note.text}</div>
        </Container>
      ))}
    </section>
  );
};

export default Notes;
