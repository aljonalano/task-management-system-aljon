"use client";
import Tasks from "./Components/Tasks/Tasks";
import { useGlobalState } from "./context/globalProvider";

export default function Home() {
  const { todoTasks } = useGlobalState();

  return <Tasks title="All Tasks" tasks={todoTasks} />;
}
