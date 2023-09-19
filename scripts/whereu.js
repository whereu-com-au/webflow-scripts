// Chris Webster @ Where U?

// Lockdown "Buttons" (Anchors) on a Mutli-step Form
function lockFieldButtons(){
    let requiredFields = document.querySelectorAll("input[data-required='true']");

    requiredFields.forEach((input) => {
        let fieldName = input.dataset.name;
        let nextButton = document.querySelector("a[data-required-field='"+fieldName+"']")
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
    let forms = document.querySelectorAll("form");
    if (forms) {
        for (let i = 0; i < forms.length; i++) {
            let form = forms[i];
    
            form.addEventListener('submit', () => {
                dataLayer.push({
                    "event": "form_submit",
                    "label": form.id
                });
            }
            , false
            )
        }
    }
}