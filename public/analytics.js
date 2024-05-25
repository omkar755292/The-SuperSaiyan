// Function to track page view
function trackPageView(url) {
    gtag('config', 'G-GQBQ003CC3s', {
        'page_path': url
    });
}

// Tracking initial page load
trackPageView(window.location.pathname + window.location.hash);

// Event listener for route changes
window.addEventListener('hashchange', () => {
    trackPageView(window.location.pathname + window.location.hash);
});