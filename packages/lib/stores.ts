import create from 'zustand';

export interface Movie {
  title: string;
  image: string;
}

export interface StoreProps {
  movies: Array<Movie>;
  addMovie: (movie: Movie) => void;
}

export const useMovieStore = create<StoreProps>((set) => ({
  movies: [],
  addMovie: (movie) => set((state) => ({ movies: [...state.movies, movie] })),
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
