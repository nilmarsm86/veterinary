export function reducer(state, action) {
  switch (action.type) {
    case "add":
      let appointmenstLocalStorage = getLocalStorageData();
      appointmenstLocalStorage.data.push(action.data);
      let aS = JSON.stringify(appointmenstLocalStorage.data);
      localStorage.setItem("appointments", aS);
      return getLocalStorageData();
    case "delete":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

export function getLocalStorageData(initialCount) {
  let appointmenstLocalStorage = window.localStorage.getItem("appointments");
  if (appointmenstLocalStorage) {
    return { data: [...JSON.parse(appointmenstLocalStorage)] };
  }
  return { data: [] };
}
