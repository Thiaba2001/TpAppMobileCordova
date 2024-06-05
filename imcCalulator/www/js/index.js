function Calculator() {
    const form = document.querySelector('.form');
    const resultat = document.querySelector('.resultat');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const inputweight = form.querySelector('#weight'); // Capture l'ID poids
        const inputheight = form.querySelector('#height'); // Capture l'ID taille
        const weight = Number(inputweight.value);
        const height = Number(inputheight.value);
        console.log(`poids: ${weight}, taille= ${height}`);

        let imc = weight / (height * height);
        imc = imc.toFixed(2); // Deux décimales après la virgule
        const p = document.createElement('p');

        if (weight === 0) {
            p.classList.add('invalid');
            p.innerHTML = `Poids invalide.`;
            resultat.appendChild(p);
        } else if (height === 0) {
            p.classList.add('invalid');
            p.innerHTML = `Taille invalide.`;
            resultat.appendChild(p);
        } else if (imc <= 18.5) {
            p.classList.add('valid');
            p.innerHTML = `Votre IMC est ${imc}. Vous êtes en insuffisance pondérale.`;
            resultat.appendChild(p);
        } else if (imc > 18.5 && imc <= 25) {
            p.classList.add('valid');
            p.innerHTML = `Votre IMC est ${imc}. Vous êtes à votre poids idéal.`;
            resultat.appendChild(p);
        } else if (imc > 25 && imc <= 30) {
            p.classList.add('valid');
            p.innerHTML = `Votre IMC est ${imc}. Vous êtes en surpoids.`;
            resultat.appendChild(p);
        } else if (imc > 30 && imc <= 35) {
            p.classList.add('valid');
            p.innerHTML = `Votre IMC est ${imc}. Vous êtes en surpoids.`;
            resultat.appendChild(p);
        } else if (imc > 35 && imc <= 40) {
            p.classList.add('valid');
            p.innerHTML = `Votre IMC est ${imc}. Vous êtes en obésité niveau 2.`;
            resultat.appendChild(p);
        } else if (imc > 40) {
            p.classList.add('valid');
            p.innerHTML = `Votre IMC est ${imc}. Vous êtes en obésité niveau 3.`;
            resultat.appendChild(p);
        } else if (imc >= 18.6 && imc <= 24.9) {
            p.classList.add('valid');
            p.innerHTML = `Votre IMC est ${imc}. Vous êtes à votre poids idéal.`;
            resultat.appendChild(p);
        } else {
            p.classList.add('invalid');
            p.innerHTML = `Valeur invalide.`;
            resultat.appendChild(p);
        }
    });
};
Calculator();
