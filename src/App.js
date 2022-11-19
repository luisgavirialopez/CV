import React, { Component } from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Certificate from './components/Certificate';
import Skills from './components/Skills';

class App extends Component {
  render() {

    const person = {
      name: 'Luis David Gaviria Lopez',
      profession: 'Estudiante',
      bio: 'Estudiante de 9 semestre de ingenieria de sistemas UDEA ',
      address: 'La Ceja Antiquia',
      email: 'lucholopez632@gmail.com'
      social: [
        {name: 'github', url: 'https://github.com/luisgavirialopez'},
        {name: 'linkedin', url: 'https://www.linkedin.com/in/luis-david-gaviria-l%C3%B3pez-860628218/'}
      ],
      experience: [
        {jobTitle: 'Practicante desarrollador', company: 'SURA', startDate: 'Julio 2022', endDate: 'Act', jobDescription: 'Dar apoyo a la celula raizales'},
      ],
      education: [
        {degree: 'Ingeniero de sistemas', institution: 'Universidad de Antioquia', startDate: 'Enero 2017', endDate: 'Act'},

      ],
      certificate: [
        {name: 'Javascript, CSS, HTML', institution: 'SoloLearn', date: 'Junio 2021', description: 'Curso de desarrollo Front End' },
        {name: 'Git and GitHub with vscode', institution: 'Udemy', date: 'Mayo 2021', description: 'Curso para el manejo de GIT usando VSCODE' }

      ],
      skills: [
        {name: 'HTML5', percentage: '95%'},
        {name: 'JavaScript', percentage: '75%'},
        {name: 'Illustrator', percentage: '70%'},
        {name: 'Ofimatica', percentage: '80%'}

      ]
    };

    return (
      <header>
        <div className='wrapper'>
          <div className='sidebar'>
            <About
              avatar={person.avatar}
              name={person.name}
              profession={person.profession}
              bio={person.bio}
              address={person.address}
              social={person.social} />
          </div>

          <div className='content-wrapper'>
              <div className='content'>
                <Experience experience={person.experience} />
                <Education education={person.education} />
                <Certificate certificate={person.certificate} />
                <Skills skills={person.skills} />
              </div>
          </div>

        </div>
      </header>
    );
  }
}

export default App;
