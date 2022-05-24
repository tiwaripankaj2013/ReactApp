import React from "react";
import { CounterRedux } from "./counterRedux";
import store from "../../strore";
import { Provider} from "react-redux";

store.subscribe(()=> console.log(store.getState));
export const Redux = () => {

  return (
    <Provider store={store}>
      <div>
        <CounterRedux />
      </div>
    </Provider>
  );
};
