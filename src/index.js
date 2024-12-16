import { createRoot } from "react-dom/client";
import App from './components/app';
import './index.css';

const container = document.getElementById("app");
const root = createRoot(container)
root.render(<App />);

// to do
// глобальное состояние о том, что что-то играет, чтобы одновременно не могло играть несколько звуков // zustand?
// повесить гифки, чтобы они проявлялись, когда персонаж толкает речь
// сделать индикатор загрузки диалогов, или какой-то прелоадер, что-то такое в общем