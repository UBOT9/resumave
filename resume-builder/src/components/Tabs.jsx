import { Link, useLocation } from 'react-router-dom';

const Tabs = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const activeTab = searchParams.get('tab') || 'contact';
  
  const tabs = ['contact', 'summary', 'education', 'experience', 'projects', 'skills', 'certificates', 'languages'];

  return (
    <div className="flex w-full gap-2 overflow-y-auto md:gap-3">
      {tabs.map(tab => (
        <Link
          key={tab}
          className={`tabs relative cursor-pointer rounded-md px-4 py-1.5 text-sm capitalize md:text-base ${
            activeTab === tab 
              ? 'bg-primary-400 text-black' 
              : 'bg-gray-700 hover:bg-gray-600'
          }`}
          to={`/editor?tab=${tab}`}
        >
          {tab}
        </Link>
      ))}
    </div>
  );
};

export default Tabs;