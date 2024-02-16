import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-25"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-auto w-auto flex flex-col md:flex-row gap-10 px-10 mb-10 items-stretch">
        <ProjectCard
          src="/twit.png"
          title="TwitEmote"
          description="A ML model to analyze the public's reaction on various trending topics on X (formely known as Twitter). Based on Deep Learning model LSTM with accuracy of 83%."
        />
        <ProjectCard
          src="/fakenews.jpg" 
          title="RumorRadar"
          description="RumorRadar utilizes Random Forest and NLP to classify real and fake news with high accuracy on trained dataset. Tech Stack: Python, NLP, Streamlit"
        />
        <ProjectCard
          src="/zoe.png"
          title="Zoe - Voice Assistant"
          description="Zoe is a virtual voice-based assistant powered by Python. Tech Stack: Python, Libiaries(pyttsx3, Speech recognition, WebBrowser, OS etc)"
        />
      </div>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">

        <ProjectCard
          src="/portfoilio.png"
          title="Personal Portfolio Website"
          description=" A React, TypeScript and Tailwind CSS-powered personal portfolio website showcasing skills, projects, and achievements for effective self-presentation."
        />
        <ProjectCard
          src="/shuttle.png"
          title="Shuttle - Sports Store "
          description=" Shuttle is a Python-based E-commerce sports website built with Flask, MySQL, HTML, and CSS."
        />
        <ProjectCard
          src="/beatlab.png"
          title="BeatLab - Web Music Player"
          description=" A visually striking web music player, powered by HTML, CSS, JavaScript, Flask, and MySQL."
        />
      </div>
    </div>
  );
};

export default Projects;
