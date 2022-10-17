import { Header } from './components/Header';
import { NewTask } from './components/NewTask';

import './global.css';
import { Empty } from './components/Empty';

export const App = () => {
  return (
    <>
      <Header />
      <NewTask />
    </>
  )
}
