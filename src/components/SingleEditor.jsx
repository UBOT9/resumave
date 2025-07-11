import { useDispatch, useSelector } from 'react-redux';
import { updateResumeValue } from '../store/slices/resumeSlice';
import Input from './Input';

const SingleEditor = ({ tab, fields }) => {
  const dispatch = useDispatch();
  const resumeData = useSelector(state => state.resume[tab]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateResumeValue({
      tab,
      name,
      value,
    }));
  };

  return (
    <div className="grid md:grid-cols-2 gap-4 md:gap-6">
      {fields.map(field => (
        <Input 
          key={field.name} 
          {...field} 
          onChange={handleChange} 
          value={resumeData?.[field?.name] || ''} 
        />
      ))}
    </div>
  );
};

export default SingleEditor;