export interface IPersonalInfo {
  full_name: string,
  email: string,
  phone: string,
  location: string,
  linkedin?: string,
  website?: string,
  profession: string,
  image?: string
}

export interface IExperience {
  company: string,
  position: string,
  start_date: string,
  end_date: string,
  description: string,
  is_current: boolean,
  _id: string
}

export interface IEducation {
  institution: string,
  degree: string,
  field: string,
  graduation_date: string,
  gpa?: string,
  _id: string
}

export interface IProject {
  name: string,
  type: string,
  description: string,
  _id: string
}

export interface IResume {
  _id: string,
  userId: string,
  title: string,
  personal_info: IPersonalInfo | null, 
  professional_summary: string,
  experience: IExperience[],
  education: IEducation[],
  project: IProject[],
  skills: string[],
  template: string, // minial, minial-image, modern, classic
  accent_color: string,
  updatedAt: string,
  createdAt: string
}

export interface ITemplateProps {
  data: DataResumeState,
  accentColor: string
}