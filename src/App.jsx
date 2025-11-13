import { Post } from './Post';
import { Header } from './components/Header';

import './global.css';

 export function App() {
  return (
    <div>
      <Header />

      <Post 
        author="Guilherme Borges" 
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem esse, et deserunt consequuntur explicabo omnis blanditiis obcaecati reprehenderit quibusdam error nesciunt eius officia eligendi dolores, aut accusantium mollitia quasi facere!" 
      />
      <Post 
        author="Gabriela Lenzi"
        content="Um texto muito legal"
      />
    </div>
  )
}

