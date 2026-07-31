(function () {
  var scriptEl = document.currentScript;
  var scriptSrc = scriptEl && scriptEl.src;

  var config = window.ScaleMattersWidgetConfig || {};
  var API_BASE = config.apiBase || (scriptSrc ? new URL(scriptSrc).origin : '');
  var cssHref =
    config.cssHref ||
    (scriptSrc ? scriptSrc.replace(/widget\.js(\?.*)?$/, 'widget.css') : '/widget.css');

  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = cssHref;
  document.head.appendChild(link);

  function uuid() {
    if (window.crypto && window.crypto.randomUUID) return window.crypto.randomUUID();
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (Math.random() * 16) | 0;
      var v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  var sessionId = uuid();
  var messages = [];
  var sending = false;

  function escapeHtml(str) {
    return str.replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function renderMessageHtml(text) {
    // Matches either markdown-style [label](url) links or bare URLs — the
    // model isn't consistent about which form it uses for the booking link.
    var linkRegex = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)|(https?:\/\/[^\s<]+[^\s<.,:;"')\]])/g;
    var html = '';
    var lastIndex = 0;
    var match;
    while ((match = linkRegex.exec(text))) {
      html += escapeHtml(text.slice(lastIndex, match.index));
      var url = match[2] || match[3];
      lastIndex = match.index + match[0].length;
      html +=
        '<br><a href="' +
        escapeHtml(url) +
        '" target="_blank" rel="noopener noreferrer" class="sm-widget-cta">Book a time →</a>';
    }
    html += escapeHtml(text.slice(lastIndex));
    return html;
  }

  var launcher = document.createElement('button');
  launcher.className = 'sm-widget-launcher';
  launcher.setAttribute('aria-label', 'Open chat');
  launcher.innerHTML =
    '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.03 2 11c0 2.5 1.15 4.76 3.05 6.4L4 22l5.05-1.67C10.02 20.76 11 21 12 21c5.52 0 10-4.03 10-9s-4.48-10-10-10z"/></svg>';

  var panel = document.createElement('div');
  panel.className = 'sm-widget-panel';
  panel.innerHTML =
    '<div class="sm-widget-header">' +
    '<div class="sm-widget-header-title">scaleMatters Assistant</div>' +
    '<button class="sm-widget-close" aria-label="Close chat">×</button>' +
    '</div>' +
    '<div class="sm-widget-messages"></div>' +
    '<div class="sm-widget-input-row">' +
    '<textarea class="sm-widget-input" rows="1" placeholder="Ask about your CRM, data, or reporting..."></textarea>' +
    '<button class="sm-widget-send">Send</button>' +
    '</div>';

  document.body.appendChild(launcher);
  document.body.appendChild(panel);

  var messagesEl = panel.querySelector('.sm-widget-messages');
  var inputEl = panel.querySelector('.sm-widget-input');
  var sendBtn = panel.querySelector('.sm-widget-send');
  var closeBtn = panel.querySelector('.sm-widget-close');

  function scrollToBottom() {
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function appendMessage(role, content) {
    var el = document.createElement('div');
    el.className = 'sm-widget-msg sm-widget-msg-' + role;
    el.innerHTML = renderMessageHtml(content);
    messagesEl.appendChild(el);
    scrollToBottom();
  }

  function showTyping() {
    var el = document.createElement('div');
    el.className = 'sm-widget-typing';
    el.innerHTML = '<span></span><span></span><span></span>';
    messagesEl.appendChild(el);
    scrollToBottom();
    return el;
  }

  function setOpen(open) {
    panel.classList.toggle('sm-widget-open', open);
    if (open) {
      if (messages.length === 0) {
        appendMessage(
          'assistant',
          "Hi! I'm the scaleMatters assistant. Tell me a bit about your CRM, data, or reporting pain points and I'll help point you in the right direction."
        );
      }
      inputEl.focus();
    }
  }

  launcher.addEventListener('click', function () {
    setOpen(!panel.classList.contains('sm-widget-open'));
  });

  closeBtn.addEventListener('click', function () {
    setOpen(false);
  });

  inputEl.addEventListener('input', function () {
    inputEl.style.height = 'auto';
    inputEl.style.height = Math.min(inputEl.scrollHeight, 90) + 'px';
  });

  inputEl.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  });

  sendBtn.addEventListener('click', send);

  function send() {
    var text = inputEl.value.trim();
    if (!text || sending) return;

    inputEl.value = '';
    inputEl.style.height = 'auto';

    appendMessage('user', text);
    messages.push({ role: 'user', content: text });

    sending = true;
    sendBtn.disabled = true;
    var typingEl = showTyping();

    fetch(API_BASE + '/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ session_id: sessionId, messages: messages }),
    })
      .then(function (res) {
        if (!res.ok) throw new Error('Request failed: ' + res.status);
        return res.json();
      })
      .then(function (data) {
        typingEl.remove();
        appendMessage('assistant', data.reply);
        messages.push({ role: 'assistant', content: data.reply });
      })
      .catch(function () {
        typingEl.remove();
        appendMessage(
          'assistant',
          "Sorry, something went wrong on my end. Please try again in a moment."
        );
      })
      .finally(function () {
        sending = false;
        sendBtn.disabled = false;
      });
  }

  // Public API so other page elements (e.g. a homepage "ask a question" box)
  // can hand off a question to this same widget instead of building their own.
  window.ScaleMattersWidget = {
    ask: function (text) {
      if (!text) return;
      setOpen(true);
      inputEl.value = text;
      send();
    },
  };
})();
