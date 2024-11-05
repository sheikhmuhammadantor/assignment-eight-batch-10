const getDataFromLocalStorage = (key) => {
    const localData = localStorage.getItem(key);
    if (localData) return JSON.parse(localData);
    else return {}
}

const addDataToLocalStorage = (key, value) => {
    const stringifyValue = JSON.stringify(value);
    localStorage.setItem(key, stringifyValue);
}

const updateLocalStorData = (key, value, name) => {
    const dataFromLocalStor = getDataFromLocalStorage(key);
    value[name] = dataFromLocalStor;
}

export { getDataFromLocalStorage, addDataToLocalStorage, updateLocalStorData }
