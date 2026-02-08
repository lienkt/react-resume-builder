import { create } from 'zustand'
import type { IResume } from '../types/resume'


interface ResumeState {
  data: IResume,
  setResume: (resume: IResume) => void,
  updatePersonalInfo: (name: string, value: string) => void,
  updateTemplate: (template: string) => void,
  updateAccentColor: (accent_color: string) => void,
}

export const useResume = create<ResumeState>((set) => ({
  data: {
    _id: '',
    userId: '',
    title: '',
    personal_info: null, 
    professional_summary: '',
    experience: [],
    education: [],
    project: [],
    skills: [],
    public: true,
    template: 'classic', // minial, minial-image, modern, classic
    accent_color: '#3B82F6',
    updatedAt: '',
    createdAt: ''
  },
  setResume: (resume: IResume) => set(() => ({  data: resume })),
  updatePersonalInfo: (name: string, value: string) => set((state: any) => ({ 
    data: {
      ...state.data,
      personal_info: {
        ...(state.data.personal_info || {}),
        [name]:  value
      }
    }
  })),
  updateTemplate: (template: string) => set((state: any) => ({ 
    data: {
      ...state.data,
      template
    }
  })),
  updateAccentColor: (accent_color: string) => set((state: any) => ({ 
    data: {
      ...state.data,
      accent_color
    }
  })),
}))
