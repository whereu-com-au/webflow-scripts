// Chris Webster @ Where U?

// Lockdown "Buttons" (Anchors) on a Mutli-step Form
function lockFieldButtons(){
    const requiredFields = document.querySelectorAll("input[data-required='true']");

    requiredFields.forEach((input) => {
        const fieldName = input.dataset.name;
        const nextButton = document.querySelector("a[data-required-field='"+fieldName+"']")
        nextButton.style.pointerEvents = "none"
        input.addEventListener("input", () => {
            if (!input.value) {
                nextButton.style.pointerEvents = "none";
            } else {
                nextButton.style.pointerEvents = "unset";
            }
        })
    })
}

// Generate Google Tag Manager event on Form Submission
function formListener(){
    const forms = document.querySelectorAll("form");
    if (forms) {
        forms.forEach((form) => {
            form.addEventListener('submit', () => {
                dataLayer.push({
                    "event": "form_submit",
                    "label": form.id
                });
            }
            , false
            )
        })
    }
}