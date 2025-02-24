import { HoverEffect } from "./ui/card-hover-effect";

export function CardHover() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Projects in a single row */}
      <div className="grid grid-cols-1 gap-3">
        <HoverEffect items={projects} />
      </div>

      {/* Project2 - Full Width Below */}
      <div className=" w-full">
        <HoverEffect items={project2} className="w-[204rem] h-[20rem]" />
      </div>
    </div>
  );
}

export const project2 = [
  {
    title: "Disease to Image",
    description:
      "The AI Medical Image Generator creates realistic dummy images based on disease descriptions. Enter symptoms, and it visualizes conditions for research, education, and healthcare insights, enhancing understanding through generated medical visuals.",
    link: "#generateimage",
  },
];

export const projects = [
  {
    title: "Disease to Image",
    description:
      "The AI Medical Image Generator creates realistic dummy images based on disease descriptions. Enter symptoms, and it visualizes conditions for research, education, and healthcare insights, enhancing understanding through generated medical visuals.",
    link: "Generateimage",
  },
  {
    title: "Chatbot",
    description:
      "The AI Medical Chatbot acts as a virtual co-doctor, assisting with symptom analysis, medical guidance, and preliminary assessments. It enhances healthcare support by providing insights based on user queries.",
    link: "/Chatbot",
  },
  {
    title: "Foodoscope",
    description:
      "Foodoscope: A nutrition analysis and recipe-finding platform that helps users discover healthy recipes and track nutritional information for better meal planning.",
    link: "https://fork-it-foodoscope.vercel.app/",
  },
];
