export function counterReducer(state: any, action: any) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    case "custom":
      return { count: state.count + action.payload };
    default:
      return state;
  }
}
