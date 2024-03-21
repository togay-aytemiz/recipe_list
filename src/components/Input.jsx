const Input = ({ query, setQuery, handleSearch }) => {
  const handleClick = (e) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <div>
      <form
        className="flex gap-2 sm:flex-row flex-col my-4"
        onSubmit={handleClick}
      >
        <input
          type="text"
          placeholder="Search recipe..."
          className="p-3 bg-slate-100 rounded-lg w-full"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className=" bg-green-700 text-white rounded-lg sm:w-[100px] p-3">
          Search
        </button>
      </form>
    </div>
  );
};
export default Input;
