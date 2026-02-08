export const templates = [
  { id: 'classic', name: 'Classic', preview: 'A clean, tranditional resume format with clear sections and professional typography' },
  { id: 'modern', name: 'Modern', preview: 'Sleek design with strategic use of color and modern font choice' },
  { id: 'minimal-image', name: 'Minimal Image', preview: 'Minimal design with a single image and clean typography' },
  { id: 'minimal', name: 'Minimal', preview: 'Ultra-clean design that puts your content front and center' },
]

export const dataAccentColors = [
  { name: 'Blue', value: '#3B82F6' },
  { name: 'Red', value: '#EF4444' },
  { name: 'Green', value: '#10B981' },
  { name: 'Yellow', value: '#F59E0B' },
  { name: 'Purple', value: '#8B5CF6' },
  { name: 'Pink', value: '#EC4899' },
  { name: 'Indigo', value: '#6366F1' },
  { name: 'Teal', value: '#14B8A6' },
  { name: 'Orange', value: '#F97316' },
  { name: 'Gray', value: '#6B7280' },
]

export const dataAllResumes = [
  {
    _id: '69192818a1c0de350da8ed14312321',
    userId: '691849bb78852ceb05e00760',
    title: "Lien's Resume",
    personal_info: {
      full_name: "Lien Kim",
      email: "lien@@gmail.com",
      phone: "0 123456789",
      location: "NY, USA",
      linkedin: "https://www.linkedin.com",
      website: "https://www.example.com",
      profession: "Full Stack Developer",
      image: "https://ik.imagekit.io/lkdqteyuz/user-resumes/resume-1763258003321_U2q4j4vcI.png"
    },
    professional_summary: "Results-driven Web Developer with 6 years of experience in designing, developing, and implementing innovative web solutions, seeking a challenging role to leverage expertise in front-end and back-end technologies to drive impactful results and contribute to a forward-thinking organization.",
    experience: [
      {
        company: "Example Technologies.",
        position: "Senior Full Stack Developer",
        start_date: "2023-06",
        end_date: "Present",
        description: "Architected, developed, and deployed innovative full-stack applications at Example Technologies.\ncreating robust back-end systems and intuitive front- end interfaces to deliver meaningful digital experiences ",
        is_current: true,
        _id: "68d2a31a1c4dd38875bb037f"
      },
      {
        company: "Example Technologies.",
        position: "Full Stack Developer",
        start_date: "2019-08",
        end_date: "2023-05",
        description: "Engineered and deployed scalable full-stack web applications for Example Technologies, translating complex requirements into robust front-end interfaces and efficient back-end services.",
        is_current: false,
        _id: "68d4f7abc8f0d46dc8a8b114"
      }
    ],
    education: [
      {
        institution: "Example Institute of Technology",
        degree: "B.TECH",
        field: "CSE",
        graduation_date: "2023-05",
        gpa: "8.7",
        _id: "68d2a31a1c4dd38875bb0380"
      },
      {
        institution: "Example Public School",
        degree: "HIGHER SECONDARY",
        field: "PCM",
        graduation_date: "2019-03",
        gpa: "",
        _id: "68d2a31a1c4dd38875bb0381"
      }
    ],
    project: [
        {
          name: "Team Task Management System",
          type: "Web Application (Productivity Tool)",
          description: "TaskTrackr is a collaborative task management system designed for teams to create, assign, track, and manage tasks in real time. ",
          _id: "68d4f882c8f0d46dc8a8b139"
        },
        {
          name: "EduHub - Online Learning Platform",
          type: "Web Application (EdTech Platform)",
          description: "EduHub is an online learning platform where instructors can create courses with video lessons, quizzes, and downloadable resources.",
          _id: "68d4f89dc8f0d46dc8a8b147"
        }
    ],
    skills: ['React', 'Tailwind'],
    template: 'minimal-image',
    accent_color: '#3B82F6',
    updatedAt: "2025-11-30T01:10:49.371Z",
    createdAt: "2025-11-16T01:25:44.547Z",
    public: true,
  }
]