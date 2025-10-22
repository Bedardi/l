const apps = {
    "App1": "/apps/calculator/index.html",
    "calculator": "/apps/calculator/index.html",
    "App2": "/apps/app2/index.html",
    "App3": "/apps/app3/index.html",
    "App4": "/apps/app4/index.html",
    "App5": "/apps/app5/index.html",
    "App6": "/apps/app6/index.html",
    "App7": "/apps/app7/index.html",
    "App8": "/apps/app8/index.html",
    "App9": "/apps/app9/index.html",
    "App10": "/apps/app10/index.html",
    "App11": "/apps/app11/index.html",
    "App12": "/apps/app12/index.html",
    "App13": "/apps/app13/index.html",
    "App14": "/apps/app14/index.html",
    "App15": "/apps/app15/index.html",
    "App16": "/apps/app16/index.html",
    "App17": "/apps/app17/index.html",
    "App18": "/apps/app18/index.html",
    "App19": "/apps/app19/index.html",
    "App20": "/apps/app20/index.html",
    // नए ऐप्स यहाँ जोड़ें
};

const path = window.location.pathname.split('/').filter(p => p)[0] || Object.keys(apps)[0];

if (apps[path]) {
    window.location.replace(apps[path]); // सही रीडायरेक्ट
} else {
    document.body.innerHTML = '<p style="color: red; text-align: center;">App not found!</p>';
}
