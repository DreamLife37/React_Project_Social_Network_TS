import './index.css';

import {store} from './redux/redux-store';
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {App} from "./App";

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

