const apps = {
    "calculator": "/apps/calculator.html",
    "App2": "/apps/App2/index.html"
    // नए ऐप्स यहाँ जोड़ें
};

const path = window.location.pathname.split('/').pop();
const appName = path || Object.keys(apps)[0];

if (apps[appName]) {
    window.location.replace(apps[appName]); // रीडायरेक्ट
} else {
    document.body.innerHTML = '<p style="color: red; text-align: center;">App not found!</p>';
}
