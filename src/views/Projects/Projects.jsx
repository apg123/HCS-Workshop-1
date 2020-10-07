import React from "react";
import Project from "../../components/Project/Project.jsx";

export default function ProjectsScreen() {
  return (
    <div className="screen-background">
      <Project title="HCS-Workshop-1" description="This website!" link="https://github.com">
      </Project>
      <Project title="Running" description="I like to run!" link="https://google.com"></Project>
    </div>
  );
}
