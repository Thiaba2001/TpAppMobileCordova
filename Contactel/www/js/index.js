document.addEventListener("deviceready", function () {
    document.getElementById("addContactButton").addEventListener("click", function () {
        $.mobile.changePage("#addContactPage");
    });

    document.getElementById("saveContactButton").addEventListener("click", ajouterContact);

    loadContacts();
}, false);

function loadContacts() {
    var options = new ContactFindOptions();
    options.filter = "";
    options.multiple = true;
    var fields = ["displayName", "name", "phoneNumbers", "emails"];
    navigator.contacts.find(fields, onContactsSuccess, onContactsError, options);
}

function onContactsSuccess(contacts) {
    var contactList = document.getElementById("contactList");
    contactList.innerHTML = "";

    for (var i = 0; i < contacts.length; i++) {
        var li = document.createElement("li");
        li.textContent = contacts[i].displayName;
        contactList.appendChild(li);
    }
    $(contactList).listview("refresh"); // Rafraîchir la listeview
}

function onContactsError(contactError) {
    alert("Erreur de chargement des contacts");
}

function ajouterContact() {
    let nom = document.getElementById("contactName").value;
    let prenom = document.getElementById("contactFirstName").value;
    let numeroPortable = document.getElementById("contactMobileNumber").value;
    let numeroFixe = document.getElementById("contactPhoneNumber").value;
    let email = document.getElementById("contactEmail").value;

    // Vérifier les champs
    if (nom === "" || prenom === "") {
        alert("Le nom et le prénom sont obligatoires");
        return;
    }
    if (isNaN(numeroPortable) || (numeroFixe && isNaN(numeroFixe))) {
        alert("Le numéro de téléphone n'est pas valide");
        return;
    }

    // Créer un nouveau contact
    let myContact = navigator.contacts.create({ "displayName": prenom + " " + nom });

    let name = new ContactName();
    name.givenName = prenom;
    name.familyName = nom;
    myContact.name = name;

    myContact.phoneNumbers = [
        new ContactField('mobile', numeroPortable, true)
    ];
    if (numeroFixe) {
        myContact.phoneNumbers.push(new ContactField('home', numeroFixe, false));
    }
    myContact.emails = [new ContactField('email', email, true)];

    myContact.save(onSaveSuccess, onSaveError);
}

function onSaveSuccess(contact) {
    alert("Contact ajouté avec succès");
    $.mobile.changePage("#mainPage"); // Retourner à la page principale
    loadContacts(); // Rafraîchir la liste des contacts
}

function onSaveError(contactError) {
    alert("Erreur lors de l'ajout du contact");
}
