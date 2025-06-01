
import React, { useRef } from 'react';

const SyllabusAccordionItem = ({ moduleData, isOpen, onClick }) => {


  const contentRef = useRef(null);

  return (
    <div className="accordion-item border rounded-xl hover:shadow-2xl transition-all duration-700 mb-5 w-250 mx-auto bg-white">
      <div className="relative accordion-header w-full p-4 text-left cursor-pointer flex items-center justify-between" onClick={onClick}>
        <span className={`tracking-wide text-xl bg-white font-bold font-primary transition-transform duration-500 transform ${isOpen ? 'absolute -translate-y-5 text-primary-800 ' : ''}`}>
          {moduleData.module}
        </span>
        <span className={`absolute top-5 right-10 arrow transition-transform duration-500 transform ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </span>
      </div>
      <div ref={contentRef} className="accordion-content overflow-hidden transition-all duration-700 "
        style={{ maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px' }}>
        <div className="px-6 pb-4 text-gray-800 tracking-wide text-lg">
          {moduleData.questions.map((questionItem, index) => (
            <React.Fragment key={index}>
              <p className="py-1 text-lg font-medium">{index+1}. {questionItem.question}</p>
              {questionItem.descriptions.map((desc, i) => (
                <React.Fragment key={i}>
                  <p className='py-1 text-sky-600 text-base '>{desc.description}</p>
                  {desc.answers.map((answer, j) => (
                    <p key={j} className='ml-4 group flex items-start py-1 text-base text-gray-800'>
                      <svg width="3" height="24" viewBox="0 -9 3 24"
                        className="mr-2 ibm-normal text-slate-400 group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500">
                        <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                      {answer}
                    </p>
                  ))}
                </React.Fragment>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

const SyllabusAccordion = ({ items }) => {
  const [openIndex, setOpenIndex] = React.useState(null);

  const handleToggle = (index) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="px-20 py-10 space-y-3 bg-gray-100">
      {items.map((item, index) => (
        <SyllabusAccordionItem
          key={index}
          moduleData={item} // Pass one module only
          isOpen={openIndex === index}
          onClick={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default SyllabusAccordion;
