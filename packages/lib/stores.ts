import create from 'zustand';

import { initialNotes } from './notes';

export interface Note {
  id: number;
  title: string;
  priority: 'high' | 'medium' | 'low';
  text: string;
  type: 'personal' | 'work' | 'school';
}

export interface StoreProps {
  notes: Array<Note>;
  addNote: (note: Note) => void;
  deleteNote: (id: number) => void;
}

export const useNotesStore = create<StoreProps>((set, get) => ({
  notes: initialNotes,
  addNote: (note) => set((state) => ({ notes: [...state.notes, note] })),
  deleteNote: (id) => set((state) => ({ notes: state.notes.filter((n) => n.id !== id) })),
}));

export interface VisibilityStoreProps {
  visibility: boolean;
  toggleVisibility: () => void;
}

export const useVisibility = create<VisibilityStoreProps>((set) => ({
  visibility: false,
  toggleVisibility: () => set((state) => ({ visibility: !state.visibility })),
}));

interface Option {
  value: string;
}

export interface SelectedStore {
  selectedOpt: Option;
  setSelected: (option: Option) => void;
}

export const useSelected = create<SelectedStore>((set) => ({
  selectedOpt: { value: 'Select ...' },
  setSelected: (opt) => set(() => ({ selectedOpt: opt })),
}));
