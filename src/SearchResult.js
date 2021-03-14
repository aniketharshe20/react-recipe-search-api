import RecipeList from "./RecipeList.js";

/**
 * Search result component
 */
function SearchResult(props) {

    let content = null;
    if (props.error.length > 0) {
        content = <div className="alert alert-danger">{props.error}</div>
    } else {
        if (props.search.length > 0 && props.response.hasOwnProperty(props.search)) {
            if (props.response[props.search].count > 0) {
                content = <RecipeList response={props.response[props.search]} />
            } else {
                content = <div className="alert alert-warning">No recipe found.</div>
            }
        }
    }

    return (
        <div>
            <div className="clearfix"></div>
            <div className="justify-content-center mt-3">
                {content}
            </div>
        </div>
    );
}

export default SearchResult;