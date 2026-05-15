import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type EventLayoutType = 'grid' | 'hero-list';

interface ConfigState {
  eventLayout: EventLayoutType;
  setEventLayout: (layout: EventLayoutType) => void;
}

export const useConfigStore = create<ConfigState>()(
  persist(
    (set) => ({
      eventLayout: 'hero-list',
      setEventLayout: (layout) => set({ eventLayout: layout }),
    }),
    {
      name: 'nara-config',
    }
  )
);
