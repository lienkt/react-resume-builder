import { DownloadIcon, EyeIcon, EyeOffIcon, Share2Icon } from 'lucide-react'
import { useResume } from '../../../hooks/useResume'

interface ControlActionProps {
  resumeId: string | undefined
}

function ControlAction({ resumeId }: ControlActionProps) {
  const { data } = useResume();

  function downloadResume() {
    window.print();
  }

  function handleShare() {
    if (!resumeId) return;
    const origin = window.location.origin;
    const url = `${origin}/resume-share/${resumeId}`;

    navigator.clipboard.writeText(url);

    if (navigator.share) {
      navigator.share({
        url: url,
        text: 'My Resume'
      })
    } else {
      alert('Share not supported in this browser. Please copy link: ' + url)
    }
  }

  return (
    <>
      <button
        className='flex items-center p-2 px-4 gap-2 text-xs bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600 rounded-lg ring-blue-300 hover:ring transition-colors'
        onClick={handleShare}
      >
        <Share2Icon 
          className='size-4'

        />
      </button>

      <button className="flex items-center p-2 px-4 gap-2 text-xs bg-gradient-to-br from-purple-100 to-purple-200 text-purple-600 rounded-lg ring-purple-300 hover:ring transition-colors">
        {data.public ? (
          <>
            <EyeIcon className="size-4"/>
            Public
          </>
        ) : (
          <>
            <EyeOffIcon className="size-4"/>
            Private
          </>
        )}
      </button>

      <button
        className='flex items-center p-2 px-4 gap-2 text-xs bg-gradient-to-br from-green-100 to-green-200 text-green-600 rounded-lg ring-green-300 hover:ring transition-colors'
        onClick={downloadResume}
      >
        <DownloadIcon className='size-4'/> Download
      </button>
    </>
  )
}

export default ControlAction