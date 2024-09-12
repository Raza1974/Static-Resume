#! /usr/bin/env node

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleSkillsBtn');
    const skillsSection = document.querySelector('.skills');

    if (toggleButton && skillsSection) {
        toggleButton.addEventListener('click', () => {
            console.log('Button clicked'); // To check if the event is firing
            skillsSection.classList.toggle('hidden');
        });
    } else {
        console.error('Toggle button or skills section not found');
    }
});
