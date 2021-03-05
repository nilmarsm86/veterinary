export function reducer(state, action) {
  switch (action.type) {
    case "add":
      let appointmenstLocalStorage = getLocalStorageData();
      appointmenstLocalStorage.data.push(action.data);
      let aS = JSON.stringify(appointmenstLocalStorage.data);
      localStorage.setItem("appointments", aS);
      return getLocalStorageData();
    case "delete":
      let aLS = getLocalStorageData();
      let appointments = aLS.data.filter(
        (appointment) => appointment.id !== action.data.id
      );
      aLS.data = appointments;
      let aLSD = JSON.stringify(aLS.data);
      localStorage.setItem("appointments", aLSD);
      return getLocalStorageData();
    default:
      throw new Error("Acción no soportada");
  }
}

export function getLocalStorageData(initialCount) {
  let appointmenstLocalStorage = localStorage.getItem("appointments");
  if (appointmenstLocalStorage) {
    return { data: [...JSON.parse(appointmenstLocalStorage)] };
  }
  return { data: [] };
}
