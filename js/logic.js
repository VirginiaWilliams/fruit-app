window.addEventListener("DOMContentLoaded", e => {
  const totalFruitTextElement = document.getElementById('total-fruit');
  const totalRipenessTextElement = document.getElementById('total-ripeness');

  // Totals

  document.querySelector('#generate-button').addEventListener('click', async function() {
    var fruits = document.querySelectorAll('.input-form-row');
    totalFruitTextElement.textContent = fruits.length;

    var totalRipeness = document.querySelectorAll('.ripeness-choices');
    var count = 0;
    totalRipeness.forEach((r) => {
      count += Number(r.value);
    });
    totalRipenessTextElement.textContent = count;
  });

  // Row Manipulation

  document.querySelector('#add-button').addEventListener('click', async function() {
    const wrapper = document.getElementById('rows-container');
    
    const newGroup = document.createElement('div');
    newGroup.className = 'input-form-row';
    newGroup.innerHTML = `
        <div class="input-field">
          <label for="fruit-choices">Fruit:</label>
          <select id="fruit-choices" class="fruit-choices" name="options">
            <option value="Apple">Apple</option>
            <option value="Banana">Banana</option>
            <option value="Cantalope">Cantalope</option>
            <option value="Grape">Grape</option>
            <option value="Honeydew">Honeydew</option>
            <option value="Orange">Orange</option>
            <option value="Watermelon">Watermelon</option>
          </select>
        </div>

        <div class="input-field">
          <label for="ripeness-choices">Ripeness:</label>
          <select id="ripeness-choices" class="ripeness-choices" name="options">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
    `;

    wrapper.appendChild(newGroup);
  });
  
  document.querySelector('#remove-button').addEventListener('click', async function() {
    const wrapper = document.getElementById('rows-container');

    wrapper.removeChild(wrapper.lastElementChild);
  });
});