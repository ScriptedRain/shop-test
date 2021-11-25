export const Button1 = ({ name, current }) => {
  return (
    <div>
      <button class="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-500 hover:scale-105 hover: focus:ring-indigo-300 focus:ring-opacity-80">
        {name}
      </button>
    </div>
  );
};
export const Button2 = ({ name, current }) => {
  return (
    <div>
      <button class="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-900 rounded-md hover:bg-indigo-500 hover:scale-105 hover: focus:ring-indigo-300 focus:ring-opacity-80">
        {name}
      </button>
    </div>
  );
};
