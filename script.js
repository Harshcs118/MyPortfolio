document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            themeToggle.textContent = "Red Mode";
        } else {
            themeToggle.textContent = "Gray Mode";
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const fillCircles = document.querySelectorAll('.progress-ring-fill');
    const percentTexts = document.querySelectorAll('.progress-percent');
    const skillNames = document.querySelectorAll('.skill-name');

    // Set skill data
    const skillsData = [
        { skill: "HTML", percent: 90 },
        { skill: "CSS", percent: 80 },
        { skill: "C++", percent: 80 },
        { skill: "Java", percent: 70 },
        { skill: "DBMS", percent: 70 },
        { skill: "DSA", percent: 90 }
        // Add other skills here
    ];

    // Loop through each skill
    skillsData.forEach((skillData, index) => {
        const fillCircle = fillCircles[index];
        const percentText = percentTexts[index];
        const skillName = skillNames[index];

        // Set skill name
        skillName.textContent = skillData.skill;

        // Set initial progress value
        const duration = 1000; // Duration in milliseconds
        const endOffset = (502 * skillData.percent) / 100;
        fillCircle.style.strokeDashoffset = 502;
         // Initially full circle
        percentText.textContent = '0%'; // Start text from 0%

        // Set progress dynamically
        const animate = () => {
            let currentTime = 0;
            const interval = 10; // Interval in milliseconds
            const increment = (skillData.percent / (duration / interval));

            const intervalId = setInterval(() => {
                currentTime += interval;
                const currentPercent = Math.min(increment * currentTime, skillData.percent);
                const currentOffset = 502 - ((502 * currentPercent) / 100);
                fillCircle.style.strokeDashoffset = currentOffset;
                percentText.textContent = Math.round(currentPercent) + '%';

                if (currentTime >= duration) {
                    clearInterval(intervalId);
                }
            }, interval);
        };

        animate();
    });
});