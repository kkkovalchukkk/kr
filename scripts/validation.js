window.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('.form');
  const telInputs = document.querySelectorAll('input[name="tel"]');
  const nameInputs = document.querySelectorAll('input[name="name"]');

  const submitForm = (e) => {
    e.preventDefault();

    const nameInput = e.target.name;
    const telInput = e.target.tel;
  };

  nameInputs.forEach((nameInput) => {
    nameInput.addEventListener('input', (e) => {
      const inputValue = e.target.value;
    });
  });

  telInputs.forEach((tel) => {
    IMask(tel, {
      mask: '+{7} (000) 000-00-00',
    });
  });

  forms.forEach((form) => form.addEventListener('submit', submitForm));
});
