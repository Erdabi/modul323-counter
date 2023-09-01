import initModel from './Model';
import update from './Update';
import view from './View';
import app from './App';


module.exports = { view, update };


const rootNode = document.getElementById("app");
app(initModel, update, view, rootNode);

