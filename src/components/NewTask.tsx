import { useState } from 'react';
import { TrashSimple } from 'phosphor-react';

import { TaskBusy } from './TaskBusy';
import { Empty } from './Empty';

import styles from './NewTask.module.css';

import {
  PlusCircle
} from 'phosphor-react';

export const NewTask = () => {
  const [tasks, setTasks] = useState([...'',]);
  const [newTasksText, setNewTasksText] = useState('');
  const [createdCount, setCreatedCount] = useState(0);
  const [doneCount, setDoneCount] = useState(0);

  const handleCreateNewTasks = () => {
    event?.preventDefault();

    setTasks([...tasks, newTasksText]);
    setNewTasksText('');
  }

  const handleNewTasksChange = () => {
    const target = event?.target as HTMLInputElement;

    target.setCustomValidity('');
    setNewTasksText(target.value);
  }

  const onDeleteTask = (taskToDelete: any) => {
    const tasksWithoutDeletedOne = tasks.filter(taskBusy => {
      return taskBusy !== taskToDelete;
    })

    setTasks(tasksWithoutDeletedOne);
  }

  const handleNewTaskInvalid = () => {
    const target = event?.target as HTMLInputElement;

    target.setCustomValidity('Inventa não coloca o TASK ai logo!');
  }

  const isNewTaskEmpty = newTasksText.length === 0;

  const handleCreatedTask = () => {
    setCreatedCount(createdCount + 1);
  }

  const handleRemovedCreatedTask = () => {
    setCreatedCount(createdCount - 1);
  }

  return (
    <>
      <div className={styles.container}>

        <form onSubmit={handleCreateNewTasks} className={styles.addForm}>

          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            value={newTasksText}
            onChange={handleNewTasksChange}
            onInvalid={handleNewTaskInvalid}
            required
          />

          <button
            disabled={isNewTaskEmpty}
            type="submit"
            onClick={handleCreatedTask}>
            Criar

            <PlusCircle size={20} />
          </button>
        </form>

        <div className={styles.containerTasks}>

          <div className={styles.listTasks}>

            <header className={styles.infoTasks}>

              <div className={styles.createdTasks}>
                <span>Tarefas criadas</span>

                <div onClick={handleRemovedCreatedTask} className={styles.counterTasks}>
                  {createdCount}
                </div>
              </div>

              <div className={styles.doneTasks}>
                <span>Concluídas</span>

                <div className={styles.counterTasks}>
                  {doneCount}
                </div>
              </div>
            </header>

            {
              tasks.map(taskBusy => {
                return (
                  <TaskBusy
                    key={taskBusy}
                    content={taskBusy}
                    onDeleteTask={onDeleteTask}
                  />
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  );
}

