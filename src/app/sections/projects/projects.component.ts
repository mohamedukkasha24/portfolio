import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Twitter Clone Project',
      description: 'A full-stack clone of Twitter\'s UI and functionality using Angular and Firebase with real-time updates and user authentication.',
      technologies: ['Angular', 'Firebase', 'TypeScript', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?w=500&h=300&fit=crop',
      demoLink: 'https://x-project-clone.web.app/',
      githubLink: 'https://github.com/mohamedukkasha24/X-clone'
    },
    {
      title: 'Image Gallery',
      description: 'Responsive and animated image gallery with zoom functionality, upload features, and smooth transitions.',
      technologies: ['Angular', 'TypeScript', 'CSS Animations', 'Firebase Storage'],
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&h=300&fit=crop',
      demoLink: 'https://img-gallery-7de0b.web.app/',
      githubLink: 'https://github.com/mohamedukkasha24/imagegallery'
    },
    {
      title: 'Weather App',
      description: 'Real-time weather application using APIs with responsive Tailwind UI, location detection, and 7-day forecasts.',
      technologies: ['Angular', 'Weather API', 'Tailwind CSS', 'TypeScript'],
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop',
      demoLink: 'https://weather-app-ukkasha.web.app/',
      githubLink: 'https://github.com/mohamedukkasha24'
    }
  
  ];
}
