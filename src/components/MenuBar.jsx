import './MenuBar.css';

function MenuBar(props) {
  return (
    <div className="menuBar">
      <input type="text" onChange={props.handleSearch} />
      <button onClick={props.searchButtonClicked}>Search</button>
      <p>sort by: </p>
      <select onChange={props.handleSort}>
        <option value="Name">Name</option>
        <option value="Base Price">Base Price</option>
      </select>
    </div>
  );
}

export default MenuBar;
