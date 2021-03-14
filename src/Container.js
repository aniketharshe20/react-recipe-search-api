import React, { useState, useEffect } from "react";
import SearchBox from "./SearchBox";
import SearchResult from "./SearchResult";
require('dotenv').config();

const data = require("./data.json");
const apiUrl = 'https://api.edamam.com/search';
var queryStr;
var enocdedSearch = "";
var recipes = [];

/**
 * Container component
 */
function Container() {

    const [state, setState] = useState({
        search: "",
        calorieTo: "",
        calorieFrom: "",
        timeTo: "",
        timeFrom: "",
        cuisineType: [],
        mealType: [],
        dishType: [],
        health: [],
        diet: [],
        response: {},
        error: ""
    });

    useEffect(() => {
        if (state.search.length > 0) {
            document.title = 'Recipe - ' + state.search;
        }
        prepareRequestParams();
        // If response is not set then only call api
        if (state.search.length > 0 && !state.response.hasOwnProperty(enocdedSearch)) {
            getRecipes();
        }
        return () => {
            return false;
        }
    });

    /**
     * Handle's the input params.
     */
    function handleInputChange(event) {
        let { name, value } = event.target;

        if (event.target.type === 'checkbox') {
            let field = name.replace(/[[\]']+/g, '');
            let fieldsArr = ['cuisineType[]', 'mealType[]', 'dishType[]'];
            if (fieldsArr.indexOf(name) !== -1) {
                value = data[field][value];
            }
            if (event.target.checked) {
                state[field].push(value);
                setState(prevState => ({ ...prevState, [field]: [...state[field]] }));
            } else {
                let index = state[field].indexOf(value);
                if (index !== -1) {
                    state[field].splice(index, 1);
                    setState(prevState => ({ ...prevState, [field]: [...state[field]] }));
                }
            }
        } else {
            setState(prevState => ({ ...prevState, [name]: value }));
        }
        prepareRequestParams();
    }

    /**
     * Handles the search button click.
     */
    function handleSearch() {
        // If response is not set then only call api
        if (!state.response.hasOwnProperty(enocdedSearch)) {
            getRecipes();
        }
    }

    /**
     * Prepare's the request params & encodes it to cache the data
     */
    function prepareRequestParams() {
        function appendParam(items, param) {
            if (items.length > 0) {
                for (let i = 0; i < items.length; i++) {
                    queryStr += '&' + param + '=' + items[i].toLowerCase();
                }
            }
        }

        queryStr = '?q=' + state.search;
        appendParam(state.cuisineType, 'cuisineType');
        appendParam(state.mealType, 'mealType');
        appendParam(state.dishType, 'dishType');
        appendParam(state.health, 'health');
        appendParam(state.diet, 'diet');
        if (state.calorieTo > 0 && state.calorieFrom > 0) {
            queryStr += '&calories=' + state.calorieTo + '-' + state.calorieFrom;
        }
        if (state.timeTo > 0 && state.timeFrom > 0) {
            queryStr += '&time=' + state.timeTo + '-' + state.timeFrom;
        }
        enocdedSearch = btoa(queryStr);
        queryStr += '&app_id=' + process.env.REACT_APP_APP_ID + '&app_key=' + process.env.REACT_APP_APP_KEY;
    }

    /**
     * Fetches the recipes from api.
     */
    async function getRecipes() {
        // Make api call
        await fetch(apiUrl + queryStr,
                {
                    "Cross-Origin -Embedder-Policy": "require-corp",
                    "Cross-Origin-Opener-Policy": "same-origin",
                    "Accept-Encoding": "gzip"
                }
            )
            .then(
                response => response.json(),
                err => setState(prevState => ({ ...prevState, error: "Error: " + err }))
            )
            .then((result) => {
                // Store upto 5 results in state
                recipes = state.response;
                if (Object.keys(recipes).length >= 5) {
                    let firstKey = Object.keys(recipes)[0];
                    delete recipes[firstKey];
                }
                recipes[enocdedSearch] = result;
                setState(prevState => ({ ...prevState, response: recipes }));
            });
    }

    return (
        <div className="container">
            <SearchBox handleInputChange={handleInputChange} handleSearch={handleSearch} />
            <SearchResult response={state.response} error={state.error} search={enocdedSearch}/>
        </div>
    );
}

export default Container;