import { useResume } from "../../../hooks/useResume";
import TextField from "../../molecules/TextField"
import { User } from 'lucide-react';

function PersonalInfo() {
  const { data, updatePersonalInfo } = useResume();

  console.log('data: ', data)

  return (
    <div>
      <h3 className="text-lg font-semibold text-gray900">Personal Information</h3>
      <p className="text-sm text-gray-600">Get Started with the personal information</p>

      <div className="flex items-center gap-2 mt-5">
        <label className="cursor-pointer">
          <img 
            alt="Profile" 
            className="h-16 w-16 object-cover rounded-full ring ring-slate-300 hover:opacity-80" 
            src="https://react-resume-builder-vert.vercel.app/assets/profile-CuUrRH1B.jpg"
          />
          <input accept="image/jpeg, image/png, image/jpg" className="hidden" type="file" />
        </label>
      </div>

      <div className="space-y-1 mt-5">
        <TextField 
          icon={User}
          label="Full Name"
          required
          placeholder="Enter full name"
          value={data.personal_info?.full_name || ''}
          onChange={(event) => {
            updatePersonalInfo('full_name', event.target.value)
          }}
        />
      </div>

      <div className="space-y-1 mt-5">
        <TextField 
          icon={User}
          label="Email"
          required
          placeholder="Enter email"
          value={data.personal_info?.email || ''}
          onChange={(event) => {
            updatePersonalInfo('email', event.target.value)
          }}
        />
        
      </div>
    </div>
  )
}

export default PersonalInfo