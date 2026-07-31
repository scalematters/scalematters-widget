(function () {
  var style = document.createElement('style');
  style.textContent = [
    '.sm-ask-row{display:flex;max-width:680px;margin:0 auto;box-shadow:0 4px 16px rgba(0,0,0,0.2);border-radius:8px;overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;}',
    '.sm-ask-input{flex:1;border:1px solid #33456b;border-right:none;background:#22355c;color:#ffffff;font-size:16px;padding:16px 18px;outline:none;font-family:inherit;}',
    '.sm-ask-input::placeholder{color:#8b96ab;}',
    '.sm-ask-input:focus{border-color:#2f6fed;}',
    '.sm-ask-button{background:#2f6fed;color:#ffffff;border:none;font-size:16px;font-weight:700;padding:0 28px;cursor:pointer;white-space:nowrap;font-family:inherit;}',
    '.sm-ask-button:hover{background:#2660d1;}',
    '.sm-ask-button:disabled{opacity:0.6;cursor:not-allowed;}',
    '@media (max-width:600px){.sm-ask-row{flex-direction:column;box-shadow:none;}',
    '.sm-ask-input{border-right:1px solid #33456b;border-radius:8px 8px 0 0;}',
    '.sm-ask-button{border-radius:0 0 8px 8px;padding:14px;}}',
  ].join('\n');
  document.head.appendChild(style);

  var scriptEl = document.currentScript;

  var row = document.createElement('div');
  row.className = 'sm-ask-row';
  row.innerHTML =
    '<input class="sm-ask-input" type="text" placeholder="Describe your situation or ask a question...">' +
    '<button class="sm-ask-button">Ask →</button>';

  if (scriptEl && scriptEl.parentNode) {
    scriptEl.parentNode.insertBefore(row, scriptEl);
  } else {
    document.body.appendChild(row);
  }

  var inputEl = row.querySelector('.sm-ask-input');
  var buttonEl = row.querySelector('.sm-ask-button');

  function submit() {
    var text = inputEl.value.trim();
    if (!text) return;

    if (!window.ScaleMattersWidget || typeof window.ScaleMattersWidget.ask !== 'function') {
      console.error('scaleMatters ask-section: chat widget script not found on this page.');
      return;
    }

    window.ScaleMattersWidget.ask(text);
    inputEl.value = '';
  }

  buttonEl.addEventListener('click', submit);
  inputEl.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      submit();
    }
  });
})();
