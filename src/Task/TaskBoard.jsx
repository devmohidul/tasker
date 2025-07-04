import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskLists from "./TaskLists";

export default function TaskBoard() {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Learn React",
    description:
      "I want to learn react such that i can treat react as my favourite part.",
    tags: ["web", "react", "js"],
    priority: "High",
    isFavorite: true,
  };
  const [tasks, setTasks] = useState([defaultTask]);
  return (
    <>
      <section className="mb-20 px-6" id="tasks">
        <div className="container">
          <div className="p-2 flex justify-end">
            <SearchTask />
          </div>
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskActions />
            <TaskLists tasks={tasks} />
          </div>
        </div>
      </section>
    </>
  );
}
