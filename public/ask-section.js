(function () {
  var style = document.createElement('style');
  style.textContent = [
    '.sm-ask-section{background:#1a2b4c;padding:64px 24px;text-align:center;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;}',
    '.sm-ask-heading{color:#ffffff;font-size:36px;font-weight:800;margin:0 0 16px;line-height:1.2;}',
    '.sm-ask-subtext{color:#a9b4c9;font-size:17px;line-height:1.6;max-width:640px;margin:0 auto 32px;}',
    '.sm-ask-row{display:flex;max-width:680px;margin:0 auto;box-shadow:0 4px 16px rgba(0,0,0,0.2);border-radius:8px;overflow:hidden;}',
    '.sm-ask-input{flex:1;border:1px solid #33456b;border-right:none;background:#22355c;color:#ffffff;font-size:16px;padding:16px 18px;outline:none;font-family:inherit;}',
    '.sm-ask-input::placeholder{color:#8b96ab;}',
    '.sm-ask-input:focus{border-color:#2f6fed;}',
    '.sm-ask-button{background:#2f6fed;color:#ffffff;border:none;font-size:16px;font-weight:700;padding:0 28px;cursor:pointer;white-space:nowrap;}',
    '.sm-ask-button:hover{background:#2660d1;}',
    '.sm-ask-button:disabled{opacity:0.6;cursor:not-allowed;}',
    '@media (max-width:600px){.sm-ask-row{flex-direction:column;box-shadow:none;}',
    '.sm-ask-input{border-right:1px solid #33456b;border-radius:8px 8px 0 0;}',
    '.sm-ask-button{border-radius:0 0 8px 8px;padding:14px;}}',
  ].join('\n');
  document.head.appendChild(style);

  var scriptEl = document.currentScript;

  var section = document.createElement('div');
  section.className = 'sm-ask-section';
  section.innerHTML =
    '<h2 class="sm-ask-heading">Find out if we can solve your problems.</h2>' +
    '<p class="sm-ask-subtext">Ask if we\'ve solved the problems you\'re facing or if our services are the right fit for what you\'re looking for. Our AI assistant knows every project scaleMatters has completed across 7 years of B2B tech engagements. Just ask!</p>' +
    '<div class="sm-ask-row">' +
    '<input class="sm-ask-input" type="text" placeholder="Describe your situation or ask a question...">' +
    '<button class="sm-ask-button">Ask →</button>' +
    '</div>';

  if (scriptEl && scriptEl.parentNode) {
    scriptEl.parentNode.insertBefore(section, scriptEl);
  } else {
    document.body.appendChild(section);
  }

  var inputEl = section.querySelector('.sm-ask-input');
  var buttonEl = section.querySelector('.sm-ask-button');

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
