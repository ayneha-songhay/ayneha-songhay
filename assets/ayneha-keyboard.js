/* AYNEHA Keyboard - version web
   Reconstruit fidèlement à partir du clavier Android AynehaKeyboard :
   - même configuration de touches (ayneha_keyboard_config.json)
   - même police (ayneha_regular.ttf)
   - même logique RTL : chaque glyphe AYNEHA inséré est enveloppé dans
     un RLO (U+202E) ... PDF (U+202C) pour un rendu bidi correct,
     et l'effacement retire les 3 caractères d'un coup (comme l'app). */

(function () {
  "use strict";

  var LAYOUT_VIEWS = {"alphabet": {"title": "Clavier Principal AYNEHA RTL (Format 10-10-7)", "direction": "rtl", "rendering_rule": "Render items in array from RIGHT to LEFT on screen.", "rows": [{"row_index": 1, "visual_order": "RIGHT_TO_LEFT", "description": "Index 0 = Extrême Droite (A). Index 9 = Extrême Gauche (W).", "keys": [{"label": "A", "pua": "U+E020", "long_press_variants": [{"label": "AA", "pua": "U+E025"}, {"label": "Ã", "pua": "U+E026"}]}, {"label": "F", "pua": "U+E00D", "long_press_variants": [{"label": "FF", "pua": "U+E037"}, {"label": "F°", "pua": "U+E038"}]}, {"label": "E", "pua": "U+E021", "long_press_variants": [{"label": "EE", "pua": "U+E027"}, {"label": "Ẽ", "pua": "U+E028"}, {"label": "È", "pua": "U+E029"}]}, {"label": "O", "pua": "U+E023", "long_press_variants": [{"label": "OO", "pua": "U+E02C"}, {"label": "Õ", "pua": "U+E02D"}, {"label": "Ò", "pua": "U+E02E"}]}, {"label": "P", "pua": "U+E00B", "long_press_variants": [{"label": "PP", "pua": "U+E033"}, {"label": "P°", "pua": "U+E034"}]}, {"label": "I", "pua": "U+E022", "long_press_variants": [{"label": "II", "pua": "U+E02A"}, {"label": "Ĩ", "pua": "U+E02B"}]}, {"label": "S", "pua": "U+E014", "long_press_variants": [{"label": "SS", "pua": "U+E045"}, {"label": "S°", "pua": "U+E046"}]}, {"label": "TS", "pua": "U+E017", "long_press_variants": [{"label": "TSTS", "pua": "U+E04A"}]}, {"label": "L", "pua": "U+E012", "long_press_variants": [{"label": "LL", "pua": "U+E041"}, {"label": "L°", "pua": "U+E042"}]}, {"label": "W", "pua": "U+E00E", "long_press_variants": [{"label": "WW", "pua": "U+E039"}, {"label": "W°", "pua": "U+E03A"}]}]}, {"row_index": 2, "visual_order": "RIGHT_TO_LEFT", "description": "Index 0 = Extrême Droite (A). Index 9 = Extrême Gauche (Σ).", "keys": [{"label": "H", "pua": "U+E01E", "long_press_variants": []}, {"label": "M", "pua": "U+E00C", "long_press_variants": [{"label": "MM", "pua": "U+E035"}, {"label": "M°", "pua": "U+E036"}]}, {"label": "N", "pua": "U+E011", "long_press_variants": [{"label": "NN", "pua": "U+E03F"}, {"label": "N°", "pua": "U+E040"}]}, {"label": "B", "pua": "U+E00A", "long_press_variants": [{"label": "BB", "pua": "U+E031"}, {"label": "B°", "pua": "U+E032"}]}, {"label": "T", "pua": "U+E010", "long_press_variants": [{"label": "TT", "pua": "U+E03D"}, {"label": "T°", "pua": "U+E03E"}]}, {"label": "K", "pua": "U+E01D", "long_press_variants": [{"label": "KK", "pua": "U+E053"}, {"label": "K°", "pua": "U+E054"}]}, {"label": "R", "pua": "U+E013", "long_press_variants": [{"label": "RR", "pua": "U+E043"}, {"label": "R°", "pua": "U+E044"}]}, {"label": "U", "pua": "U+E024", "long_press_variants": [{"label": "UU", "pua": "U+E02F"}, {"label": "Ũ", "pua": "U+E030"}]}, {"label": "D", "pua": "U+E00F", "long_press_variants": [{"label": "DD", "pua": "U+E03B"}, {"label": "D°", "pua": "U+E03C"}]}, {"label": "Σ", "pua": "U+E016", "long_press_variants": [{"label": "ΣΣ", "pua": "U+E049"}]}]}, {"row_index": 3, "visual_order": "RIGHT_TO_LEFT", "description": "Index 0 = Extrême Droite (Effacer ⌦). Index 8 = Extrême Gauche (Entrée/Retour ↴).", "keys": [{"type": "action", "action": "backspace", "label": "⌦", "unicode": null, "width": 1.25}, {"label": "Z", "pua": "U+E015", "long_press_variants": [{"label": "ZZ", "pua": "U+E047"}, {"label": "Z°", "pua": "U+E048"}]}, {"label": "J", "pua": "U+E018", "long_press_variants": [{"label": "JJ", "pua": "U+E04B"}]}, {"label": "DJ", "pua": "U+E019", "long_press_variants": [{"label": "DJDJ", "pua": "U+E04C"}, {"label": "DJ°", "pua": "U+E04D"}]}, {"label": "Ɲ", "pua": "U+E01A", "long_press_variants": [{"label": "ƝƝ", "pua": "U+E04E"}]}, {"label": "Y", "pua": "U+E01B", "long_press_variants": [{"label": "YY", "pua": "U+E04F"}, {"label": "Y°", "pua": "U+E050"}]}, {"label": "G", "pua": "U+E01C", "long_press_variants": [{"label": "GG", "pua": "U+E051"}, {"label": "G°", "pua": "U+E052"}]}, {"label": "Ŋ", "pua": "U+E01F", "long_press_variants": [{"label": "ŊŊ", "pua": "U+E055"}, {"label": "Ŋ°", "pua": "U+E056"}]}, {"type": "action", "action": "enter", "label": "↴", "unicode": null, "width": 1.25}]}, {"row_index": 4, "visual_order": "RIGHT_TO_LEFT", "description": "Ordre visuel gauche->droite : switch, virgule, emoji, espace, point, entrée (bascule/entrée non mirroirés, cf. AynehaToolbarView/mockups).", "keys": [{"type": "action", "action": "enter", "label": "↴", "width": 1.5}, {"label": ".", "unicode": "U+002E", "width": 1.0}, {"type": "space", "label": "AYNEHA", "unicode": "U+0020", "width": 4.5}, {"type": "switch_view", "target_view": "emoji", "label": "😊", "width": 1.0}, {"label": "⹁", "pua": "U+E060", "width": 1.0}, {"type": "switch_view", "target_view": "symbols_page1", "label": "؟321", "width": 1.5}]}]}, "symbols_page1": {"title": "Page Symboles et Chiffres AYNEHA", "direction": "rtl", "rows": [{"row_index": 1, "visual_order": "RIGHT_TO_LEFT", "description": "Chiffres en ordre RTL (1 à droite, 0 à gauche)", "keys": [{"label": "1", "pua": "U+E001"}, {"label": "2", "pua": "U+E002"}, {"label": "3", "pua": "U+E003"}, {"label": "4", "pua": "U+E004"}, {"label": "5", "pua": "U+E005"}, {"label": "6", "pua": "U+E006"}, {"label": "7", "pua": "U+E007"}, {"label": "8", "pua": "U+E008"}, {"label": "9", "pua": "U+E009"}, {"label": "0", "pua": "U+E000"}], "mirror": true}, {"row_index": 2, "visual_order": "RIGHT_TO_LEFT", "keys": [{"label": "⁏", "pua": "U+E061"}, {"label": "'", "unicode": "U+0027", "mirror": true}, {"label": ":", "unicode": "U+003A"}, {"label": "...", "unicode": "U+2026"}, {"label": "!", "unicode": "U+0021"}, {"label": "؟", "unicode": "U+061F"}, {"label": "»", "unicode": "U+00BB"}, {"label": "«", "unicode": "U+00AB"}, {"label": "(", "unicode": "U+0028"}, {"label": ")", "unicode": "U+0029"}], "mirror": true}, {"row_index": 3, "visual_order": "RIGHT_TO_LEFT", "keys": [{"type": "switch_view", "target_view": "numpad", "label": "=\\<", "width": 1.25}, {"label": "@", "unicode": "U+0040"}, {"label": "#", "unicode": "U+0023"}, {"label": "€", "unicode": "U+20AC"}, {"label": "&", "unicode": "U+0026"}, {"label": "_", "unicode": "U+005F"}, {"label": "%", "unicode": "U+0025"}, {"label": "+", "unicode": "U+002B"}, {"label": "-", "unicode": "U+002D"}, {"label": "/", "unicode": "U+002F"}, {"type": "action", "action": "backspace", "label": "⌦", "unicode": null, "width": 1.25}], "mirror": true}, {"row_index": 4, "visual_order": "RIGHT_TO_LEFT", "keys": [{"type": "action", "action": "enter", "label": "↴", "width": 1.5}, {"label": ".", "unicode": "U+002E", "width": 1.0}, {"type": "space", "label": "AYNEHA", "unicode": "U+0020", "width": 4.5}, {"type": "switch_view", "target_view": "emoji", "label": "😊", "width": 1.0}, {"label": "⹁", "pua": "U+E060", "width": 1.0}, {"type": "switch_view", "target_view": "alphabet", "label": "IEA", "width": 1.5}]}]}, "numpad": {"title": "Pavé Numérique AYNEHA RTL", "direction": "rtl", "rows": [{"row_index": 1, "visual_order": "RIGHT_TO_LEFT", "keys": [{"label": "1", "pua": "U+E001"}, {"label": "2", "pua": "U+E002"}, {"label": "3", "pua": "U+E003"}, {"label": "÷", "unicode": "U+00F7"}], "mirror": true}, {"row_index": 2, "visual_order": "RIGHT_TO_LEFT", "keys": [{"label": "4", "pua": "U+E004"}, {"label": "5", "pua": "U+E005"}, {"label": "6", "pua": "U+E006"}, {"label": "×", "unicode": "U+00D7"}], "mirror": true}, {"row_index": 3, "visual_order": "RIGHT_TO_LEFT", "keys": [{"label": "7", "pua": "U+E007"}, {"label": "8", "pua": "U+E008"}, {"label": "9", "pua": "U+E009"}, {"label": "+", "unicode": "U+002B"}], "mirror": true}, {"row_index": 4, "visual_order": "RIGHT_TO_LEFT", "keys": [{"label": ".", "unicode": "U+002E"}, {"label": "0", "pua": "U+E000"}, {"label": "%", "unicode": "U+0025"}, {"label": "-", "unicode": "U+002D"}], "mirror": true}, {"row_index": 5, "keys": [{"type": "action", "action": "enter", "label": "↴", "width": 1.5}, {"type": "char", "label": ".", "unicode": "U+002E", "width": 1.0}, {"type": "space", "label": "AYNEHA", "width": 4.5}, {"type": "switch_view", "target_view": "emoji", "label": "😊", "width": 1.0}, {"type": "char", "label": "⹁", "pua": "U+E060", "width": 1.0}, {"type": "switch_view", "target_view": "alphabet", "label": "IEA", "width": 1.5}]}]}, "emoji": {"title": "Page Emoji AYNEHA", "rows": [{"row_index": 1, "mirror": false, "keys": [{"type": "char", "label": "😀"}, {"type": "char", "label": "😃"}, {"type": "char", "label": "😄"}, {"type": "char", "label": "😁"}, {"type": "char", "label": "😆"}, {"type": "char", "label": "😅"}, {"type": "char", "label": "😂"}, {"type": "char", "label": "🤣"}]}, {"row_index": 2, "mirror": false, "keys": [{"type": "char", "label": "😊"}, {"type": "char", "label": "😇"}, {"type": "char", "label": "🙂"}, {"type": "char", "label": "🙃"}, {"type": "char", "label": "😉"}, {"type": "char", "label": "😌"}, {"type": "char", "label": "😍"}, {"type": "char", "label": "🥰"}]}, {"row_index": 3, "mirror": false, "keys": [{"type": "char", "label": "😘"}, {"type": "char", "label": "😗"}, {"type": "char", "label": "😙"}, {"type": "char", "label": "😚"}, {"type": "char", "label": "😋"}, {"type": "char", "label": "😛"}, {"type": "char", "label": "😝"}, {"type": "char", "label": "😜"}]}, {"row_index": 4, "mirror": false, "keys": [{"type": "char", "label": "🤪"}, {"type": "char", "label": "🤨"}, {"type": "char", "label": "🧐"}, {"type": "char", "label": "🤓"}, {"type": "char", "label": "😎"}, {"type": "char", "label": "🥳"}, {"type": "char", "label": "😏"}, {"type": "char", "label": "😒"}]}, {"row_index": 5, "mirror": false, "keys": [{"type": "char", "label": "😞"}, {"type": "char", "label": "😔"}, {"type": "char", "label": "😟"}, {"type": "char", "label": "😕"}, {"type": "char", "label": "🙁"}, {"type": "char", "label": "☹️"}, {"type": "char", "label": "😣"}, {"type": "char", "label": "😢"}]}, {"row_index": 6, "keys": [{"type": "action", "action": "enter", "label": "↴", "width": 1.5}, {"type": "char", "label": ".", "unicode": "U+002E", "width": 1.0}, {"type": "space", "label": "AYNEHA", "width": 4.5}, {"type": "switch_view", "target_view": "emoji", "label": "😊", "width": 1.0}, {"type": "char", "label": "⹁", "pua": "U+E060", "width": 1.0}, {"type": "switch_view", "target_view": "alphabet", "label": "IEA", "width": 1.5}]}]}};

  var RLO = "\u202E";
  var PDF = "\u202C";

  function puaToString(code) {
    // code au format "U+E020"
    var cp = parseInt(code.replace("U+", ""), 16);
    return String.fromCodePoint(cp);
  }

  function wrapRtl(text) {
    return RLO + text + PDF;
  }

  // Constantes spéciales (touches de bascule et espace), identiques à AynehaGlyphs côté Android
  var SYMBOLS_SWITCH = "\u061F" + ["U+E003", "U+E002", "U+E001"].map(puaToString).join("");
  var ALPHABET_SWITCH = ["U+E022", "U+E021", "U+E020"].map(puaToString).join("");
  var SPACE_LABEL = ["U+E020", "U+E050", "U+E011", "U+E021", "U+E020", "U+E01E"]
    .map(puaToString).reverse().join("");

  function displayGlyph(key) {
    if (key.type === "switch_view" && key.target_view === "symbols_page1") return SYMBOLS_SWITCH;
    if (key.type === "switch_view" && key.target_view === "alphabet") return ALPHABET_SWITCH;
    if ((!key.type || key.type === "char") && key.pua) return puaToString(key.pua);
    if ((!key.type || key.type === "char") && key.unicode) return puaToString(key.unicode);
    if (key.type === "space") return SPACE_LABEL;
    return key.label || "";
  }

  function keyInsertText(key) {
    if (!key.type || key.type === "char") {
      if (key.pua) return wrapRtl(puaToString(key.pua));
      if (key.unicode) return puaToString(key.unicode);
      return key.label || "";
    }
    if (key.type === "space") {
      return key.unicode ? puaToString(key.unicode) : " ";
    }
    return ""; // action / switch_view : ne saisissent rien directement
  }

  function variantInsertText(v) {
    return v.pua ? wrapRtl(puaToString(v.pua)) : (v.label || "");
  }

  function isBottomBarRow(row) {
    return row.keys.some(function (k) { return k.type === "space"; });
  }

  // Ordre visuel d'une rangée : les rangées de lettres/chiffres/accents se lisent
  // de droite à gauche (keys[0] = touche la plus à droite) : c'est la rangée du bas
  // (celle qui contient la barre d'espace) et les rangées explicitement "mirror": false
  // (page emoji) qui se lisent, elles, naturellement de gauche à droite.
  function rowIsRtl(row) {
    if (isBottomBarRow(row)) return false;
    if (row.mirror === false) return false;
    return true;
  }

  function AynehaKeyboard(root, composer) {
    this.root = root;
    this.composer = composer;
    this.currentView = "alphabet";
    this.longPressTimer = null;
    this.activePopup = null;
    this.render();
  }

  AynehaKeyboard.prototype.switchToView = function (viewId) {
    if (!LAYOUT_VIEWS[viewId]) return;
    this.currentView = viewId;
    this.render();
  };

  AynehaKeyboard.prototype.render = function () {
    var self = this;
    var view = LAYOUT_VIEWS[this.currentView];
    this.root.innerHTML = "";
    this.closePopup();

    view.rows.forEach(function (row) {
      var rowEl = document.createElement("div");
      rowEl.className = "ak-row" + (isBottomBarRow(row) ? " ak-row-bottom" : "");
      rowEl.style.direction = rowIsRtl(row) ? "rtl" : "ltr";

      row.keys.forEach(function (key) {
        rowEl.appendChild(self.createKeyEl(key));
      });

      self.root.appendChild(rowEl);
    });
  };

  AynehaKeyboard.prototype.createKeyEl = function (key) {
    var self = this;
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "ak-key";
    if (key.type === "action") btn.classList.add("ak-key-action");
    if (key.type === "switch_view") btn.classList.add("ak-key-action");
    if (key.action === "enter") btn.classList.add("ak-key-enter");
    if (key.type === "space") btn.classList.add("ak-key-space");
    btn.style.flexGrow = String(key.width || 1);

    if (key.action === "backspace") {
      btn.innerHTML = "&#9003;";
      btn.classList.add("ak-icon");
    } else if (key.action === "enter") {
      btn.innerHTML = "<span class=\"ak-icon-mirror\">&#8626;</span>";
      btn.classList.add("ak-icon");
    } else {
      var span = document.createElement("span");
      span.className = "ak-glyph";
      if (key.mirror) span.classList.add("ak-mirror");
      span.textContent = displayGlyph(key);
      btn.appendChild(span);
    }

    if (key.long_press_variants && key.long_press_variants.length) {
      btn.classList.add("ak-has-variants");
    }

    // Interaction : tap = insère / déclenche l'action. Appui long (si variantes) = popup.
    var pressTimer = null;
    var longPressed = false;

    function startPress(e) {
      e.preventDefault();
      longPressed = false;
      btn.classList.add("ak-pressed");
      if (key.long_press_variants && key.long_press_variants.length) {
        pressTimer = setTimeout(function () {
          longPressed = true;
          self.showVariants(btn, key);
        }, 420);
      }
    }

    function endPress(e) {
      btn.classList.remove("ak-pressed");
      clearTimeout(pressTimer);
      if (self.activePopup) return; // le choix se fait dans le popup lui-même
      if (!longPressed) {
        self.handleKeyTap(key);
      }
    }

    function cancelPress() {
      btn.classList.remove("ak-pressed");
      clearTimeout(pressTimer);
    }

    btn.addEventListener("pointerdown", startPress);
    btn.addEventListener("pointerup", endPress);
    btn.addEventListener("pointerleave", cancelPress);
    btn.addEventListener("pointercancel", cancelPress);
    btn.addEventListener("contextmenu", function (e) { e.preventDefault(); });

    return btn;
  };

  AynehaKeyboard.prototype.showVariants = function (keyEl, key) {
    this.closePopup();
    var self = this;
    var popup = document.createElement("div");
    popup.className = "ak-popup";

    key.long_press_variants.forEach(function (variant) {
      var vBtn = document.createElement("button");
      vBtn.type = "button";
      vBtn.className = "ak-popup-key";
      var span = document.createElement("span");
      span.className = "ak-glyph";
      span.textContent = variant.pua ? puaToString(variant.pua) : variant.label;
      vBtn.appendChild(span);
      vBtn.addEventListener("pointerdown", function (e) { e.preventDefault(); });
      vBtn.addEventListener("click", function () {
        self.insertText(variantInsertText(variant));
        self.closePopup();
      });
      popup.appendChild(vBtn);
    });

    keyEl.appendChild(popup);
    this.activePopup = popup;

    var closeOnce = function () {
      self.closePopup();
      document.removeEventListener("pointerdown", outsideClick, true);
    };
    var outsideClick = function (e) {
      if (!popup.contains(e.target)) closeOnce();
    };
    setTimeout(function () {
      document.addEventListener("pointerdown", outsideClick, true);
    }, 0);
  };

  AynehaKeyboard.prototype.closePopup = function () {
    if (this.activePopup && this.activePopup.parentNode) {
      this.activePopup.parentNode.removeChild(this.activePopup);
    }
    this.activePopup = null;
  };

  AynehaKeyboard.prototype.handleKeyTap = function (key) {
    if (key.type === "switch_view") {
      this.switchToView(key.target_view);
      return;
    }
    if (key.type === "action") {
      if (key.action === "backspace") this.backspace();
      if (key.action === "enter") this.insertText("\n");
      return;
    }
    this.insertText(keyInsertText(key));
  };

  AynehaKeyboard.prototype.insertText = function (text) {
    var el = this.composer;
    el.focus();
    var start = el.selectionStart;
    var end = el.selectionEnd;
    var value = el.value;
    el.value = value.slice(0, start) + text + value.slice(end);
    var pos = start + text.length;
    el.selectionStart = el.selectionEnd = pos;
  };

  AynehaKeyboard.prototype.backspace = function () {
    var el = this.composer;
    el.focus();
    var start = el.selectionStart;
    var end = el.selectionEnd;
    var value = el.value;
    if (start !== end) {
      el.value = value.slice(0, start) + value.slice(end);
      el.selectionStart = el.selectionEnd = start;
      return;
    }
    if (start === 0) return;
    var before = value.slice(Math.max(0, start - 3), start);
    var delLen = 1;
    if (before.length === 3 && before[0] === RLO && before[2] === PDF) {
      delLen = 3;
    }
    var from = start - delLen;
    el.value = value.slice(0, from) + value.slice(start);
    el.selectionStart = el.selectionEnd = from;
  };

  window.AynehaKeyboard = AynehaKeyboard;
})();
