import { ThumbsUp, Trash } from "@phosphor-icons/react";

import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/guipaterlini.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.comentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time
                title="14 de dezembro às 11:20"
                dateTime="2023-12-14 11:20:00"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp /> Apludir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
