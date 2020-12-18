import { ADD_TASK, TOGGLE_TASK_PROPERTY, REMOVE_TASK } from '../actions/appActions';

export const appReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TASK:
            return [...state, action.payload];
        case TOGGLE_TASK_PROPERTY:
            return state.map(currentStateTask => {
                if (currentStateTask.id !== action.payload.id) {
                    return currentStateTask;
                }
                const { key } = action.payload;
                currentStateTask[key] = !currentStateTask[key];
                return currentStateTask
            });
        case REMOVE_TASK:
            return state.filter(currentStateTask => currentStateTask.id !== action.payload.id);
        default:
            console.warn(`Brak akcji: ${action.type}`)
            return state;
    }
}
