import Form from "react-bootstrap/Form";

const UserMetrics = () => {
  return (
    <section className="user-metrics">
      <input type="number" min={1} max={150} required placeholder="Age"></input>
      <input
        type="number"
        min={1}
        max={250}
        required
        placeholder="Weight (kg)"
      ></input>
      <input
        type="number"
        min={1}
        max={250}
        required
        placeholder="Height (cm)"
      ></input>
      <label htmlFor="sex">Sex: </label>
      <select id="sex">
        <option>Male</option>
        <option>Female</option>
      </select>
      <Form.Label>Range</Form.Label>
      <Form.Range />
    </section>
  );
};

export default UserMetrics;
