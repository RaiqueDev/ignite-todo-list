import styles from './TaskBusy.module.css';

import { TrashSimple } from 'phosphor-react';

export const TaskBusy = ({ content, onDeleteTask, handleDoneTask, setCreatedCount, createdCount }: any) => {
  const handleDeleteTask = () => {
    onDeleteTask(content);
  }

  const handleCheckTask = () => {
    handleDoneTask();
  }

  return (
    <>
      <div className={styles.containerTasksBusy}>
        <div className={styles.tasksWrapper}>

          <div className={styles.buttonCheck}>
            <input
              onClick={handleCheckTask}
              type="checkbox"
            />
          </div>

          <label>
            {content}
          </label>

          <div className={styles.buttonTrash}>

            <button
              onClick={handleDeleteTask}
              type="submit">

              <TrashSimple
                size={25}
                color="#fff"
                weight="duotone" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}