const Input = ({ label, name, type = 'text', placeholder, value, onChange, span, rows, required }) => {
  const inputClassName = `block w-full rounded-md border border-gray-600 bg-gray-700/75 p-2 text-sm text-gray-100 shadow-md outline-none focus:border-2 focus:border-primary-500 focus:bg-gray-700 md:text-base`;

  const InputEl = () => {
    if (type === 'textarea') {
      return (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          className={`${inputClassName} min-h-32`}
          value={value || ''}
          onChange={onChange}
          rows={rows || 4}
        />
      );
    }

    return (
      <input
        type={type}
        name={name}
        id={name}
        className={inputClassName}
        placeholder={placeholder || `Enter ${label}`}
        value={value || ''}
        onChange={onChange}
      />
    );
  };

  return (
    <div className={`${span ? 'md:col-span-2' : ''}`}>
      {label && (
        <label htmlFor={name} className="mb-0.5 block text-xs text-gray-300 md:text-sm">
          {label} {required && '*'}
        </label>
      )}
      {InputEl()}
    </div>
  );
};

export default Input;