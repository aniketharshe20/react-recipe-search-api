import CheckBoxGroup from "./CheckBoxGroup";

const data = require("./data.json");

/**
 * Search box component
 */
function SearchBox(props) {

    return (
        <div className="justify-content-center mt-3">
            <form>
                <div className="col form-group">
                    <h3>Find something to cook</h3>
                    <input type="text" name="search" className="form-control" placeholder="e.g salad, soup" onBlur={props.handleInputChange} />
                </div>
                <div className="row float-left">
                    <h6 className="mr-3">Filters:</h6>
                    <div className="border mr-3 p-1">
                        <p className="filterLbl">Cusine:</p>
                        <CheckBoxGroup items={data.cuisineType} name="cuisineType[]" onChange={props.handleInputChange} />
                    </div>
                    <div className="border mr-3 p-1">
                        <p className="filterLbl">Meal:</p>
                        <CheckBoxGroup items={data.mealType} name="mealType[]" onChange={props.handleInputChange} />
                    </div>
                    <div className="border mr-3 p-1">
                        <p className="filterLbl">Dish:</p>
                        <CheckBoxGroup items={data.dishType} name="dishType[]" onChange={props.handleInputChange} />
                    </div>
                    <div className="border w-health mr-3 p-1">
                        <p className="filterLbl">Health:</p>
                        <CheckBoxGroup items={data.health} name="health[]" onChange={props.handleInputChange} />
                    </div>
                    <div className="border mr-3 p-1">
                        <p className="filterLbl">Diet:</p>
                        <CheckBoxGroup items={data.diet} name="diet[]" onChange={props.handleInputChange} />
                    </div>
                </div>
                <div className="row float-left mt-3">
                    <div className="input-group">
                        <label className="col-form-label mr-1">Calorie</label>
                        <input type="number" className="form-control" placeholder="Start" min="1" name="calorieTo" onChange={props.handleInputChange} />
                        <span className="input-group-addon">-</span>
                        <input type="number" className="form-control" placeholder="End" min="1" name="calorieFrom" onChange={props.handleInputChange} />
                        <label className="col-form-label ml-1 mr-1">Cooking Time</label>
                        <input type="number" className="form-control" placeholder="Start" min="1" name="timeTo" onChange={props.handleInputChange} />
                        <span className="input-group-addon">-</span>
                        <input type="number" className="form-control" placeholder="End" min="1" name="timeFrom" onChange={props.handleInputChange} />
                        <input className="btn btn-primary ml-3" type="button" value="Search" onClick={props.handleSearch} />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SearchBox;