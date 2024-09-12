#! /usr/bin/env node
document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('toggleSkillsBtn');
    var skillsSection = document.querySelector('.skills');
    if (toggleButton && skillsSection) {
        toggleButton.addEventListener('click', function () {
            console.log('Button clicked'); // To check if the event is firing
            skillsSection.classList.toggle('hidden');
        });
    }
    else {
        console.error('Toggle button or skills section not found');
    }
});
