    "use strict";

    class PersonalInfo {
    constructor(name, age, email, phone) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.phone = phone;
    }

    get summary() {
        return `${this.name}, ${this.age} років\nEmail: ${this.email}\nТелефон: ${this.phone}`;
    }
    }

    class Education {
    constructor(institution, degree, year) {
        this.institution = institution;
        this.degree = degree;
        this.year = year;
    }

    toString() {
        return `${this.degree} – ${this.institution} (${this.year})`;
    }
    }

    class Experience {
    constructor(company, position, period) {
        this.company = company;
        this.position = position;
        this.period = period;
    }

    toString() {
        return `${this.position} в ${this.company} (${this.period})`;
    }
    }

    class Skills {
    constructor(skills = []) {
        this.skills = skills;
    }

    toString() {
        return this.skills.join(", ");
    }
    }

    class Resume {
    constructor(personalInfo, educationList, experienceList, skills) {
        this.personalInfo = personalInfo;
        this.educationList = educationList;
        this.experienceList = experienceList;
        this.skills = skills;
    }

    display(containerId) {
        const container = document.getElementById(containerId);
        container.innerHTML = "";

        const section = (title, content) => {
        const div = document.createElement("section");
        const h2 = document.createElement("h2");
        h2.textContent = title;
        const p = document.createElement("pre");
        p.textContent = content;
        div.append(h2, p);
        return div;
        };

        const educationText = this.educationList.map(e => e.toString()).join("\n");
        const experienceText = this.experienceList.map(e => e.toString()).join("\n");

        container.append(
        section("Особиста інформація", this.personalInfo.summary),
        section("Освіта", educationText),
        section("Досвід роботи", experienceText),
        section("Навички", this.skills.toString())
        );
    }
    }

    // Додавання динамічних полів
    const addFieldSet = (parentId, fields) => {
    const container = document.getElementById(parentId);
    const wrapper = document.createElement("div");
    fields.forEach(field => {
        const input = document.createElement("input");
        input.type = field.type;
        input.placeholder = field.placeholder;
        input.classList.add("dynamic-input");
        wrapper.appendChild(input);
    });
    container.insertBefore(wrapper, container.querySelector("button"));
    };

    document.getElementById("add-education").addEventListener("click", () => {
    addFieldSet("education-fields", [
        { type: "text", placeholder: "Університет" },
        { type: "text", placeholder: "Ступінь" },
        { type: "number", placeholder: "Рік" }
    ]);
    });

    document.getElementById("add-experience").addEventListener("click", () => {
    addFieldSet("experience-fields", [
        { type: "text", placeholder: "Компанія" },
        { type: "text", placeholder: "Посада" },
        { type: "text", placeholder: "Період" }
    ]);
    });

    document.getElementById("resume-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const age = parseInt(document.getElementById("age").value);
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const skillsInput = document.getElementById("skills").value;
    const skills = new Skills(skillsInput.split(",").map(s => s.trim()));

    const educationInputs = [...document.getElementById("education-fields").querySelectorAll(".dynamic-input")];
    const experienceInputs = [...document.getElementById("experience-fields").querySelectorAll(".dynamic-input")];

    const educationList = [];
    for (let i = 0; i < educationInputs.length; i += 3) {
        educationList.push(new Education(
        educationInputs[i].value,
        educationInputs[i + 1].value,
        educationInputs[i + 2].value
        ));
    }

    const experienceList = [];
    for (let i = 0; i < experienceInputs.length; i += 3) {
        experienceList.push(new Experience(
        experienceInputs[i].value,
        experienceInputs[i + 1].value,
        experienceInputs[i + 2].value
        ));
    }

    const personal = new PersonalInfo(name, age, email, phone);
    const resume = new Resume(personal, educationList, experienceList, skills);

    resume.display("resume");
    localStorage.setItem("resume", JSON.stringify(resume));
    });