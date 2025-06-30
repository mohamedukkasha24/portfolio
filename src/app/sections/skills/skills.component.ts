import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills = [
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 90 },
    { name: 'JavaScript', level: 88 },
    { name: 'Bootstrap', level: 85 },
    { name: 'Tailwind CSS', level: 92 },
    { name: 'Angular', level: 90 },
    { name: 'Firebase', level: 80 }
  ];
}
