import { Check, Layout } from 'lucide-react'
import React from 'react';
import { templates } from '../../../data';
import { useResume } from '../../../hooks/useResume';

function TemplateSelector() {
  const { updateTemplate } = useResume();
  const templateSelected = useResume(state => state.data.template);
  const [isOpen, setIsOpen] = React.useState(false);

  function toggleOpenTemplate() {
    setIsOpen(prevState => !prevState)
  }

  return (
    <div className='relative'>
      <button
        className='flex items-center gap-1 text-sm text-blue-600 bg-gradient-to-br from-blue-50 to-blue-100 ring-blue-300 hover:ring transition-all px-3 py-2 rounded-lg'
        onClick={toggleOpenTemplate}
      >
        <Layout size={14} />
        <span className='max-sm:hidden'>Template</span>
      </button>

      {isOpen && (
        <div
          className='absolute top-full w-xs p-3 mt-2 space-y-3 z-10 bg-white rounded-md border border-gray-200 shadow-sm'
        >
          {templates.map(template => {
            const isSelected = templateSelected === template.id;
            return (
              <div 
                key={template.id}
                className={`relative p-3 border rounded-md cursor-pointer transition-all border-gray-300 ${isSelected ? 'border-blue-400 bg-blue-100' : 'hover:border-gray-400 hover:bg-gray-100'}`}
                onClick={() => updateTemplate(template.id)}
              >
                {isSelected && (
                  <div className='absolute top-2 right-2'>
                    <div className='size-5 bg-blue-400 rounded-full flex items-center justify-center'>
                      <Check className='w-3 h-3 text-white'/>
                    </div>
                  </div>
                )}
                <div>
                  <h4 className="font-medium text-gray-800">{template.name}</h4>
                  <div className="mt-2 p-2 bg-blue-50 rounded text-xs text-gray-500 italic">{template.preview}</div></div>
              </div>
            )
          })}

        </div>
      )}
    </div>
  )
}

export default TemplateSelector