import styles from './Empty.module.css';

import {
  ClipboardText,
} from 'phosphor-react';

export const Empty = () => {
  return (
    <>
      <div className={styles.containerTasks}>
        <div className={styles.tasks}>
          <div className={styles.tasksEmpty}>
            <div className={styles.empty}>
              <ClipboardText size={56} />

              <strong>
                Você ainda não tem tarefas cadastradas <br />
                <span>Crie tarefas e organize seus itens a fazer</span>
              </strong>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}