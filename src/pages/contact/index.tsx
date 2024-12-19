import useContact from "./useContact"
const Contact = () => {
  const { user, fetchData } = useContact();

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      {user && (
      <div>
        <h1>Users</h1>
        <ul>
          {user.map((item, key) => (
            <li key={key}>
              <h2>{item.nama}</h2>
              <p>{item.data_email}</p>
            </li>
          ))}
        </ul>
      
      </div>
      )}
    </div>
  )
}

export default Contact
