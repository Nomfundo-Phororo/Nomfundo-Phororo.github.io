import { NgFor, NgIf, SlicePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
interface WorkExperience {
  title: string;
  company: string;
  duration: string;
  responsibilities: string;
  imageName: string;
}
interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
}
interface MenuItems {
  title: string;
  link: string;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf,NgFor, SlicePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'nomfundo-portfolio';
  protected imageUrl = '/assets/main-bg.jpg'
  protected isMobileMenuOpen: boolean = false;
  protected menuItems: MenuItems[] = [
      {
          "title": "About Me",
          "link": "#About Me",
      },
      {
          "title": "Skills",
          "link": "#Skills",
      },
      {
          "title": "Projects",
          "link": "#Project",
      },
      {
          "title": "Contact Me",
          "link": "#Contact Me",
      }
  ]
protected showMore: number = 4;

protected skillCategories = [
    {
        title: 'FRONTEND DEVELOPMENT',
        skills: [
            'HTML, CSS (SASS, Tailwind)',
            'JavaScript, TypeScript',
            'Angular, React, Svelte',
            'Storybook, Figma'
        ]
    },
    {
        title: 'BACKEND & DEVOPS',
        skills: [
            'Node.js (Express.js)',
            'SQL (Basic)',
            'CI/CD Workflows, GitHub Actions',
            'Azure (Static web)'
        ]
    },
    {
        title: 'DEVELOPMENT TOOLS',
        skills: [
            'Git, Github, Gitlab',
            'Jira, Confluence',
            'Overleaf (Latex)',
            'Documentation & Research'
        ]
    }
];

protected workExperience: WorkExperience[] = [
    {
        title: "Front-end Developer",
        company: "Quintessencce",
        duration: "Mar 2023 - Present",
        responsibilities:
            `Developed reusable and scalable Angular components to enhance web applications. Wrote and maintained unit and integration tests to ensure system stability.
             Diagnosed, replicated, and resolved critical bugs, improving system performance.
             Conducted code reviews, ensuring best practices and maintainability.`,
        imageName: "logo_quintessence.svg",
    },
    {
        title: "Junior Developer",
        company: "BMW DevOps Hub & Front-end Developer South Africa",
        duration: "Jan 2021 - Jan 2023",
        responsibilities: `Built modular React components for internal and external applications.
                            Developed internal frontend libraries using Storybook & React.
                            Implemented CI/CD pipelines and GitHub workflows for streamlined deployments.
                            Designed Figma-based prototypes before development to improve UI/UX.`,
        imageName: "bmw-logo.svg"
    },
    {
        title: "Web Development Intern",
        company: "Tshimologong Digital Innovation Precinct",
        duration: "Feb 2020 - Nov 2020",
        responsibilities: `Selected as one of only eight candidates in a Samsung-sponsored App Factory Internship.
                            Worked closely with senior developers on real-world projects.
                            Gained exposure to full-stack development and agile methodologies.
`,
        imageName: "tshimologong-icon.png"
    },
    {
        title: "Research Assistant",
        company: "University of Johannesburg",
        duration: "Feb 2019 - Nov 2019",
        responsibilities:`As a Research Assistant at the University of Johannesburg, I worked on programming, algorithm design, data analysis, and research development. I also gained expertise in LaTeX document preparation, essential for academic publications. This role deepened my understanding of research methodologies while honing my analytical and technical skills.`,
        imageName: "uj.png"
    },
    {
        title: "Development Software 1B Tutor",
        company: "University of Johannesburg",
        duration: "Jun 2019 - Nov 2019",
        responsibilities:
            "As a tutor for Development Software 1B, I had the opportunity to mentor first-year students in the fundamentals of programming and algorithms design, specifically using C#. My goal was to make complex programming concepts more accessible to the students by guiding them through exercises and real-world examples, fostering their critical thinking and problem-solving skills.",
        imageName: "uj.png"
    },
    {
        title: "Development Software 1A Tutor",
        company: "University of Johannesburg",
        duration: "Feb 2018 - Jun 2018",
        responsibilities:
            "In my role as a tutor for Development Software 1A, I was responsible for introducing first-year students to the foundational principles of programming, with a particular focus on Python. I worked closely with students to help them understand the intricacies of algorithm design and improve their coding skills, ensuring they were well-prepared for their further studies in software development.",
        imageName: "uj.png"
    }
];

protected projects : Project[] = [
    {
      title: "TaskMaster: Smart To-Do List",
      description: "A simple and intuitive to-do list application that helps users manage tasks efficiently, with local storage for data persistence.",
      technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "LocalStorage"],
      link: "https://github.com/Nomfundo-Phororo/ToDo-List-2.0"
    },
    {
      title: "StockTracker: Real-Time Stock Analysis",
      description: "A stock tracking application that visualizes real-time stock trends and historical data using D3.js for interactive charts.",
      technologies: ["Svelte", "Skeleton UI", "D3.js", "Tailwind CSS"],
      link: "https://github.com/Nomfundo-Phororo/Stock-dashboardstockproject-link.com"
    },
    {
      title: "FocusTime: Pomodoro Productivity App",
      description: "A Pomodoro timer app designed to improve focus and time management, featuring task tracking and customizable intervals.",
      technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "LocalStorage"],
      link: "https://github.com/Nomfundo-Phororo/FocusTime-Pomodoro-Productivity-App"
    },
    {
      title: "My Portfolio: Showcasing My Work",
      description: "A personal portfolio website highlighting my skills, projects, and experience, built with Angular for dynamic content rendering.",
      technologies: ["Angular", "Tailwind CSS"],
      link: "https://github.com/Nomfundo-Phororo/Nomfundo-Phororo.github.io"
    },
    {
      title: "Make PC Speak: Text-to-Speech Web App",
      description: "A simple web application that utilizes the SpeechSynthesisUtterance API to convert typed text into speech, allowing users to hear text read aloud.",
      technologies: ["HTML", "CSS", "JavaScript", "Speech Synthesis Utterance"],
      link: "https://github.com/Nomfundo-Phororo/Text-to-Speech-Web-App"
    },
    {
      title: "COVID-19 Tracker & Insights",
      description: "An Angular web application displaying COVID-19 symptoms, preventive measures, and real-time statistics on cases, deaths, and recoveries. It also provides insights into spikes and the reasons behind them.",
      technologies: ["Angular", "TypeScript", "Chart.js", "Tailwind CSS"],
      link: "https://github.com/Nomfundo-Phororo/Covid19"
    }
  ];
}
