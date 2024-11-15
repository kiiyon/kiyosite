import React from 'react';

function Skills() {
  const skills = [
    { skill: 'Webデザイン', level: '上級' },
    { skill: 'Canva', level: '上級' },
    { skill: 'AI', level: '上級' },
    { skill: '日本語教育', level: '独学で日本語教育検定に合格し、講師活動を行う。' }
  ];

  return (
    <section>
      <h2>スキル一覧</h2>
      <ul>
        {skills.map((item, index) => (
          <li key={index}>{item.skill}: {item.level}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
