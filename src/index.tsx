
import './index.css';

import {state, subscribe} from "./redux/state";
import { rerenderEntireTree } from './render';


rerenderEntireTree()

subscribe(rerenderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

