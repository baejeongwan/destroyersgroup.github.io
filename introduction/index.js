i18next
    .use(i18nextHttpBackend)
    .use(i18nextBrowserLanguageDetector)
    .init({
        fallbackLng: "ko",
        ns: ["introduction", "common"],
        defaultNS: "introduction",
        debug: true,
        keySeperator: true,
        backend: {
            loadPath: "/locales/{{lng}}/{{ns}}.json"
        }
    }).then(initAfterTranslation)

function initAfterTranslation() {
    console.group("Initializer")
    try {

        loadTranslation()
    } catch {
        console.warn("There was an issue while loading translation, but continuing.")
    }
    calculateDays()
    console.groupEnd()
}

function calculateDays() {
    const creationDate = new Date("2022-06-30")
    const now = new Date()
    let diff = Math.abs(creationDate - now)
    let days = Math.floor(diff / (1000*60*60*24))
    document.getElementById("navbarDaysAfter").innerText = i18next.t("navbarDaysAfterA", {ns: "common"}) + days.toString() + i18next.t("navbarDaysAfterB", {ns: "common"})
}

function loadTranslation() {    
    document.title = i18next.t("pageTitle")
    document.querySelectorAll(".i18-translateme").forEach((item) => {
        if (item.dataset.i18Alt == "true") {
            item.alt = i18next.t(item.dataset.i18Key, {ns: item.dataset.i18Ns})
        } else {
            item.innerText = i18next.t(item.dataset.i18Key, {ns: item.dataset.i18Ns})
        }
    })
}