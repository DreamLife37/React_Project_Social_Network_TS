import './index.css';

import {store,} from "./redux/state";
import {rerenderEntireTree} from './render';

rerenderEntireTree()

store.subscribe(rerenderEntireTree)
