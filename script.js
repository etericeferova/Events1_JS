
class ContactsModel {
  contacts;

  constructor() {
    this.contacts = [
      { name: "Andrew", phone: "123-456-99" },
      { name: "Denis", phone: "456-789-00" },
    ];
  }

  addContact(contact) {
    this.contacts.push(contact);
  }

  removeContact(index) {
    console.log("index", index);
    this.contacts.splice(index, 1);
    console.log("this.contacts", this.contacts);
  }

  getContacts() {
    return this.contacts;
  }

  updateContact(index, updatedContact) {
    if (this.contacts[index]) {
      this.contacts[index] = updatedContact;
    } else {
      console.log("Error", index);
    }
  }
}
class ContactsView {
  contactsList;
  handleDeleteContact;
  handleEditContact;

  constructor() {
    this.contactsList = document.querySelector(".contacts-list");
  }

  displayContacts(contacts) {
    this.contactsList.innerHTML = "";

    contacts.forEach((contact, index) => {
      const li = document.createElement("li");

      const nameElement = document.createElement("span");
      nameElement.textContent = `${contact.name} - ${contact.phone}`;
      nameElement.classList.add("contact-text");

      const deleteButton = document.createElement("button");
      const editButton = document.createElement("button");

      deleteButton.textContent = "Delete";
      deleteButton.onclick = () => this.handleDeleteContact(index);

      editButton.textContent = "Edit";
      editButton.onclick = () => this.handleEditContact(index, nameElement);

      li.appendChild(nameElement);
      li.appendChild(deleteButton);
      li.appendChild(editButton);
      this.contactsList.appendChild(li);
    });
  }

  bindDeleteContact(handler) {
    this.handleDeleteContact = handler;
  }

  bindEditContact(handler) {
    this.handleEditContact = handler;
  }
}
class ContactsController {
  view;
  model;

  constructor(view, model) {
    this.view = view;
    this.model = model;

    this.view.bindDeleteContact(this.handleDeleteContact.bind(this));
    this.view.bindEditContact(this.handleEditContact.bind(this));

    this.view.displayContacts(this.model.getContacts());

    document.querySelector("form").addEventListener("submit", (e) => {
      e.preventDefault();

      const nameValue = e.target.children["new-contact-name"];
      const phoneValue = e.target.children["new-contact-phone"];

      const contactName = nameValue.value.trim();
      const contactPhone = phoneValue.value.trim();

      this.model.addContact({ name: contactName, phone: contactPhone });
      this.view.displayContacts(this.model.getContacts());

      nameValue.value = "";
      phoneValue.value = "";
    });
  }

  handleDeleteContact(index) {
    this.model.removeContact(index);
    this.view.displayContacts(this.model.getContacts());
  }

  handleEditContact(index, nameElement) {
    const currentText = nameElement.textContent;
    const [contactName, contactPhone] = currentText.split(" - ");

    const input = document.createElement("input");
    input.type = "text";
    input.value = `${contactName} - ${contactPhone}`;

    nameElement.innerHTML = "";
    nameElement.appendChild(input);

    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.onclick = () => {
      const [newName, newPhone] = input.value.split(" - ");

      if (newName && newPhone) {
        this.model.updateContact(index, { name: newName, phone: newPhone });
        this.view.displayContacts(this.model.getContacts());
      }
    };

    nameElement.appendChild(saveButton);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const model = new ContactsModel();
  const view = new ContactsView();

  new ContactsController(view, model);
});
