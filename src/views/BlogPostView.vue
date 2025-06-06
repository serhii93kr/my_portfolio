<template>
    <div>
      <h1>Контактная информация</h1>
      <p>Свяжитесь с нами через форму ниже:</p>
      <!-- Пример контактной формы -->
      <form>
        <label for="name">Ваше имя:</label>
        <input type="text" id="name" name="name" required />
  
        <label for="email">Ваш Email:</label>
        <input type="email" id="email" name="email" required />
  
        <button type="submit">Отправить</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactView',
    data() {
      return {
        name: '',
        email: ''
      };
    },
    methods: {
      submitForm() {
        // Логика отправки формы
      }
    }
  };
  </script>
  
  <style scoped>
  /* Стили для компонента */
  form {
    margin-top: 20px;
  }
  label {
    display: block;
    margin-bottom: 5px;
  }
  input {
    margin-bottom: 10px;
    padding: 8px;
    width: 100%;
    max-width: 300px;
  }
  button {
    padding: 10px 15px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
  }
  button:hover {
    background-color: #45a049;
  }
  </style>
  