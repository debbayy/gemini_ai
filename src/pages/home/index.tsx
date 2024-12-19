import useHome from "./useHome";

const Home = () => {
  const { name, setName, email, setEmail, saveData } = useHome();

  return (
    <div>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <button onClick={saveData}>Submit</button>
      </div>
    </div>
  );
};

export default Home;
