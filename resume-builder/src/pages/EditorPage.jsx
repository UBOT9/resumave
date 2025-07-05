import { useLocation } from 'react-router-dom';
import Editor from '../components/Editor';
import Preview from '../components/Preview';
import Tabs from '../components/Tabs';

const EditorPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const tab = searchParams.get('tab') || 'contact';

  return (
    <div className="mx-auto mt-8 flex max-w-screen-xl flex-col-reverse gap-10 px-3 pb-8 md:flex-row md:mt-8">
      <Preview />
      <div className="flex-grow">
        <Tabs />
        <Editor tab={tab} />
      </div>
    </div>
  );
};

export default EditorPage;