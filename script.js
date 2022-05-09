const keyboardLayout = [
    [
      {
        code: 'Backquote',
        func: false,
        lang: { en: '`', ru: 'ё' },
        width: 'regular',
      },
      {
        code: 'Digit1',
        func: false,
        lang: { en: '1', ru: '1' },
        width: 'regular',
      },
      {
        code: 'Digit2',
        func: false,
        lang: { en: '2', ru: '2' },
        width: 'regular',
      },
      {
        code: 'Digit3',
        func: false,
        lang: { en: '3', ru: '3' },
        width: 'regular',
      },
      {
        code: 'Digit4',
        func: false,
        lang: { en: '4', ru: '4' },
        width: 'regular',
      },
      {
        code: 'Digit5',
        func: false,
        lang: { en: '5', ru: '5' },
        width: 'regular',
      },
      {
        code: 'Digit6',
        func: false,
        lang: { en: '6', ru: '6' },
        width: 'regular',
      },
      {
        code: 'Digit7',
        func: false,
        lang: { en: '7', ru: '7' },
        width: 'regular',
      },
      {
        code: 'Digit8',
        func: false,
        lang: { en: '8', ru: '8' },
        width: 'regular',
      },
      {
        code: 'Digit9',
        func: false,
        lang: { en: '9', ru: '9' },
        width: 'regular',
      },
      {
        code: 'Digit0',
        func: false,
        lang: { en: '0', ru: '0' },
        width: 'regular',
      },
      {
        code: 'Minus',
        func: false,
        lang: { en: '-', ru: '-' },
        width: 'regular',
      },
      {
        code: 'Equal',
        func: false,
        lang: { en: '=', ru: '=' },
        width: 'regular',
      },
      {
        code: 'Backspace',
        func: true,
        lang: { en: 'Backspace', ru: 'Backspace' },
        width: 'extraWider',
      },
    ],
    [
      {
        code: 'Tab',
        func: true,
        lang: { en: 'Tab', ru: 'Tab' },
        width: 'wide',
      },
      {
        code: 'KeyQ',
        func: false,
        lang: { en: 'q', ru: 'й' },
        width: 'regular',
      },
      {
        code: 'KeyW',
        func: false,
        lang: { en: 'w', ru: 'ц' },
        width: 'regular',
      },
      {
        code: 'KeyE',
        func: false,
        lang: { en: 'e', ru: 'у' },
        width: 'regular',
      },
      {
        code: 'KeyR',
        func: false,
        lang: { en: 'r', ru: 'к' },
        width: 'regular',
      },
      {
        code: 'KeyT',
        func: false,
        lang: { en: 't', ru: 'е' },
        width: 'regular',
      },
      {
        code: 'KeyY',
        func: false,
        lang: { en: 'y', ru: 'н' },
        width: 'regular',
      },
      {
        code: 'KeyU',
        func: false,
        lang: { en: 'u', ru: 'г' },
        width: 'regular',
      },
      {
        code: 'KeyI',
        func: false,
        lang: { en: 'i', ru: 'ш' },
        width: 'regular',
      },
      {
        code: 'KeyO',
        func: false,
        lang: { en: 'o', ru: 'щ' },
        width: 'regular',
      },
      {
        code: 'KeyP',
        func: false,
        lang: { en: 'p', ru: 'з' },
        width: 'regular',
      },
      {
        code: 'BracketLeft',
        func: false,
        lang: { en: '[', ru: 'х' },
        width: 'regular',
      },
      {
        code: 'BracketRight',
        func: false,
        lang: { en: ']', ru: 'ъ' },
        width: 'regular',
      },
      {
        code: 'Delete',
        func: true,
        lang: { en: 'Delete', ru: 'Delete' },
        width: 'widest',
      },
    ],
    [
      {
        code: 'CapsLock',
        func: true,
        lang: { en: 'CapsLock', ru: 'CapsLock' },
        width: 'widest',
      },
      {
        code: 'KeyA',
        func: false,
        lang: { en: 'a', ru: 'ф' },
        width: 'regular',
      },
      {
        code: 'KeyS',
        func: false,
        lang: { en: 's', ru: 'ы' },
        width: 'regular',
      },
      {
        code: 'KeyD',
        func: false,
        lang: { en: 'd', ru: 'в' },
        width: 'regular',
      },
      {
        code: 'KeyF',
        func: false,
        lang: { en: 'f', ru: 'а' },
        width: 'regular',
      },
      {
        code: 'KeyG',
        func: false,
        lang: { en: 'g', ru: 'п' },
        width: 'regular',
      },
      {
        code: 'KeyH',
        func: false,
        lang: { en: 'h', ru: 'р' },
        width: 'regular',
      },
      {
        code: 'KeyJ',
        func: false,
        lang: { en: 'j', ru: 'о' },
        width: 'regular',
      },
      {
        code: 'KeyK',
        func: false,
        lang: { en: 'k', ru: 'л' },
        width: 'regular',
      },
      {
        code: 'KeyL',
        func: false,
        lang: { en: 'l', ru: 'д' },
        width: 'regular',
      },
      {
        code: 'Semicolon',
        func: false,
        lang: { en: ';', ru: 'ж' },
        width: 'regular',
      },
      {
        code: 'Quote',
        func: false,
        lang: { en: "'", ru: 'э' },
        width: 'regular',
      },
      {
        code: 'Backslash',
        func: false,
        lang: { en: '\\', ru: '\\' },
        width: 'regular',
      },
      {
        code: 'Enter',
        func: true,
        lang: { en: 'Enter', ru: 'Enter' },
        width: 'wide',
      },
    ],
    [
      {
        code: 'ShiftLeft',
        func: true,
        lang: { en: 'Shift', ru: 'Shift' },
        width: 'extraWider',
      },
      {
        code: 'KeyZ',
        func: false,
        lang: { en: 'z', ru: 'я' },
        width: 'regular',
      },
      {
        code: 'KeyX',
        func: false,
        lang: { en: 'x', ru: 'ч' },
        width: 'regular',
      },
      {
        code: 'KeyC',
        func: false,
        lang: { en: 'c', ru: 'с' },
        width: 'regular',
      },
      {
        code: 'KeyV',
        func: false,
        lang: { en: 'v', ru: 'м' },
        width: 'regular',
      },
      {
        code: 'KeyB',
        func: false,
        lang: { en: 'b', ru: 'и' },
        width: 'regular',
      },
      {
        code: 'KeyN',
        func: false,
        lang: { en: 'n', ru: 'т' },
        width: 'regular',
      },
      {
        code: 'KeyM',
        func: false,
        lang: { en: 'm', ru: 'ь' },
        width: 'regular',
      },
      {
        code: 'Comma',
        func: false,
        lang: { en: ',', ru: 'б' },
        width: 'regular',
      },
      {
        code: 'Period',
        func: false,
        lang: { en: '.', ru: 'ю' },
        width: 'regular',
      },
      {
        code: 'Slash',
        func: false,
        lang: { en: '/', ru: '.' },
        width: 'regular',
      },
      {
        code: 'ArrowUp',
        func: true,
        lang: { en: '⮝', ru: '⮝' },
        width: 'regular',
      },
      {
        code: 'ShiftRight',
        func: true,
        lang: { en: 'Shift', ru: 'Shift' },
        width: 'wider',
      },
    ],
    [
      {
        code: 'ControlLeft',
        func: true,
        lang: { en: 'Ctrl', ru: 'Ctrl' },
        width: 'wide',
      },
      {
        code: 'AltLeft',
        func: true,
        lang: { en: 'Alt', ru: 'Alt' },
        width: 'wide',
      },
      {
        code: 'Space',
        func: false,
        lang: { en: ' ', ru: ' ' },
        width: 'extraWidest',
      },
      {
        code: 'AltRight',
        func: true,
        lang: { en: 'Alt', ru: 'Alt' },
        width: 'regular',
      },
      {
        code: 'ControlRight',
        func: true,
        lang: { en: 'Ctrl', ru: 'Ctrl' },
        width: 'wide',
      },
      {
        code: 'ArrowLeft',
        func: true,
        lang: { en: '⮜', ru: '⮜' },
        width: 'regular',
      },
      {
        code: 'ArrowDown',
        func: true,
        lang: { en: '⮟', ru: '⮟' },
        width: 'regular',
      },
      {
        code: 'ArrowRight',
        func: true,
        lang: { en: '⮞', ru: '⮞' },
        width: 'regular',
      },
    ],
  ];
  
  const keyboardKeys = {};
  const keyboardFragment = document.createDocumentFragment();
  
  keyboardLayout.forEach((line) => {
    const keyboardRow = document.createElement('div');
    keyboardRow.classList.add('keyboardRow');
  
    line.forEach((key) => {
      keyboardKeys[key.code] = key.lang;
      keyboardKeys[key.code].func = key.func;
  
      const keyElement = document.createElement('button');
      keyElement.setAttribute('id', key.code);
      keyElement.setAttribute('type', 'button');
      keyElement.classList.add('keyboardKey');
      keyElement.classList.add(`keyboardKey_${key.width}`);
  
      keyElement.textContent = key.lang.en;
      keyboardRow.appendChild(keyElement);
    });
  
    keyboardFragment.appendChild(keyboardRow);
  });

class Keyboard {
  constructor() {
    this.caps = false;
    this.lang = localStorage.getItem('lang') === 'ru' ? 'ru' : 'en';
  }

  init() {
    this.wrapper = document.createElement('main');
    this.title = document.createElement('h1');
    this.text = document.createElement('textarea');
    this.keyboard = document.createElement('div');
    const keyboardRow = document.createElement('div');
    this.description = document.createElement('p');
    this.language = document.createElement('p');

    this.wrapper.classList.add('wrapper');

    this.title.classList.add('title');
    this.title.textContent = 'RS keyboard';

    this.text.autofocus = true;
    this.text.classList.add('text');

    this.keyboard.classList.add('keyboard');
    keyboardRow.classList.add('keyboardRow');

    this.description.classList.add('info');
    this.description.textContent =
      'Keyboard developed for Fedora Linux 35. Tested in Google Chrome v.101.';

    this.language.classList.add('info');
    this.language.textContent =
      'To switch input methods, press Ctrl+Alt.';

    this.keyboard.appendChild(keyboardFragment);
    this.showLanguage(this.lang);

    this.wrapper.appendChild(this.title);
    this.wrapper.appendChild(this.text);
    this.wrapper.appendChild(this.keyboard);
    this.wrapper.appendChild(this.description);
    this.wrapper.appendChild(this.language);

    document.body.appendChild(this.wrapper);

    this.createListeners();
  }

  createListeners() {
    this.text.addEventListener('focus', () => {
      setTimeout(() => {
        this.text.focus();
      }, 0);
    });

    document.addEventListener('keydown', (e) => {
      e.stopImmediatePropagation();

      const key = document.getElementById(e.code);
      if (!key) {
        e.preventDefault();
        return;
      }

      if (e.code === 'CapsLock' && !e.repeat) {
        e.preventDefault();
        this.caps = !this.caps;

        const addRemove = this.caps ? 'add' : 'remove';
        key.classList[addRemove]('active');

        this.switchCaps(e.shiftKey);
      } else {
        key.classList.add('active');

        if ((e.ctrlKey || e.metaKey) && e.altKey && !e.repeat) {
          e.preventDefault();
          this.lang = this.lang === 'ru' ? 'en' : 'ru';
          localStorage.setItem('lang', this.lang);
          this.showLanguage(this.lang, e.shiftKey);
        } else if (!keyboardKeys[e.code].func) {
          e.preventDefault();
          this.insertText(key.textContent);
        } else if (e.key === 'Shift' && !e.repeat) {
          e.preventDefault();
          this.switchCaps(e.shiftKey);
        } else if (e.code === 'Tab') {
          e.preventDefault();
          this.insertText('\t');
        } else if (e.code === 'Enter') {
          e.preventDefault();
          this.insertText('\n');
        } else if (e.code === 'Backspace') {
          e.preventDefault();
          this.pressBackspace();
        } else if (e.code === 'Delete') {
          e.preventDefault();
          this.pressDelete();
        } else if (e.code === 'ArrowUp' && !e.isTrusted) {
          this.arrowUp();
        } else if (e.code === 'ArrowDown' && !e.isTrusted) {
          this.arrowDown();
        } else if (e.code === 'ArrowLeft' && !e.isTrusted) {
          this.arrowLeft();
        } else if (e.code === 'ArrowRight' && !e.isTrusted) {
          this.arrowRight();
        }
      }
    });

    document.addEventListener('keyup', (e) => {
      e.stopImmediatePropagation();

      const key = document.getElementById(e.code);
      if (!key) {
        e.preventDefault();
        return;
      }

      if (e.code !== 'CapsLock') {
        key.classList.remove('active');
        if (e.key === 'Shift') {
          e.preventDefault();
          this.switchCaps(e.shiftKey);
        }
      }
    });

    this.keyboard.addEventListener('click', (e) => {
      this.text.focus();
      const eventKeyDown = new KeyboardEvent('keydown', {
        bubbles: true,
        cancelable: true,
        code: e.target.id,
        view: window,
      });
      document.dispatchEvent(eventKeyDown);

      this.text.focus();
      const eventKeyUp = new KeyboardEvent('keyup', {
        bubbles: true,
        cancelable: true,
        code: e.target.id,
        view: window,
      });
      document.dispatchEvent(eventKeyUp);
    });
  }

  arrowUp() {
    this.text.selectionStart = 0;
    this.text.selectionEnd = this.text.selectionStart;
  }

  arrowDown() {
    this.text.selectionEnd = this.text.textLength;
    this.text.selectionStart = this.text.selectionEnd;
  }

  arrowLeft() {
    this.text.selectionStart = Math.max(0, this.text.selectionStart - 1);
    this.text.selectionEnd = this.text.selectionStart;
  }

  arrowRight() {
    this.text.selectionStart = Math.min(
      this.text.textLength,
      this.text.selectionEnd + 1,
    );
    this.text.selectionEnd = this.text.selectionStart;
  }

  insertText(chars) {
    const cursorAt = this.text.selectionStart;

    this.text.value =
      this.text.value.slice(0, cursorAt) +
      chars +
      this.text.value.slice(this.text.selectionEnd);

    this.text.selectionStart = cursorAt + chars.length;
    this.text.selectionEnd = this.text.selectionStart;
  }

  pressBackspace() {
    if (this.text.selectionStart !== this.text.selectionEnd) {
      this.insertText('');
    } else {
      const cursorAt = Math.max(0, this.text.selectionStart - 1);

      this.text.value =
        this.text.value.slice(0, cursorAt) +
        this.text.value.slice(this.text.selectionEnd);

      this.text.selectionStart = cursorAt;
      this.text.selectionEnd = this.text.selectionStart;
    }
  }

  pressDelete() {
    if (this.text.selectionStart !== this.text.selectionEnd) {
      this.insertText('');
    } else {
      const cursorAt = this.text.selectionStart;

      this.text.value =
        this.text.value.slice(0, cursorAt) +
        this.text.value.slice(cursorAt + 1);

      this.text.selectionStart = cursorAt;
      this.text.selectionEnd = this.text.selectionStart;
    }
  }

  showLanguage(lang, shift = false) {
    Array.from(this.keyboard.querySelectorAll('.keyboardKey')).forEach(
      (e) => {
        e.textContent = keyboardKeys[e.id][lang];
      },
    );

    this.switchCaps(shift);
  }

  switchCaps(shiftKey) {
    const showUpperCase = (this.caps && !shiftKey) || (!this.caps && shiftKey);
    const toCase = showUpperCase ? 'toUpperCase' : 'toLowerCase';
    Array.from(this.keyboard.querySelectorAll('.keyboardKey')).forEach(
      (e) => {
        if (!keyboardKeys[e.id].func) {
          if (e.id === 'Backquote' && this.lang === 'en') {
            e.textContent = shiftKey ? '~' : '`';
          } else if (e.id === 'Minus' && this.lang === 'en') {
            e.textContent = shiftKey ? '_' : '-';
          } else if (e.id === 'Minus' && this.lang === 'ru') {
            e.textContent = shiftKey ? '_' : '-';
          } else if (e.id === 'Equal' && this.lang === 'en') {
            e.textContent = shiftKey ? '+' : '=';
          } else if (e.id === 'Equal' && this.lang === 'ru') {
            e.textContent = shiftKey ? '+' : '=';
          } else if (e.id === 'BracketLeft' && this.lang === 'en') {
            e.textContent = shiftKey ? '{' : '[';
          } else if (e.id === 'BracketRight' && this.lang === 'en') {
            e.textContent = shiftKey ? '}' : ']';
          } else if (e.id === 'Backslash' && this.lang === 'en') {
            e.textContent = shiftKey ? '|' : '\\';
         } else if (e.id === 'Backslash' && this.lang === 'ru') {
            e.textContent = shiftKey ? '/' : '\\';
          } else if (e.id === 'Semicolon' && this.lang === 'en') {
            e.textContent = shiftKey ? ':' : ';';
          } else if (e.id === 'Quote' && this.lang === 'en') {
            e.textContent = shiftKey ? '"' : "'";
          } else if (e.id === 'Comma' && this.lang === 'en') {
            e.textContent = shiftKey ? '<' : ',';
          } else if (e.id === 'Period' && this.lang === 'en') {
            e.textContent = shiftKey ? '>' : '.';
          } else if (e.id === 'Slash' && this.lang === 'en') {
            e.textContent = shiftKey ? '?' : '/';
          } else if (e.id === 'Slash' && this.lang === 'ru') {
            e.textContent = shiftKey ? ',' : '.';
          } else if (e.id === 'Digit1' && this.lang === 'en') {
              e.textContent = shiftKey ? '!' : '1';
          } else if (e.id === 'Digit1' && this.lang === 'ru') {
            e.textContent = shiftKey ? '!' : '1';
          } else if (e.id === 'Digit2' && this.lang === 'en') {
            e.textContent = shiftKey ? '@' : '2';
          } else if (e.id === 'Digit2' && this.lang === 'ru') {
            e.textContent = shiftKey ? '"' : '2';
          } else if (e.id === 'Digit3' && this.lang === 'en') {
            e.textContent = shiftKey ? '#' : '3';
          } else if (e.id === 'Digit3' && this.lang === 'ru') {
            e.textContent = shiftKey ? '№' : '3';
          } else if (e.id === 'Digit4' && this.lang === 'en') {
            e.textContent = shiftKey ? '$' : '4';
          } else if (e.id === 'Digit4' && this.lang === 'ru') {
            e.textContent = shiftKey ? ';' : '4';
          } else if (e.id === 'Digit5' && this.lang === 'en') {
            e.textContent = shiftKey ? '%' : '5';
          } else if (e.id === 'Digit5' && this.lang === 'ru') {
            e.textContent = shiftKey ? '%' : '5';
          } else if (e.id === 'Digit6' && this.lang === 'en') {
            e.textContent = shiftKey ? '^' : '6';
          } else if (e.id === 'Digit6' && this.lang === 'ru') {
            e.textContent = shiftKey ? ':' : '6';
          } else if (e.id === 'Digit7' && this.lang === 'en') {
            e.textContent = shiftKey ? '&' : '7';
          } else if (e.id === 'Digit7' && this.lang === 'ru') {
            e.textContent = shiftKey ? '?' : '7';
          } else if (e.id === 'Digit8' && this.lang === 'en') {
            e.textContent = shiftKey ? '*' : '8';
          } else if (e.id === 'Digit8' && this.lang === 'ru') {
            e.textContent = shiftKey ? '*' : '8';
          } else if (e.id === 'Digit9' && this.lang === 'en') {
            e.textContent = shiftKey ? '(' : '9';
          } else if (e.id === 'Digit9' && this.lang === 'ru') {
            e.textContent = shiftKey ? '(' : '9';
          } else if (e.id === 'Digit0' && this.lang === 'en') {
            e.textContent = shiftKey ? ')' : '0';
          } else if (e.id === 'Digit0' && this.lang === 'ru') {
            e.textContent = shiftKey ? ')' : '0';          
          } else {
            e.textContent = e.textContent[toCase]();
          }
        }
      },
    );
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const keyboard = new Keyboard();
  keyboard.init();
});