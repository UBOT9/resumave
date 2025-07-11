import { useSelector } from 'react-redux';

const formatDate = (date) => {
  if (!date) return '';
  const d = new Date(date);
  return d.toLocaleDateString(undefined, {
    month: 'long',
    year: 'numeric',
  });
};

const Preview = () => {
  const resumeData = useSelector(state => state.resume);
  const { contact, summary, education, experience, projects, skills, certificates, languages } = resumeData;

  return (
    <div className="w-full md:max-w-[24rem] bg-white text-black p-6 rounded-lg shadow-lg">
      <div className="space-y-6">
        {/* Header */}
        {contact.name && (
          <div className="text-center border-b pb-4">
            <h1 className="text-2xl font-bold text-gray-800">{contact.name}</h1>
            <div className="mt-2 text-sm text-gray-600 space-y-1">
              {contact.email && <div>{contact.email}</div>}
              {contact.phone && <div>{contact.phone}</div>}
              {contact.address && <div>{contact.address}</div>}
              {contact.linkedin && <div>{contact.linkedin}</div>}
              {contact.github && <div>{contact.github}</div>}
              {contact.portfolio && <div>{contact.portfolio}</div>}
            </div>
          </div>
        )}

        {/* Summary */}
        {summary.summary && (
          <div>
            <h2 className="text-lg font-semibold text-gray-800 border-b mb-2">Summary</h2>
            <p className="text-sm text-gray-700">{summary.summary}</p>
          </div>
        )}

        {/* Education */}
        {education.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold text-gray-800 border-b mb-2">Education</h2>
            {education.map((edu, i) => (
              <div key={i} className="mb-3">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium text-gray-800">{edu.degree}</h3>
                  <span className="text-xs text-gray-600">
                    {formatDate(edu.start)} - {formatDate(edu.end)}
                  </span>
                </div>
                <div className="text-sm text-gray-600">
                  {edu.institution} {edu.gpa && `(${edu.gpa})`}
                </div>
                {edu.location && <div className="text-xs text-gray-500">{edu.location}</div>}
              </div>
            ))}
          </div>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold text-gray-800 border-b mb-2">Experience</h2>
            {experience.map((exp, i) => (
              <div key={i} className="mb-4">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium text-gray-800">{exp.role}</h3>
                  <span className="text-xs text-gray-600">
                    {formatDate(exp.start)} - {formatDate(exp.end)}
                  </span>
                </div>
                <div className="text-sm text-gray-600">{exp.company}</div>
                {exp.location && <div className="text-xs text-gray-500">{exp.location}</div>}
                {exp.description && (
                  <div className="mt-2 text-xs text-gray-700">
                    {exp.description.split('\n').map((line, idx) => (
                      <div key={idx}>• {line}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Projects */}
        {projects.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold text-gray-800 border-b mb-2">Projects</h2>
            {projects.map((project, i) => (
              <div key={i} className="mb-3">
                <h3 className="font-medium text-gray-800">{project.title}</h3>
                {project.url && (
                  <div className="text-xs text-blue-600">{project.url}</div>
                )}
                {project.description && (
                  <div className="mt-1 text-xs text-gray-700">
                    {project.description.split('\n').map((line, idx) => (
                      <div key={idx}>• {line}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Skills */}
        {skills.skills && (
          <div>
            <h2 className="text-lg font-semibold text-gray-800 border-b mb-2">Skills</h2>
            <p className="text-sm text-gray-700">{skills.skills}</p>
          </div>
        )}

        {/* Certificates */}
        {certificates.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold text-gray-800 border-b mb-2">Certifications</h2>
            {certificates.map((cert, i) => (
              <div key={i} className="mb-2">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium text-gray-800">{cert.title}</h3>
                  <span className="text-xs text-gray-600">{formatDate(cert.date)}</span>
                </div>
                <div className="text-sm text-gray-600">{cert.issuer}</div>
              </div>
            ))}
          </div>
        )}

        {/* Languages */}
        {languages.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold text-gray-800 border-b mb-2">Languages</h2>
            <div className="grid grid-cols-2 gap-2">
              {languages.map((lang, i) => (
                <div key={i}>
                  <div className="text-sm font-medium text-gray-800">{lang.language}</div>
                  <div className="text-xs text-gray-600">{lang.proficiency}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Preview;