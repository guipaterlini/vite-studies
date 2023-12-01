import { Post } from "./Post";
import { Header } from "./components/Header";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <Post
        author="Paterlini"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quos. Esse voluptates distinctio illo. Perspiciatis impedit eligendi itaque ea sed."
      />
      <Post
        author="Guilherme"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quos. Esse voluptates distinctio illo. Perspiciatis impedit eligendi itaque ea sed."
      />
    </div>
  );
}
