const priorities = ['low', 'medium', 'high'] as const;
const types = ['school', 'personal', 'work'] as const;

const randomize = () => Math.floor(Math.random() * 3);

export const initialNotes = [
  {
    id: 1,
    title: 'Incididunt proident pariatur officia ea ex ad.',
    priority: priorities[randomize()],
    type: types[randomize()],
    text: 'In proident magna ex eu non ad. Velit dolor velit mollit mollit irure deserunt duis ipsum ut tempor ad. Sunt magna aliqua et ullamco est Lorem esse consectetur reprehenderit nostrud. Et ut sunt minim in pariatur tempor. Id pariatur nisi culpa nostrud officia pariatur amet. Adipisicing ut id fugiat ut enim ipsum enim est nisi nulla Lorem et ullamco. Et ex labore ut fugiat ea sunt.',
  },
  {
    id: 2,
    title: 'Elit velit ex occaecat voluptate veniam do mollit minim.',
    priority: priorities[randomize()],
    type: types[randomize()],
    text: 'In proident magna ex eu non ad. Velit dolor velit mollit mollit irure deserunt duis ipsum ut tempor ad. Sunt magna aliqua et ullamco est Lorem esse consectetur reprehenderit nostrud. Et ut sunt minim in pariatur tempor. Id pariatur nisi culpa nostrud officia pariatur amet. Adipisicing ut id fugiat ut enim ipsum enim est nisi nulla Lorem et ullamco. Et ex labore ut fugiat ea sunt.',
  },
  {
    id: 3,
    title: 'Incididunt proident pariatur officia ea ex ad.',
    priority: priorities[randomize()],
    type: types[randomize()],
    text: 'In proident magna ex eu non ad. Velit dolor velit mollit mollit irure deserunt duis ipsum ut tempor ad. Sunt magna aliqua et ullamco est Lorem esse consectetur reprehenderit nostrud. Et ut sunt minim in pariatur tempor. Id pariatur nisi culpa nostrud officia pariatur amet. Adipisicing ut id fugiat ut enim ipsum enim est nisi nulla Lorem et ullamco. Et ex labore ut fugiat ea sunt.',
  },
  {
    id: 4,
    title: 'Exercitation aliqua ipsum cillum dolore minim Lorem cupidatat do adipisicing consectetur labore minim.',
    priority: priorities[randomize()],
    type: types[randomize()],
    text: 'Eu sit nostrud duis dolore minim enim do laboris nulla dolore. Velit irure irure aliqua sunt proident enim veniam quis velit do enim est eu. Lorem incididunt sint veniam sit excepteur adipisicing Lorem eu tempor qui. Veniam aliqua ipsum fugiat veniam.',
  },
  {
    id: 5,
    title: 'Incididunt proident pariatur officia ea ex ad.',
    priority: priorities[randomize()],
    type: types[randomize()],
    text: 'In proident magna ex eu non ad. Velit dolor velit mollit mollit irure deserunt duis ipsum ut tempor ad. Sunt magna aliqua et ullamco est Lorem esse consectetur reprehenderit nostrud. Et ut sunt minim in pariatur tempor. Id pariatur nisi culpa nostrud officia pariatur amet. Adipisicing ut id fugiat ut enim ipsum enim est nisi nulla Lorem et ullamco. Et ex labore ut fugiat ea sunt.',
  },
  {
    id: 6,
    title: 'Incididunt proident pariatur officia ea ex ad.',
    priority: priorities[randomize()],
    type: types[randomize()],
    text: 'In proident magna ex eu non ad. Velit dolor velit mollit mollit irure deserunt duis ipsum ut tempor ad. Sunt magna aliqua et ullamco est Lorem esse consectetur reprehenderit nostrud. Et ut sunt minim in pariatur tempor. Id pariatur nisi culpa nostrud officia pariatur amet. Adipisicing ut id fugiat ut enim ipsum enim est nisi nulla Lorem et ullamco. Et ex labore ut fugiat ea sunt.',
  },
  {
    id: 7,
    title: 'Incididunt proident pariatur officia ea ex ad.',
    priority: priorities[randomize()],
    type: types[randomize()],
    text: 'In proident magna ex eu non ad. Velit dolor velit mollit mollit irure deserunt duis ipsum ut tempor ad. Sunt magna aliqua et ullamco est Lorem esse consectetur reprehenderit nostrud. Et ut sunt minim in pariatur tempor. Id pariatur nisi culpa nostrud officia pariatur amet. Adipisicing ut id fugiat ut enim ipsum enim est nisi nulla Lorem et ullamco. Et ex labore ut fugiat ea sunt.',
  },
  {
    id: 8,
    title: 'Incididunt proident pariatur officia ea ex ad.',
    priority: priorities[randomize()],
    type: types[randomize()],
    text: 'In proident magna ex eu non ad. Velit dolor velit mollit mollit irure deserunt duis ipsum ut tempor ad. Sunt magna aliqua et ullamco est Lorem esse consectetur reprehenderit nostrud. Et ut sunt minim in pariatur tempor. Id pariatur nisi culpa nostrud officia pariatur amet. Adipisicing ut id fugiat ut enim ipsum enim est nisi nulla Lorem et ullamco. Et ex labore ut fugiat ea sunt.',
  },
  {
    id: 9,
    title: 'Incididunt proident pariatur officia ea ex ad.',
    priority: priorities[randomize()],
    type: types[randomize()],
    text: 'In proident magna ex eu non ad. Velit dolor velit mollit mollit irure deserunt duis ipsum ut tempor ad. Sunt magna aliqua et ullamco est Lorem esse consectetur reprehenderit nostrud. Et ut sunt minim in pariatur tempor. Id pariatur nisi culpa nostrud officia pariatur amet. Adipisicing ut id fugiat ut enim ipsum enim est nisi nulla Lorem et ullamco. Et ex labore ut fugiat ea sunt.',
  },
  {
    id: 10,
    title: 'Incididunt proident pariatur officia ea ex ad.',
    priority: priorities[randomize()],
    type: types[randomize()],
    text: 'In proident magna ex eu non ad. Velit dolor velit mollit mollit irure deserunt duis ipsum ut tempor ad. Sunt magna aliqua et ullamco est Lorem esse consectetur reprehenderit nostrud. Et ut sunt minim in pariatur tempor. Id pariatur nisi culpa nostrud officia pariatur amet. Adipisicing ut id fugiat ut enim ipsum enim est nisi nulla Lorem et ullamco. Et ex labore ut fugiat ea sunt.',
  },
];
