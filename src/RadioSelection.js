const Dropdown = (props) => {
    let options = props.values.map((value) => <span>
            <input type="radio" id={value} name={props.name} value={value} onChange={props.handleChange}></input>
            <label for={value}>{value}</label>
        </span>
    );

    return (<div className="parameter">
        <legend>{props.name}:</legend>
            {options}
    </div>);
}

export default Dropdown;