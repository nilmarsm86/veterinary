export function reducer(state, action) {
  switch (action.type) {
    case "add":
      state.push(action.data);
      return [...state];
    case "delete":
      if (state.length > 0) {
        state = state.filter((appointment) => {
          return appointment.id !== action.data.id;
        });
        return [...state];
      }
      return [];
    default:
      throw new Error("Acción no soportada");
  }
}
