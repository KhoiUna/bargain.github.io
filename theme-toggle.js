document.addEventListener('DOMContentLoaded', () => {
    const themeToggleCheckbox = document.getElementById('theme-toggle-checkbox');
    const body = document.body;
    const mainContainer = document.getElementById('main-container'); // Used for main background

    // Function to apply the saved theme or default to light
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            body.setAttribute('data-theme', 'dark');
            if (mainContainer) mainContainer.setAttribute('data-theme', 'dark'); // Also apply to main container if it exists
            if (themeToggleCheckbox) themeToggleCheckbox.checked = true;
        } else {
            body.removeAttribute('data-theme');
            if (mainContainer) mainContainer.removeAttribute('data-theme');
            if (themeToggleCheckbox) themeToggleCheckbox.checked = false;
        }
    };

    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        applyTheme('light'); // Default to light theme
    }

    // Event listener for the toggle switch
    if (themeToggleCheckbox) {
        themeToggleCheckbox.addEventListener('change', () => {
            if (themeToggleCheckbox.checked) {
                applyTheme('dark');
                localStorage.setItem('theme', 'dark');
            } else {
                applyTheme('light');
                localStorage.setItem('theme', 'light');
            }
        });
    }
});
