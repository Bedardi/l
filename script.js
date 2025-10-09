const apps = {
    "App1": "/apps/App1/index.html",
    "calculator": "/apps/calculator/index.html"
    // नए ऐप्स यहाँ जोड़ें
};

const path = window.location.pathname.split('/').filter(p => p)[0] || Object.keys(apps)[0];

if (apps[path]) {
    window.location.replace(apps[path]); // सही रीडायरेक्ट
} else {
    document.body.innerHTML = '<p style="color: red; text-align: center;">App not found!</p>';
}
