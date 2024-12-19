import { createRoot } from "react-dom/client";
import App from './components/app';
import './index.css';

const container = document.getElementById("app");
const root = createRoot(container)
root.render(<App />);

// to do
// повесить гифки, чтобы они проявлялись, когда персонаж толкает речь
// визуальный эффект при воспроизведении речи персонажа
// настроить абсолютный импорт компонентов