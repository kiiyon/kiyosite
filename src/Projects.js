import React from 'react';

function Projects() {
  const projects = [
    { title: 'AIハッカソン受賞', date: '2023年', details: 'Google共催のAIハッカソンでビジネス部門2位、クリエイティブ部門4位を獲得。' },
    { title: '東京大学AI経営寄付講座修了', date: '2023-2024年', details: '' },
    { title: 'AIワークショップ開催', date: '2023-2024年', details: '沖縄、札幌、メルボルン、セブ島で開催' },
    { title: 'シェアハウス「YourBase」立ち上げ', date: '2019年', details: '仲間と共にシェアハウスを立ち上げ、運営。' },
    { title: 'ルワンダ国際協議', date: '2019年', details: 'ルワンダ選手団との交流企画やイベントを実施。' }
  ];

  return (
    <section>
      <h2>最近の取り組み</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <strong>{project.title}</strong> ({project.date}) - {project.details}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
