// assets/js/progress.js

const PROGRESS_KEY = 'fiac_progress';

/**
 * Marks a specific lesson or challenge as completed in localStorage.
 * @param {string} id - The unique ID of the lesson/challenge (e.g., 'fundamentals', 'ja4').
 */
function markCompleted(id) {
    let progress = JSON.parse(localStorage.getItem(PROGRESS_KEY)) || {};
    progress[id] = true;
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
}

/**
 * Checks if a specific ID is completed.
 * @param {string} id 
 * @returns {boolean}
 */
function isCompleted(id) {
    let progress = JSON.parse(localStorage.getItem(PROGRESS_KEY)) || {};
    return !!progress[id];
}

/**
 * Updates the dashboard UI to show completion status.
 * Looks for cards with data-id attributes.
 */
function updateDashboardProgress() {
    const cards = document.querySelectorAll('.card[data-id]');
    cards.forEach(card => {
        const id = card.getAttribute('data-id');
        if (isCompleted(id)) {
            card.classList.add('completed');
            
            // Add checkmark if it doesn't exist
            if (!card.querySelector('.completion-check')) {
                const check = document.createElement('span');
                check.className = 'completion-check';
                check.innerHTML = '✔';
                card.appendChild(check);
            }
        }
    });
}

// Initialize dashboard progress if on index.html
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.dashboard-grid')) {
        updateDashboardProgress();
    }
});
