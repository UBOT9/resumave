import { useDispatch } from 'react-redux';
import { saveResume } from '../store/slices/resumeSlice';
import SingleEditor from './SingleEditor';
import MultiEditor from './MultiEditor';
import { FaSave } from 'react-icons/fa';

const resumeFields = {
  contact: {
    multiple: false,
    fields: [
      { name: 'name', label: 'Full Name', placeholder: 'John Doe', required: true },
      { name: 'email', label: 'Email', type: 'email', placeholder: 'john.doe@example.com' },
      { name: 'phone', label: 'Phone', type: 'tel', placeholder: '+1234567890' },
      { name: 'address', label: 'Address', placeholder: '123 Street, City, Country' },
      { name: 'linkedin', label: 'LinkedIn', placeholder: 'linkedin.com/in/johndoe' },
      { name: 'github', label: 'GitHub', placeholder: 'github.com/johndoe' },
      { name: 'portfolio', label: 'Portfolio', placeholder: 'johndoe.com' },
    ],
  },
  summary: {
    multiple: false,
    fields: [
      {
        name: 'summary',
        label: 'Summary',
        type: 'textarea',
        placeholder: 'Brief summary of your skills and experience...',
        span: true,
        rows: 5,
      },
    ],
  },
  education: {
    multiple: true,
    fields: [
      { name: 'degree', label: 'Study Program', placeholder: 'Bachelor of Computer Science' },
      { name: 'institution', label: 'Institution', placeholder: 'University Name' },
      { name: 'start', label: 'Start Date', type: 'month', placeholder: 'MM/YYYY' },
      { name: 'end', label: 'End Date', type: 'month', placeholder: 'MM/YYYY' },
      { name: 'location', label: 'Location', placeholder: 'City, Country' },
      { name: 'gpa', label: 'GPA', placeholder: '3.8/4.0' },
    ],
  },
  experience: {
    multiple: true,
    fields: [
      { name: 'role', label: 'Title / Position', span: true, placeholder: 'Software Engineer' },
      { name: 'company', label: 'Company', placeholder: 'Company Name' },
      { name: 'location', label: 'Location', placeholder: 'City, Country' },
      { name: 'start', label: 'Start Date', type: 'month', placeholder: 'MM/YYYY' },
      { name: 'end', label: 'End Date', type: 'month', placeholder: 'MM/YYYY' },
      {
        name: 'description',
        label: 'Responsibilities',
        type: 'textarea',
        placeholder: 'Brief description of your responsibilities...',
        span: true,
        rows: 4,
      },
    ],
  },
  projects: {
    multiple: true,
    fields: [
      { name: 'title', label: 'Project Title', placeholder: 'Project Name' },
      { name: 'url', label: 'Project URL', placeholder: 'https://example.com/project' },
      {
        name: 'description',
        label: 'Description',
        type: 'textarea',
        placeholder: 'Briefly describe your project...',
        span: true,
      },
    ],
  },
  skills: {
    multiple: false,
    fields: [
      {
        name: 'skills',
        label: 'Skills',
        type: 'textarea',
        placeholder: 'List your skills...',
        span: true,
        rows: 3,
      },
    ],
  },
  certificates: {
    multiple: true,
    fields: [
      { name: 'title', label: 'Certificate Title', placeholder: 'Certificate Name', span: true },
      { name: 'issuer', label: 'Issuing Organization', placeholder: 'Organization Name' },
      { name: 'date', label: 'Issuance Date', type: 'month', placeholder: 'MM/YYYY' },
    ],
  },
  languages: {
    multiple: true,
    fields: [
      { name: 'language', label: 'Language', placeholder: 'Language Name' },
      { name: 'proficiency', label: 'Proficiency', placeholder: 'e.g., Fluent, Intermediate, Beginner' },
    ],
  },
};

const Editor = ({ tab }) => {
  const { multiple, fields } = resumeFields[tab];
  const dispatch = useDispatch();

  const save = (e) => {
    e?.preventDefault();
    dispatch(saveResume());
    alert('Resume saved!');
  };

  return (
    <form onSubmit={save} className="card my-8">
      {multiple ? (
        <MultiEditor tab={tab} fields={fields} />
      ) : (
        <SingleEditor tab={tab} fields={fields} />
      )}

      <button type="submit" className="btn-filled ml-auto mt-6 w-full gap-2 px-6 text-center md:w-auto">
        <span>Save</span> 
        <FaSave />
      </button>
    </form>
  );
};

export default Editor;