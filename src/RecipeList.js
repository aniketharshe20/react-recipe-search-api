/**
 * Recipe list component
 */
function RecipeList(props) {

    /**
     * Split's the array in chunks of 5
     */
    function chunkArray(array) {
        let result = [];
        let size = 5;
        for (let i = 0; i < array.length; i += size) {
            let chunk = array.slice(i, i + size);
            result.push(chunk);
        }
        return result;
    }
    const result = chunkArray(props.response['hits']);

    return (
        <div>
            <div className="clearfix"></div>
            {result.map((chunk, index) => {
                return (
                    <div key={`row${index}`} className="row mt-4">
                        {chunk.map((item, index) => {
                            let domain = (new URL(item.recipe.url));
                            return (
                                <div key={`recipe${index}`} className="border p-2 recipe-box mr-2">
                                    <span>
                                        <img alt={item.recipe.label} src={item.recipe.image} height="200" width="200"/>
                                    </span>
                                    <span>
                                        <a href={item.recipe.shareAs} rel="noreferrer" target="_blank">{item.recipe.label}</a>
                                    </span>
                                    <p className="cal-info p-2">{Math.round(item.recipe.calories)} Calories | {item.recipe.ingredients.length} Ingredients</p>
                                    <span>
                                        <a href={item.recipe.url} rel="noreferrer" target="_blank">{domain.hostname}</a>
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
}

export default RecipeList;