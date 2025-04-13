import React from 'react';

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => {
  return (
    <div className="mb-4">
      <h4 className="text-base font-medium mb-2">{title}</h4>
      <div className="grid grid-cols-2">
        {skills.map((skill, index) => (
          <div key={index} className="text-sm">{skill}</div>
        ))}
      </div>
    </div>
  );
};

const SkillsGrid: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "C++", "C", "Java"]
    },
    {
      title: "Backend & Databases",
      skills: ["MySQL", "Firebase", "MongoDB", "PostgreSQL", "SQL", "Django", "RESTful APIs"]
    },
    {
      title: "Tools & Cloud",
      skills: ["VS Code", "SnowFlake", "Youtrack", "Postman", "Git/GitHub", "Docker", "AWS"]
    },
    {
      title: "AI & Machine Learning",
      skills: ["Machine Learning", "PyTorch", "TensorFlow", "Data Analysis"]
    }
  ];

  return (
    <div>
      <h3 className="text-lg font-bold text-center mb-6">Technical Skills</h3>
      <div className="max-w-2xl mx-auto">
        {skillCategories.map((category, index) => (
          <SkillCategory 
            key={index} 
            title={category.title} 
            skills={category.skills} 
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsGrid;