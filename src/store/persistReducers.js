import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: "tasks",
      storage,
      whitelist: ["auth", "user", "task"],
    },
    reducers
  );
  return persistedReducer;
};
