const EditEmploy = ({ employee }) => {
  const [name, setname] = useState(employee.name);
  const [address, setAddress] = useState(employee.address);
  const [position, setPosition] = useState(employee.position);

  const updateEmployee = async (e) => {
    e.preventDefault();
    try {
      const body = { name, address, position };
      const response = await fetch(
        `http://localhost:4000/employees/${employee.id_employ}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };
};
