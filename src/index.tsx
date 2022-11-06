import { createRoot } from 'react-dom/client';

import { Orion } from "./Orion";
import './Nova.css';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<Orion/>)