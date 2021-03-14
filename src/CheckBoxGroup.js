function CheckBoxGroup(props) {

    const checkBoxes = [];

    for (var key in props.items) {
        if (props.items.hasOwnProperty(key)) {
            checkBoxes.push(
                <div className="form-check float-left" key={key}>
                    <input type="checkbox" className="form-check-input" value={key} id={key + props.name} name={props.name} onChange={props.onChange} />
                    <label className="form-check-label chkLabel" htmlFor={key + props.name}>{props.items[key]}</label>
                </div>
            );
        }
    }

    return (
        <div className="float-left clearfix checkbox-group">{checkBoxes}</div>
    );
}

export default CheckBoxGroup;