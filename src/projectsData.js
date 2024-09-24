import sereneImage from './assets/images/serene.png';
import rpslsImage from './assets/images/rpsls.png';
import starWarsQuizImage from './assets/images/StarWarsQuiz.png';
import diplomaCi from './assets/images/diplomaCi.png';
import seoAnalysis from './assets/images/seoAnalysis.png';
import mimoFrontEnd from './assets/images/mimoFrontEnd.png';
import generativeAI from './assets/images/generativeAI.png';

const projectsData = [
    {
        title: 'Serene Meditation',
        image: sereneImage,
        liveLink: 'https://mickkav.github.io/MeditationWebsite/index.html', // Replace with live site URL
        githubLink: 'https://github.com/MickKav/MeditationWebsite', // Replace with GitHub URL
    },
    {
        title: 'Rock, Paper, Scissors, Lizard, Spock Game',
        image: rpslsImage,
        liveLink: 'https://rplsp.netlify.app/',
        githubLink: 'https://github.com/MickKav/RockPaperScissorsLizardSpock',
    },
    {
        title: 'Star Wars Classic Quiz',
        image: starWarsQuizImage,
        liveLink: 'https://theforkawakens.netlify.app/',
        githubLink: 'https://github.com/MickKav/the_fork_awakens',
    },
    
    // Add more projects as needed

];

const certificatesData = [
    {
      title: "Diploma in Full Stack Software Development (Predicitve Analytics)",
      image: diplomaCi,
      details: "Achieved from Code Institute in 2024",
    },
    {
      title: "SEO: Competitive Analysis",
      image: seoAnalysis,
      details: "Completed at LinkedIn Learning in 2024",
    },
    {
        title: "Front End Development",
        image: mimoFrontEnd,
        details: "Completed at Mimo in 2024",
    },
    {
        title: "Career Essentials in Generative AI",
        image: generativeAI,
        details: "Completed at LinkedIn Learning with Microsoft in 2024",
    },
    // Add more certificates as needed
  ];

export { projectsData, certificatesData };
