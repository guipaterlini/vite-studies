import { Header } from "./components/Header";
import { Post } from "./Post";

import styles from "./App.module.css";

import "./global.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Atlas Paterlini"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet recusandae ipsum ea porro, quibusdam distinctio!"
          />
          <Post
            author="Diana Goulart"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet recusandae ipsum ea porro, quibusdam distinctio!"
          />
        </main>
      </div>
    </div>
  );
}
