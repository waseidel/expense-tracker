const LoginInput = ({ type, texto, required, name, id }) => {
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {texto}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        placeholder={texto}
      />
    </div>
  );
};

export default LoginInput;
