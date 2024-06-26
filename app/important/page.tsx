"use client";
import React from "react";
import { useGlobalState } from "../context/globalProvider";
import Tasks from "../Components/Tasks/Tasks";

function page() {
  const { importantTasks } = useGlobalState();
  return <Tasks title="In Progress Tasks" tasks={importantTasks} />;
}

export default page;
