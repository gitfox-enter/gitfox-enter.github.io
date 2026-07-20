var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/parse-entities/decode-entity.browser.js
var require_decode_entity_browser = __commonJS({
  "node_modules/parse-entities/decode-entity.browser.js"(exports, module) {
    "use strict";
    var el;
    var semicolon = 59;
    module.exports = decodeEntity;
    function decodeEntity(characters) {
      var entity = "&" + characters + ";";
      var char;
      el = el || document.createElement("i");
      el.innerHTML = entity;
      char = el.textContent;
      if (char.charCodeAt(char.length - 1) === semicolon && characters !== "semi") {
        return false;
      }
      return char === entity ? false : char;
    }
  }
});

// node_modules/micromark/dist/constant/assign.js
var require_assign = __commonJS({
  "node_modules/micromark/dist/constant/assign.js"(exports, module) {
    "use strict";
    var assign = Object.assign;
    module.exports = assign;
  }
});

// node_modules/micromark/dist/constant/has-own-property.js
var require_has_own_property = __commonJS({
  "node_modules/micromark/dist/constant/has-own-property.js"(exports, module) {
    "use strict";
    var own = {}.hasOwnProperty;
    module.exports = own;
  }
});

// node_modules/micromark/dist/util/combine-html-extensions.js
var require_combine_html_extensions = __commonJS({
  "node_modules/micromark/dist/util/combine-html-extensions.js"(exports, module) {
    "use strict";
    var hasOwnProperty = require_has_own_property();
    function combineHtmlExtensions(extensions) {
      var handlers = {};
      var index = -1;
      while (++index < extensions.length) {
        extension(handlers, extensions[index]);
      }
      return handlers;
    }
    function extension(handlers, extension2) {
      var hook;
      var left;
      var right;
      var type;
      for (hook in extension2) {
        left = hasOwnProperty.call(handlers, hook) ? handlers[hook] : handlers[hook] = {};
        right = extension2[hook];
        for (type in right) {
          left[type] = right[type];
        }
      }
    }
    module.exports = combineHtmlExtensions;
  }
});

// node_modules/micromark/dist/constant/splice.js
var require_splice = __commonJS({
  "node_modules/micromark/dist/constant/splice.js"(exports, module) {
    "use strict";
    var splice = [].splice;
    module.exports = splice;
  }
});

// node_modules/micromark/dist/util/chunked-splice.js
var require_chunked_splice = __commonJS({
  "node_modules/micromark/dist/util/chunked-splice.js"(exports, module) {
    "use strict";
    var splice = require_splice();
    function chunkedSplice(list, start, remove, items) {
      var end = list.length;
      var chunkStart = 0;
      var parameters;
      if (start < 0) {
        start = -start > end ? 0 : end + start;
      } else {
        start = start > end ? end : start;
      }
      remove = remove > 0 ? remove : 0;
      if (items.length < 1e4) {
        parameters = Array.from(items);
        parameters.unshift(start, remove);
        splice.apply(list, parameters);
      } else {
        if (remove) splice.apply(list, [start, remove]);
        while (chunkStart < items.length) {
          parameters = items.slice(chunkStart, chunkStart + 1e4);
          parameters.unshift(start, 0);
          splice.apply(list, parameters);
          chunkStart += 1e4;
          start += 1e4;
        }
      }
    }
    module.exports = chunkedSplice;
  }
});

// node_modules/micromark/dist/util/chunked-push.js
var require_chunked_push = __commonJS({
  "node_modules/micromark/dist/util/chunked-push.js"(exports, module) {
    "use strict";
    var chunkedSplice = require_chunked_splice();
    function chunkedPush(list, items) {
      if (list.length) {
        chunkedSplice(list, list.length, 0, items);
        return list;
      }
      return items;
    }
    module.exports = chunkedPush;
  }
});

// node_modules/micromark/dist/util/miniflat.js
var require_miniflat = __commonJS({
  "node_modules/micromark/dist/util/miniflat.js"(exports, module) {
    "use strict";
    function miniflat(value) {
      return value === null || value === void 0 ? [] : "length" in value ? value : [value];
    }
    module.exports = miniflat;
  }
});

// node_modules/micromark/dist/util/normalize-identifier.js
var require_normalize_identifier = __commonJS({
  "node_modules/micromark/dist/util/normalize-identifier.js"(exports, module) {
    "use strict";
    function normalizeIdentifier(value) {
      return value.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
    }
    module.exports = normalizeIdentifier;
  }
});

// node_modules/micromark/dist/constant/from-char-code.js
var require_from_char_code = __commonJS({
  "node_modules/micromark/dist/constant/from-char-code.js"(exports, module) {
    "use strict";
    var fromCharCode = String.fromCharCode;
    module.exports = fromCharCode;
  }
});

// node_modules/micromark/dist/util/regex-check.js
var require_regex_check = __commonJS({
  "node_modules/micromark/dist/util/regex-check.js"(exports, module) {
    "use strict";
    var fromCharCode = require_from_char_code();
    function regexCheck(regex) {
      return check;
      function check(code) {
        return regex.test(fromCharCode(code));
      }
    }
    module.exports = regexCheck;
  }
});

// node_modules/micromark/dist/character/ascii-alphanumeric.js
var require_ascii_alphanumeric = __commonJS({
  "node_modules/micromark/dist/character/ascii-alphanumeric.js"(exports, module) {
    "use strict";
    var regexCheck = require_regex_check();
    var asciiAlphanumeric = regexCheck(/[\dA-Za-z]/);
    module.exports = asciiAlphanumeric;
  }
});

// node_modules/micromark/dist/util/normalize-uri.js
var require_normalize_uri = __commonJS({
  "node_modules/micromark/dist/util/normalize-uri.js"(exports, module) {
    "use strict";
    var asciiAlphanumeric = require_ascii_alphanumeric();
    var fromCharCode = require_from_char_code();
    function normalizeUri(value) {
      var index = -1;
      var result = [];
      var start = 0;
      var skip = 0;
      var code;
      var next;
      var replace;
      while (++index < value.length) {
        code = value.charCodeAt(index);
        if (code === 37 && asciiAlphanumeric(value.charCodeAt(index + 1)) && asciiAlphanumeric(value.charCodeAt(index + 2))) {
          skip = 2;
        } else if (code < 128) {
          if (!/[!#$&-;=?-Z_a-z~]/.test(fromCharCode(code))) {
            replace = fromCharCode(code);
          }
        } else if (code > 55295 && code < 57344) {
          next = value.charCodeAt(index + 1);
          if (code < 56320 && next > 56319 && next < 57344) {
            replace = fromCharCode(code, next);
            skip = 1;
          } else {
            replace = "\uFFFD";
          }
        } else {
          replace = fromCharCode(code);
        }
        if (replace) {
          result.push(value.slice(start, index), encodeURIComponent(replace));
          start = index + skip + 1;
          replace = void 0;
        }
        if (skip) {
          index += skip;
          skip = 0;
        }
      }
      return result.join("") + value.slice(start);
    }
    module.exports = normalizeUri;
  }
});

// node_modules/micromark/dist/util/safe-from-int.js
var require_safe_from_int = __commonJS({
  "node_modules/micromark/dist/util/safe-from-int.js"(exports, module) {
    "use strict";
    var fromCharCode = require_from_char_code();
    function safeFromInt(value, base) {
      var code = parseInt(value, base);
      if (
        // C0 except for HT, LF, FF, CR, space
        code < 9 || code === 11 || code > 13 && code < 32 || // Control character (DEL) of the basic block and C1 controls.
        code > 126 && code < 160 || // Lone high surrogates and low surrogates.
        code > 55295 && code < 57344 || // Noncharacters.
        code > 64975 && code < 65008 || (code & 65535) === 65535 || (code & 65535) === 65534 || // Out of range
        code > 1114111
      ) {
        return "\uFFFD";
      }
      return fromCharCode(code);
    }
    module.exports = safeFromInt;
  }
});

// node_modules/micromark/dist/compile/html.js
var require_html = __commonJS({
  "node_modules/micromark/dist/compile/html.js"(exports, module) {
    "use strict";
    var decodeEntity = require_decode_entity_browser();
    var assign = require_assign();
    var hasOwnProperty = require_has_own_property();
    var combineHtmlExtensions = require_combine_html_extensions();
    var chunkedPush = require_chunked_push();
    var miniflat = require_miniflat();
    var normalizeIdentifier = require_normalize_identifier();
    var normalizeUri = require_normalize_uri();
    var safeFromInt = require_safe_from_int();
    function _interopDefaultLegacy(e) {
      return e && typeof e === "object" && "default" in e ? e : { default: e };
    }
    var decodeEntity__default = /* @__PURE__ */ _interopDefaultLegacy(decodeEntity);
    var characterReferences = {
      '"': "quot",
      "&": "amp",
      "<": "lt",
      ">": "gt"
    };
    var protocolHref = /^(https?|ircs?|mailto|xmpp)$/i;
    var protocolSrc = /^https?$/i;
    function compileHtml(options) {
      var settings = options || {};
      var tags = true;
      var definitions = {};
      var buffers = [[]];
      var mediaStack = [];
      var tightStack = [];
      var defaultHandlers = {
        enter: {
          blockQuote: onenterblockquote,
          codeFenced: onentercodefenced,
          codeFencedFenceInfo: buffer,
          codeFencedFenceMeta: buffer,
          codeIndented: onentercodeindented,
          codeText: onentercodetext,
          content: onentercontent,
          definition: onenterdefinition,
          definitionDestinationString: onenterdefinitiondestinationstring,
          definitionLabelString: buffer,
          definitionTitleString: buffer,
          emphasis: onenteremphasis,
          htmlFlow: onenterhtmlflow,
          htmlText: onenterhtml,
          image: onenterimage,
          label: buffer,
          link: onenterlink,
          listItemMarker: onenterlistitemmarker,
          listItemValue: onenterlistitemvalue,
          listOrdered: onenterlistordered,
          listUnordered: onenterlistunordered,
          paragraph: onenterparagraph,
          reference: buffer,
          resource: onenterresource,
          resourceDestinationString: onenterresourcedestinationstring,
          resourceTitleString: buffer,
          setextHeading: onentersetextheading,
          strong: onenterstrong
        },
        exit: {
          atxHeading: onexitatxheading,
          atxHeadingSequence: onexitatxheadingsequence,
          autolinkEmail: onexitautolinkemail,
          autolinkProtocol: onexitautolinkprotocol,
          blockQuote: onexitblockquote,
          characterEscapeValue: onexitdata,
          characterReferenceMarkerHexadecimal: onexitcharacterreferencemarker,
          characterReferenceMarkerNumeric: onexitcharacterreferencemarker,
          characterReferenceValue: onexitcharacterreferencevalue,
          codeFenced: onexitflowcode,
          codeFencedFence: onexitcodefencedfence,
          codeFencedFenceInfo: onexitcodefencedfenceinfo,
          codeFencedFenceMeta: resume,
          codeFlowValue: onexitcodeflowvalue,
          codeIndented: onexitflowcode,
          codeText: onexitcodetext,
          codeTextData: onexitdata,
          data: onexitdata,
          definition: onexitdefinition,
          definitionDestinationString: onexitdefinitiondestinationstring,
          definitionLabelString: onexitdefinitionlabelstring,
          definitionTitleString: onexitdefinitiontitlestring,
          emphasis: onexitemphasis,
          hardBreakEscape: onexithardbreak,
          hardBreakTrailing: onexithardbreak,
          htmlFlow: onexithtml,
          htmlFlowData: onexitdata,
          htmlText: onexithtml,
          htmlTextData: onexitdata,
          image: onexitmedia,
          label: onexitlabel,
          labelText: onexitlabeltext,
          lineEnding: onexitlineending,
          link: onexitmedia,
          listOrdered: onexitlistordered,
          listUnordered: onexitlistunordered,
          paragraph: onexitparagraph,
          reference: resume,
          referenceString: onexitreferencestring,
          resource: resume,
          resourceDestinationString: onexitresourcedestinationstring,
          resourceTitleString: onexitresourcetitlestring,
          setextHeading: onexitsetextheading,
          setextHeadingLineSequence: onexitsetextheadinglinesequence,
          setextHeadingText: onexitsetextheadingtext,
          strong: onexitstrong,
          thematicBreak: onexitthematicbreak
        }
      };
      var handlers = combineHtmlExtensions(
        [defaultHandlers].concat(miniflat(settings.htmlExtensions))
      );
      var data = {
        tightStack
      };
      var context = {
        lineEndingIfNeeded,
        options: settings,
        encode,
        raw,
        tag,
        buffer,
        resume,
        setData,
        getData
      };
      var lineEndingStyle = settings.defaultLineEnding;
      return compile;
      function compile(events) {
        var head = [];
        var body = [];
        var index;
        var start;
        var listStack;
        var handler;
        var result;
        index = -1;
        start = 0;
        listStack = [];
        while (++index < events.length) {
          if (!lineEndingStyle && (events[index][1].type === "lineEnding" || events[index][1].type === "lineEndingBlank")) {
            lineEndingStyle = events[index][2].sliceSerialize(events[index][1]);
          }
          if (events[index][1].type === "listOrdered" || events[index][1].type === "listUnordered") {
            if (events[index][0] === "enter") {
              listStack.push(index);
            } else {
              prepareList(events.slice(listStack.pop(), index));
            }
          }
          if (events[index][1].type === "definition") {
            if (events[index][0] === "enter") {
              body = chunkedPush(body, events.slice(start, index));
              start = index;
            } else {
              head = chunkedPush(head, events.slice(start, index + 1));
              start = index + 1;
            }
          }
        }
        head = chunkedPush(head, body);
        head = chunkedPush(head, events.slice(start));
        result = head;
        index = -1;
        if (handlers.enter.null) {
          handlers.enter.null.call(context);
        }
        while (++index < events.length) {
          handler = handlers[result[index][0]];
          if (hasOwnProperty.call(handler, result[index][1].type)) {
            handler[result[index][1].type].call(
              assign(
                {
                  sliceSerialize: result[index][2].sliceSerialize
                },
                context
              ),
              result[index][1]
            );
          }
        }
        if (handlers.exit.null) {
          handlers.exit.null.call(context);
        }
        return buffers[0].join("");
      }
      function prepareList(slice) {
        var length = slice.length - 1;
        var index = 0;
        var containerBalance = 0;
        var loose;
        var atMarker;
        var event;
        while (++index < length) {
          event = slice[index];
          if (event[1]._container) {
            atMarker = void 0;
            if (event[0] === "enter") {
              containerBalance++;
            } else {
              containerBalance--;
            }
          } else if (event[1].type === "listItemPrefix") {
            if (event[0] === "exit") {
              atMarker = true;
            }
          } else if (event[1].type === "linePrefix") ;
          else if (event[1].type === "lineEndingBlank") {
            if (event[0] === "enter" && !containerBalance) {
              if (atMarker) {
                atMarker = void 0;
              } else {
                loose = true;
              }
            }
          } else {
            atMarker = void 0;
          }
        }
        slice[0][1]._loose = loose;
      }
      function setData(key, value) {
        data[key] = value;
      }
      function getData(key) {
        return data[key];
      }
      function buffer() {
        buffers.push([]);
      }
      function resume() {
        return buffers.pop().join("");
      }
      function tag(value) {
        if (!tags) return;
        setData("lastWasTag", true);
        buffers[buffers.length - 1].push(value);
      }
      function raw(value) {
        setData("lastWasTag");
        buffers[buffers.length - 1].push(value);
      }
      function lineEnding() {
        raw(lineEndingStyle || "\n");
      }
      function lineEndingIfNeeded() {
        var buffer2 = buffers[buffers.length - 1];
        var slice = buffer2[buffer2.length - 1];
        var previous = slice ? slice.charCodeAt(slice.length - 1) : null;
        if (previous === 10 || previous === 13 || previous === null) {
          return;
        }
        lineEnding();
      }
      function encode(value) {
        return getData("ignoreEncode") ? value : value.replace(/["&<>]/g, replace);
        function replace(value2) {
          return "&" + characterReferences[value2] + ";";
        }
      }
      function url(url2, protocol) {
        var value = encode(normalizeUri(url2 || ""));
        var colon = value.indexOf(":");
        var questionMark = value.indexOf("?");
        var numberSign = value.indexOf("#");
        var slash = value.indexOf("/");
        if (settings.allowDangerousProtocol || // If there is no protocol, it’s relative.
        colon < 0 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
        slash > -1 && colon > slash || questionMark > -1 && colon > questionMark || numberSign > -1 && colon > numberSign || // It is a protocol, it should be allowed.
        protocol.test(value.slice(0, colon))) {
          return value;
        }
        return "";
      }
      function onenterlistordered(token) {
        tightStack.push(!token._loose);
        lineEndingIfNeeded();
        tag("<ol");
        setData("expectFirstItem", true);
      }
      function onenterlistunordered(token) {
        tightStack.push(!token._loose);
        lineEndingIfNeeded();
        tag("<ul");
        setData("expectFirstItem", true);
      }
      function onenterlistitemvalue(token) {
        var value;
        if (getData("expectFirstItem")) {
          value = parseInt(this.sliceSerialize(token), 10);
          if (value !== 1) {
            tag(' start="' + encode(String(value)) + '"');
          }
        }
      }
      function onenterlistitemmarker() {
        if (getData("expectFirstItem")) {
          tag(">");
        } else {
          onexitlistitem();
        }
        lineEndingIfNeeded();
        tag("<li>");
        setData("expectFirstItem");
        setData("lastWasTag");
      }
      function onexitlistordered() {
        onexitlistitem();
        tightStack.pop();
        lineEnding();
        tag("</ol>");
      }
      function onexitlistunordered() {
        onexitlistitem();
        tightStack.pop();
        lineEnding();
        tag("</ul>");
      }
      function onexitlistitem() {
        if (getData("lastWasTag") && !getData("slurpAllLineEndings")) {
          lineEndingIfNeeded();
        }
        tag("</li>");
        setData("slurpAllLineEndings");
      }
      function onenterblockquote() {
        tightStack.push(false);
        lineEndingIfNeeded();
        tag("<blockquote>");
      }
      function onexitblockquote() {
        tightStack.pop();
        lineEndingIfNeeded();
        tag("</blockquote>");
        setData("slurpAllLineEndings");
      }
      function onenterparagraph() {
        if (!tightStack[tightStack.length - 1]) {
          lineEndingIfNeeded();
          tag("<p>");
        }
        setData("slurpAllLineEndings");
      }
      function onexitparagraph() {
        if (tightStack[tightStack.length - 1]) {
          setData("slurpAllLineEndings", true);
        } else {
          tag("</p>");
        }
      }
      function onentercodefenced() {
        lineEndingIfNeeded();
        tag("<pre><code");
        setData("fencesCount", 0);
      }
      function onexitcodefencedfenceinfo() {
        var value = resume();
        tag(' class="language-' + value + '"');
      }
      function onexitcodefencedfence() {
        if (!getData("fencesCount")) {
          tag(">");
          setData("fencedCodeInside", true);
          setData("slurpOneLineEnding", true);
        }
        setData("fencesCount", getData("fencesCount") + 1);
      }
      function onentercodeindented() {
        lineEndingIfNeeded();
        tag("<pre><code>");
      }
      function onexitflowcode() {
        if (getData("flowCodeSeenData")) lineEndingIfNeeded();
        tag("</code></pre>");
        if (getData("fencesCount") < 2) lineEndingIfNeeded();
        setData("flowCodeSeenData");
        setData("fencesCount");
        setData("slurpOneLineEnding");
      }
      function onenterimage() {
        mediaStack.push({
          image: true
        });
        tags = void 0;
      }
      function onenterlink() {
        mediaStack.push({});
      }
      function onexitlabeltext(token) {
        mediaStack[mediaStack.length - 1].labelId = this.sliceSerialize(token);
      }
      function onexitlabel() {
        mediaStack[mediaStack.length - 1].label = resume();
      }
      function onexitreferencestring(token) {
        mediaStack[mediaStack.length - 1].referenceId = this.sliceSerialize(token);
      }
      function onenterresource() {
        buffer();
        mediaStack[mediaStack.length - 1].destination = "";
      }
      function onenterresourcedestinationstring() {
        buffer();
        setData("ignoreEncode", true);
      }
      function onexitresourcedestinationstring() {
        mediaStack[mediaStack.length - 1].destination = resume();
        setData("ignoreEncode");
      }
      function onexitresourcetitlestring() {
        mediaStack[mediaStack.length - 1].title = resume();
      }
      function onexitmedia() {
        var index = mediaStack.length - 1;
        var media = mediaStack[index];
        var context2 = media.destination === void 0 ? definitions[normalizeIdentifier(media.referenceId || media.labelId)] : media;
        tags = true;
        while (index--) {
          if (mediaStack[index].image) {
            tags = void 0;
            break;
          }
        }
        if (media.image) {
          tag('<img src="' + url(context2.destination, protocolSrc) + '" alt="');
          raw(media.label);
          tag('"');
        } else {
          tag('<a href="' + url(context2.destination, protocolHref) + '"');
        }
        tag(context2.title ? ' title="' + context2.title + '"' : "");
        if (media.image) {
          tag(" />");
        } else {
          tag(">");
          raw(media.label);
          tag("</a>");
        }
        mediaStack.pop();
      }
      function onenterdefinition() {
        buffer();
        mediaStack.push({});
      }
      function onexitdefinitionlabelstring(token) {
        resume();
        mediaStack[mediaStack.length - 1].labelId = this.sliceSerialize(token);
      }
      function onenterdefinitiondestinationstring() {
        buffer();
        setData("ignoreEncode", true);
      }
      function onexitdefinitiondestinationstring() {
        mediaStack[mediaStack.length - 1].destination = resume();
        setData("ignoreEncode");
      }
      function onexitdefinitiontitlestring() {
        mediaStack[mediaStack.length - 1].title = resume();
      }
      function onexitdefinition() {
        var id = normalizeIdentifier(mediaStack[mediaStack.length - 1].labelId);
        resume();
        if (!hasOwnProperty.call(definitions, id)) {
          definitions[id] = mediaStack[mediaStack.length - 1];
        }
        mediaStack.pop();
      }
      function onentercontent() {
        setData("slurpAllLineEndings", true);
      }
      function onexitatxheadingsequence(token) {
        if (getData("headingRank")) return;
        setData("headingRank", this.sliceSerialize(token).length);
        lineEndingIfNeeded();
        tag("<h" + getData("headingRank") + ">");
      }
      function onentersetextheading() {
        buffer();
        setData("slurpAllLineEndings");
      }
      function onexitsetextheadingtext() {
        setData("slurpAllLineEndings", true);
      }
      function onexitatxheading() {
        tag("</h" + getData("headingRank") + ">");
        setData("headingRank");
      }
      function onexitsetextheadinglinesequence(token) {
        setData(
          "headingRank",
          this.sliceSerialize(token).charCodeAt(0) === 61 ? 1 : 2
        );
      }
      function onexitsetextheading() {
        var value = resume();
        lineEndingIfNeeded();
        tag("<h" + getData("headingRank") + ">");
        raw(value);
        tag("</h" + getData("headingRank") + ">");
        setData("slurpAllLineEndings");
        setData("headingRank");
      }
      function onexitdata(token) {
        raw(encode(this.sliceSerialize(token)));
      }
      function onexitlineending(token) {
        if (getData("slurpAllLineEndings")) {
          return;
        }
        if (getData("slurpOneLineEnding")) {
          setData("slurpOneLineEnding");
          return;
        }
        if (getData("inCodeText")) {
          raw(" ");
          return;
        }
        raw(encode(this.sliceSerialize(token)));
      }
      function onexitcodeflowvalue(token) {
        raw(encode(this.sliceSerialize(token)));
        setData("flowCodeSeenData", true);
      }
      function onexithardbreak() {
        tag("<br />");
      }
      function onenterhtmlflow() {
        lineEndingIfNeeded();
        onenterhtml();
      }
      function onexithtml() {
        setData("ignoreEncode");
      }
      function onenterhtml() {
        if (settings.allowDangerousHtml) {
          setData("ignoreEncode", true);
        }
      }
      function onenteremphasis() {
        tag("<em>");
      }
      function onenterstrong() {
        tag("<strong>");
      }
      function onentercodetext() {
        setData("inCodeText", true);
        tag("<code>");
      }
      function onexitcodetext() {
        setData("inCodeText");
        tag("</code>");
      }
      function onexitemphasis() {
        tag("</em>");
      }
      function onexitstrong() {
        tag("</strong>");
      }
      function onexitthematicbreak() {
        lineEndingIfNeeded();
        tag("<hr />");
      }
      function onexitcharacterreferencemarker(token) {
        setData("characterReferenceType", token.type);
      }
      function onexitcharacterreferencevalue(token) {
        var value = this.sliceSerialize(token);
        value = getData("characterReferenceType") ? safeFromInt(
          value,
          getData("characterReferenceType") === "characterReferenceMarkerNumeric" ? 10 : 16
        ) : decodeEntity__default["default"](value);
        raw(encode(value));
        setData("characterReferenceType");
      }
      function onexitautolinkprotocol(token) {
        var uri = this.sliceSerialize(token);
        tag('<a href="' + url(uri, protocolHref) + '">');
        raw(encode(uri));
        tag("</a>");
      }
      function onexitautolinkemail(token) {
        var uri = this.sliceSerialize(token);
        tag('<a href="' + url("mailto:" + uri, protocolHref) + '">');
        raw(encode(uri));
        tag("</a>");
      }
    }
    module.exports = compileHtml;
  }
});

// node_modules/micromark/dist/character/markdown-line-ending.js
var require_markdown_line_ending = __commonJS({
  "node_modules/micromark/dist/character/markdown-line-ending.js"(exports, module) {
    "use strict";
    function markdownLineEnding(code) {
      return code < -2;
    }
    module.exports = markdownLineEnding;
  }
});

// node_modules/micromark/dist/character/markdown-space.js
var require_markdown_space = __commonJS({
  "node_modules/micromark/dist/character/markdown-space.js"(exports, module) {
    "use strict";
    function markdownSpace(code) {
      return code === -2 || code === -1 || code === 32;
    }
    module.exports = markdownSpace;
  }
});

// node_modules/micromark/dist/tokenize/factory-space.js
var require_factory_space = __commonJS({
  "node_modules/micromark/dist/tokenize/factory-space.js"(exports, module) {
    "use strict";
    var markdownSpace = require_markdown_space();
    function spaceFactory(effects, ok, type, max) {
      var limit = max ? max - 1 : Infinity;
      var size = 0;
      return start;
      function start(code) {
        if (markdownSpace(code)) {
          effects.enter(type);
          return prefix(code);
        }
        return ok(code);
      }
      function prefix(code) {
        if (markdownSpace(code) && size++ < limit) {
          effects.consume(code);
          return prefix;
        }
        effects.exit(type);
        return ok(code);
      }
    }
    module.exports = spaceFactory;
  }
});

// node_modules/micromark/dist/initialize/content.js
var require_content = __commonJS({
  "node_modules/micromark/dist/initialize/content.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var markdownLineEnding = require_markdown_line_ending();
    var factorySpace = require_factory_space();
    var tokenize = initializeContent;
    function initializeContent(effects) {
      var contentStart = effects.attempt(
        this.parser.constructs.contentInitial,
        afterContentStartConstruct,
        paragraphInitial
      );
      var previous;
      return contentStart;
      function afterContentStartConstruct(code) {
        if (code === null) {
          effects.consume(code);
          return;
        }
        effects.enter("lineEnding");
        effects.consume(code);
        effects.exit("lineEnding");
        return factorySpace(effects, contentStart, "linePrefix");
      }
      function paragraphInitial(code) {
        effects.enter("paragraph");
        return lineStart(code);
      }
      function lineStart(code) {
        var token = effects.enter("chunkText", {
          contentType: "text",
          previous
        });
        if (previous) {
          previous.next = token;
        }
        previous = token;
        return data(code);
      }
      function data(code) {
        if (code === null) {
          effects.exit("chunkText");
          effects.exit("paragraph");
          effects.consume(code);
          return;
        }
        if (markdownLineEnding(code)) {
          effects.consume(code);
          effects.exit("chunkText");
          return lineStart;
        }
        effects.consume(code);
        return data;
      }
    }
    exports.tokenize = tokenize;
  }
});

// node_modules/micromark/dist/tokenize/partial-blank-line.js
var require_partial_blank_line = __commonJS({
  "node_modules/micromark/dist/tokenize/partial-blank-line.js"(exports, module) {
    "use strict";
    var markdownLineEnding = require_markdown_line_ending();
    var factorySpace = require_factory_space();
    var partialBlankLine = {
      tokenize: tokenizePartialBlankLine,
      partial: true
    };
    function tokenizePartialBlankLine(effects, ok, nok) {
      return factorySpace(effects, afterWhitespace, "linePrefix");
      function afterWhitespace(code) {
        return code === null || markdownLineEnding(code) ? ok(code) : nok(code);
      }
    }
    module.exports = partialBlankLine;
  }
});

// node_modules/micromark/dist/initialize/document.js
var require_document = __commonJS({
  "node_modules/micromark/dist/initialize/document.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var markdownLineEnding = require_markdown_line_ending();
    var factorySpace = require_factory_space();
    var partialBlankLine = require_partial_blank_line();
    var tokenize = initializeDocument;
    var containerConstruct = {
      tokenize: tokenizeContainer
    };
    var lazyFlowConstruct = {
      tokenize: tokenizeLazyFlow
    };
    function initializeDocument(effects) {
      var self2 = this;
      var stack = [];
      var continued = 0;
      var inspectConstruct = {
        tokenize: tokenizeInspect,
        partial: true
      };
      var inspectResult;
      var childFlow;
      var childToken;
      return start;
      function start(code) {
        if (continued < stack.length) {
          self2.containerState = stack[continued][1];
          return effects.attempt(
            stack[continued][0].continuation,
            documentContinue,
            documentContinued
          )(code);
        }
        return documentContinued(code);
      }
      function documentContinue(code) {
        continued++;
        return start(code);
      }
      function documentContinued(code) {
        if (inspectResult && inspectResult.flowContinue) {
          return flowStart(code);
        }
        self2.interrupt = childFlow && childFlow.currentConstruct && childFlow.currentConstruct.interruptible;
        self2.containerState = {};
        return effects.attempt(
          containerConstruct,
          containerContinue,
          flowStart
        )(code);
      }
      function containerContinue(code) {
        stack.push([self2.currentConstruct, self2.containerState]);
        self2.containerState = void 0;
        return documentContinued(code);
      }
      function flowStart(code) {
        if (code === null) {
          exitContainers(0, true);
          effects.consume(code);
          return;
        }
        childFlow = childFlow || self2.parser.flow(self2.now());
        effects.enter("chunkFlow", {
          contentType: "flow",
          previous: childToken,
          _tokenizer: childFlow
        });
        return flowContinue(code);
      }
      function flowContinue(code) {
        if (code === null) {
          continueFlow(effects.exit("chunkFlow"));
          return flowStart(code);
        }
        if (markdownLineEnding(code)) {
          effects.consume(code);
          continueFlow(effects.exit("chunkFlow"));
          return effects.check(inspectConstruct, documentAfterPeek);
        }
        effects.consume(code);
        return flowContinue;
      }
      function documentAfterPeek(code) {
        exitContainers(
          inspectResult.continued,
          inspectResult && inspectResult.flowEnd
        );
        continued = 0;
        return start(code);
      }
      function continueFlow(token) {
        if (childToken) childToken.next = token;
        childToken = token;
        childFlow.lazy = inspectResult && inspectResult.lazy;
        childFlow.defineSkip(token.start);
        childFlow.write(self2.sliceStream(token));
      }
      function exitContainers(size, end) {
        var index = stack.length;
        if (childFlow && end) {
          childFlow.write([null]);
          childToken = childFlow = void 0;
        }
        while (index-- > size) {
          self2.containerState = stack[index][1];
          stack[index][0].exit.call(self2, effects);
        }
        stack.length = size;
      }
      function tokenizeInspect(effects2, ok) {
        var subcontinued = 0;
        inspectResult = {};
        return inspectStart;
        function inspectStart(code) {
          if (subcontinued < stack.length) {
            self2.containerState = stack[subcontinued][1];
            return effects2.attempt(
              stack[subcontinued][0].continuation,
              inspectContinue,
              inspectLess
            )(code);
          }
          if (childFlow.currentConstruct && childFlow.currentConstruct.concrete) {
            inspectResult.flowContinue = true;
            return inspectDone(code);
          }
          self2.interrupt = childFlow.currentConstruct && childFlow.currentConstruct.interruptible;
          self2.containerState = {};
          return effects2.attempt(
            containerConstruct,
            inspectFlowEnd,
            inspectDone
          )(code);
        }
        function inspectContinue(code) {
          subcontinued++;
          return self2.containerState._closeFlow ? inspectFlowEnd(code) : inspectStart(code);
        }
        function inspectLess(code) {
          if (childFlow.currentConstruct && childFlow.currentConstruct.lazy) {
            self2.containerState = {};
            return effects2.attempt(
              containerConstruct,
              inspectFlowEnd,
              // Maybe flow, or a blank line?
              effects2.attempt(
                lazyFlowConstruct,
                inspectFlowEnd,
                effects2.check(partialBlankLine, inspectFlowEnd, inspectLazy)
              )
            )(code);
          }
          return inspectFlowEnd(code);
        }
        function inspectLazy(code) {
          subcontinued = stack.length;
          inspectResult.lazy = true;
          inspectResult.flowContinue = true;
          return inspectDone(code);
        }
        function inspectFlowEnd(code) {
          inspectResult.flowEnd = true;
          return inspectDone(code);
        }
        function inspectDone(code) {
          inspectResult.continued = subcontinued;
          self2.interrupt = self2.containerState = void 0;
          return ok(code);
        }
      }
    }
    function tokenizeContainer(effects, ok, nok) {
      return factorySpace(
        effects,
        effects.attempt(this.parser.constructs.document, ok, nok),
        "linePrefix",
        this.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4
      );
    }
    function tokenizeLazyFlow(effects, ok, nok) {
      return factorySpace(
        effects,
        effects.lazy(this.parser.constructs.flow, ok, nok),
        "linePrefix",
        this.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4
      );
    }
    exports.tokenize = tokenize;
  }
});

// node_modules/micromark/dist/util/size-chunks.js
var require_size_chunks = __commonJS({
  "node_modules/micromark/dist/util/size-chunks.js"(exports, module) {
    "use strict";
    function sizeChunks(chunks) {
      var index = -1;
      var size = 0;
      while (++index < chunks.length) {
        size += typeof chunks[index] === "string" ? chunks[index].length : 1;
      }
      return size;
    }
    module.exports = sizeChunks;
  }
});

// node_modules/micromark/dist/util/prefix-size.js
var require_prefix_size = __commonJS({
  "node_modules/micromark/dist/util/prefix-size.js"(exports, module) {
    "use strict";
    var sizeChunks = require_size_chunks();
    function prefixSize(events, type) {
      var tail = events[events.length - 1];
      if (!tail || tail[1].type !== type) return 0;
      return sizeChunks(tail[2].sliceStream(tail[1]));
    }
    module.exports = prefixSize;
  }
});

// node_modules/micromark/dist/util/shallow.js
var require_shallow = __commonJS({
  "node_modules/micromark/dist/util/shallow.js"(exports, module) {
    "use strict";
    var assign = require_assign();
    function shallow(object) {
      return assign({}, object);
    }
    module.exports = shallow;
  }
});

// node_modules/micromark/dist/util/subtokenize.js
var require_subtokenize = __commonJS({
  "node_modules/micromark/dist/util/subtokenize.js"(exports, module) {
    "use strict";
    var assign = require_assign();
    var chunkedSplice = require_chunked_splice();
    var shallow = require_shallow();
    function subtokenize(events) {
      var jumps = {};
      var index = -1;
      var event;
      var lineIndex;
      var otherIndex;
      var otherEvent;
      var parameters;
      var subevents;
      var more;
      while (++index < events.length) {
        while (index in jumps) {
          index = jumps[index];
        }
        event = events[index];
        if (index && event[1].type === "chunkFlow" && events[index - 1][1].type === "listItemPrefix") {
          subevents = event[1]._tokenizer.events;
          otherIndex = 0;
          if (otherIndex < subevents.length && subevents[otherIndex][1].type === "lineEndingBlank") {
            otherIndex += 2;
          }
          if (otherIndex < subevents.length && subevents[otherIndex][1].type === "content") {
            while (++otherIndex < subevents.length) {
              if (subevents[otherIndex][1].type === "content") {
                break;
              }
              if (subevents[otherIndex][1].type === "chunkText") {
                subevents[otherIndex][1].isInFirstContentOfListItem = true;
                otherIndex++;
              }
            }
          }
        }
        if (event[0] === "enter") {
          if (event[1].contentType) {
            assign(jumps, subcontent(events, index));
            index = jumps[index];
            more = true;
          }
        } else if (event[1]._container || event[1]._movePreviousLineEndings) {
          otherIndex = index;
          lineIndex = void 0;
          while (otherIndex--) {
            otherEvent = events[otherIndex];
            if (otherEvent[1].type === "lineEnding" || otherEvent[1].type === "lineEndingBlank") {
              if (otherEvent[0] === "enter") {
                if (lineIndex) {
                  events[lineIndex][1].type = "lineEndingBlank";
                }
                otherEvent[1].type = "lineEnding";
                lineIndex = otherIndex;
              }
            } else {
              break;
            }
          }
          if (lineIndex) {
            event[1].end = shallow(events[lineIndex][1].start);
            parameters = events.slice(lineIndex, index);
            parameters.unshift(event);
            chunkedSplice(events, lineIndex, index - lineIndex + 1, parameters);
          }
        }
      }
      return !more;
    }
    function subcontent(events, eventIndex) {
      var token = events[eventIndex][1];
      var context = events[eventIndex][2];
      var startPosition = eventIndex - 1;
      var startPositions = [];
      var tokenizer = token._tokenizer || context.parser[token.contentType](token.start);
      var childEvents = tokenizer.events;
      var jumps = [];
      var gaps = {};
      var stream;
      var previous;
      var index;
      var entered;
      var end;
      var adjust;
      while (token) {
        while (events[++startPosition][1] !== token) {
        }
        startPositions.push(startPosition);
        if (!token._tokenizer) {
          stream = context.sliceStream(token);
          if (!token.next) {
            stream.push(null);
          }
          if (previous) {
            tokenizer.defineSkip(token.start);
          }
          if (token.isInFirstContentOfListItem) {
            tokenizer._gfmTasklistFirstContentOfListItem = true;
          }
          tokenizer.write(stream);
          if (token.isInFirstContentOfListItem) {
            tokenizer._gfmTasklistFirstContentOfListItem = void 0;
          }
        }
        previous = token;
        token = token.next;
      }
      token = previous;
      index = childEvents.length;
      while (index--) {
        if (childEvents[index][0] === "enter") {
          entered = true;
        } else if (
          // Find a void token that includes a break.
          entered && childEvents[index][1].type === childEvents[index - 1][1].type && childEvents[index][1].start.line !== childEvents[index][1].end.line
        ) {
          add(childEvents.slice(index + 1, end));
          token._tokenizer = token.next = void 0;
          token = token.previous;
          end = index + 1;
        }
      }
      tokenizer.events = token._tokenizer = token.next = void 0;
      add(childEvents.slice(0, end));
      index = -1;
      adjust = 0;
      while (++index < jumps.length) {
        gaps[adjust + jumps[index][0]] = adjust + jumps[index][1];
        adjust += jumps[index][1] - jumps[index][0] - 1;
      }
      return gaps;
      function add(slice) {
        var start = startPositions.pop();
        jumps.unshift([start, start + slice.length - 1]);
        chunkedSplice(events, start, 2, slice);
      }
    }
    module.exports = subtokenize;
  }
});

// node_modules/micromark/dist/tokenize/content.js
var require_content2 = __commonJS({
  "node_modules/micromark/dist/tokenize/content.js"(exports, module) {
    "use strict";
    var markdownLineEnding = require_markdown_line_ending();
    var prefixSize = require_prefix_size();
    var subtokenize = require_subtokenize();
    var factorySpace = require_factory_space();
    var content = {
      tokenize: tokenizeContent,
      resolve: resolveContent,
      interruptible: true,
      lazy: true
    };
    var continuationConstruct = {
      tokenize: tokenizeContinuation,
      partial: true
    };
    function resolveContent(events) {
      subtokenize(events);
      return events;
    }
    function tokenizeContent(effects, ok) {
      var previous;
      return start;
      function start(code) {
        effects.enter("content");
        previous = effects.enter("chunkContent", {
          contentType: "content"
        });
        return data(code);
      }
      function data(code) {
        if (code === null) {
          return contentEnd(code);
        }
        if (markdownLineEnding(code)) {
          return effects.check(
            continuationConstruct,
            contentContinue,
            contentEnd
          )(code);
        }
        effects.consume(code);
        return data;
      }
      function contentEnd(code) {
        effects.exit("chunkContent");
        effects.exit("content");
        return ok(code);
      }
      function contentContinue(code) {
        effects.consume(code);
        effects.exit("chunkContent");
        previous = previous.next = effects.enter("chunkContent", {
          contentType: "content",
          previous
        });
        return data;
      }
    }
    function tokenizeContinuation(effects, ok, nok) {
      var self2 = this;
      return startLookahead;
      function startLookahead(code) {
        effects.enter("lineEnding");
        effects.consume(code);
        effects.exit("lineEnding");
        return factorySpace(effects, prefixed, "linePrefix");
      }
      function prefixed(code) {
        if (code === null || markdownLineEnding(code)) {
          return nok(code);
        }
        if (self2.parser.constructs.disable.null.indexOf("codeIndented") > -1 || prefixSize(self2.events, "linePrefix") < 4) {
          return effects.interrupt(self2.parser.constructs.flow, nok, ok)(code);
        }
        return ok(code);
      }
    }
    module.exports = content;
  }
});

// node_modules/micromark/dist/initialize/flow.js
var require_flow = __commonJS({
  "node_modules/micromark/dist/initialize/flow.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var content = require_content2();
    var factorySpace = require_factory_space();
    var partialBlankLine = require_partial_blank_line();
    var tokenize = initializeFlow;
    function initializeFlow(effects) {
      var self2 = this;
      var initial = effects.attempt(
        // Try to parse a blank line.
        partialBlankLine,
        atBlankEnding,
        // Try to parse initial flow (essentially, only code).
        effects.attempt(
          this.parser.constructs.flowInitial,
          afterConstruct,
          factorySpace(
            effects,
            effects.attempt(
              this.parser.constructs.flow,
              afterConstruct,
              effects.attempt(content, afterConstruct)
            ),
            "linePrefix"
          )
        )
      );
      return initial;
      function atBlankEnding(code) {
        if (code === null) {
          effects.consume(code);
          return;
        }
        effects.enter("lineEndingBlank");
        effects.consume(code);
        effects.exit("lineEndingBlank");
        self2.currentConstruct = void 0;
        return initial;
      }
      function afterConstruct(code) {
        if (code === null) {
          effects.consume(code);
          return;
        }
        effects.enter("lineEnding");
        effects.consume(code);
        effects.exit("lineEnding");
        self2.currentConstruct = void 0;
        return initial;
      }
    }
    exports.tokenize = tokenize;
  }
});

// node_modules/micromark/dist/initialize/text.js
var require_text = __commonJS({
  "node_modules/micromark/dist/initialize/text.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var assign = require_assign();
    var shallow = require_shallow();
    var text = initializeFactory("text");
    var string = initializeFactory("string");
    var resolver = {
      resolveAll: createResolver()
    };
    function initializeFactory(field) {
      return {
        tokenize: initializeText,
        resolveAll: createResolver(
          field === "text" ? resolveAllLineSuffixes : void 0
        )
      };
      function initializeText(effects) {
        var self2 = this;
        var constructs = this.parser.constructs[field];
        var text2 = effects.attempt(constructs, start, notText);
        return start;
        function start(code) {
          return atBreak(code) ? text2(code) : notText(code);
        }
        function notText(code) {
          if (code === null) {
            effects.consume(code);
            return;
          }
          effects.enter("data");
          effects.consume(code);
          return data;
        }
        function data(code) {
          if (atBreak(code)) {
            effects.exit("data");
            return text2(code);
          }
          effects.consume(code);
          return data;
        }
        function atBreak(code) {
          var list = constructs[code];
          var index = -1;
          if (code === null) {
            return true;
          }
          if (list) {
            while (++index < list.length) {
              if (!list[index].previous || list[index].previous.call(self2, self2.previous)) {
                return true;
              }
            }
          }
        }
      }
    }
    function createResolver(extraResolver) {
      return resolveAllText;
      function resolveAllText(events, context) {
        var index = -1;
        var enter;
        while (++index <= events.length) {
          if (enter === void 0) {
            if (events[index] && events[index][1].type === "data") {
              enter = index;
              index++;
            }
          } else if (!events[index] || events[index][1].type !== "data") {
            if (index !== enter + 2) {
              events[enter][1].end = events[index - 1][1].end;
              events.splice(enter + 2, index - enter - 2);
              index = enter + 2;
            }
            enter = void 0;
          }
        }
        return extraResolver ? extraResolver(events, context) : events;
      }
    }
    function resolveAllLineSuffixes(events, context) {
      var eventIndex = -1;
      var chunks;
      var data;
      var chunk;
      var index;
      var bufferIndex;
      var size;
      var tabs;
      var token;
      while (++eventIndex <= events.length) {
        if ((eventIndex === events.length || events[eventIndex][1].type === "lineEnding") && events[eventIndex - 1][1].type === "data") {
          data = events[eventIndex - 1][1];
          chunks = context.sliceStream(data);
          index = chunks.length;
          bufferIndex = -1;
          size = 0;
          tabs = void 0;
          while (index--) {
            chunk = chunks[index];
            if (typeof chunk === "string") {
              bufferIndex = chunk.length;
              while (chunk.charCodeAt(bufferIndex - 1) === 32) {
                size++;
                bufferIndex--;
              }
              if (bufferIndex) break;
              bufferIndex = -1;
            } else if (chunk === -2) {
              tabs = true;
              size++;
            } else if (chunk === -1) ;
            else {
              index++;
              break;
            }
          }
          if (size) {
            token = {
              type: eventIndex === events.length || tabs || size < 2 ? "lineSuffix" : "hardBreakTrailing",
              start: {
                line: data.end.line,
                column: data.end.column - size,
                offset: data.end.offset - size,
                _index: data.start._index + index,
                _bufferIndex: index ? bufferIndex : data.start._bufferIndex + bufferIndex
              },
              end: shallow(data.end)
            };
            data.end = shallow(token.start);
            if (data.start.offset === data.end.offset) {
              assign(data, token);
            } else {
              events.splice(
                eventIndex,
                0,
                ["enter", token, context],
                ["exit", token, context]
              );
              eventIndex += 2;
            }
          }
          eventIndex++;
        }
      }
      return events;
    }
    exports.resolver = resolver;
    exports.string = string;
    exports.text = text;
  }
});

// node_modules/micromark/dist/util/combine-extensions.js
var require_combine_extensions = __commonJS({
  "node_modules/micromark/dist/util/combine-extensions.js"(exports, module) {
    "use strict";
    var hasOwnProperty = require_has_own_property();
    var chunkedSplice = require_chunked_splice();
    var miniflat = require_miniflat();
    function combineExtensions(extensions) {
      var all = {};
      var index = -1;
      while (++index < extensions.length) {
        extension(all, extensions[index]);
      }
      return all;
    }
    function extension(all, extension2) {
      var hook;
      var left;
      var right;
      var code;
      for (hook in extension2) {
        left = hasOwnProperty.call(all, hook) ? all[hook] : all[hook] = {};
        right = extension2[hook];
        for (code in right) {
          left[code] = constructs(
            miniflat(right[code]),
            hasOwnProperty.call(left, code) ? left[code] : []
          );
        }
      }
    }
    function constructs(list, existing) {
      var index = -1;
      var before = [];
      while (++index < list.length) {
        ;
        (list[index].add === "after" ? existing : before).push(list[index]);
      }
      chunkedSplice(existing, 0, 0, before);
      return existing;
    }
    module.exports = combineExtensions;
  }
});

// node_modules/micromark/dist/util/resolve-all.js
var require_resolve_all = __commonJS({
  "node_modules/micromark/dist/util/resolve-all.js"(exports, module) {
    "use strict";
    function resolveAll(constructs, events, context) {
      var called = [];
      var index = -1;
      var resolve;
      while (++index < constructs.length) {
        resolve = constructs[index].resolveAll;
        if (resolve && called.indexOf(resolve) < 0) {
          events = resolve(events, context);
          called.push(resolve);
        }
      }
      return events;
    }
    module.exports = resolveAll;
  }
});

// node_modules/micromark/dist/util/serialize-chunks.js
var require_serialize_chunks = __commonJS({
  "node_modules/micromark/dist/util/serialize-chunks.js"(exports, module) {
    "use strict";
    var fromCharCode = require_from_char_code();
    function serializeChunks(chunks) {
      var index = -1;
      var result = [];
      var chunk;
      var value;
      var atTab;
      while (++index < chunks.length) {
        chunk = chunks[index];
        if (typeof chunk === "string") {
          value = chunk;
        } else if (chunk === -5) {
          value = "\r";
        } else if (chunk === -4) {
          value = "\n";
        } else if (chunk === -3) {
          value = "\r\n";
        } else if (chunk === -2) {
          value = "	";
        } else if (chunk === -1) {
          if (atTab) continue;
          value = " ";
        } else {
          value = fromCharCode(chunk);
        }
        atTab = chunk === -2;
        result.push(value);
      }
      return result.join("");
    }
    module.exports = serializeChunks;
  }
});

// node_modules/micromark/dist/util/slice-chunks.js
var require_slice_chunks = __commonJS({
  "node_modules/micromark/dist/util/slice-chunks.js"(exports, module) {
    "use strict";
    function sliceChunks(chunks, token) {
      var startIndex = token.start._index;
      var startBufferIndex = token.start._bufferIndex;
      var endIndex = token.end._index;
      var endBufferIndex = token.end._bufferIndex;
      var view;
      if (startIndex === endIndex) {
        view = [chunks[startIndex].slice(startBufferIndex, endBufferIndex)];
      } else {
        view = chunks.slice(startIndex, endIndex);
        if (startBufferIndex > -1) {
          view[0] = view[0].slice(startBufferIndex);
        }
        if (endBufferIndex > 0) {
          view.push(chunks[endIndex].slice(0, endBufferIndex));
        }
      }
      return view;
    }
    module.exports = sliceChunks;
  }
});

// node_modules/micromark/dist/util/create-tokenizer.js
var require_create_tokenizer = __commonJS({
  "node_modules/micromark/dist/util/create-tokenizer.js"(exports, module) {
    "use strict";
    var assign = require_assign();
    var markdownLineEnding = require_markdown_line_ending();
    var chunkedPush = require_chunked_push();
    var chunkedSplice = require_chunked_splice();
    var miniflat = require_miniflat();
    var resolveAll = require_resolve_all();
    var serializeChunks = require_serialize_chunks();
    var shallow = require_shallow();
    var sliceChunks = require_slice_chunks();
    function createTokenizer(parser, initialize, from) {
      var point = from ? shallow(from) : {
        line: 1,
        column: 1,
        offset: 0
      };
      var columnStart = {};
      var resolveAllConstructs = [];
      var chunks = [];
      var stack = [];
      var effects = {
        consume,
        enter,
        exit,
        attempt: constructFactory(onsuccessfulconstruct),
        check: constructFactory(onsuccessfulcheck),
        interrupt: constructFactory(onsuccessfulcheck, {
          interrupt: true
        }),
        lazy: constructFactory(onsuccessfulcheck, {
          lazy: true
        })
      };
      var context = {
        previous: null,
        events: [],
        parser,
        sliceStream,
        sliceSerialize,
        now,
        defineSkip: skip,
        write
      };
      var state = initialize.tokenize.call(context, effects);
      if (initialize.resolveAll) {
        resolveAllConstructs.push(initialize);
      }
      point._index = 0;
      point._bufferIndex = -1;
      return context;
      function write(slice) {
        chunks = chunkedPush(chunks, slice);
        main();
        if (chunks[chunks.length - 1] !== null) {
          return [];
        }
        addResult(initialize, 0);
        context.events = resolveAll(resolveAllConstructs, context.events, context);
        return context.events;
      }
      function sliceSerialize(token) {
        return serializeChunks(sliceStream(token));
      }
      function sliceStream(token) {
        return sliceChunks(chunks, token);
      }
      function now() {
        return shallow(point);
      }
      function skip(value) {
        columnStart[value.line] = value.column;
        accountForPotentialSkip();
      }
      function main() {
        var chunkIndex;
        var chunk;
        while (point._index < chunks.length) {
          chunk = chunks[point._index];
          if (typeof chunk === "string") {
            chunkIndex = point._index;
            if (point._bufferIndex < 0) {
              point._bufferIndex = 0;
            }
            while (point._index === chunkIndex && point._bufferIndex < chunk.length) {
              go(chunk.charCodeAt(point._bufferIndex));
            }
          } else {
            go(chunk);
          }
        }
      }
      function go(code) {
        state = state(code);
      }
      function consume(code) {
        if (markdownLineEnding(code)) {
          point.line++;
          point.column = 1;
          point.offset += code === -3 ? 2 : 1;
          accountForPotentialSkip();
        } else if (code !== -1) {
          point.column++;
          point.offset++;
        }
        if (point._bufferIndex < 0) {
          point._index++;
        } else {
          point._bufferIndex++;
          if (point._bufferIndex === chunks[point._index].length) {
            point._bufferIndex = -1;
            point._index++;
          }
        }
        context.previous = code;
      }
      function enter(type, fields) {
        var token = fields || {};
        token.type = type;
        token.start = now();
        context.events.push(["enter", token, context]);
        stack.push(token);
        return token;
      }
      function exit(type) {
        var token = stack.pop();
        token.end = now();
        context.events.push(["exit", token, context]);
        return token;
      }
      function onsuccessfulconstruct(construct, info) {
        addResult(construct, info.from);
      }
      function onsuccessfulcheck(construct, info) {
        info.restore();
      }
      function constructFactory(onreturn, fields) {
        return hook;
        function hook(constructs, returnState, bogusState) {
          var listOfConstructs;
          var constructIndex;
          var currentConstruct;
          var info;
          return constructs.tokenize || "length" in constructs ? handleListOfConstructs(miniflat(constructs)) : handleMapOfConstructs;
          function handleMapOfConstructs(code) {
            if (code in constructs || null in constructs) {
              return handleListOfConstructs(
                constructs.null ? (
                  /* c8 ignore next */
                  miniflat(constructs[code]).concat(miniflat(constructs.null))
                ) : constructs[code]
              )(code);
            }
            return bogusState(code);
          }
          function handleListOfConstructs(list) {
            listOfConstructs = list;
            constructIndex = 0;
            return handleConstruct(list[constructIndex]);
          }
          function handleConstruct(construct) {
            return start;
            function start(code) {
              info = store();
              currentConstruct = construct;
              if (!construct.partial) {
                context.currentConstruct = construct;
              }
              if (construct.name && context.parser.constructs.disable.null.indexOf(construct.name) > -1) {
                return nok();
              }
              return construct.tokenize.call(
                fields ? assign({}, context, fields) : context,
                effects,
                ok,
                nok
              )(code);
            }
          }
          function ok(code) {
            onreturn(currentConstruct, info);
            return returnState;
          }
          function nok(code) {
            info.restore();
            if (++constructIndex < listOfConstructs.length) {
              return handleConstruct(listOfConstructs[constructIndex]);
            }
            return bogusState;
          }
        }
      }
      function addResult(construct, from2) {
        if (construct.resolveAll && resolveAllConstructs.indexOf(construct) < 0) {
          resolveAllConstructs.push(construct);
        }
        if (construct.resolve) {
          chunkedSplice(
            context.events,
            from2,
            context.events.length - from2,
            construct.resolve(context.events.slice(from2), context)
          );
        }
        if (construct.resolveTo) {
          context.events = construct.resolveTo(context.events, context);
        }
      }
      function store() {
        var startPoint = now();
        var startPrevious = context.previous;
        var startCurrentConstruct = context.currentConstruct;
        var startEventsIndex = context.events.length;
        var startStack = Array.from(stack);
        return {
          restore,
          from: startEventsIndex
        };
        function restore() {
          point = startPoint;
          context.previous = startPrevious;
          context.currentConstruct = startCurrentConstruct;
          context.events.length = startEventsIndex;
          stack = startStack;
          accountForPotentialSkip();
        }
      }
      function accountForPotentialSkip() {
        if (point.line in columnStart && point.column < 2) {
          point.column = columnStart[point.line];
          point.offset += columnStart[point.line] - 1;
        }
      }
    }
    module.exports = createTokenizer;
  }
});

// node_modules/micromark/dist/character/markdown-line-ending-or-space.js
var require_markdown_line_ending_or_space = __commonJS({
  "node_modules/micromark/dist/character/markdown-line-ending-or-space.js"(exports, module) {
    "use strict";
    function markdownLineEndingOrSpace(code) {
      return code < 0 || code === 32;
    }
    module.exports = markdownLineEndingOrSpace;
  }
});

// node_modules/micromark/dist/constant/unicode-punctuation-regex.js
var require_unicode_punctuation_regex = __commonJS({
  "node_modules/micromark/dist/constant/unicode-punctuation-regex.js"(exports, module) {
    "use strict";
    var unicodePunctuation = /[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;
    module.exports = unicodePunctuation;
  }
});

// node_modules/micromark/dist/character/unicode-punctuation.js
var require_unicode_punctuation = __commonJS({
  "node_modules/micromark/dist/character/unicode-punctuation.js"(exports, module) {
    "use strict";
    var unicodePunctuationRegex = require_unicode_punctuation_regex();
    var regexCheck = require_regex_check();
    var unicodePunctuation = regexCheck(unicodePunctuationRegex);
    module.exports = unicodePunctuation;
  }
});

// node_modules/micromark/dist/character/unicode-whitespace.js
var require_unicode_whitespace = __commonJS({
  "node_modules/micromark/dist/character/unicode-whitespace.js"(exports, module) {
    "use strict";
    var regexCheck = require_regex_check();
    var unicodeWhitespace = regexCheck(/\s/);
    module.exports = unicodeWhitespace;
  }
});

// node_modules/micromark/dist/util/classify-character.js
var require_classify_character = __commonJS({
  "node_modules/micromark/dist/util/classify-character.js"(exports, module) {
    "use strict";
    var markdownLineEndingOrSpace = require_markdown_line_ending_or_space();
    var unicodePunctuation = require_unicode_punctuation();
    var unicodeWhitespace = require_unicode_whitespace();
    function classifyCharacter(code) {
      if (code === null || markdownLineEndingOrSpace(code) || unicodeWhitespace(code)) {
        return 1;
      }
      if (unicodePunctuation(code)) {
        return 2;
      }
    }
    module.exports = classifyCharacter;
  }
});

// node_modules/micromark/dist/util/move-point.js
var require_move_point = __commonJS({
  "node_modules/micromark/dist/util/move-point.js"(exports, module) {
    "use strict";
    function movePoint(point, offset) {
      point.column += offset;
      point.offset += offset;
      point._bufferIndex += offset;
      return point;
    }
    module.exports = movePoint;
  }
});

// node_modules/micromark/dist/tokenize/attention.js
var require_attention = __commonJS({
  "node_modules/micromark/dist/tokenize/attention.js"(exports, module) {
    "use strict";
    var chunkedPush = require_chunked_push();
    var chunkedSplice = require_chunked_splice();
    var classifyCharacter = require_classify_character();
    var movePoint = require_move_point();
    var resolveAll = require_resolve_all();
    var shallow = require_shallow();
    var attention = {
      name: "attention",
      tokenize: tokenizeAttention,
      resolveAll: resolveAllAttention
    };
    function resolveAllAttention(events, context) {
      var index = -1;
      var open;
      var group;
      var text;
      var openingSequence;
      var closingSequence;
      var use;
      var nextEvents;
      var offset;
      while (++index < events.length) {
        if (events[index][0] === "enter" && events[index][1].type === "attentionSequence" && events[index][1]._close) {
          open = index;
          while (open--) {
            if (events[open][0] === "exit" && events[open][1].type === "attentionSequence" && events[open][1]._open && // If the markers are the same:
            context.sliceSerialize(events[open][1]).charCodeAt(0) === context.sliceSerialize(events[index][1]).charCodeAt(0)) {
              if ((events[open][1]._close || events[index][1]._open) && (events[index][1].end.offset - events[index][1].start.offset) % 3 && !((events[open][1].end.offset - events[open][1].start.offset + events[index][1].end.offset - events[index][1].start.offset) % 3)) {
                continue;
              }
              use = events[open][1].end.offset - events[open][1].start.offset > 1 && events[index][1].end.offset - events[index][1].start.offset > 1 ? 2 : 1;
              openingSequence = {
                type: use > 1 ? "strongSequence" : "emphasisSequence",
                start: movePoint(shallow(events[open][1].end), -use),
                end: shallow(events[open][1].end)
              };
              closingSequence = {
                type: use > 1 ? "strongSequence" : "emphasisSequence",
                start: shallow(events[index][1].start),
                end: movePoint(shallow(events[index][1].start), use)
              };
              text = {
                type: use > 1 ? "strongText" : "emphasisText",
                start: shallow(events[open][1].end),
                end: shallow(events[index][1].start)
              };
              group = {
                type: use > 1 ? "strong" : "emphasis",
                start: shallow(openingSequence.start),
                end: shallow(closingSequence.end)
              };
              events[open][1].end = shallow(openingSequence.start);
              events[index][1].start = shallow(closingSequence.end);
              nextEvents = [];
              if (events[open][1].end.offset - events[open][1].start.offset) {
                nextEvents = chunkedPush(nextEvents, [
                  ["enter", events[open][1], context],
                  ["exit", events[open][1], context]
                ]);
              }
              nextEvents = chunkedPush(nextEvents, [
                ["enter", group, context],
                ["enter", openingSequence, context],
                ["exit", openingSequence, context],
                ["enter", text, context]
              ]);
              nextEvents = chunkedPush(
                nextEvents,
                resolveAll(
                  context.parser.constructs.insideSpan.null,
                  events.slice(open + 1, index),
                  context
                )
              );
              nextEvents = chunkedPush(nextEvents, [
                ["exit", text, context],
                ["enter", closingSequence, context],
                ["exit", closingSequence, context],
                ["exit", group, context]
              ]);
              if (events[index][1].end.offset - events[index][1].start.offset) {
                offset = 2;
                nextEvents = chunkedPush(nextEvents, [
                  ["enter", events[index][1], context],
                  ["exit", events[index][1], context]
                ]);
              } else {
                offset = 0;
              }
              chunkedSplice(events, open - 1, index - open + 3, nextEvents);
              index = open + nextEvents.length - offset - 2;
              break;
            }
          }
        }
      }
      index = -1;
      while (++index < events.length) {
        if (events[index][1].type === "attentionSequence") {
          events[index][1].type = "data";
        }
      }
      return events;
    }
    function tokenizeAttention(effects, ok) {
      var before = classifyCharacter(this.previous);
      var marker;
      return start;
      function start(code) {
        effects.enter("attentionSequence");
        marker = code;
        return sequence(code);
      }
      function sequence(code) {
        var token;
        var after;
        var open;
        var close;
        if (code === marker) {
          effects.consume(code);
          return sequence;
        }
        token = effects.exit("attentionSequence");
        after = classifyCharacter(code);
        open = !after || after === 2 && before;
        close = !before || before === 2 && after;
        token._open = marker === 42 ? open : open && (before || !close);
        token._close = marker === 42 ? close : close && (after || !open);
        return ok(code);
      }
    }
    module.exports = attention;
  }
});

// node_modules/micromark/dist/character/ascii-alpha.js
var require_ascii_alpha = __commonJS({
  "node_modules/micromark/dist/character/ascii-alpha.js"(exports, module) {
    "use strict";
    var regexCheck = require_regex_check();
    var asciiAlpha = regexCheck(/[A-Za-z]/);
    module.exports = asciiAlpha;
  }
});

// node_modules/micromark/dist/character/ascii-atext.js
var require_ascii_atext = __commonJS({
  "node_modules/micromark/dist/character/ascii-atext.js"(exports, module) {
    "use strict";
    var regexCheck = require_regex_check();
    var asciiAtext = regexCheck(/[#-'*+\--9=?A-Z^-~]/);
    module.exports = asciiAtext;
  }
});

// node_modules/micromark/dist/character/ascii-control.js
var require_ascii_control = __commonJS({
  "node_modules/micromark/dist/character/ascii-control.js"(exports, module) {
    "use strict";
    function asciiControl(code) {
      return (
        // Special whitespace codes (which have negative values), C0 and Control
        // character DEL
        code < 32 || code === 127
      );
    }
    module.exports = asciiControl;
  }
});

// node_modules/micromark/dist/tokenize/autolink.js
var require_autolink = __commonJS({
  "node_modules/micromark/dist/tokenize/autolink.js"(exports, module) {
    "use strict";
    var asciiAlpha = require_ascii_alpha();
    var asciiAlphanumeric = require_ascii_alphanumeric();
    var asciiAtext = require_ascii_atext();
    var asciiControl = require_ascii_control();
    var autolink = {
      name: "autolink",
      tokenize: tokenizeAutolink
    };
    function tokenizeAutolink(effects, ok, nok) {
      var size = 1;
      return start;
      function start(code) {
        effects.enter("autolink");
        effects.enter("autolinkMarker");
        effects.consume(code);
        effects.exit("autolinkMarker");
        effects.enter("autolinkProtocol");
        return open;
      }
      function open(code) {
        if (asciiAlpha(code)) {
          effects.consume(code);
          return schemeOrEmailAtext;
        }
        return asciiAtext(code) ? emailAtext(code) : nok(code);
      }
      function schemeOrEmailAtext(code) {
        return code === 43 || code === 45 || code === 46 || asciiAlphanumeric(code) ? schemeInsideOrEmailAtext(code) : emailAtext(code);
      }
      function schemeInsideOrEmailAtext(code) {
        if (code === 58) {
          effects.consume(code);
          return urlInside;
        }
        if ((code === 43 || code === 45 || code === 46 || asciiAlphanumeric(code)) && size++ < 32) {
          effects.consume(code);
          return schemeInsideOrEmailAtext;
        }
        return emailAtext(code);
      }
      function urlInside(code) {
        if (code === 62) {
          effects.exit("autolinkProtocol");
          return end(code);
        }
        if (code === 32 || code === 60 || asciiControl(code)) {
          return nok(code);
        }
        effects.consume(code);
        return urlInside;
      }
      function emailAtext(code) {
        if (code === 64) {
          effects.consume(code);
          size = 0;
          return emailAtSignOrDot;
        }
        if (asciiAtext(code)) {
          effects.consume(code);
          return emailAtext;
        }
        return nok(code);
      }
      function emailAtSignOrDot(code) {
        return asciiAlphanumeric(code) ? emailLabel(code) : nok(code);
      }
      function emailLabel(code) {
        if (code === 46) {
          effects.consume(code);
          size = 0;
          return emailAtSignOrDot;
        }
        if (code === 62) {
          effects.exit("autolinkProtocol").type = "autolinkEmail";
          return end(code);
        }
        return emailValue(code);
      }
      function emailValue(code) {
        if ((code === 45 || asciiAlphanumeric(code)) && size++ < 63) {
          effects.consume(code);
          return code === 45 ? emailValue : emailLabel;
        }
        return nok(code);
      }
      function end(code) {
        effects.enter("autolinkMarker");
        effects.consume(code);
        effects.exit("autolinkMarker");
        effects.exit("autolink");
        return ok;
      }
    }
    module.exports = autolink;
  }
});

// node_modules/micromark/dist/tokenize/block-quote.js
var require_block_quote = __commonJS({
  "node_modules/micromark/dist/tokenize/block-quote.js"(exports, module) {
    "use strict";
    var markdownSpace = require_markdown_space();
    var factorySpace = require_factory_space();
    var blockQuote = {
      name: "blockQuote",
      tokenize: tokenizeBlockQuoteStart,
      continuation: {
        tokenize: tokenizeBlockQuoteContinuation
      },
      exit
    };
    function tokenizeBlockQuoteStart(effects, ok, nok) {
      var self2 = this;
      return start;
      function start(code) {
        if (code === 62) {
          if (!self2.containerState.open) {
            effects.enter("blockQuote", {
              _container: true
            });
            self2.containerState.open = true;
          }
          effects.enter("blockQuotePrefix");
          effects.enter("blockQuoteMarker");
          effects.consume(code);
          effects.exit("blockQuoteMarker");
          return after;
        }
        return nok(code);
      }
      function after(code) {
        if (markdownSpace(code)) {
          effects.enter("blockQuotePrefixWhitespace");
          effects.consume(code);
          effects.exit("blockQuotePrefixWhitespace");
          effects.exit("blockQuotePrefix");
          return ok;
        }
        effects.exit("blockQuotePrefix");
        return ok(code);
      }
    }
    function tokenizeBlockQuoteContinuation(effects, ok, nok) {
      return factorySpace(
        effects,
        effects.attempt(blockQuote, ok, nok),
        "linePrefix",
        this.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4
      );
    }
    function exit(effects) {
      effects.exit("blockQuote");
    }
    module.exports = blockQuote;
  }
});

// node_modules/micromark/dist/character/ascii-punctuation.js
var require_ascii_punctuation = __commonJS({
  "node_modules/micromark/dist/character/ascii-punctuation.js"(exports, module) {
    "use strict";
    var regexCheck = require_regex_check();
    var asciiPunctuation = regexCheck(/[!-/:-@[-`{-~]/);
    module.exports = asciiPunctuation;
  }
});

// node_modules/micromark/dist/tokenize/character-escape.js
var require_character_escape = __commonJS({
  "node_modules/micromark/dist/tokenize/character-escape.js"(exports, module) {
    "use strict";
    var asciiPunctuation = require_ascii_punctuation();
    var characterEscape = {
      name: "characterEscape",
      tokenize: tokenizeCharacterEscape
    };
    function tokenizeCharacterEscape(effects, ok, nok) {
      return start;
      function start(code) {
        effects.enter("characterEscape");
        effects.enter("escapeMarker");
        effects.consume(code);
        effects.exit("escapeMarker");
        return open;
      }
      function open(code) {
        if (asciiPunctuation(code)) {
          effects.enter("characterEscapeValue");
          effects.consume(code);
          effects.exit("characterEscapeValue");
          effects.exit("characterEscape");
          return ok;
        }
        return nok(code);
      }
    }
    module.exports = characterEscape;
  }
});

// node_modules/micromark/dist/character/ascii-digit.js
var require_ascii_digit = __commonJS({
  "node_modules/micromark/dist/character/ascii-digit.js"(exports, module) {
    "use strict";
    var regexCheck = require_regex_check();
    var asciiDigit = regexCheck(/\d/);
    module.exports = asciiDigit;
  }
});

// node_modules/micromark/dist/character/ascii-hex-digit.js
var require_ascii_hex_digit = __commonJS({
  "node_modules/micromark/dist/character/ascii-hex-digit.js"(exports, module) {
    "use strict";
    var regexCheck = require_regex_check();
    var asciiHexDigit = regexCheck(/[\dA-Fa-f]/);
    module.exports = asciiHexDigit;
  }
});

// node_modules/micromark/dist/tokenize/character-reference.js
var require_character_reference = __commonJS({
  "node_modules/micromark/dist/tokenize/character-reference.js"(exports, module) {
    "use strict";
    var decodeEntity = require_decode_entity_browser();
    var asciiAlphanumeric = require_ascii_alphanumeric();
    var asciiDigit = require_ascii_digit();
    var asciiHexDigit = require_ascii_hex_digit();
    function _interopDefaultLegacy(e) {
      return e && typeof e === "object" && "default" in e ? e : { default: e };
    }
    var decodeEntity__default = /* @__PURE__ */ _interopDefaultLegacy(decodeEntity);
    var characterReference = {
      name: "characterReference",
      tokenize: tokenizeCharacterReference
    };
    function tokenizeCharacterReference(effects, ok, nok) {
      var self2 = this;
      var size = 0;
      var max;
      var test;
      return start;
      function start(code) {
        effects.enter("characterReference");
        effects.enter("characterReferenceMarker");
        effects.consume(code);
        effects.exit("characterReferenceMarker");
        return open;
      }
      function open(code) {
        if (code === 35) {
          effects.enter("characterReferenceMarkerNumeric");
          effects.consume(code);
          effects.exit("characterReferenceMarkerNumeric");
          return numeric;
        }
        effects.enter("characterReferenceValue");
        max = 31;
        test = asciiAlphanumeric;
        return value(code);
      }
      function numeric(code) {
        if (code === 88 || code === 120) {
          effects.enter("characterReferenceMarkerHexadecimal");
          effects.consume(code);
          effects.exit("characterReferenceMarkerHexadecimal");
          effects.enter("characterReferenceValue");
          max = 6;
          test = asciiHexDigit;
          return value;
        }
        effects.enter("characterReferenceValue");
        max = 7;
        test = asciiDigit;
        return value(code);
      }
      function value(code) {
        var token;
        if (code === 59 && size) {
          token = effects.exit("characterReferenceValue");
          if (test === asciiAlphanumeric && !decodeEntity__default["default"](self2.sliceSerialize(token))) {
            return nok(code);
          }
          effects.enter("characterReferenceMarker");
          effects.consume(code);
          effects.exit("characterReferenceMarker");
          effects.exit("characterReference");
          return ok;
        }
        if (test(code) && size++ < max) {
          effects.consume(code);
          return value;
        }
        return nok(code);
      }
    }
    module.exports = characterReference;
  }
});

// node_modules/micromark/dist/tokenize/code-fenced.js
var require_code_fenced = __commonJS({
  "node_modules/micromark/dist/tokenize/code-fenced.js"(exports, module) {
    "use strict";
    var markdownLineEnding = require_markdown_line_ending();
    var markdownLineEndingOrSpace = require_markdown_line_ending_or_space();
    var prefixSize = require_prefix_size();
    var factorySpace = require_factory_space();
    var codeFenced = {
      name: "codeFenced",
      tokenize: tokenizeCodeFenced,
      concrete: true
    };
    function tokenizeCodeFenced(effects, ok, nok) {
      var self2 = this;
      var closingFenceConstruct = {
        tokenize: tokenizeClosingFence,
        partial: true
      };
      var initialPrefix = prefixSize(this.events, "linePrefix");
      var sizeOpen = 0;
      var marker;
      return start;
      function start(code) {
        effects.enter("codeFenced");
        effects.enter("codeFencedFence");
        effects.enter("codeFencedFenceSequence");
        marker = code;
        return sequenceOpen(code);
      }
      function sequenceOpen(code) {
        if (code === marker) {
          effects.consume(code);
          sizeOpen++;
          return sequenceOpen;
        }
        effects.exit("codeFencedFenceSequence");
        return sizeOpen < 3 ? nok(code) : factorySpace(effects, infoOpen, "whitespace")(code);
      }
      function infoOpen(code) {
        if (code === null || markdownLineEnding(code)) {
          return openAfter(code);
        }
        effects.enter("codeFencedFenceInfo");
        effects.enter("chunkString", {
          contentType: "string"
        });
        return info(code);
      }
      function info(code) {
        if (code === null || markdownLineEndingOrSpace(code)) {
          effects.exit("chunkString");
          effects.exit("codeFencedFenceInfo");
          return factorySpace(effects, infoAfter, "whitespace")(code);
        }
        if (code === 96 && code === marker) return nok(code);
        effects.consume(code);
        return info;
      }
      function infoAfter(code) {
        if (code === null || markdownLineEnding(code)) {
          return openAfter(code);
        }
        effects.enter("codeFencedFenceMeta");
        effects.enter("chunkString", {
          contentType: "string"
        });
        return meta(code);
      }
      function meta(code) {
        if (code === null || markdownLineEnding(code)) {
          effects.exit("chunkString");
          effects.exit("codeFencedFenceMeta");
          return openAfter(code);
        }
        if (code === 96 && code === marker) return nok(code);
        effects.consume(code);
        return meta;
      }
      function openAfter(code) {
        effects.exit("codeFencedFence");
        return self2.interrupt ? ok(code) : content(code);
      }
      function content(code) {
        if (code === null) {
          return after(code);
        }
        if (markdownLineEnding(code)) {
          effects.enter("lineEnding");
          effects.consume(code);
          effects.exit("lineEnding");
          return effects.attempt(
            closingFenceConstruct,
            after,
            initialPrefix ? factorySpace(effects, content, "linePrefix", initialPrefix + 1) : content
          );
        }
        effects.enter("codeFlowValue");
        return contentContinue(code);
      }
      function contentContinue(code) {
        if (code === null || markdownLineEnding(code)) {
          effects.exit("codeFlowValue");
          return content(code);
        }
        effects.consume(code);
        return contentContinue;
      }
      function after(code) {
        effects.exit("codeFenced");
        return ok(code);
      }
      function tokenizeClosingFence(effects2, ok2, nok2) {
        var size = 0;
        return factorySpace(
          effects2,
          closingSequenceStart,
          "linePrefix",
          this.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4
        );
        function closingSequenceStart(code) {
          effects2.enter("codeFencedFence");
          effects2.enter("codeFencedFenceSequence");
          return closingSequence(code);
        }
        function closingSequence(code) {
          if (code === marker) {
            effects2.consume(code);
            size++;
            return closingSequence;
          }
          if (size < sizeOpen) return nok2(code);
          effects2.exit("codeFencedFenceSequence");
          return factorySpace(effects2, closingSequenceEnd, "whitespace")(code);
        }
        function closingSequenceEnd(code) {
          if (code === null || markdownLineEnding(code)) {
            effects2.exit("codeFencedFence");
            return ok2(code);
          }
          return nok2(code);
        }
      }
    }
    module.exports = codeFenced;
  }
});

// node_modules/micromark/dist/tokenize/code-indented.js
var require_code_indented = __commonJS({
  "node_modules/micromark/dist/tokenize/code-indented.js"(exports, module) {
    "use strict";
    var markdownLineEnding = require_markdown_line_ending();
    var chunkedSplice = require_chunked_splice();
    var prefixSize = require_prefix_size();
    var factorySpace = require_factory_space();
    var codeIndented = {
      name: "codeIndented",
      tokenize: tokenizeCodeIndented,
      resolve: resolveCodeIndented
    };
    var indentedContentConstruct = {
      tokenize: tokenizeIndentedContent,
      partial: true
    };
    function resolveCodeIndented(events, context) {
      var code = {
        type: "codeIndented",
        start: events[0][1].start,
        end: events[events.length - 1][1].end
      };
      chunkedSplice(events, 0, 0, [["enter", code, context]]);
      chunkedSplice(events, events.length, 0, [["exit", code, context]]);
      return events;
    }
    function tokenizeCodeIndented(effects, ok, nok) {
      return effects.attempt(indentedContentConstruct, afterPrefix, nok);
      function afterPrefix(code) {
        if (code === null) {
          return ok(code);
        }
        if (markdownLineEnding(code)) {
          return effects.attempt(indentedContentConstruct, afterPrefix, ok)(code);
        }
        effects.enter("codeFlowValue");
        return content(code);
      }
      function content(code) {
        if (code === null || markdownLineEnding(code)) {
          effects.exit("codeFlowValue");
          return afterPrefix(code);
        }
        effects.consume(code);
        return content;
      }
    }
    function tokenizeIndentedContent(effects, ok, nok) {
      var self2 = this;
      return factorySpace(effects, afterPrefix, "linePrefix", 4 + 1);
      function afterPrefix(code) {
        if (markdownLineEnding(code)) {
          effects.enter("lineEnding");
          effects.consume(code);
          effects.exit("lineEnding");
          return factorySpace(effects, afterPrefix, "linePrefix", 4 + 1);
        }
        return prefixSize(self2.events, "linePrefix") < 4 ? nok(code) : ok(code);
      }
    }
    module.exports = codeIndented;
  }
});

// node_modules/micromark/dist/tokenize/code-text.js
var require_code_text = __commonJS({
  "node_modules/micromark/dist/tokenize/code-text.js"(exports, module) {
    "use strict";
    var markdownLineEnding = require_markdown_line_ending();
    var codeText = {
      name: "codeText",
      tokenize: tokenizeCodeText,
      resolve: resolveCodeText,
      previous
    };
    function resolveCodeText(events) {
      var tailExitIndex = events.length - 4;
      var headEnterIndex = 3;
      var index;
      var enter;
      if ((events[headEnterIndex][1].type === "lineEnding" || events[headEnterIndex][1].type === "space") && (events[tailExitIndex][1].type === "lineEnding" || events[tailExitIndex][1].type === "space")) {
        index = headEnterIndex;
        while (++index < tailExitIndex) {
          if (events[index][1].type === "codeTextData") {
            events[tailExitIndex][1].type = events[headEnterIndex][1].type = "codeTextPadding";
            headEnterIndex += 2;
            tailExitIndex -= 2;
            break;
          }
        }
      }
      index = headEnterIndex - 1;
      tailExitIndex++;
      while (++index <= tailExitIndex) {
        if (enter === void 0) {
          if (index !== tailExitIndex && events[index][1].type !== "lineEnding") {
            enter = index;
          }
        } else if (index === tailExitIndex || events[index][1].type === "lineEnding") {
          events[enter][1].type = "codeTextData";
          if (index !== enter + 2) {
            events[enter][1].end = events[index - 1][1].end;
            events.splice(enter + 2, index - enter - 2);
            tailExitIndex -= index - enter - 2;
            index = enter + 2;
          }
          enter = void 0;
        }
      }
      return events;
    }
    function previous(code) {
      return code !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
    }
    function tokenizeCodeText(effects, ok, nok) {
      var sizeOpen = 0;
      var size;
      var token;
      return start;
      function start(code) {
        effects.enter("codeText");
        effects.enter("codeTextSequence");
        return openingSequence(code);
      }
      function openingSequence(code) {
        if (code === 96) {
          effects.consume(code);
          sizeOpen++;
          return openingSequence;
        }
        effects.exit("codeTextSequence");
        return gap(code);
      }
      function gap(code) {
        if (code === null) {
          return nok(code);
        }
        if (code === 96) {
          token = effects.enter("codeTextSequence");
          size = 0;
          return closingSequence(code);
        }
        if (code === 32) {
          effects.enter("space");
          effects.consume(code);
          effects.exit("space");
          return gap;
        }
        if (markdownLineEnding(code)) {
          effects.enter("lineEnding");
          effects.consume(code);
          effects.exit("lineEnding");
          return gap;
        }
        effects.enter("codeTextData");
        return data(code);
      }
      function data(code) {
        if (code === null || code === 32 || code === 96 || markdownLineEnding(code)) {
          effects.exit("codeTextData");
          return gap(code);
        }
        effects.consume(code);
        return data;
      }
      function closingSequence(code) {
        if (code === 96) {
          effects.consume(code);
          size++;
          return closingSequence;
        }
        if (size === sizeOpen) {
          effects.exit("codeTextSequence");
          effects.exit("codeText");
          return ok(code);
        }
        token.type = "codeTextData";
        return data(code);
      }
    }
    module.exports = codeText;
  }
});

// node_modules/micromark/dist/tokenize/factory-destination.js
var require_factory_destination = __commonJS({
  "node_modules/micromark/dist/tokenize/factory-destination.js"(exports, module) {
    "use strict";
    var asciiControl = require_ascii_control();
    var markdownLineEndingOrSpace = require_markdown_line_ending_or_space();
    var markdownLineEnding = require_markdown_line_ending();
    function destinationFactory(effects, ok, nok, type, literalType, literalMarkerType, rawType, stringType, max) {
      var limit = max || Infinity;
      var balance = 0;
      return start;
      function start(code) {
        if (code === 60) {
          effects.enter(type);
          effects.enter(literalType);
          effects.enter(literalMarkerType);
          effects.consume(code);
          effects.exit(literalMarkerType);
          return destinationEnclosedBefore;
        }
        if (asciiControl(code) || code === 41) {
          return nok(code);
        }
        effects.enter(type);
        effects.enter(rawType);
        effects.enter(stringType);
        effects.enter("chunkString", {
          contentType: "string"
        });
        return destinationRaw(code);
      }
      function destinationEnclosedBefore(code) {
        if (code === 62) {
          effects.enter(literalMarkerType);
          effects.consume(code);
          effects.exit(literalMarkerType);
          effects.exit(literalType);
          effects.exit(type);
          return ok;
        }
        effects.enter(stringType);
        effects.enter("chunkString", {
          contentType: "string"
        });
        return destinationEnclosed(code);
      }
      function destinationEnclosed(code) {
        if (code === 62) {
          effects.exit("chunkString");
          effects.exit(stringType);
          return destinationEnclosedBefore(code);
        }
        if (code === null || code === 60 || markdownLineEnding(code)) {
          return nok(code);
        }
        effects.consume(code);
        return code === 92 ? destinationEnclosedEscape : destinationEnclosed;
      }
      function destinationEnclosedEscape(code) {
        if (code === 60 || code === 62 || code === 92) {
          effects.consume(code);
          return destinationEnclosed;
        }
        return destinationEnclosed(code);
      }
      function destinationRaw(code) {
        if (code === 40) {
          if (++balance > limit) return nok(code);
          effects.consume(code);
          return destinationRaw;
        }
        if (code === 41) {
          if (!balance--) {
            effects.exit("chunkString");
            effects.exit(stringType);
            effects.exit(rawType);
            effects.exit(type);
            return ok(code);
          }
          effects.consume(code);
          return destinationRaw;
        }
        if (code === null || markdownLineEndingOrSpace(code)) {
          if (balance) return nok(code);
          effects.exit("chunkString");
          effects.exit(stringType);
          effects.exit(rawType);
          effects.exit(type);
          return ok(code);
        }
        if (asciiControl(code)) return nok(code);
        effects.consume(code);
        return code === 92 ? destinationRawEscape : destinationRaw;
      }
      function destinationRawEscape(code) {
        if (code === 40 || code === 41 || code === 92) {
          effects.consume(code);
          return destinationRaw;
        }
        return destinationRaw(code);
      }
    }
    module.exports = destinationFactory;
  }
});

// node_modules/micromark/dist/tokenize/factory-label.js
var require_factory_label = __commonJS({
  "node_modules/micromark/dist/tokenize/factory-label.js"(exports, module) {
    "use strict";
    var markdownLineEnding = require_markdown_line_ending();
    var markdownSpace = require_markdown_space();
    function labelFactory(effects, ok, nok, type, markerType, stringType) {
      var self2 = this;
      var size = 0;
      var data;
      return start;
      function start(code) {
        effects.enter(type);
        effects.enter(markerType);
        effects.consume(code);
        effects.exit(markerType);
        effects.enter(stringType);
        return atBreak;
      }
      function atBreak(code) {
        if (code === null || code === 91 || code === 93 && !data || /* c8 ignore next */
        code === 94 && /* c8 ignore next */
        !size && /* c8 ignore next */
        "_hiddenFootnoteSupport" in self2.parser.constructs || size > 999) {
          return nok(code);
        }
        if (code === 93) {
          effects.exit(stringType);
          effects.enter(markerType);
          effects.consume(code);
          effects.exit(markerType);
          effects.exit(type);
          return ok;
        }
        if (markdownLineEnding(code)) {
          effects.enter("lineEnding");
          effects.consume(code);
          effects.exit("lineEnding");
          return atBreak;
        }
        effects.enter("chunkString", {
          contentType: "string"
        });
        return label(code);
      }
      function label(code) {
        if (code === null || code === 91 || code === 93 || markdownLineEnding(code) || size++ > 999) {
          effects.exit("chunkString");
          return atBreak(code);
        }
        effects.consume(code);
        data = data || !markdownSpace(code);
        return code === 92 ? labelEscape : label;
      }
      function labelEscape(code) {
        if (code === 91 || code === 92 || code === 93) {
          effects.consume(code);
          size++;
          return label;
        }
        return label(code);
      }
    }
    module.exports = labelFactory;
  }
});

// node_modules/micromark/dist/tokenize/factory-whitespace.js
var require_factory_whitespace = __commonJS({
  "node_modules/micromark/dist/tokenize/factory-whitespace.js"(exports, module) {
    "use strict";
    var markdownLineEnding = require_markdown_line_ending();
    var markdownSpace = require_markdown_space();
    var factorySpace = require_factory_space();
    function whitespaceFactory(effects, ok) {
      var seen;
      return start;
      function start(code) {
        if (markdownLineEnding(code)) {
          effects.enter("lineEnding");
          effects.consume(code);
          effects.exit("lineEnding");
          seen = true;
          return start;
        }
        if (markdownSpace(code)) {
          return factorySpace(
            effects,
            start,
            seen ? "linePrefix" : "lineSuffix"
          )(code);
        }
        return ok(code);
      }
    }
    module.exports = whitespaceFactory;
  }
});

// node_modules/micromark/dist/tokenize/factory-title.js
var require_factory_title = __commonJS({
  "node_modules/micromark/dist/tokenize/factory-title.js"(exports, module) {
    "use strict";
    var markdownLineEnding = require_markdown_line_ending();
    var factorySpace = require_factory_space();
    function titleFactory(effects, ok, nok, type, markerType, stringType) {
      var marker;
      return start;
      function start(code) {
        effects.enter(type);
        effects.enter(markerType);
        effects.consume(code);
        effects.exit(markerType);
        marker = code === 40 ? 41 : code;
        return atFirstTitleBreak;
      }
      function atFirstTitleBreak(code) {
        if (code === marker) {
          effects.enter(markerType);
          effects.consume(code);
          effects.exit(markerType);
          effects.exit(type);
          return ok;
        }
        effects.enter(stringType);
        return atTitleBreak(code);
      }
      function atTitleBreak(code) {
        if (code === marker) {
          effects.exit(stringType);
          return atFirstTitleBreak(marker);
        }
        if (code === null) {
          return nok(code);
        }
        if (markdownLineEnding(code)) {
          effects.enter("lineEnding");
          effects.consume(code);
          effects.exit("lineEnding");
          return factorySpace(effects, atTitleBreak, "linePrefix");
        }
        effects.enter("chunkString", {
          contentType: "string"
        });
        return title(code);
      }
      function title(code) {
        if (code === marker || code === null || markdownLineEnding(code)) {
          effects.exit("chunkString");
          return atTitleBreak(code);
        }
        effects.consume(code);
        return code === 92 ? titleEscape : title;
      }
      function titleEscape(code) {
        if (code === marker || code === 92) {
          effects.consume(code);
          return title;
        }
        return title(code);
      }
    }
    module.exports = titleFactory;
  }
});

// node_modules/micromark/dist/tokenize/definition.js
var require_definition = __commonJS({
  "node_modules/micromark/dist/tokenize/definition.js"(exports, module) {
    "use strict";
    var markdownLineEnding = require_markdown_line_ending();
    var markdownLineEndingOrSpace = require_markdown_line_ending_or_space();
    var normalizeIdentifier = require_normalize_identifier();
    var factoryDestination = require_factory_destination();
    var factoryLabel = require_factory_label();
    var factorySpace = require_factory_space();
    var factoryWhitespace = require_factory_whitespace();
    var factoryTitle = require_factory_title();
    var definition = {
      name: "definition",
      tokenize: tokenizeDefinition
    };
    var titleConstruct = {
      tokenize: tokenizeTitle,
      partial: true
    };
    function tokenizeDefinition(effects, ok, nok) {
      var self2 = this;
      var identifier;
      return start;
      function start(code) {
        effects.enter("definition");
        return factoryLabel.call(
          self2,
          effects,
          labelAfter,
          nok,
          "definitionLabel",
          "definitionLabelMarker",
          "definitionLabelString"
        )(code);
      }
      function labelAfter(code) {
        identifier = normalizeIdentifier(
          self2.sliceSerialize(self2.events[self2.events.length - 1][1]).slice(1, -1)
        );
        if (code === 58) {
          effects.enter("definitionMarker");
          effects.consume(code);
          effects.exit("definitionMarker");
          return factoryWhitespace(
            effects,
            factoryDestination(
              effects,
              effects.attempt(
                titleConstruct,
                factorySpace(effects, after, "whitespace"),
                factorySpace(effects, after, "whitespace")
              ),
              nok,
              "definitionDestination",
              "definitionDestinationLiteral",
              "definitionDestinationLiteralMarker",
              "definitionDestinationRaw",
              "definitionDestinationString"
            )
          );
        }
        return nok(code);
      }
      function after(code) {
        if (code === null || markdownLineEnding(code)) {
          effects.exit("definition");
          if (self2.parser.defined.indexOf(identifier) < 0) {
            self2.parser.defined.push(identifier);
          }
          return ok(code);
        }
        return nok(code);
      }
    }
    function tokenizeTitle(effects, ok, nok) {
      return start;
      function start(code) {
        return markdownLineEndingOrSpace(code) ? factoryWhitespace(effects, before)(code) : nok(code);
      }
      function before(code) {
        if (code === 34 || code === 39 || code === 40) {
          return factoryTitle(
            effects,
            factorySpace(effects, after, "whitespace"),
            nok,
            "definitionTitle",
            "definitionTitleMarker",
            "definitionTitleString"
          )(code);
        }
        return nok(code);
      }
      function after(code) {
        return code === null || markdownLineEnding(code) ? ok(code) : nok(code);
      }
    }
    module.exports = definition;
  }
});

// node_modules/micromark/dist/tokenize/hard-break-escape.js
var require_hard_break_escape = __commonJS({
  "node_modules/micromark/dist/tokenize/hard-break-escape.js"(exports, module) {
    "use strict";
    var markdownLineEnding = require_markdown_line_ending();
    var hardBreakEscape = {
      name: "hardBreakEscape",
      tokenize: tokenizeHardBreakEscape
    };
    function tokenizeHardBreakEscape(effects, ok, nok) {
      return start;
      function start(code) {
        effects.enter("hardBreakEscape");
        effects.enter("escapeMarker");
        effects.consume(code);
        return open;
      }
      function open(code) {
        if (markdownLineEnding(code)) {
          effects.exit("escapeMarker");
          effects.exit("hardBreakEscape");
          return ok(code);
        }
        return nok(code);
      }
    }
    module.exports = hardBreakEscape;
  }
});

// node_modules/micromark/dist/tokenize/heading-atx.js
var require_heading_atx = __commonJS({
  "node_modules/micromark/dist/tokenize/heading-atx.js"(exports, module) {
    "use strict";
    var markdownLineEnding = require_markdown_line_ending();
    var markdownLineEndingOrSpace = require_markdown_line_ending_or_space();
    var markdownSpace = require_markdown_space();
    var chunkedSplice = require_chunked_splice();
    var factorySpace = require_factory_space();
    var headingAtx = {
      name: "headingAtx",
      tokenize: tokenizeHeadingAtx,
      resolve: resolveHeadingAtx
    };
    function resolveHeadingAtx(events, context) {
      var contentEnd = events.length - 2;
      var contentStart = 3;
      var content;
      var text;
      if (events[contentStart][1].type === "whitespace") {
        contentStart += 2;
      }
      if (contentEnd - 2 > contentStart && events[contentEnd][1].type === "whitespace") {
        contentEnd -= 2;
      }
      if (events[contentEnd][1].type === "atxHeadingSequence" && (contentStart === contentEnd - 1 || contentEnd - 4 > contentStart && events[contentEnd - 2][1].type === "whitespace")) {
        contentEnd -= contentStart + 1 === contentEnd ? 2 : 4;
      }
      if (contentEnd > contentStart) {
        content = {
          type: "atxHeadingText",
          start: events[contentStart][1].start,
          end: events[contentEnd][1].end
        };
        text = {
          type: "chunkText",
          start: events[contentStart][1].start,
          end: events[contentEnd][1].end,
          contentType: "text"
        };
        chunkedSplice(events, contentStart, contentEnd - contentStart + 1, [
          ["enter", content, context],
          ["enter", text, context],
          ["exit", text, context],
          ["exit", content, context]
        ]);
      }
      return events;
    }
    function tokenizeHeadingAtx(effects, ok, nok) {
      var self2 = this;
      var size = 0;
      return start;
      function start(code) {
        effects.enter("atxHeading");
        effects.enter("atxHeadingSequence");
        return fenceOpenInside(code);
      }
      function fenceOpenInside(code) {
        if (code === 35 && size++ < 6) {
          effects.consume(code);
          return fenceOpenInside;
        }
        if (code === null || markdownLineEndingOrSpace(code)) {
          effects.exit("atxHeadingSequence");
          return self2.interrupt ? ok(code) : headingBreak(code);
        }
        return nok(code);
      }
      function headingBreak(code) {
        if (code === 35) {
          effects.enter("atxHeadingSequence");
          return sequence(code);
        }
        if (code === null || markdownLineEnding(code)) {
          effects.exit("atxHeading");
          return ok(code);
        }
        if (markdownSpace(code)) {
          return factorySpace(effects, headingBreak, "whitespace")(code);
        }
        effects.enter("atxHeadingText");
        return data(code);
      }
      function sequence(code) {
        if (code === 35) {
          effects.consume(code);
          return sequence;
        }
        effects.exit("atxHeadingSequence");
        return headingBreak(code);
      }
      function data(code) {
        if (code === null || code === 35 || markdownLineEndingOrSpace(code)) {
          effects.exit("atxHeadingText");
          return headingBreak(code);
        }
        effects.consume(code);
        return data;
      }
    }
    module.exports = headingAtx;
  }
});

// node_modules/micromark/dist/constant/html-block-names.js
var require_html_block_names = __commonJS({
  "node_modules/micromark/dist/constant/html-block-names.js"(exports, module) {
    "use strict";
    var basics = [
      "address",
      "article",
      "aside",
      "base",
      "basefont",
      "blockquote",
      "body",
      "caption",
      "center",
      "col",
      "colgroup",
      "dd",
      "details",
      "dialog",
      "dir",
      "div",
      "dl",
      "dt",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "frame",
      "frameset",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "head",
      "header",
      "hr",
      "html",
      "iframe",
      "legend",
      "li",
      "link",
      "main",
      "menu",
      "menuitem",
      "nav",
      "noframes",
      "ol",
      "optgroup",
      "option",
      "p",
      "param",
      "section",
      "source",
      "summary",
      "table",
      "tbody",
      "td",
      "tfoot",
      "th",
      "thead",
      "title",
      "tr",
      "track",
      "ul"
    ];
    module.exports = basics;
  }
});

// node_modules/micromark/dist/constant/html-raw-names.js
var require_html_raw_names = __commonJS({
  "node_modules/micromark/dist/constant/html-raw-names.js"(exports, module) {
    "use strict";
    var raws = ["pre", "script", "style", "textarea"];
    module.exports = raws;
  }
});

// node_modules/micromark/dist/tokenize/html-flow.js
var require_html_flow = __commonJS({
  "node_modules/micromark/dist/tokenize/html-flow.js"(exports, module) {
    "use strict";
    var asciiAlpha = require_ascii_alpha();
    var asciiAlphanumeric = require_ascii_alphanumeric();
    var markdownLineEnding = require_markdown_line_ending();
    var markdownLineEndingOrSpace = require_markdown_line_ending_or_space();
    var markdownSpace = require_markdown_space();
    var fromCharCode = require_from_char_code();
    var htmlBlockNames = require_html_block_names();
    var htmlRawNames = require_html_raw_names();
    var partialBlankLine = require_partial_blank_line();
    var htmlFlow = {
      name: "htmlFlow",
      tokenize: tokenizeHtmlFlow,
      resolveTo: resolveToHtmlFlow,
      concrete: true
    };
    var nextBlankConstruct = {
      tokenize: tokenizeNextBlank,
      partial: true
    };
    function resolveToHtmlFlow(events) {
      var index = events.length;
      while (index--) {
        if (events[index][0] === "enter" && events[index][1].type === "htmlFlow") {
          break;
        }
      }
      if (index > 1 && events[index - 2][1].type === "linePrefix") {
        events[index][1].start = events[index - 2][1].start;
        events[index + 1][1].start = events[index - 2][1].start;
        events.splice(index - 2, 2);
      }
      return events;
    }
    function tokenizeHtmlFlow(effects, ok, nok) {
      var self2 = this;
      var kind;
      var startTag;
      var buffer;
      var index;
      var marker;
      return start;
      function start(code) {
        effects.enter("htmlFlow");
        effects.enter("htmlFlowData");
        effects.consume(code);
        return open;
      }
      function open(code) {
        if (code === 33) {
          effects.consume(code);
          return declarationStart;
        }
        if (code === 47) {
          effects.consume(code);
          return tagCloseStart;
        }
        if (code === 63) {
          effects.consume(code);
          kind = 3;
          return self2.interrupt ? ok : continuationDeclarationInside;
        }
        if (asciiAlpha(code)) {
          effects.consume(code);
          buffer = fromCharCode(code);
          startTag = true;
          return tagName;
        }
        return nok(code);
      }
      function declarationStart(code) {
        if (code === 45) {
          effects.consume(code);
          kind = 2;
          return commentOpenInside;
        }
        if (code === 91) {
          effects.consume(code);
          kind = 5;
          buffer = "CDATA[";
          index = 0;
          return cdataOpenInside;
        }
        if (asciiAlpha(code)) {
          effects.consume(code);
          kind = 4;
          return self2.interrupt ? ok : continuationDeclarationInside;
        }
        return nok(code);
      }
      function commentOpenInside(code) {
        if (code === 45) {
          effects.consume(code);
          return self2.interrupt ? ok : continuationDeclarationInside;
        }
        return nok(code);
      }
      function cdataOpenInside(code) {
        if (code === buffer.charCodeAt(index++)) {
          effects.consume(code);
          return index === buffer.length ? self2.interrupt ? ok : continuation : cdataOpenInside;
        }
        return nok(code);
      }
      function tagCloseStart(code) {
        if (asciiAlpha(code)) {
          effects.consume(code);
          buffer = fromCharCode(code);
          return tagName;
        }
        return nok(code);
      }
      function tagName(code) {
        if (code === null || code === 47 || code === 62 || markdownLineEndingOrSpace(code)) {
          if (code !== 47 && startTag && htmlRawNames.indexOf(buffer.toLowerCase()) > -1) {
            kind = 1;
            return self2.interrupt ? ok(code) : continuation(code);
          }
          if (htmlBlockNames.indexOf(buffer.toLowerCase()) > -1) {
            kind = 6;
            if (code === 47) {
              effects.consume(code);
              return basicSelfClosing;
            }
            return self2.interrupt ? ok(code) : continuation(code);
          }
          kind = 7;
          return self2.interrupt ? nok(code) : startTag ? completeAttributeNameBefore(code) : completeClosingTagAfter(code);
        }
        if (code === 45 || asciiAlphanumeric(code)) {
          effects.consume(code);
          buffer += fromCharCode(code);
          return tagName;
        }
        return nok(code);
      }
      function basicSelfClosing(code) {
        if (code === 62) {
          effects.consume(code);
          return self2.interrupt ? ok : continuation;
        }
        return nok(code);
      }
      function completeClosingTagAfter(code) {
        if (markdownSpace(code)) {
          effects.consume(code);
          return completeClosingTagAfter;
        }
        return completeEnd(code);
      }
      function completeAttributeNameBefore(code) {
        if (code === 47) {
          effects.consume(code);
          return completeEnd;
        }
        if (code === 58 || code === 95 || asciiAlpha(code)) {
          effects.consume(code);
          return completeAttributeName;
        }
        if (markdownSpace(code)) {
          effects.consume(code);
          return completeAttributeNameBefore;
        }
        return completeEnd(code);
      }
      function completeAttributeName(code) {
        if (code === 45 || code === 46 || code === 58 || code === 95 || asciiAlphanumeric(code)) {
          effects.consume(code);
          return completeAttributeName;
        }
        return completeAttributeNameAfter(code);
      }
      function completeAttributeNameAfter(code) {
        if (code === 61) {
          effects.consume(code);
          return completeAttributeValueBefore;
        }
        if (markdownSpace(code)) {
          effects.consume(code);
          return completeAttributeNameAfter;
        }
        return completeAttributeNameBefore(code);
      }
      function completeAttributeValueBefore(code) {
        if (code === null || code === 60 || code === 61 || code === 62 || code === 96) {
          return nok(code);
        }
        if (code === 34 || code === 39) {
          effects.consume(code);
          marker = code;
          return completeAttributeValueQuoted;
        }
        if (markdownSpace(code)) {
          effects.consume(code);
          return completeAttributeValueBefore;
        }
        marker = void 0;
        return completeAttributeValueUnquoted(code);
      }
      function completeAttributeValueQuoted(code) {
        if (code === marker) {
          effects.consume(code);
          return completeAttributeValueQuotedAfter;
        }
        if (code === null || markdownLineEnding(code)) {
          return nok(code);
        }
        effects.consume(code);
        return completeAttributeValueQuoted;
      }
      function completeAttributeValueUnquoted(code) {
        if (code === null || code === 34 || code === 39 || code === 60 || code === 61 || code === 62 || code === 96 || markdownLineEndingOrSpace(code)) {
          return completeAttributeNameAfter(code);
        }
        effects.consume(code);
        return completeAttributeValueUnquoted;
      }
      function completeAttributeValueQuotedAfter(code) {
        if (code === 47 || code === 62 || markdownSpace(code)) {
          return completeAttributeNameBefore(code);
        }
        return nok(code);
      }
      function completeEnd(code) {
        if (code === 62) {
          effects.consume(code);
          return completeAfter;
        }
        return nok(code);
      }
      function completeAfter(code) {
        if (markdownSpace(code)) {
          effects.consume(code);
          return completeAfter;
        }
        return code === null || markdownLineEnding(code) ? continuation(code) : nok(code);
      }
      function continuation(code) {
        if (code === 45 && kind === 2) {
          effects.consume(code);
          return continuationCommentInside;
        }
        if (code === 60 && kind === 1) {
          effects.consume(code);
          return continuationRawTagOpen;
        }
        if (code === 62 && kind === 4) {
          effects.consume(code);
          return continuationClose;
        }
        if (code === 63 && kind === 3) {
          effects.consume(code);
          return continuationDeclarationInside;
        }
        if (code === 93 && kind === 5) {
          effects.consume(code);
          return continuationCharacterDataInside;
        }
        if (markdownLineEnding(code) && (kind === 6 || kind === 7)) {
          return effects.check(
            nextBlankConstruct,
            continuationClose,
            continuationAtLineEnding
          )(code);
        }
        if (code === null || markdownLineEnding(code)) {
          return continuationAtLineEnding(code);
        }
        effects.consume(code);
        return continuation;
      }
      function continuationAtLineEnding(code) {
        effects.exit("htmlFlowData");
        return htmlContinueStart(code);
      }
      function htmlContinueStart(code) {
        if (code === null) {
          return done(code);
        }
        if (markdownLineEnding(code)) {
          effects.enter("lineEnding");
          effects.consume(code);
          effects.exit("lineEnding");
          return htmlContinueStart;
        }
        effects.enter("htmlFlowData");
        return continuation(code);
      }
      function continuationCommentInside(code) {
        if (code === 45) {
          effects.consume(code);
          return continuationDeclarationInside;
        }
        return continuation(code);
      }
      function continuationRawTagOpen(code) {
        if (code === 47) {
          effects.consume(code);
          buffer = "";
          return continuationRawEndTag;
        }
        return continuation(code);
      }
      function continuationRawEndTag(code) {
        if (code === 62 && htmlRawNames.indexOf(buffer.toLowerCase()) > -1) {
          effects.consume(code);
          return continuationClose;
        }
        if (asciiAlpha(code) && buffer.length < 8) {
          effects.consume(code);
          buffer += fromCharCode(code);
          return continuationRawEndTag;
        }
        return continuation(code);
      }
      function continuationCharacterDataInside(code) {
        if (code === 93) {
          effects.consume(code);
          return continuationDeclarationInside;
        }
        return continuation(code);
      }
      function continuationDeclarationInside(code) {
        if (code === 62) {
          effects.consume(code);
          return continuationClose;
        }
        return continuation(code);
      }
      function continuationClose(code) {
        if (code === null || markdownLineEnding(code)) {
          effects.exit("htmlFlowData");
          return done(code);
        }
        effects.consume(code);
        return continuationClose;
      }
      function done(code) {
        effects.exit("htmlFlow");
        return ok(code);
      }
    }
    function tokenizeNextBlank(effects, ok, nok) {
      return start;
      function start(code) {
        effects.exit("htmlFlowData");
        effects.enter("lineEndingBlank");
        effects.consume(code);
        effects.exit("lineEndingBlank");
        return effects.attempt(partialBlankLine, ok, nok);
      }
    }
    module.exports = htmlFlow;
  }
});

// node_modules/micromark/dist/tokenize/html-text.js
var require_html_text = __commonJS({
  "node_modules/micromark/dist/tokenize/html-text.js"(exports, module) {
    "use strict";
    var asciiAlpha = require_ascii_alpha();
    var asciiAlphanumeric = require_ascii_alphanumeric();
    var markdownLineEnding = require_markdown_line_ending();
    var markdownLineEndingOrSpace = require_markdown_line_ending_or_space();
    var markdownSpace = require_markdown_space();
    var factorySpace = require_factory_space();
    var htmlText = {
      name: "htmlText",
      tokenize: tokenizeHtmlText
    };
    function tokenizeHtmlText(effects, ok, nok) {
      var self2 = this;
      var marker;
      var buffer;
      var index;
      var returnState;
      return start;
      function start(code) {
        effects.enter("htmlText");
        effects.enter("htmlTextData");
        effects.consume(code);
        return open;
      }
      function open(code) {
        if (code === 33) {
          effects.consume(code);
          return declarationOpen;
        }
        if (code === 47) {
          effects.consume(code);
          return tagCloseStart;
        }
        if (code === 63) {
          effects.consume(code);
          return instruction;
        }
        if (asciiAlpha(code)) {
          effects.consume(code);
          return tagOpen;
        }
        return nok(code);
      }
      function declarationOpen(code) {
        if (code === 45) {
          effects.consume(code);
          return commentOpen;
        }
        if (code === 91) {
          effects.consume(code);
          buffer = "CDATA[";
          index = 0;
          return cdataOpen;
        }
        if (asciiAlpha(code)) {
          effects.consume(code);
          return declaration;
        }
        return nok(code);
      }
      function commentOpen(code) {
        if (code === 45) {
          effects.consume(code);
          return commentStart;
        }
        return nok(code);
      }
      function commentStart(code) {
        if (code === null || code === 62) {
          return nok(code);
        }
        if (code === 45) {
          effects.consume(code);
          return commentStartDash;
        }
        return comment(code);
      }
      function commentStartDash(code) {
        if (code === null || code === 62) {
          return nok(code);
        }
        return comment(code);
      }
      function comment(code) {
        if (code === null) {
          return nok(code);
        }
        if (code === 45) {
          effects.consume(code);
          return commentClose;
        }
        if (markdownLineEnding(code)) {
          returnState = comment;
          return atLineEnding(code);
        }
        effects.consume(code);
        return comment;
      }
      function commentClose(code) {
        if (code === 45) {
          effects.consume(code);
          return end;
        }
        return comment(code);
      }
      function cdataOpen(code) {
        if (code === buffer.charCodeAt(index++)) {
          effects.consume(code);
          return index === buffer.length ? cdata : cdataOpen;
        }
        return nok(code);
      }
      function cdata(code) {
        if (code === null) {
          return nok(code);
        }
        if (code === 93) {
          effects.consume(code);
          return cdataClose;
        }
        if (markdownLineEnding(code)) {
          returnState = cdata;
          return atLineEnding(code);
        }
        effects.consume(code);
        return cdata;
      }
      function cdataClose(code) {
        if (code === 93) {
          effects.consume(code);
          return cdataEnd;
        }
        return cdata(code);
      }
      function cdataEnd(code) {
        if (code === 62) {
          return end(code);
        }
        if (code === 93) {
          effects.consume(code);
          return cdataEnd;
        }
        return cdata(code);
      }
      function declaration(code) {
        if (code === null || code === 62) {
          return end(code);
        }
        if (markdownLineEnding(code)) {
          returnState = declaration;
          return atLineEnding(code);
        }
        effects.consume(code);
        return declaration;
      }
      function instruction(code) {
        if (code === null) {
          return nok(code);
        }
        if (code === 63) {
          effects.consume(code);
          return instructionClose;
        }
        if (markdownLineEnding(code)) {
          returnState = instruction;
          return atLineEnding(code);
        }
        effects.consume(code);
        return instruction;
      }
      function instructionClose(code) {
        return code === 62 ? end(code) : instruction(code);
      }
      function tagCloseStart(code) {
        if (asciiAlpha(code)) {
          effects.consume(code);
          return tagClose;
        }
        return nok(code);
      }
      function tagClose(code) {
        if (code === 45 || asciiAlphanumeric(code)) {
          effects.consume(code);
          return tagClose;
        }
        return tagCloseBetween(code);
      }
      function tagCloseBetween(code) {
        if (markdownLineEnding(code)) {
          returnState = tagCloseBetween;
          return atLineEnding(code);
        }
        if (markdownSpace(code)) {
          effects.consume(code);
          return tagCloseBetween;
        }
        return end(code);
      }
      function tagOpen(code) {
        if (code === 45 || asciiAlphanumeric(code)) {
          effects.consume(code);
          return tagOpen;
        }
        if (code === 47 || code === 62 || markdownLineEndingOrSpace(code)) {
          return tagOpenBetween(code);
        }
        return nok(code);
      }
      function tagOpenBetween(code) {
        if (code === 47) {
          effects.consume(code);
          return end;
        }
        if (code === 58 || code === 95 || asciiAlpha(code)) {
          effects.consume(code);
          return tagOpenAttributeName;
        }
        if (markdownLineEnding(code)) {
          returnState = tagOpenBetween;
          return atLineEnding(code);
        }
        if (markdownSpace(code)) {
          effects.consume(code);
          return tagOpenBetween;
        }
        return end(code);
      }
      function tagOpenAttributeName(code) {
        if (code === 45 || code === 46 || code === 58 || code === 95 || asciiAlphanumeric(code)) {
          effects.consume(code);
          return tagOpenAttributeName;
        }
        return tagOpenAttributeNameAfter(code);
      }
      function tagOpenAttributeNameAfter(code) {
        if (code === 61) {
          effects.consume(code);
          return tagOpenAttributeValueBefore;
        }
        if (markdownLineEnding(code)) {
          returnState = tagOpenAttributeNameAfter;
          return atLineEnding(code);
        }
        if (markdownSpace(code)) {
          effects.consume(code);
          return tagOpenAttributeNameAfter;
        }
        return tagOpenBetween(code);
      }
      function tagOpenAttributeValueBefore(code) {
        if (code === null || code === 60 || code === 61 || code === 62 || code === 96) {
          return nok(code);
        }
        if (code === 34 || code === 39) {
          effects.consume(code);
          marker = code;
          return tagOpenAttributeValueQuoted;
        }
        if (markdownLineEnding(code)) {
          returnState = tagOpenAttributeValueBefore;
          return atLineEnding(code);
        }
        if (markdownSpace(code)) {
          effects.consume(code);
          return tagOpenAttributeValueBefore;
        }
        effects.consume(code);
        marker = void 0;
        return tagOpenAttributeValueUnquoted;
      }
      function tagOpenAttributeValueQuoted(code) {
        if (code === marker) {
          effects.consume(code);
          return tagOpenAttributeValueQuotedAfter;
        }
        if (code === null) {
          return nok(code);
        }
        if (markdownLineEnding(code)) {
          returnState = tagOpenAttributeValueQuoted;
          return atLineEnding(code);
        }
        effects.consume(code);
        return tagOpenAttributeValueQuoted;
      }
      function tagOpenAttributeValueQuotedAfter(code) {
        if (code === 62 || code === 47 || markdownLineEndingOrSpace(code)) {
          return tagOpenBetween(code);
        }
        return nok(code);
      }
      function tagOpenAttributeValueUnquoted(code) {
        if (code === null || code === 34 || code === 39 || code === 60 || code === 61 || code === 96) {
          return nok(code);
        }
        if (code === 62 || markdownLineEndingOrSpace(code)) {
          return tagOpenBetween(code);
        }
        effects.consume(code);
        return tagOpenAttributeValueUnquoted;
      }
      function atLineEnding(code) {
        effects.exit("htmlTextData");
        effects.enter("lineEnding");
        effects.consume(code);
        effects.exit("lineEnding");
        return factorySpace(
          effects,
          afterPrefix,
          "linePrefix",
          self2.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4
        );
      }
      function afterPrefix(code) {
        effects.enter("htmlTextData");
        return returnState(code);
      }
      function end(code) {
        if (code === 62) {
          effects.consume(code);
          effects.exit("htmlTextData");
          effects.exit("htmlText");
          return ok;
        }
        return nok(code);
      }
    }
    module.exports = htmlText;
  }
});

// node_modules/micromark/dist/tokenize/label-end.js
var require_label_end = __commonJS({
  "node_modules/micromark/dist/tokenize/label-end.js"(exports, module) {
    "use strict";
    var markdownLineEndingOrSpace = require_markdown_line_ending_or_space();
    var chunkedPush = require_chunked_push();
    var chunkedSplice = require_chunked_splice();
    var normalizeIdentifier = require_normalize_identifier();
    var resolveAll = require_resolve_all();
    var shallow = require_shallow();
    var factoryDestination = require_factory_destination();
    var factoryLabel = require_factory_label();
    var factoryTitle = require_factory_title();
    var factoryWhitespace = require_factory_whitespace();
    var labelEnd = {
      name: "labelEnd",
      tokenize: tokenizeLabelEnd,
      resolveTo: resolveToLabelEnd,
      resolveAll: resolveAllLabelEnd
    };
    var resourceConstruct = {
      tokenize: tokenizeResource
    };
    var fullReferenceConstruct = {
      tokenize: tokenizeFullReference
    };
    var collapsedReferenceConstruct = {
      tokenize: tokenizeCollapsedReference
    };
    function resolveAllLabelEnd(events) {
      var index = -1;
      var token;
      while (++index < events.length) {
        token = events[index][1];
        if (!token._used && (token.type === "labelImage" || token.type === "labelLink" || token.type === "labelEnd")) {
          events.splice(index + 1, token.type === "labelImage" ? 4 : 2);
          token.type = "data";
          index++;
        }
      }
      return events;
    }
    function resolveToLabelEnd(events, context) {
      var index = events.length;
      var offset = 0;
      var group;
      var label;
      var text;
      var token;
      var open;
      var close;
      var media;
      while (index--) {
        token = events[index][1];
        if (open) {
          if (token.type === "link" || token.type === "labelLink" && token._inactive) {
            break;
          }
          if (events[index][0] === "enter" && token.type === "labelLink") {
            token._inactive = true;
          }
        } else if (close) {
          if (events[index][0] === "enter" && (token.type === "labelImage" || token.type === "labelLink") && !token._balanced) {
            open = index;
            if (token.type !== "labelLink") {
              offset = 2;
              break;
            }
          }
        } else if (token.type === "labelEnd") {
          close = index;
        }
      }
      group = {
        type: events[open][1].type === "labelLink" ? "link" : "image",
        start: shallow(events[open][1].start),
        end: shallow(events[events.length - 1][1].end)
      };
      label = {
        type: "label",
        start: shallow(events[open][1].start),
        end: shallow(events[close][1].end)
      };
      text = {
        type: "labelText",
        start: shallow(events[open + offset + 2][1].end),
        end: shallow(events[close - 2][1].start)
      };
      media = [
        ["enter", group, context],
        ["enter", label, context]
      ];
      media = chunkedPush(media, events.slice(open + 1, open + offset + 3));
      media = chunkedPush(media, [["enter", text, context]]);
      media = chunkedPush(
        media,
        resolveAll(
          context.parser.constructs.insideSpan.null,
          events.slice(open + offset + 4, close - 3),
          context
        )
      );
      media = chunkedPush(media, [
        ["exit", text, context],
        events[close - 2],
        events[close - 1],
        ["exit", label, context]
      ]);
      media = chunkedPush(media, events.slice(close + 1));
      media = chunkedPush(media, [["exit", group, context]]);
      chunkedSplice(events, open, events.length, media);
      return events;
    }
    function tokenizeLabelEnd(effects, ok, nok) {
      var self2 = this;
      var index = self2.events.length;
      var labelStart;
      var defined;
      while (index--) {
        if ((self2.events[index][1].type === "labelImage" || self2.events[index][1].type === "labelLink") && !self2.events[index][1]._balanced) {
          labelStart = self2.events[index][1];
          break;
        }
      }
      return start;
      function start(code) {
        if (!labelStart) {
          return nok(code);
        }
        if (labelStart._inactive) return balanced(code);
        defined = self2.parser.defined.indexOf(
          normalizeIdentifier(
            self2.sliceSerialize({
              start: labelStart.end,
              end: self2.now()
            })
          )
        ) > -1;
        effects.enter("labelEnd");
        effects.enter("labelMarker");
        effects.consume(code);
        effects.exit("labelMarker");
        effects.exit("labelEnd");
        return afterLabelEnd;
      }
      function afterLabelEnd(code) {
        if (code === 40) {
          return effects.attempt(
            resourceConstruct,
            ok,
            defined ? ok : balanced
          )(code);
        }
        if (code === 91) {
          return effects.attempt(
            fullReferenceConstruct,
            ok,
            defined ? effects.attempt(collapsedReferenceConstruct, ok, balanced) : balanced
          )(code);
        }
        return defined ? ok(code) : balanced(code);
      }
      function balanced(code) {
        labelStart._balanced = true;
        return nok(code);
      }
    }
    function tokenizeResource(effects, ok, nok) {
      return start;
      function start(code) {
        effects.enter("resource");
        effects.enter("resourceMarker");
        effects.consume(code);
        effects.exit("resourceMarker");
        return factoryWhitespace(effects, open);
      }
      function open(code) {
        if (code === 41) {
          return end(code);
        }
        return factoryDestination(
          effects,
          destinationAfter,
          nok,
          "resourceDestination",
          "resourceDestinationLiteral",
          "resourceDestinationLiteralMarker",
          "resourceDestinationRaw",
          "resourceDestinationString",
          3
        )(code);
      }
      function destinationAfter(code) {
        return markdownLineEndingOrSpace(code) ? factoryWhitespace(effects, between)(code) : end(code);
      }
      function between(code) {
        if (code === 34 || code === 39 || code === 40) {
          return factoryTitle(
            effects,
            factoryWhitespace(effects, end),
            nok,
            "resourceTitle",
            "resourceTitleMarker",
            "resourceTitleString"
          )(code);
        }
        return end(code);
      }
      function end(code) {
        if (code === 41) {
          effects.enter("resourceMarker");
          effects.consume(code);
          effects.exit("resourceMarker");
          effects.exit("resource");
          return ok;
        }
        return nok(code);
      }
    }
    function tokenizeFullReference(effects, ok, nok) {
      var self2 = this;
      return start;
      function start(code) {
        return factoryLabel.call(
          self2,
          effects,
          afterLabel,
          nok,
          "reference",
          "referenceMarker",
          "referenceString"
        )(code);
      }
      function afterLabel(code) {
        return self2.parser.defined.indexOf(
          normalizeIdentifier(
            self2.sliceSerialize(self2.events[self2.events.length - 1][1]).slice(1, -1)
          )
        ) < 0 ? nok(code) : ok(code);
      }
    }
    function tokenizeCollapsedReference(effects, ok, nok) {
      return start;
      function start(code) {
        effects.enter("reference");
        effects.enter("referenceMarker");
        effects.consume(code);
        effects.exit("referenceMarker");
        return open;
      }
      function open(code) {
        if (code === 93) {
          effects.enter("referenceMarker");
          effects.consume(code);
          effects.exit("referenceMarker");
          effects.exit("reference");
          return ok;
        }
        return nok(code);
      }
    }
    module.exports = labelEnd;
  }
});

// node_modules/micromark/dist/tokenize/label-start-image.js
var require_label_start_image = __commonJS({
  "node_modules/micromark/dist/tokenize/label-start-image.js"(exports, module) {
    "use strict";
    var labelEnd = require_label_end();
    var labelStartImage = {
      name: "labelStartImage",
      tokenize: tokenizeLabelStartImage,
      resolveAll: labelEnd.resolveAll
    };
    function tokenizeLabelStartImage(effects, ok, nok) {
      var self2 = this;
      return start;
      function start(code) {
        effects.enter("labelImage");
        effects.enter("labelImageMarker");
        effects.consume(code);
        effects.exit("labelImageMarker");
        return open;
      }
      function open(code) {
        if (code === 91) {
          effects.enter("labelMarker");
          effects.consume(code);
          effects.exit("labelMarker");
          effects.exit("labelImage");
          return after;
        }
        return nok(code);
      }
      function after(code) {
        return code === 94 && /* c8 ignore next */
        "_hiddenFootnoteSupport" in self2.parser.constructs ? (
          /* c8 ignore next */
          nok(code)
        ) : ok(code);
      }
    }
    module.exports = labelStartImage;
  }
});

// node_modules/micromark/dist/tokenize/label-start-link.js
var require_label_start_link = __commonJS({
  "node_modules/micromark/dist/tokenize/label-start-link.js"(exports, module) {
    "use strict";
    var labelEnd = require_label_end();
    var labelStartLink = {
      name: "labelStartLink",
      tokenize: tokenizeLabelStartLink,
      resolveAll: labelEnd.resolveAll
    };
    function tokenizeLabelStartLink(effects, ok, nok) {
      var self2 = this;
      return start;
      function start(code) {
        effects.enter("labelLink");
        effects.enter("labelMarker");
        effects.consume(code);
        effects.exit("labelMarker");
        effects.exit("labelLink");
        return after;
      }
      function after(code) {
        return code === 94 && /* c8 ignore next */
        "_hiddenFootnoteSupport" in self2.parser.constructs ? (
          /* c8 ignore next */
          nok(code)
        ) : ok(code);
      }
    }
    module.exports = labelStartLink;
  }
});

// node_modules/micromark/dist/tokenize/line-ending.js
var require_line_ending = __commonJS({
  "node_modules/micromark/dist/tokenize/line-ending.js"(exports, module) {
    "use strict";
    var factorySpace = require_factory_space();
    var lineEnding = {
      name: "lineEnding",
      tokenize: tokenizeLineEnding
    };
    function tokenizeLineEnding(effects, ok) {
      return start;
      function start(code) {
        effects.enter("lineEnding");
        effects.consume(code);
        effects.exit("lineEnding");
        return factorySpace(effects, ok, "linePrefix");
      }
    }
    module.exports = lineEnding;
  }
});

// node_modules/micromark/dist/tokenize/thematic-break.js
var require_thematic_break = __commonJS({
  "node_modules/micromark/dist/tokenize/thematic-break.js"(exports, module) {
    "use strict";
    var markdownLineEnding = require_markdown_line_ending();
    var markdownSpace = require_markdown_space();
    var factorySpace = require_factory_space();
    var thematicBreak = {
      name: "thematicBreak",
      tokenize: tokenizeThematicBreak
    };
    function tokenizeThematicBreak(effects, ok, nok) {
      var size = 0;
      var marker;
      return start;
      function start(code) {
        effects.enter("thematicBreak");
        marker = code;
        return atBreak(code);
      }
      function atBreak(code) {
        if (code === marker) {
          effects.enter("thematicBreakSequence");
          return sequence(code);
        }
        if (markdownSpace(code)) {
          return factorySpace(effects, atBreak, "whitespace")(code);
        }
        if (size < 3 || code !== null && !markdownLineEnding(code)) {
          return nok(code);
        }
        effects.exit("thematicBreak");
        return ok(code);
      }
      function sequence(code) {
        if (code === marker) {
          effects.consume(code);
          size++;
          return sequence;
        }
        effects.exit("thematicBreakSequence");
        return atBreak(code);
      }
    }
    module.exports = thematicBreak;
  }
});

// node_modules/micromark/dist/tokenize/list.js
var require_list = __commonJS({
  "node_modules/micromark/dist/tokenize/list.js"(exports, module) {
    "use strict";
    var asciiDigit = require_ascii_digit();
    var markdownSpace = require_markdown_space();
    var prefixSize = require_prefix_size();
    var sizeChunks = require_size_chunks();
    var factorySpace = require_factory_space();
    var partialBlankLine = require_partial_blank_line();
    var thematicBreak = require_thematic_break();
    var list = {
      name: "list",
      tokenize: tokenizeListStart,
      continuation: {
        tokenize: tokenizeListContinuation
      },
      exit: tokenizeListEnd
    };
    var listItemPrefixWhitespaceConstruct = {
      tokenize: tokenizeListItemPrefixWhitespace,
      partial: true
    };
    var indentConstruct = {
      tokenize: tokenizeIndent,
      partial: true
    };
    function tokenizeListStart(effects, ok, nok) {
      var self2 = this;
      var initialSize = prefixSize(self2.events, "linePrefix");
      var size = 0;
      return start;
      function start(code) {
        var kind = self2.containerState.type || (code === 42 || code === 43 || code === 45 ? "listUnordered" : "listOrdered");
        if (kind === "listUnordered" ? !self2.containerState.marker || code === self2.containerState.marker : asciiDigit(code)) {
          if (!self2.containerState.type) {
            self2.containerState.type = kind;
            effects.enter(kind, {
              _container: true
            });
          }
          if (kind === "listUnordered") {
            effects.enter("listItemPrefix");
            return code === 42 || code === 45 ? effects.check(thematicBreak, nok, atMarker)(code) : atMarker(code);
          }
          if (!self2.interrupt || code === 49) {
            effects.enter("listItemPrefix");
            effects.enter("listItemValue");
            return inside(code);
          }
        }
        return nok(code);
      }
      function inside(code) {
        if (asciiDigit(code) && ++size < 10) {
          effects.consume(code);
          return inside;
        }
        if ((!self2.interrupt || size < 2) && (self2.containerState.marker ? code === self2.containerState.marker : code === 41 || code === 46)) {
          effects.exit("listItemValue");
          return atMarker(code);
        }
        return nok(code);
      }
      function atMarker(code) {
        effects.enter("listItemMarker");
        effects.consume(code);
        effects.exit("listItemMarker");
        self2.containerState.marker = self2.containerState.marker || code;
        return effects.check(
          partialBlankLine,
          // Can’t be empty when interrupting.
          self2.interrupt ? nok : onBlank,
          effects.attempt(
            listItemPrefixWhitespaceConstruct,
            endOfPrefix,
            otherPrefix
          )
        );
      }
      function onBlank(code) {
        self2.containerState.initialBlankLine = true;
        initialSize++;
        return endOfPrefix(code);
      }
      function otherPrefix(code) {
        if (markdownSpace(code)) {
          effects.enter("listItemPrefixWhitespace");
          effects.consume(code);
          effects.exit("listItemPrefixWhitespace");
          return endOfPrefix;
        }
        return nok(code);
      }
      function endOfPrefix(code) {
        self2.containerState.size = initialSize + sizeChunks(self2.sliceStream(effects.exit("listItemPrefix")));
        return ok(code);
      }
    }
    function tokenizeListContinuation(effects, ok, nok) {
      var self2 = this;
      self2.containerState._closeFlow = void 0;
      return effects.check(partialBlankLine, onBlank, notBlank);
      function onBlank(code) {
        self2.containerState.furtherBlankLines = self2.containerState.furtherBlankLines || self2.containerState.initialBlankLine;
        return factorySpace(
          effects,
          ok,
          "listItemIndent",
          self2.containerState.size + 1
        )(code);
      }
      function notBlank(code) {
        if (self2.containerState.furtherBlankLines || !markdownSpace(code)) {
          self2.containerState.furtherBlankLines = self2.containerState.initialBlankLine = void 0;
          return notInCurrentItem(code);
        }
        self2.containerState.furtherBlankLines = self2.containerState.initialBlankLine = void 0;
        return effects.attempt(indentConstruct, ok, notInCurrentItem)(code);
      }
      function notInCurrentItem(code) {
        self2.containerState._closeFlow = true;
        self2.interrupt = void 0;
        return factorySpace(
          effects,
          effects.attempt(list, ok, nok),
          "linePrefix",
          self2.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4
        )(code);
      }
    }
    function tokenizeIndent(effects, ok, nok) {
      var self2 = this;
      return factorySpace(
        effects,
        afterPrefix,
        "listItemIndent",
        self2.containerState.size + 1
      );
      function afterPrefix(code) {
        return prefixSize(self2.events, "listItemIndent") === self2.containerState.size ? ok(code) : nok(code);
      }
    }
    function tokenizeListEnd(effects) {
      effects.exit(this.containerState.type);
    }
    function tokenizeListItemPrefixWhitespace(effects, ok, nok) {
      var self2 = this;
      return factorySpace(
        effects,
        afterPrefix,
        "listItemPrefixWhitespace",
        self2.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4 + 1
      );
      function afterPrefix(code) {
        return markdownSpace(code) || !prefixSize(self2.events, "listItemPrefixWhitespace") ? nok(code) : ok(code);
      }
    }
    module.exports = list;
  }
});

// node_modules/micromark/dist/tokenize/setext-underline.js
var require_setext_underline = __commonJS({
  "node_modules/micromark/dist/tokenize/setext-underline.js"(exports, module) {
    "use strict";
    var markdownLineEnding = require_markdown_line_ending();
    var shallow = require_shallow();
    var factorySpace = require_factory_space();
    var setextUnderline = {
      name: "setextUnderline",
      tokenize: tokenizeSetextUnderline,
      resolveTo: resolveToSetextUnderline
    };
    function resolveToSetextUnderline(events, context) {
      var index = events.length;
      var content;
      var text;
      var definition;
      var heading;
      while (index--) {
        if (events[index][0] === "enter") {
          if (events[index][1].type === "content") {
            content = index;
            break;
          }
          if (events[index][1].type === "paragraph") {
            text = index;
          }
        } else {
          if (events[index][1].type === "content") {
            events.splice(index, 1);
          }
          if (!definition && events[index][1].type === "definition") {
            definition = index;
          }
        }
      }
      heading = {
        type: "setextHeading",
        start: shallow(events[text][1].start),
        end: shallow(events[events.length - 1][1].end)
      };
      events[text][1].type = "setextHeadingText";
      if (definition) {
        events.splice(text, 0, ["enter", heading, context]);
        events.splice(definition + 1, 0, ["exit", events[content][1], context]);
        events[content][1].end = shallow(events[definition][1].end);
      } else {
        events[content][1] = heading;
      }
      events.push(["exit", heading, context]);
      return events;
    }
    function tokenizeSetextUnderline(effects, ok, nok) {
      var self2 = this;
      var index = self2.events.length;
      var marker;
      var paragraph;
      while (index--) {
        if (self2.events[index][1].type !== "lineEnding" && self2.events[index][1].type !== "linePrefix" && self2.events[index][1].type !== "content") {
          paragraph = self2.events[index][1].type === "paragraph";
          break;
        }
      }
      return start;
      function start(code) {
        if (!self2.lazy && (self2.interrupt || paragraph)) {
          effects.enter("setextHeadingLine");
          effects.enter("setextHeadingLineSequence");
          marker = code;
          return closingSequence(code);
        }
        return nok(code);
      }
      function closingSequence(code) {
        if (code === marker) {
          effects.consume(code);
          return closingSequence;
        }
        effects.exit("setextHeadingLineSequence");
        return factorySpace(effects, closingSequenceEnd, "lineSuffix")(code);
      }
      function closingSequenceEnd(code) {
        if (code === null || markdownLineEnding(code)) {
          effects.exit("setextHeadingLine");
          return ok(code);
        }
        return nok(code);
      }
    }
    module.exports = setextUnderline;
  }
});

// node_modules/micromark/dist/constructs.js
var require_constructs = __commonJS({
  "node_modules/micromark/dist/constructs.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var text$1 = require_text();
    var attention = require_attention();
    var autolink = require_autolink();
    var blockQuote = require_block_quote();
    var characterEscape = require_character_escape();
    var characterReference = require_character_reference();
    var codeFenced = require_code_fenced();
    var codeIndented = require_code_indented();
    var codeText = require_code_text();
    var definition = require_definition();
    var hardBreakEscape = require_hard_break_escape();
    var headingAtx = require_heading_atx();
    var htmlFlow = require_html_flow();
    var htmlText = require_html_text();
    var labelEnd = require_label_end();
    var labelStartImage = require_label_start_image();
    var labelStartLink = require_label_start_link();
    var lineEnding = require_line_ending();
    var list = require_list();
    var setextUnderline = require_setext_underline();
    var thematicBreak = require_thematic_break();
    var document2 = {
      42: list,
      // Asterisk
      43: list,
      // Plus sign
      45: list,
      // Dash
      48: list,
      // 0
      49: list,
      // 1
      50: list,
      // 2
      51: list,
      // 3
      52: list,
      // 4
      53: list,
      // 5
      54: list,
      // 6
      55: list,
      // 7
      56: list,
      // 8
      57: list,
      // 9
      62: blockQuote
      // Greater than
    };
    var contentInitial = {
      91: definition
      // Left square bracket
    };
    var flowInitial = {
      "-2": codeIndented,
      // Horizontal tab
      "-1": codeIndented,
      // Virtual space
      32: codeIndented
      // Space
    };
    var flow = {
      35: headingAtx,
      // Number sign
      42: thematicBreak,
      // Asterisk
      45: [setextUnderline, thematicBreak],
      // Dash
      60: htmlFlow,
      // Less than
      61: setextUnderline,
      // Equals to
      95: thematicBreak,
      // Underscore
      96: codeFenced,
      // Grave accent
      126: codeFenced
      // Tilde
    };
    var string = {
      38: characterReference,
      // Ampersand
      92: characterEscape
      // Backslash
    };
    var text = {
      "-5": lineEnding,
      // Carriage return
      "-4": lineEnding,
      // Line feed
      "-3": lineEnding,
      // Carriage return + line feed
      33: labelStartImage,
      // Exclamation mark
      38: characterReference,
      // Ampersand
      42: attention,
      // Asterisk
      60: [autolink, htmlText],
      // Less than
      91: labelStartLink,
      // Left square bracket
      92: [hardBreakEscape, characterEscape],
      // Backslash
      93: labelEnd,
      // Right square bracket
      95: attention,
      // Underscore
      96: codeText
      // Grave accent
    };
    var insideSpan = {
      null: [attention, text$1.resolver]
    };
    var disable = {
      null: []
    };
    exports.contentInitial = contentInitial;
    exports.disable = disable;
    exports.document = document2;
    exports.flow = flow;
    exports.flowInitial = flowInitial;
    exports.insideSpan = insideSpan;
    exports.string = string;
    exports.text = text;
  }
});

// node_modules/micromark/dist/parse.js
var require_parse = __commonJS({
  "node_modules/micromark/dist/parse.js"(exports, module) {
    "use strict";
    var content = require_content();
    var document2 = require_document();
    var flow = require_flow();
    var text = require_text();
    var combineExtensions = require_combine_extensions();
    var createTokenizer = require_create_tokenizer();
    var miniflat = require_miniflat();
    var constructs = require_constructs();
    function parse(options) {
      var settings = options || {};
      var parser = {
        defined: [],
        constructs: combineExtensions(
          [constructs].concat(miniflat(settings.extensions))
        ),
        content: create(content),
        document: create(document2),
        flow: create(flow),
        string: create(text.string),
        text: create(text.text)
      };
      return parser;
      function create(initializer) {
        return creator;
        function creator(from) {
          return createTokenizer(parser, initializer, from);
        }
      }
    }
    module.exports = parse;
  }
});

// node_modules/micromark/dist/postprocess.js
var require_postprocess = __commonJS({
  "node_modules/micromark/dist/postprocess.js"(exports, module) {
    "use strict";
    var subtokenize = require_subtokenize();
    function postprocess(events) {
      while (!subtokenize(events)) {
      }
      return events;
    }
    module.exports = postprocess;
  }
});

// node_modules/micromark/dist/preprocess.js
var require_preprocess = __commonJS({
  "node_modules/micromark/dist/preprocess.js"(exports, module) {
    "use strict";
    var search = /[\0\t\n\r]/g;
    function preprocess() {
      var start = true;
      var column = 1;
      var buffer = "";
      var atCarriageReturn;
      return preprocessor;
      function preprocessor(value, encoding, end) {
        var chunks = [];
        var match;
        var next;
        var startPosition;
        var endPosition;
        var code;
        value = buffer + value.toString(encoding);
        startPosition = 0;
        buffer = "";
        if (start) {
          if (value.charCodeAt(0) === 65279) {
            startPosition++;
          }
          start = void 0;
        }
        while (startPosition < value.length) {
          search.lastIndex = startPosition;
          match = search.exec(value);
          endPosition = match ? match.index : value.length;
          code = value.charCodeAt(endPosition);
          if (!match) {
            buffer = value.slice(startPosition);
            break;
          }
          if (code === 10 && startPosition === endPosition && atCarriageReturn) {
            chunks.push(-3);
            atCarriageReturn = void 0;
          } else {
            if (atCarriageReturn) {
              chunks.push(-5);
              atCarriageReturn = void 0;
            }
            if (startPosition < endPosition) {
              chunks.push(value.slice(startPosition, endPosition));
              column += endPosition - startPosition;
            }
            if (code === 0) {
              chunks.push(65533);
              column++;
            } else if (code === 9) {
              next = Math.ceil(column / 4) * 4;
              chunks.push(-2);
              while (column++ < next) chunks.push(-1);
            } else if (code === 10) {
              chunks.push(-4);
              column = 1;
            } else {
              atCarriageReturn = true;
              column = 1;
            }
          }
          startPosition = endPosition + 1;
        }
        if (end) {
          if (atCarriageReturn) chunks.push(-5);
          if (buffer) chunks.push(buffer);
          chunks.push(null);
        }
        return chunks;
      }
    }
    module.exports = preprocess;
  }
});

// node_modules/micromark/dist/index.js
var require_dist = __commonJS({
  "node_modules/micromark/dist/index.js"(exports, module) {
    "use strict";
    var html2 = require_html();
    var parse = require_parse();
    var postprocess = require_postprocess();
    var preprocess = require_preprocess();
    function buffer(value, encoding, options) {
      if (typeof encoding !== "string") {
        options = encoding;
        encoding = void 0;
      }
      return html2(options)(
        postprocess(
          parse(options).document().write(preprocess()(value, encoding, true))
        )
      );
    }
    module.exports = buffer;
  }
});

// node_modules/micromark/buffer.js
var require_buffer = __commonJS({
  "node_modules/micromark/buffer.js"(exports, module) {
    "use strict";
    module.exports = require_dist();
  }
});

// node_modules/micromark/index.js
var require_micromark = __commonJS({
  "node_modules/micromark/index.js"(exports, module) {
    "use strict";
    module.exports = require_buffer();
  }
});

// node_modules/striptags/src/striptags.js
var require_striptags = __commonJS({
  "node_modules/striptags/src/striptags.js"(exports, module) {
    "use strict";
    (function(global) {
      if (typeof Symbol2 !== "function") {
        var Symbol2 = function(name) {
          return name;
        };
        Symbol2.nonNative = true;
      }
      const STATE_PLAINTEXT = Symbol2("plaintext");
      const STATE_HTML = Symbol2("html");
      const STATE_COMMENT = Symbol2("comment");
      const ALLOWED_TAGS_REGEX = /<(\w*)>/g;
      const NORMALIZE_TAG_REGEX = /<\/?([^\s\/>]+)/;
      function striptags(html2, allowable_tags, tag_replacement) {
        html2 = html2 || "";
        allowable_tags = allowable_tags || [];
        tag_replacement = tag_replacement || "";
        let context = init_context(allowable_tags, tag_replacement);
        return striptags_internal(html2, context);
      }
      function init_striptags_stream(allowable_tags, tag_replacement) {
        allowable_tags = allowable_tags || [];
        tag_replacement = tag_replacement || "";
        let context = init_context(allowable_tags, tag_replacement);
        return function striptags_stream(html2) {
          return striptags_internal(html2 || "", context);
        };
      }
      striptags.init_streaming_mode = init_striptags_stream;
      function init_context(allowable_tags, tag_replacement) {
        allowable_tags = parse_allowable_tags(allowable_tags);
        return {
          allowable_tags,
          tag_replacement,
          state: STATE_PLAINTEXT,
          tag_buffer: "",
          depth: 0,
          in_quote_char: ""
        };
      }
      function striptags_internal(html2, context) {
        if (typeof html2 != "string") {
          throw new TypeError("'html' parameter must be a string");
        }
        let allowable_tags = context.allowable_tags;
        let tag_replacement = context.tag_replacement;
        let state = context.state;
        let tag_buffer = context.tag_buffer;
        let depth = context.depth;
        let in_quote_char = context.in_quote_char;
        let output = "";
        for (let idx = 0, length = html2.length; idx < length; idx++) {
          let char = html2[idx];
          if (state === STATE_PLAINTEXT) {
            switch (char) {
              case "<":
                state = STATE_HTML;
                tag_buffer += char;
                break;
              default:
                output += char;
                break;
            }
          } else if (state === STATE_HTML) {
            switch (char) {
              case "<":
                if (in_quote_char) {
                  break;
                }
                depth++;
                break;
              case ">":
                if (in_quote_char) {
                  break;
                }
                if (depth) {
                  depth--;
                  break;
                }
                in_quote_char = "";
                state = STATE_PLAINTEXT;
                tag_buffer += ">";
                if (allowable_tags.has(normalize_tag(tag_buffer))) {
                  output += tag_buffer;
                } else {
                  output += tag_replacement;
                }
                tag_buffer = "";
                break;
              case '"':
              case "'":
                if (char === in_quote_char) {
                  in_quote_char = "";
                } else {
                  in_quote_char = in_quote_char || char;
                }
                tag_buffer += char;
                break;
              case "-":
                if (tag_buffer === "<!-") {
                  state = STATE_COMMENT;
                }
                tag_buffer += char;
                break;
              case " ":
              case "\n":
                if (tag_buffer === "<") {
                  state = STATE_PLAINTEXT;
                  output += "< ";
                  tag_buffer = "";
                  break;
                }
                tag_buffer += char;
                break;
              default:
                tag_buffer += char;
                break;
            }
          } else if (state === STATE_COMMENT) {
            switch (char) {
              case ">":
                if (tag_buffer.slice(-2) == "--") {
                  state = STATE_PLAINTEXT;
                }
                tag_buffer = "";
                break;
              default:
                tag_buffer += char;
                break;
            }
          }
        }
        context.state = state;
        context.tag_buffer = tag_buffer;
        context.depth = depth;
        context.in_quote_char = in_quote_char;
        return output;
      }
      function parse_allowable_tags(allowable_tags) {
        let tag_set = /* @__PURE__ */ new Set();
        if (typeof allowable_tags === "string") {
          let match;
          while (match = ALLOWED_TAGS_REGEX.exec(allowable_tags)) {
            tag_set.add(match[1]);
          }
        } else if (!Symbol2.nonNative && typeof allowable_tags[Symbol2.iterator] === "function") {
          tag_set = new Set(allowable_tags);
        } else if (typeof allowable_tags.forEach === "function") {
          allowable_tags.forEach(tag_set.add, tag_set);
        }
        return tag_set;
      }
      function normalize_tag(tag_buffer) {
        let match = NORMALIZE_TAG_REGEX.exec(tag_buffer);
        return match ? match[1].toLowerCase() : null;
      }
      if (typeof define === "function" && define.amd) {
        define(function module_factory() {
          return striptags;
        });
      } else if (typeof module === "object" && module.exports) {
        module.exports = striptags;
      } else {
        global.striptags = striptags;
      }
    })(exports);
  }
});

// node_modules/feather-icons/dist/feather.js
var require_feather = __commonJS({
  "node_modules/feather-icons/dist/feather.js"(exports, module) {
    (function webpackUniversalModuleDefinition(root, factory) {
      if (typeof exports === "object" && typeof module === "object")
        module.exports = factory();
      else if (typeof define === "function" && define.amd)
        define([], factory);
      else if (typeof exports === "object")
        exports["feather"] = factory();
      else
        root["feather"] = factory();
    })(typeof self !== "undefined" ? self : exports, function() {
      return (
        /******/
        function(modules) {
          var installedModules = {};
          function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) {
              return installedModules[moduleId].exports;
            }
            var module2 = installedModules[moduleId] = {
              /******/
              i: moduleId,
              /******/
              l: false,
              /******/
              exports: {}
              /******/
            };
            modules[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
            module2.l = true;
            return module2.exports;
          }
          __webpack_require__.m = modules;
          __webpack_require__.c = installedModules;
          __webpack_require__.d = function(exports2, name, getter) {
            if (!__webpack_require__.o(exports2, name)) {
              Object.defineProperty(exports2, name, {
                /******/
                configurable: false,
                /******/
                enumerable: true,
                /******/
                get: getter
                /******/
              });
            }
          };
          __webpack_require__.r = function(exports2) {
            Object.defineProperty(exports2, "__esModule", { value: true });
          };
          __webpack_require__.n = function(module2) {
            var getter = module2 && module2.__esModule ? (
              /******/
              function getDefault() {
                return module2["default"];
              }
            ) : (
              /******/
              function getModuleExports() {
                return module2;
              }
            );
            __webpack_require__.d(getter, "a", getter);
            return getter;
          };
          __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
          };
          __webpack_require__.p = "";
          return __webpack_require__(__webpack_require__.s = 0);
        }({
          /***/
          "./dist/icons.json": (
            /*!*************************!*\
              !*** ./dist/icons.json ***!
              \*************************/
            /*! exports provided: activity, airplay, alert-circle, alert-octagon, alert-triangle, align-center, align-justify, align-left, align-right, anchor, aperture, archive, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, award, bar-chart-2, bar-chart, battery-charging, battery, bell-off, bell, bluetooth, bold, book-open, book, bookmark, box, briefcase, calendar, camera-off, camera, cast, check-circle, check-square, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, chrome, circle, clipboard, clock, cloud-drizzle, cloud-lightning, cloud-off, cloud-rain, cloud-snow, cloud, code, codepen, codesandbox, coffee, columns, command, compass, copy, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, cpu, credit-card, crop, crosshair, database, delete, disc, divide-circle, divide-square, divide, dollar-sign, download-cloud, download, dribbble, droplet, edit-2, edit-3, edit, external-link, eye-off, eye, facebook, fast-forward, feather, figma, file-minus, file-plus, file-text, file, film, filter, flag, folder-minus, folder-plus, folder, framer, frown, gift, git-branch, git-commit, git-merge, git-pull-request, github, gitlab, globe, grid, hard-drive, hash, headphones, heart, help-circle, hexagon, home, image, inbox, info, instagram, italic, key, layers, layout, life-buoy, link-2, link, linkedin, list, loader, lock, log-in, log-out, mail, map-pin, map, maximize-2, maximize, meh, menu, message-circle, message-square, mic-off, mic, minimize-2, minimize, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, mouse-pointer, move, music, navigation-2, navigation, octagon, package, paperclip, pause-circle, pause, pen-tool, percent, phone-call, phone-forwarded, phone-incoming, phone-missed, phone-off, phone-outgoing, phone, pie-chart, play-circle, play, plus-circle, plus-square, plus, pocket, power, printer, radio, refresh-ccw, refresh-cw, repeat, rewind, rotate-ccw, rotate-cw, rss, save, scissors, search, send, server, settings, share-2, share, shield-off, shield, shopping-bag, shopping-cart, shuffle, sidebar, skip-back, skip-forward, slack, slash, sliders, smartphone, smile, speaker, square, star, stop-circle, sun, sunrise, sunset, table, tablet, tag, target, terminal, thermometer, thumbs-down, thumbs-up, toggle-left, toggle-right, tool, trash-2, trash, trello, trending-down, trending-up, triangle, truck, tv, twitch, twitter, type, umbrella, underline, unlock, upload-cloud, upload, user-check, user-minus, user-plus, user-x, user, users, video-off, video, voicemail, volume-1, volume-2, volume-x, volume, watch, wifi-off, wifi, wind, x-circle, x-octagon, x-square, x, youtube, zap-off, zap, zoom-in, zoom-out, default */
            /***/
            function(module2) {
              module2.exports = { "activity": '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>', "airplay": '<path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon>', "alert-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>', "alert-octagon": '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>', "alert-triangle": '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>', "align-center": '<line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line>', "align-justify": '<line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line>', "align-left": '<line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line>', "align-right": '<line x1="21" y1="10" x2="7" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="7" y2="18"></line>', "anchor": '<circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>', "aperture": '<circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>', "archive": '<polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line>', "arrow-down-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line>', "arrow-down-left": '<line x1="17" y1="7" x2="7" y2="17"></line><polyline points="17 17 7 17 7 7"></polyline>', "arrow-down-right": '<line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline>', "arrow-down": '<line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline>', "arrow-left-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line>', "arrow-left": '<line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>', "arrow-right-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line>', "arrow-right": '<line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>', "arrow-up-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line>', "arrow-up-left": '<line x1="17" y1="17" x2="7" y2="7"></line><polyline points="7 17 7 7 17 7"></polyline>', "arrow-up-right": '<line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>', "arrow-up": '<line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline>', "at-sign": '<circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>', "award": '<circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>', "bar-chart-2": '<line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>', "bar-chart": '<line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line>', "battery-charging": '<path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"></path><line x1="23" y1="13" x2="23" y2="11"></line><polyline points="11 6 7 12 13 12 9 18"></polyline>', "battery": '<rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect><line x1="23" y1="13" x2="23" y2="11"></line>', "bell-off": '<path d="M13.73 21a2 2 0 0 1-3.46 0"></path><path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path><path d="M18 8a6 6 0 0 0-9.33-5"></path><line x1="1" y1="1" x2="23" y2="23"></line>', "bell": '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>', "bluetooth": '<polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"></polyline>', "bold": '<path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>', "book-open": '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>', "book": '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>', "bookmark": '<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>', "box": '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>', "briefcase": '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>', "calendar": '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>', "camera-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"></path>', "camera": '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle>', "cast": '<path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2.01" y2="20"></line>', "check-circle": '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>', "check-square": '<polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>', "check": '<polyline points="20 6 9 17 4 12"></polyline>', "chevron-down": '<polyline points="6 9 12 15 18 9"></polyline>', "chevron-left": '<polyline points="15 18 9 12 15 6"></polyline>', "chevron-right": '<polyline points="9 18 15 12 9 6"></polyline>', "chevron-up": '<polyline points="18 15 12 9 6 15"></polyline>', "chevrons-down": '<polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline>', "chevrons-left": '<polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline>', "chevrons-right": '<polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline>', "chevrons-up": '<polyline points="17 11 12 6 7 11"></polyline><polyline points="17 18 12 13 7 18"></polyline>', "chrome": '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>', "circle": '<circle cx="12" cy="12" r="10"></circle>', "clipboard": '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>', "clock": '<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>', "cloud-drizzle": '<line x1="8" y1="19" x2="8" y2="21"></line><line x1="8" y1="13" x2="8" y2="15"></line><line x1="16" y1="19" x2="16" y2="21"></line><line x1="16" y1="13" x2="16" y2="15"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="12" y1="15" x2="12" y2="17"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>', "cloud-lightning": '<path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path><polyline points="13 11 9 17 15 17 11 23"></polyline>', "cloud-off": '<path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path><line x1="1" y1="1" x2="23" y2="23"></line>', "cloud-rain": '<line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>', "cloud-snow": '<path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="8" y1="20" x2="8.01" y2="20"></line><line x1="12" y1="18" x2="12.01" y2="18"></line><line x1="12" y1="22" x2="12.01" y2="22"></line><line x1="16" y1="16" x2="16.01" y2="16"></line><line x1="16" y1="20" x2="16.01" y2="20"></line>', "cloud": '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>', "code": '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>', "codepen": '<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line>', "codesandbox": '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>', "coffee": '<path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line>', "columns": '<path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>', "command": '<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>', "compass": '<circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>', "copy": '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>', "corner-down-left": '<polyline points="9 10 4 15 9 20"></polyline><path d="M20 4v7a4 4 0 0 1-4 4H4"></path>', "corner-down-right": '<polyline points="15 10 20 15 15 20"></polyline><path d="M4 4v7a4 4 0 0 0 4 4h12"></path>', "corner-left-down": '<polyline points="14 15 9 20 4 15"></polyline><path d="M20 4h-7a4 4 0 0 0-4 4v12"></path>', "corner-left-up": '<polyline points="14 9 9 4 4 9"></polyline><path d="M20 20h-7a4 4 0 0 1-4-4V4"></path>', "corner-right-down": '<polyline points="10 15 15 20 20 15"></polyline><path d="M4 4h7a4 4 0 0 1 4 4v12"></path>', "corner-right-up": '<polyline points="10 9 15 4 20 9"></polyline><path d="M4 20h7a4 4 0 0 0 4-4V4"></path>', "corner-up-left": '<polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>', "corner-up-right": '<polyline points="15 14 20 9 15 4"></polyline><path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>', "cpu": '<rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line>', "credit-card": '<rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line>', "crop": '<path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"></path><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"></path>', "crosshair": '<circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line>', "database": '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>', "delete": '<path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line>', "disc": '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle>', "divide-circle": '<line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line><circle cx="12" cy="12" r="10"></circle>', "divide-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line>', "divide": '<circle cx="12" cy="6" r="2"></circle><line x1="5" y1="12" x2="19" y2="12"></line><circle cx="12" cy="18" r="2"></circle>', "dollar-sign": '<line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>', "download-cloud": '<polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>', "download": '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>', "dribbble": '<circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>', "droplet": '<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>', "edit-2": '<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>', "edit-3": '<path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>', "edit": '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>', "external-link": '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>', "eye-off": '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>', "eye": '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>', "facebook": '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>', "fast-forward": '<polygon points="13 19 22 12 13 5 13 19"></polygon><polygon points="2 19 11 12 2 5 2 19"></polygon>', "feather": '<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line>', "figma": '<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>', "file-minus": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="15" x2="15" y2="15"></line>', "file-plus": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line>', "file-text": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>', "file": '<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline>', "film": '<rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line>', "filter": '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>', "flag": '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line>', "folder-minus": '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="9" y1="14" x2="15" y2="14"></line>', "folder-plus": '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line>', "folder": '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>', "framer": '<path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"></path>', "frown": '<circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>', "gift": '<polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>', "git-branch": '<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>', "git-commit": '<circle cx="12" cy="12" r="4"></circle><line x1="1.05" y1="12" x2="7" y2="12"></line><line x1="17.01" y1="12" x2="22.96" y2="12"></line>', "git-merge": '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path>', "git-pull-request": '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line>', "github": '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>', "gitlab": '<path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>', "globe": '<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>', "grid": '<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>', "hard-drive": '<line x1="22" y1="12" x2="2" y2="12"></line><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6.01" y2="16"></line><line x1="10" y1="16" x2="10.01" y2="16"></line>', "hash": '<line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line>', "headphones": '<path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>', "heart": '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>', "help-circle": '<circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line>', "hexagon": '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>', "home": '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>', "image": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline>', "inbox": '<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>', "info": '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>', "instagram": '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>', "italic": '<line x1="19" y1="4" x2="10" y2="4"></line><line x1="14" y1="20" x2="5" y2="20"></line><line x1="15" y1="4" x2="9" y2="20"></line>', "key": '<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>', "layers": '<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>', "layout": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>', "life-buoy": '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>', "link-2": '<path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line>', "link": '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>', "linkedin": '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>', "list": '<line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>', "loader": '<line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>', "lock": '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>', "log-in": '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line>', "log-out": '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line>', "mail": '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>', "map-pin": '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>', "map": '<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line>', "maximize-2": '<polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line>', "maximize": '<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>', "meh": '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="15" x2="16" y2="15"></line><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>', "menu": '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>', "message-circle": '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>', "message-square": '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>', "mic-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>', "mic": '<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>', "minimize-2": '<polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line>', "minimize": '<path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>', "minus-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line>', "minus-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line>', "minus": '<line x1="5" y1="12" x2="19" y2="12"></line>', "monitor": '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>', "moon": '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>', "more-horizontal": '<circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>', "more-vertical": '<circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle>', "mouse-pointer": '<path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path><path d="M13 13l6 6"></path>', "move": '<polyline points="5 9 2 12 5 15"></polyline><polyline points="9 5 12 2 15 5"></polyline><polyline points="15 19 12 22 9 19"></polyline><polyline points="19 9 22 12 19 15"></polyline><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line>', "music": '<path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle>', "navigation-2": '<polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>', "navigation": '<polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>', "octagon": '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>', "package": '<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>', "paperclip": '<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>', "pause-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="10" y1="15" x2="10" y2="9"></line><line x1="14" y1="15" x2="14" y2="9"></line>', "pause": '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>', "pen-tool": '<path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle>', "percent": '<line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle>', "phone-call": '<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>', "phone-forwarded": '<polyline points="19 1 23 5 19 9"></polyline><line x1="15" y1="5" x2="23" y2="5"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>', "phone-incoming": '<polyline points="16 2 16 8 22 8"></polyline><line x1="23" y1="1" x2="16" y2="8"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>', "phone-missed": '<line x1="23" y1="1" x2="17" y2="7"></line><line x1="17" y1="1" x2="23" y2="7"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>', "phone-off": '<path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path><line x1="23" y1="1" x2="1" y2="23"></line>', "phone-outgoing": '<polyline points="23 7 23 1 17 1"></polyline><line x1="16" y1="8" x2="23" y2="1"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>', "phone": '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>', "pie-chart": '<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path>', "play-circle": '<circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon>', "play": '<polygon points="5 3 19 12 5 21 5 3"></polygon>', "plus-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>', "plus-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>', "plus": '<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>', "pocket": '<path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"></path><polyline points="8 10 12 14 16 10"></polyline>', "power": '<path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line>', "printer": '<polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect>', "radio": '<circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>', "refresh-ccw": '<polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>', "refresh-cw": '<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>', "repeat": '<polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path>', "rewind": '<polygon points="11 19 2 12 11 5 11 19"></polygon><polygon points="22 19 13 12 22 5 22 19"></polygon>', "rotate-ccw": '<polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>', "rotate-cw": '<polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>', "rss": '<path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle>', "save": '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline>', "scissors": '<circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line>', "search": '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>', "send": '<line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>', "server": '<rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line>', "settings": '<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>', "share-2": '<circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>', "share": '<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line>', "shield-off": '<path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"></path><path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"></path><line x1="1" y1="1" x2="23" y2="23"></line>', "shield": '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>', "shopping-bag": '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>', "shopping-cart": '<circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>', "shuffle": '<polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line>', "sidebar": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line>', "skip-back": '<polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line>', "skip-forward": '<polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line>', "slack": '<path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"></path><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"></path>', "slash": '<circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>', "sliders": '<line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line>', "smartphone": '<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>', "smile": '<circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>', "speaker": '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><circle cx="12" cy="14" r="4"></circle><line x1="12" y1="6" x2="12.01" y2="6"></line>', "square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>', "star": '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>', "stop-circle": '<circle cx="12" cy="12" r="10"></circle><rect x="9" y="9" width="6" height="6"></rect>', "sun": '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>', "sunrise": '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline>', "sunset": '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="9" x2="12" y2="2"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="16 5 12 9 8 5"></polyline>', "table": '<path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"></path>', "tablet": '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>', "tag": '<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line>', "target": '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>', "terminal": '<polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>', "thermometer": '<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>', "thumbs-down": '<path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>', "thumbs-up": '<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>', "toggle-left": '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="8" cy="12" r="3"></circle>', "toggle-right": '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="16" cy="12" r="3"></circle>', "tool": '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>', "trash-2": '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>', "trash": '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>', "trello": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="7" y="7" width="3" height="9"></rect><rect x="14" y="7" width="3" height="5"></rect>', "trending-down": '<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline>', "trending-up": '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>', "triangle": '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>', "truck": '<rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle>', "tv": '<rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline>', "twitch": '<path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>', "twitter": '<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>', "type": '<polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line>', "umbrella": '<path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"></path>', "underline": '<path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path><line x1="4" y1="21" x2="20" y2="21"></line>', "unlock": '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path>', "upload-cloud": '<polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline>', "upload": '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line>', "user-check": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline>', "user-minus": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="23" y1="11" x2="17" y2="11"></line>', "user-plus": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line>', "user-x": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="18" y1="8" x2="23" y2="13"></line><line x1="23" y1="8" x2="18" y2="13"></line>', "user": '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>', "users": '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>', "video-off": '<path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path><line x1="1" y1="1" x2="23" y2="23"></line>', "video": '<polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>', "voicemail": '<circle cx="5.5" cy="11.5" r="4.5"></circle><circle cx="18.5" cy="11.5" r="4.5"></circle><line x1="5.5" y1="16" x2="18.5" y2="16"></line>', "volume-1": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>', "volume-2": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>', "volume-x": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>', "volume": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>', "watch": '<circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path>', "wifi-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path><path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>', "wifi": '<path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>', "wind": '<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>', "x-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>', "x-octagon": '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>', "x-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line>', "x": '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>', "youtube": '<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>', "zap-off": '<polyline points="12.41 6.75 13 2 10.57 4.92"></polyline><polyline points="18.57 12.91 21 10 15.66 10"></polyline><polyline points="8 8 3 14 12 14 11 22 16 16"></polyline><line x1="1" y1="1" x2="23" y2="23"></line>', "zap": '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>', "zoom-in": '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line>', "zoom-out": '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line>' };
            }
          ),
          /***/
          "./node_modules/classnames/dedupe.js": (
            /*!*******************************************!*\
              !*** ./node_modules/classnames/dedupe.js ***!
              \*******************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
              (function() {
                "use strict";
                var classNames = function() {
                  function StorageObject() {
                  }
                  StorageObject.prototype = /* @__PURE__ */ Object.create(null);
                  function _parseArray(resultSet, array) {
                    var length = array.length;
                    for (var i = 0; i < length; ++i) {
                      _parse(resultSet, array[i]);
                    }
                  }
                  var hasOwn = {}.hasOwnProperty;
                  function _parseNumber(resultSet, num) {
                    resultSet[num] = true;
                  }
                  function _parseObject(resultSet, object) {
                    for (var k2 in object) {
                      if (hasOwn.call(object, k2)) {
                        resultSet[k2] = !!object[k2];
                      }
                    }
                  }
                  var SPACE = /\s+/;
                  function _parseString(resultSet, str) {
                    var array = str.split(SPACE);
                    var length = array.length;
                    for (var i = 0; i < length; ++i) {
                      resultSet[array[i]] = true;
                    }
                  }
                  function _parse(resultSet, arg) {
                    if (!arg) return;
                    var argType = typeof arg;
                    if (argType === "string") {
                      _parseString(resultSet, arg);
                    } else if (Array.isArray(arg)) {
                      _parseArray(resultSet, arg);
                    } else if (argType === "object") {
                      _parseObject(resultSet, arg);
                    } else if (argType === "number") {
                      _parseNumber(resultSet, arg);
                    }
                  }
                  function _classNames() {
                    var len = arguments.length;
                    var args = Array(len);
                    for (var i = 0; i < len; i++) {
                      args[i] = arguments[i];
                    }
                    var classSet = new StorageObject();
                    _parseArray(classSet, args);
                    var list = [];
                    for (var k2 in classSet) {
                      if (classSet[k2]) {
                        list.push(k2);
                      }
                    }
                    return list.join(" ");
                  }
                  return _classNames;
                }();
                if (typeof module2 !== "undefined" && module2.exports) {
                  module2.exports = classNames;
                } else if (true) {
                  !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
                    return classNames;
                  }.apply(exports2, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== void 0 && (module2.exports = __WEBPACK_AMD_DEFINE_RESULT__));
                } else {
                }
              })();
            }
          ),
          /***/
          "./node_modules/core-js/es/array/from.js": (
            /*!***********************************************!*\
              !*** ./node_modules/core-js/es/array/from.js ***!
              \***********************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              __webpack_require__(
                /*! ../../modules/es.string.iterator */
                "./node_modules/core-js/modules/es.string.iterator.js"
              );
              __webpack_require__(
                /*! ../../modules/es.array.from */
                "./node_modules/core-js/modules/es.array.from.js"
              );
              var path = __webpack_require__(
                /*! ../../internals/path */
                "./node_modules/core-js/internals/path.js"
              );
              module2.exports = path.Array.from;
            }
          ),
          /***/
          "./node_modules/core-js/internals/a-function.js": (
            /*!******************************************************!*\
              !*** ./node_modules/core-js/internals/a-function.js ***!
              \******************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2) {
              module2.exports = function(it) {
                if (typeof it != "function") {
                  throw TypeError(String(it) + " is not a function");
                }
                return it;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/an-object.js": (
            /*!*****************************************************!*\
              !*** ./node_modules/core-js/internals/an-object.js ***!
              \*****************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var isObject = __webpack_require__(
                /*! ../internals/is-object */
                "./node_modules/core-js/internals/is-object.js"
              );
              module2.exports = function(it) {
                if (!isObject(it)) {
                  throw TypeError(String(it) + " is not an object");
                }
                return it;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/array-from.js": (
            /*!******************************************************!*\
              !*** ./node_modules/core-js/internals/array-from.js ***!
              \******************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              var bind = __webpack_require__(
                /*! ../internals/bind-context */
                "./node_modules/core-js/internals/bind-context.js"
              );
              var toObject = __webpack_require__(
                /*! ../internals/to-object */
                "./node_modules/core-js/internals/to-object.js"
              );
              var callWithSafeIterationClosing = __webpack_require__(
                /*! ../internals/call-with-safe-iteration-closing */
                "./node_modules/core-js/internals/call-with-safe-iteration-closing.js"
              );
              var isArrayIteratorMethod = __webpack_require__(
                /*! ../internals/is-array-iterator-method */
                "./node_modules/core-js/internals/is-array-iterator-method.js"
              );
              var toLength = __webpack_require__(
                /*! ../internals/to-length */
                "./node_modules/core-js/internals/to-length.js"
              );
              var createProperty = __webpack_require__(
                /*! ../internals/create-property */
                "./node_modules/core-js/internals/create-property.js"
              );
              var getIteratorMethod = __webpack_require__(
                /*! ../internals/get-iterator-method */
                "./node_modules/core-js/internals/get-iterator-method.js"
              );
              module2.exports = function from(arrayLike) {
                var O2 = toObject(arrayLike);
                var C2 = typeof this == "function" ? this : Array;
                var argumentsLength = arguments.length;
                var mapfn = argumentsLength > 1 ? arguments[1] : void 0;
                var mapping = mapfn !== void 0;
                var index = 0;
                var iteratorMethod = getIteratorMethod(O2);
                var length, result, step, iterator;
                if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : void 0, 2);
                if (iteratorMethod != void 0 && !(C2 == Array && isArrayIteratorMethod(iteratorMethod))) {
                  iterator = iteratorMethod.call(O2);
                  result = new C2();
                  for (; !(step = iterator.next()).done; index++) {
                    createProperty(
                      result,
                      index,
                      mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value
                    );
                  }
                } else {
                  length = toLength(O2.length);
                  result = new C2(length);
                  for (; length > index; index++) {
                    createProperty(result, index, mapping ? mapfn(O2[index], index) : O2[index]);
                  }
                }
                result.length = index;
                return result;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/array-includes.js": (
            /*!**********************************************************!*\
              !*** ./node_modules/core-js/internals/array-includes.js ***!
              \**********************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var toIndexedObject = __webpack_require__(
                /*! ../internals/to-indexed-object */
                "./node_modules/core-js/internals/to-indexed-object.js"
              );
              var toLength = __webpack_require__(
                /*! ../internals/to-length */
                "./node_modules/core-js/internals/to-length.js"
              );
              var toAbsoluteIndex = __webpack_require__(
                /*! ../internals/to-absolute-index */
                "./node_modules/core-js/internals/to-absolute-index.js"
              );
              module2.exports = function(IS_INCLUDES) {
                return function($this, el, fromIndex) {
                  var O2 = toIndexedObject($this);
                  var length = toLength(O2.length);
                  var index = toAbsoluteIndex(fromIndex, length);
                  var value;
                  if (IS_INCLUDES && el != el) while (length > index) {
                    value = O2[index++];
                    if (value != value) return true;
                  }
                  else for (; length > index; index++) if (IS_INCLUDES || index in O2) {
                    if (O2[index] === el) return IS_INCLUDES || index || 0;
                  }
                  return !IS_INCLUDES && -1;
                };
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/bind-context.js": (
            /*!********************************************************!*\
              !*** ./node_modules/core-js/internals/bind-context.js ***!
              \********************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var aFunction = __webpack_require__(
                /*! ../internals/a-function */
                "./node_modules/core-js/internals/a-function.js"
              );
              module2.exports = function(fn, that, length) {
                aFunction(fn);
                if (that === void 0) return fn;
                switch (length) {
                  case 0:
                    return function() {
                      return fn.call(that);
                    };
                  case 1:
                    return function(a) {
                      return fn.call(that, a);
                    };
                  case 2:
                    return function(a, b2) {
                      return fn.call(that, a, b2);
                    };
                  case 3:
                    return function(a, b2, c) {
                      return fn.call(that, a, b2, c);
                    };
                }
                return function() {
                  return fn.apply(that, arguments);
                };
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/call-with-safe-iteration-closing.js": (
            /*!****************************************************************************!*\
              !*** ./node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
              \****************************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var anObject = __webpack_require__(
                /*! ../internals/an-object */
                "./node_modules/core-js/internals/an-object.js"
              );
              module2.exports = function(iterator, fn, value, ENTRIES) {
                try {
                  return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
                } catch (error) {
                  var returnMethod = iterator["return"];
                  if (returnMethod !== void 0) anObject(returnMethod.call(iterator));
                  throw error;
                }
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/check-correctness-of-iteration.js": (
            /*!**************************************************************************!*\
              !*** ./node_modules/core-js/internals/check-correctness-of-iteration.js ***!
              \**************************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var wellKnownSymbol = __webpack_require__(
                /*! ../internals/well-known-symbol */
                "./node_modules/core-js/internals/well-known-symbol.js"
              );
              var ITERATOR = wellKnownSymbol("iterator");
              var SAFE_CLOSING = false;
              try {
                var called = 0;
                var iteratorWithReturn = {
                  next: function() {
                    return { done: !!called++ };
                  },
                  "return": function() {
                    SAFE_CLOSING = true;
                  }
                };
                iteratorWithReturn[ITERATOR] = function() {
                  return this;
                };
                Array.from(iteratorWithReturn, function() {
                  throw 2;
                });
              } catch (error) {
              }
              module2.exports = function(exec, SKIP_CLOSING) {
                if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
                var ITERATION_SUPPORT = false;
                try {
                  var object = {};
                  object[ITERATOR] = function() {
                    return {
                      next: function() {
                        return { done: ITERATION_SUPPORT = true };
                      }
                    };
                  };
                  exec(object);
                } catch (error) {
                }
                return ITERATION_SUPPORT;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/classof-raw.js": (
            /*!*******************************************************!*\
              !*** ./node_modules/core-js/internals/classof-raw.js ***!
              \*******************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2) {
              var toString = {}.toString;
              module2.exports = function(it) {
                return toString.call(it).slice(8, -1);
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/classof.js": (
            /*!***************************************************!*\
              !*** ./node_modules/core-js/internals/classof.js ***!
              \***************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var classofRaw = __webpack_require__(
                /*! ../internals/classof-raw */
                "./node_modules/core-js/internals/classof-raw.js"
              );
              var wellKnownSymbol = __webpack_require__(
                /*! ../internals/well-known-symbol */
                "./node_modules/core-js/internals/well-known-symbol.js"
              );
              var TO_STRING_TAG = wellKnownSymbol("toStringTag");
              var CORRECT_ARGUMENTS = classofRaw(/* @__PURE__ */ function() {
                return arguments;
              }()) == "Arguments";
              var tryGet = function(it, key) {
                try {
                  return it[key];
                } catch (error) {
                }
              };
              module2.exports = function(it) {
                var O2, tag, result;
                return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O2 = Object(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O2) : (result = classofRaw(O2)) == "Object" && typeof O2.callee == "function" ? "Arguments" : result;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/copy-constructor-properties.js": (
            /*!***********************************************************************!*\
              !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
              \***********************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var has = __webpack_require__(
                /*! ../internals/has */
                "./node_modules/core-js/internals/has.js"
              );
              var ownKeys = __webpack_require__(
                /*! ../internals/own-keys */
                "./node_modules/core-js/internals/own-keys.js"
              );
              var getOwnPropertyDescriptorModule = __webpack_require__(
                /*! ../internals/object-get-own-property-descriptor */
                "./node_modules/core-js/internals/object-get-own-property-descriptor.js"
              );
              var definePropertyModule = __webpack_require__(
                /*! ../internals/object-define-property */
                "./node_modules/core-js/internals/object-define-property.js"
              );
              module2.exports = function(target, source) {
                var keys = ownKeys(source);
                var defineProperty = definePropertyModule.f;
                var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
                for (var i = 0; i < keys.length; i++) {
                  var key = keys[i];
                  if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
                }
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/correct-prototype-getter.js": (
            /*!********************************************************************!*\
              !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
              \********************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var fails = __webpack_require__(
                /*! ../internals/fails */
                "./node_modules/core-js/internals/fails.js"
              );
              module2.exports = !fails(function() {
                function F2() {
                }
                F2.prototype.constructor = null;
                return Object.getPrototypeOf(new F2()) !== F2.prototype;
              });
            }
          ),
          /***/
          "./node_modules/core-js/internals/create-iterator-constructor.js": (
            /*!***********************************************************************!*\
              !*** ./node_modules/core-js/internals/create-iterator-constructor.js ***!
              \***********************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              var IteratorPrototype = __webpack_require__(
                /*! ../internals/iterators-core */
                "./node_modules/core-js/internals/iterators-core.js"
              ).IteratorPrototype;
              var create = __webpack_require__(
                /*! ../internals/object-create */
                "./node_modules/core-js/internals/object-create.js"
              );
              var createPropertyDescriptor = __webpack_require__(
                /*! ../internals/create-property-descriptor */
                "./node_modules/core-js/internals/create-property-descriptor.js"
              );
              var setToStringTag = __webpack_require__(
                /*! ../internals/set-to-string-tag */
                "./node_modules/core-js/internals/set-to-string-tag.js"
              );
              var Iterators = __webpack_require__(
                /*! ../internals/iterators */
                "./node_modules/core-js/internals/iterators.js"
              );
              var returnThis = function() {
                return this;
              };
              module2.exports = function(IteratorConstructor, NAME, next) {
                var TO_STRING_TAG = NAME + " Iterator";
                IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
                setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
                Iterators[TO_STRING_TAG] = returnThis;
                return IteratorConstructor;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/create-property-descriptor.js": (
            /*!**********************************************************************!*\
              !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
              \**********************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2) {
              module2.exports = function(bitmap, value) {
                return {
                  enumerable: !(bitmap & 1),
                  configurable: !(bitmap & 2),
                  writable: !(bitmap & 4),
                  value
                };
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/create-property.js": (
            /*!***********************************************************!*\
              !*** ./node_modules/core-js/internals/create-property.js ***!
              \***********************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              var toPrimitive = __webpack_require__(
                /*! ../internals/to-primitive */
                "./node_modules/core-js/internals/to-primitive.js"
              );
              var definePropertyModule = __webpack_require__(
                /*! ../internals/object-define-property */
                "./node_modules/core-js/internals/object-define-property.js"
              );
              var createPropertyDescriptor = __webpack_require__(
                /*! ../internals/create-property-descriptor */
                "./node_modules/core-js/internals/create-property-descriptor.js"
              );
              module2.exports = function(object, key, value) {
                var propertyKey = toPrimitive(key);
                if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
                else object[propertyKey] = value;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/define-iterator.js": (
            /*!***********************************************************!*\
              !*** ./node_modules/core-js/internals/define-iterator.js ***!
              \***********************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              var $ = __webpack_require__(
                /*! ../internals/export */
                "./node_modules/core-js/internals/export.js"
              );
              var createIteratorConstructor = __webpack_require__(
                /*! ../internals/create-iterator-constructor */
                "./node_modules/core-js/internals/create-iterator-constructor.js"
              );
              var getPrototypeOf = __webpack_require__(
                /*! ../internals/object-get-prototype-of */
                "./node_modules/core-js/internals/object-get-prototype-of.js"
              );
              var setPrototypeOf = __webpack_require__(
                /*! ../internals/object-set-prototype-of */
                "./node_modules/core-js/internals/object-set-prototype-of.js"
              );
              var setToStringTag = __webpack_require__(
                /*! ../internals/set-to-string-tag */
                "./node_modules/core-js/internals/set-to-string-tag.js"
              );
              var hide = __webpack_require__(
                /*! ../internals/hide */
                "./node_modules/core-js/internals/hide.js"
              );
              var redefine = __webpack_require__(
                /*! ../internals/redefine */
                "./node_modules/core-js/internals/redefine.js"
              );
              var wellKnownSymbol = __webpack_require__(
                /*! ../internals/well-known-symbol */
                "./node_modules/core-js/internals/well-known-symbol.js"
              );
              var IS_PURE = __webpack_require__(
                /*! ../internals/is-pure */
                "./node_modules/core-js/internals/is-pure.js"
              );
              var Iterators = __webpack_require__(
                /*! ../internals/iterators */
                "./node_modules/core-js/internals/iterators.js"
              );
              var IteratorsCore = __webpack_require__(
                /*! ../internals/iterators-core */
                "./node_modules/core-js/internals/iterators-core.js"
              );
              var IteratorPrototype = IteratorsCore.IteratorPrototype;
              var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
              var ITERATOR = wellKnownSymbol("iterator");
              var KEYS = "keys";
              var VALUES = "values";
              var ENTRIES = "entries";
              var returnThis = function() {
                return this;
              };
              module2.exports = function(Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
                createIteratorConstructor(IteratorConstructor, NAME, next);
                var getIterationMethod = function(KIND) {
                  if (KIND === DEFAULT && defaultIterator) return defaultIterator;
                  if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
                  switch (KIND) {
                    case KEYS:
                      return function keys() {
                        return new IteratorConstructor(this, KIND);
                      };
                    case VALUES:
                      return function values() {
                        return new IteratorConstructor(this, KIND);
                      };
                    case ENTRIES:
                      return function entries() {
                        return new IteratorConstructor(this, KIND);
                      };
                  }
                  return function() {
                    return new IteratorConstructor(this);
                  };
                };
                var TO_STRING_TAG = NAME + " Iterator";
                var INCORRECT_VALUES_NAME = false;
                var IterablePrototype = Iterable.prototype;
                var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype["@@iterator"] || DEFAULT && IterablePrototype[DEFAULT];
                var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
                var anyNativeIterator = NAME == "Array" ? IterablePrototype.entries || nativeIterator : nativeIterator;
                var CurrentIteratorPrototype, methods, KEY;
                if (anyNativeIterator) {
                  CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
                  if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
                    if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
                      if (setPrototypeOf) {
                        setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
                      } else if (typeof CurrentIteratorPrototype[ITERATOR] != "function") {
                        hide(CurrentIteratorPrototype, ITERATOR, returnThis);
                      }
                    }
                    setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
                    if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
                  }
                }
                if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
                  INCORRECT_VALUES_NAME = true;
                  defaultIterator = function values() {
                    return nativeIterator.call(this);
                  };
                }
                if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
                  hide(IterablePrototype, ITERATOR, defaultIterator);
                }
                Iterators[NAME] = defaultIterator;
                if (DEFAULT) {
                  methods = {
                    values: getIterationMethod(VALUES),
                    keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
                    entries: getIterationMethod(ENTRIES)
                  };
                  if (FORCED) for (KEY in methods) {
                    if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
                      redefine(IterablePrototype, KEY, methods[KEY]);
                    }
                  }
                  else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
                }
                return methods;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/descriptors.js": (
            /*!*******************************************************!*\
              !*** ./node_modules/core-js/internals/descriptors.js ***!
              \*******************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var fails = __webpack_require__(
                /*! ../internals/fails */
                "./node_modules/core-js/internals/fails.js"
              );
              module2.exports = !fails(function() {
                return Object.defineProperty({}, "a", { get: function() {
                  return 7;
                } }).a != 7;
              });
            }
          ),
          /***/
          "./node_modules/core-js/internals/document-create-element.js": (
            /*!*******************************************************************!*\
              !*** ./node_modules/core-js/internals/document-create-element.js ***!
              \*******************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var global = __webpack_require__(
                /*! ../internals/global */
                "./node_modules/core-js/internals/global.js"
              );
              var isObject = __webpack_require__(
                /*! ../internals/is-object */
                "./node_modules/core-js/internals/is-object.js"
              );
              var document2 = global.document;
              var exist = isObject(document2) && isObject(document2.createElement);
              module2.exports = function(it) {
                return exist ? document2.createElement(it) : {};
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/enum-bug-keys.js": (
            /*!*********************************************************!*\
              !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
              \*********************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2) {
              module2.exports = [
                "constructor",
                "hasOwnProperty",
                "isPrototypeOf",
                "propertyIsEnumerable",
                "toLocaleString",
                "toString",
                "valueOf"
              ];
            }
          ),
          /***/
          "./node_modules/core-js/internals/export.js": (
            /*!**************************************************!*\
              !*** ./node_modules/core-js/internals/export.js ***!
              \**************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var global = __webpack_require__(
                /*! ../internals/global */
                "./node_modules/core-js/internals/global.js"
              );
              var getOwnPropertyDescriptor = __webpack_require__(
                /*! ../internals/object-get-own-property-descriptor */
                "./node_modules/core-js/internals/object-get-own-property-descriptor.js"
              ).f;
              var hide = __webpack_require__(
                /*! ../internals/hide */
                "./node_modules/core-js/internals/hide.js"
              );
              var redefine = __webpack_require__(
                /*! ../internals/redefine */
                "./node_modules/core-js/internals/redefine.js"
              );
              var setGlobal = __webpack_require__(
                /*! ../internals/set-global */
                "./node_modules/core-js/internals/set-global.js"
              );
              var copyConstructorProperties = __webpack_require__(
                /*! ../internals/copy-constructor-properties */
                "./node_modules/core-js/internals/copy-constructor-properties.js"
              );
              var isForced = __webpack_require__(
                /*! ../internals/is-forced */
                "./node_modules/core-js/internals/is-forced.js"
              );
              module2.exports = function(options, source) {
                var TARGET = options.target;
                var GLOBAL = options.global;
                var STATIC = options.stat;
                var FORCED, target, key, targetProperty, sourceProperty, descriptor;
                if (GLOBAL) {
                  target = global;
                } else if (STATIC) {
                  target = global[TARGET] || setGlobal(TARGET, {});
                } else {
                  target = (global[TARGET] || {}).prototype;
                }
                if (target) for (key in source) {
                  sourceProperty = source[key];
                  if (options.noTargetGet) {
                    descriptor = getOwnPropertyDescriptor(target, key);
                    targetProperty = descriptor && descriptor.value;
                  } else targetProperty = target[key];
                  FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
                  if (!FORCED && targetProperty !== void 0) {
                    if (typeof sourceProperty === typeof targetProperty) continue;
                    copyConstructorProperties(sourceProperty, targetProperty);
                  }
                  if (options.sham || targetProperty && targetProperty.sham) {
                    hide(sourceProperty, "sham", true);
                  }
                  redefine(target, key, sourceProperty, options);
                }
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/fails.js": (
            /*!*************************************************!*\
              !*** ./node_modules/core-js/internals/fails.js ***!
              \*************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2) {
              module2.exports = function(exec) {
                try {
                  return !!exec();
                } catch (error) {
                  return true;
                }
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/function-to-string.js": (
            /*!**************************************************************!*\
              !*** ./node_modules/core-js/internals/function-to-string.js ***!
              \**************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var shared = __webpack_require__(
                /*! ../internals/shared */
                "./node_modules/core-js/internals/shared.js"
              );
              module2.exports = shared("native-function-to-string", Function.toString);
            }
          ),
          /***/
          "./node_modules/core-js/internals/get-iterator-method.js": (
            /*!***************************************************************!*\
              !*** ./node_modules/core-js/internals/get-iterator-method.js ***!
              \***************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var classof = __webpack_require__(
                /*! ../internals/classof */
                "./node_modules/core-js/internals/classof.js"
              );
              var Iterators = __webpack_require__(
                /*! ../internals/iterators */
                "./node_modules/core-js/internals/iterators.js"
              );
              var wellKnownSymbol = __webpack_require__(
                /*! ../internals/well-known-symbol */
                "./node_modules/core-js/internals/well-known-symbol.js"
              );
              var ITERATOR = wellKnownSymbol("iterator");
              module2.exports = function(it) {
                if (it != void 0) return it[ITERATOR] || it["@@iterator"] || Iterators[classof(it)];
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/global.js": (
            /*!**************************************************!*\
              !*** ./node_modules/core-js/internals/global.js ***!
              \**************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              (function(global) {
                var O2 = "object";
                var check = function(it) {
                  return it && it.Math == Math && it;
                };
                module2.exports = // eslint-disable-next-line no-undef
                check(typeof globalThis == O2 && globalThis) || check(typeof window == O2 && window) || check(typeof self == O2 && self) || check(typeof global == O2 && global) || // eslint-disable-next-line no-new-func
                Function("return this")();
              }).call(this, __webpack_require__(
                /*! ./../../webpack/buildin/global.js */
                "./node_modules/webpack/buildin/global.js"
              ));
            }
          ),
          /***/
          "./node_modules/core-js/internals/has.js": (
            /*!***********************************************!*\
              !*** ./node_modules/core-js/internals/has.js ***!
              \***********************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2) {
              var hasOwnProperty = {}.hasOwnProperty;
              module2.exports = function(it, key) {
                return hasOwnProperty.call(it, key);
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/hidden-keys.js": (
            /*!*******************************************************!*\
              !*** ./node_modules/core-js/internals/hidden-keys.js ***!
              \*******************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2) {
              module2.exports = {};
            }
          ),
          /***/
          "./node_modules/core-js/internals/hide.js": (
            /*!************************************************!*\
              !*** ./node_modules/core-js/internals/hide.js ***!
              \************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var DESCRIPTORS = __webpack_require__(
                /*! ../internals/descriptors */
                "./node_modules/core-js/internals/descriptors.js"
              );
              var definePropertyModule = __webpack_require__(
                /*! ../internals/object-define-property */
                "./node_modules/core-js/internals/object-define-property.js"
              );
              var createPropertyDescriptor = __webpack_require__(
                /*! ../internals/create-property-descriptor */
                "./node_modules/core-js/internals/create-property-descriptor.js"
              );
              module2.exports = DESCRIPTORS ? function(object, key, value) {
                return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
              } : function(object, key, value) {
                object[key] = value;
                return object;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/html.js": (
            /*!************************************************!*\
              !*** ./node_modules/core-js/internals/html.js ***!
              \************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var global = __webpack_require__(
                /*! ../internals/global */
                "./node_modules/core-js/internals/global.js"
              );
              var document2 = global.document;
              module2.exports = document2 && document2.documentElement;
            }
          ),
          /***/
          "./node_modules/core-js/internals/ie8-dom-define.js": (
            /*!**********************************************************!*\
              !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
              \**********************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var DESCRIPTORS = __webpack_require__(
                /*! ../internals/descriptors */
                "./node_modules/core-js/internals/descriptors.js"
              );
              var fails = __webpack_require__(
                /*! ../internals/fails */
                "./node_modules/core-js/internals/fails.js"
              );
              var createElement = __webpack_require__(
                /*! ../internals/document-create-element */
                "./node_modules/core-js/internals/document-create-element.js"
              );
              module2.exports = !DESCRIPTORS && !fails(function() {
                return Object.defineProperty(createElement("div"), "a", {
                  get: function() {
                    return 7;
                  }
                }).a != 7;
              });
            }
          ),
          /***/
          "./node_modules/core-js/internals/indexed-object.js": (
            /*!**********************************************************!*\
              !*** ./node_modules/core-js/internals/indexed-object.js ***!
              \**********************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var fails = __webpack_require__(
                /*! ../internals/fails */
                "./node_modules/core-js/internals/fails.js"
              );
              var classof = __webpack_require__(
                /*! ../internals/classof-raw */
                "./node_modules/core-js/internals/classof-raw.js"
              );
              var split = "".split;
              module2.exports = fails(function() {
                return !Object("z").propertyIsEnumerable(0);
              }) ? function(it) {
                return classof(it) == "String" ? split.call(it, "") : Object(it);
              } : Object;
            }
          ),
          /***/
          "./node_modules/core-js/internals/internal-state.js": (
            /*!**********************************************************!*\
              !*** ./node_modules/core-js/internals/internal-state.js ***!
              \**********************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var NATIVE_WEAK_MAP = __webpack_require__(
                /*! ../internals/native-weak-map */
                "./node_modules/core-js/internals/native-weak-map.js"
              );
              var global = __webpack_require__(
                /*! ../internals/global */
                "./node_modules/core-js/internals/global.js"
              );
              var isObject = __webpack_require__(
                /*! ../internals/is-object */
                "./node_modules/core-js/internals/is-object.js"
              );
              var hide = __webpack_require__(
                /*! ../internals/hide */
                "./node_modules/core-js/internals/hide.js"
              );
              var objectHas = __webpack_require__(
                /*! ../internals/has */
                "./node_modules/core-js/internals/has.js"
              );
              var sharedKey = __webpack_require__(
                /*! ../internals/shared-key */
                "./node_modules/core-js/internals/shared-key.js"
              );
              var hiddenKeys = __webpack_require__(
                /*! ../internals/hidden-keys */
                "./node_modules/core-js/internals/hidden-keys.js"
              );
              var WeakMap = global.WeakMap;
              var set, get, has;
              var enforce = function(it) {
                return has(it) ? get(it) : set(it, {});
              };
              var getterFor = function(TYPE) {
                return function(it) {
                  var state;
                  if (!isObject(it) || (state = get(it)).type !== TYPE) {
                    throw TypeError("Incompatible receiver, " + TYPE + " required");
                  }
                  return state;
                };
              };
              if (NATIVE_WEAK_MAP) {
                var store = new WeakMap();
                var wmget = store.get;
                var wmhas = store.has;
                var wmset = store.set;
                set = function(it, metadata) {
                  wmset.call(store, it, metadata);
                  return metadata;
                };
                get = function(it) {
                  return wmget.call(store, it) || {};
                };
                has = function(it) {
                  return wmhas.call(store, it);
                };
              } else {
                var STATE = sharedKey("state");
                hiddenKeys[STATE] = true;
                set = function(it, metadata) {
                  hide(it, STATE, metadata);
                  return metadata;
                };
                get = function(it) {
                  return objectHas(it, STATE) ? it[STATE] : {};
                };
                has = function(it) {
                  return objectHas(it, STATE);
                };
              }
              module2.exports = {
                set,
                get,
                has,
                enforce,
                getterFor
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/is-array-iterator-method.js": (
            /*!********************************************************************!*\
              !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
              \********************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var wellKnownSymbol = __webpack_require__(
                /*! ../internals/well-known-symbol */
                "./node_modules/core-js/internals/well-known-symbol.js"
              );
              var Iterators = __webpack_require__(
                /*! ../internals/iterators */
                "./node_modules/core-js/internals/iterators.js"
              );
              var ITERATOR = wellKnownSymbol("iterator");
              var ArrayPrototype = Array.prototype;
              module2.exports = function(it) {
                return it !== void 0 && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/is-forced.js": (
            /*!*****************************************************!*\
              !*** ./node_modules/core-js/internals/is-forced.js ***!
              \*****************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var fails = __webpack_require__(
                /*! ../internals/fails */
                "./node_modules/core-js/internals/fails.js"
              );
              var replacement = /#|\.prototype\./;
              var isForced = function(feature, detection) {
                var value = data[normalize(feature)];
                return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == "function" ? fails(detection) : !!detection;
              };
              var normalize = isForced.normalize = function(string) {
                return String(string).replace(replacement, ".").toLowerCase();
              };
              var data = isForced.data = {};
              var NATIVE = isForced.NATIVE = "N";
              var POLYFILL = isForced.POLYFILL = "P";
              module2.exports = isForced;
            }
          ),
          /***/
          "./node_modules/core-js/internals/is-object.js": (
            /*!*****************************************************!*\
              !*** ./node_modules/core-js/internals/is-object.js ***!
              \*****************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2) {
              module2.exports = function(it) {
                return typeof it === "object" ? it !== null : typeof it === "function";
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/is-pure.js": (
            /*!***************************************************!*\
              !*** ./node_modules/core-js/internals/is-pure.js ***!
              \***************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2) {
              module2.exports = false;
            }
          ),
          /***/
          "./node_modules/core-js/internals/iterators-core.js": (
            /*!**********************************************************!*\
              !*** ./node_modules/core-js/internals/iterators-core.js ***!
              \**********************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              var getPrototypeOf = __webpack_require__(
                /*! ../internals/object-get-prototype-of */
                "./node_modules/core-js/internals/object-get-prototype-of.js"
              );
              var hide = __webpack_require__(
                /*! ../internals/hide */
                "./node_modules/core-js/internals/hide.js"
              );
              var has = __webpack_require__(
                /*! ../internals/has */
                "./node_modules/core-js/internals/has.js"
              );
              var wellKnownSymbol = __webpack_require__(
                /*! ../internals/well-known-symbol */
                "./node_modules/core-js/internals/well-known-symbol.js"
              );
              var IS_PURE = __webpack_require__(
                /*! ../internals/is-pure */
                "./node_modules/core-js/internals/is-pure.js"
              );
              var ITERATOR = wellKnownSymbol("iterator");
              var BUGGY_SAFARI_ITERATORS = false;
              var returnThis = function() {
                return this;
              };
              var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;
              if ([].keys) {
                arrayIterator = [].keys();
                if (!("next" in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
                else {
                  PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
                  if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
                }
              }
              if (IteratorPrototype == void 0) IteratorPrototype = {};
              if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
              module2.exports = {
                IteratorPrototype,
                BUGGY_SAFARI_ITERATORS
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/iterators.js": (
            /*!*****************************************************!*\
              !*** ./node_modules/core-js/internals/iterators.js ***!
              \*****************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2) {
              module2.exports = {};
            }
          ),
          /***/
          "./node_modules/core-js/internals/native-symbol.js": (
            /*!*********************************************************!*\
              !*** ./node_modules/core-js/internals/native-symbol.js ***!
              \*********************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var fails = __webpack_require__(
                /*! ../internals/fails */
                "./node_modules/core-js/internals/fails.js"
              );
              module2.exports = !!Object.getOwnPropertySymbols && !fails(function() {
                return !String(Symbol());
              });
            }
          ),
          /***/
          "./node_modules/core-js/internals/native-weak-map.js": (
            /*!***********************************************************!*\
              !*** ./node_modules/core-js/internals/native-weak-map.js ***!
              \***********************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var global = __webpack_require__(
                /*! ../internals/global */
                "./node_modules/core-js/internals/global.js"
              );
              var nativeFunctionToString = __webpack_require__(
                /*! ../internals/function-to-string */
                "./node_modules/core-js/internals/function-to-string.js"
              );
              var WeakMap = global.WeakMap;
              module2.exports = typeof WeakMap === "function" && /native code/.test(nativeFunctionToString.call(WeakMap));
            }
          ),
          /***/
          "./node_modules/core-js/internals/object-create.js": (
            /*!*********************************************************!*\
              !*** ./node_modules/core-js/internals/object-create.js ***!
              \*********************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var anObject = __webpack_require__(
                /*! ../internals/an-object */
                "./node_modules/core-js/internals/an-object.js"
              );
              var defineProperties = __webpack_require__(
                /*! ../internals/object-define-properties */
                "./node_modules/core-js/internals/object-define-properties.js"
              );
              var enumBugKeys = __webpack_require__(
                /*! ../internals/enum-bug-keys */
                "./node_modules/core-js/internals/enum-bug-keys.js"
              );
              var hiddenKeys = __webpack_require__(
                /*! ../internals/hidden-keys */
                "./node_modules/core-js/internals/hidden-keys.js"
              );
              var html2 = __webpack_require__(
                /*! ../internals/html */
                "./node_modules/core-js/internals/html.js"
              );
              var documentCreateElement = __webpack_require__(
                /*! ../internals/document-create-element */
                "./node_modules/core-js/internals/document-create-element.js"
              );
              var sharedKey = __webpack_require__(
                /*! ../internals/shared-key */
                "./node_modules/core-js/internals/shared-key.js"
              );
              var IE_PROTO = sharedKey("IE_PROTO");
              var PROTOTYPE = "prototype";
              var Empty = function() {
              };
              var createDict = function() {
                var iframe = documentCreateElement("iframe");
                var length = enumBugKeys.length;
                var lt = "<";
                var script = "script";
                var gt = ">";
                var js = "java" + script + ":";
                var iframeDocument;
                iframe.style.display = "none";
                html2.appendChild(iframe);
                iframe.src = String(js);
                iframeDocument = iframe.contentWindow.document;
                iframeDocument.open();
                iframeDocument.write(lt + script + gt + "document.F=Object" + lt + "/" + script + gt);
                iframeDocument.close();
                createDict = iframeDocument.F;
                while (length--) delete createDict[PROTOTYPE][enumBugKeys[length]];
                return createDict();
              };
              module2.exports = Object.create || function create(O2, Properties) {
                var result;
                if (O2 !== null) {
                  Empty[PROTOTYPE] = anObject(O2);
                  result = new Empty();
                  Empty[PROTOTYPE] = null;
                  result[IE_PROTO] = O2;
                } else result = createDict();
                return Properties === void 0 ? result : defineProperties(result, Properties);
              };
              hiddenKeys[IE_PROTO] = true;
            }
          ),
          /***/
          "./node_modules/core-js/internals/object-define-properties.js": (
            /*!********************************************************************!*\
              !*** ./node_modules/core-js/internals/object-define-properties.js ***!
              \********************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var DESCRIPTORS = __webpack_require__(
                /*! ../internals/descriptors */
                "./node_modules/core-js/internals/descriptors.js"
              );
              var definePropertyModule = __webpack_require__(
                /*! ../internals/object-define-property */
                "./node_modules/core-js/internals/object-define-property.js"
              );
              var anObject = __webpack_require__(
                /*! ../internals/an-object */
                "./node_modules/core-js/internals/an-object.js"
              );
              var objectKeys = __webpack_require__(
                /*! ../internals/object-keys */
                "./node_modules/core-js/internals/object-keys.js"
              );
              module2.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O2, Properties) {
                anObject(O2);
                var keys = objectKeys(Properties);
                var length = keys.length;
                var i = 0;
                var key;
                while (length > i) definePropertyModule.f(O2, key = keys[i++], Properties[key]);
                return O2;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/object-define-property.js": (
            /*!******************************************************************!*\
              !*** ./node_modules/core-js/internals/object-define-property.js ***!
              \******************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var DESCRIPTORS = __webpack_require__(
                /*! ../internals/descriptors */
                "./node_modules/core-js/internals/descriptors.js"
              );
              var IE8_DOM_DEFINE = __webpack_require__(
                /*! ../internals/ie8-dom-define */
                "./node_modules/core-js/internals/ie8-dom-define.js"
              );
              var anObject = __webpack_require__(
                /*! ../internals/an-object */
                "./node_modules/core-js/internals/an-object.js"
              );
              var toPrimitive = __webpack_require__(
                /*! ../internals/to-primitive */
                "./node_modules/core-js/internals/to-primitive.js"
              );
              var nativeDefineProperty = Object.defineProperty;
              exports2.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O2, P2, Attributes) {
                anObject(O2);
                P2 = toPrimitive(P2, true);
                anObject(Attributes);
                if (IE8_DOM_DEFINE) try {
                  return nativeDefineProperty(O2, P2, Attributes);
                } catch (error) {
                }
                if ("get" in Attributes || "set" in Attributes) throw TypeError("Accessors not supported");
                if ("value" in Attributes) O2[P2] = Attributes.value;
                return O2;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/object-get-own-property-descriptor.js": (
            /*!******************************************************************************!*\
              !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
              \******************************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var DESCRIPTORS = __webpack_require__(
                /*! ../internals/descriptors */
                "./node_modules/core-js/internals/descriptors.js"
              );
              var propertyIsEnumerableModule = __webpack_require__(
                /*! ../internals/object-property-is-enumerable */
                "./node_modules/core-js/internals/object-property-is-enumerable.js"
              );
              var createPropertyDescriptor = __webpack_require__(
                /*! ../internals/create-property-descriptor */
                "./node_modules/core-js/internals/create-property-descriptor.js"
              );
              var toIndexedObject = __webpack_require__(
                /*! ../internals/to-indexed-object */
                "./node_modules/core-js/internals/to-indexed-object.js"
              );
              var toPrimitive = __webpack_require__(
                /*! ../internals/to-primitive */
                "./node_modules/core-js/internals/to-primitive.js"
              );
              var has = __webpack_require__(
                /*! ../internals/has */
                "./node_modules/core-js/internals/has.js"
              );
              var IE8_DOM_DEFINE = __webpack_require__(
                /*! ../internals/ie8-dom-define */
                "./node_modules/core-js/internals/ie8-dom-define.js"
              );
              var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
              exports2.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O2, P2) {
                O2 = toIndexedObject(O2);
                P2 = toPrimitive(P2, true);
                if (IE8_DOM_DEFINE) try {
                  return nativeGetOwnPropertyDescriptor(O2, P2);
                } catch (error) {
                }
                if (has(O2, P2)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O2, P2), O2[P2]);
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/object-get-own-property-names.js": (
            /*!*************************************************************************!*\
              !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
              \*************************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var internalObjectKeys = __webpack_require__(
                /*! ../internals/object-keys-internal */
                "./node_modules/core-js/internals/object-keys-internal.js"
              );
              var enumBugKeys = __webpack_require__(
                /*! ../internals/enum-bug-keys */
                "./node_modules/core-js/internals/enum-bug-keys.js"
              );
              var hiddenKeys = enumBugKeys.concat("length", "prototype");
              exports2.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O2) {
                return internalObjectKeys(O2, hiddenKeys);
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/object-get-own-property-symbols.js": (
            /*!***************************************************************************!*\
              !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
              \***************************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2) {
              exports2.f = Object.getOwnPropertySymbols;
            }
          ),
          /***/
          "./node_modules/core-js/internals/object-get-prototype-of.js": (
            /*!*******************************************************************!*\
              !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
              \*******************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var has = __webpack_require__(
                /*! ../internals/has */
                "./node_modules/core-js/internals/has.js"
              );
              var toObject = __webpack_require__(
                /*! ../internals/to-object */
                "./node_modules/core-js/internals/to-object.js"
              );
              var sharedKey = __webpack_require__(
                /*! ../internals/shared-key */
                "./node_modules/core-js/internals/shared-key.js"
              );
              var CORRECT_PROTOTYPE_GETTER = __webpack_require__(
                /*! ../internals/correct-prototype-getter */
                "./node_modules/core-js/internals/correct-prototype-getter.js"
              );
              var IE_PROTO = sharedKey("IE_PROTO");
              var ObjectPrototype = Object.prototype;
              module2.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function(O2) {
                O2 = toObject(O2);
                if (has(O2, IE_PROTO)) return O2[IE_PROTO];
                if (typeof O2.constructor == "function" && O2 instanceof O2.constructor) {
                  return O2.constructor.prototype;
                }
                return O2 instanceof Object ? ObjectPrototype : null;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/object-keys-internal.js": (
            /*!****************************************************************!*\
              !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
              \****************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var has = __webpack_require__(
                /*! ../internals/has */
                "./node_modules/core-js/internals/has.js"
              );
              var toIndexedObject = __webpack_require__(
                /*! ../internals/to-indexed-object */
                "./node_modules/core-js/internals/to-indexed-object.js"
              );
              var arrayIncludes = __webpack_require__(
                /*! ../internals/array-includes */
                "./node_modules/core-js/internals/array-includes.js"
              );
              var hiddenKeys = __webpack_require__(
                /*! ../internals/hidden-keys */
                "./node_modules/core-js/internals/hidden-keys.js"
              );
              var arrayIndexOf = arrayIncludes(false);
              module2.exports = function(object, names) {
                var O2 = toIndexedObject(object);
                var i = 0;
                var result = [];
                var key;
                for (key in O2) !has(hiddenKeys, key) && has(O2, key) && result.push(key);
                while (names.length > i) if (has(O2, key = names[i++])) {
                  ~arrayIndexOf(result, key) || result.push(key);
                }
                return result;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/object-keys.js": (
            /*!*******************************************************!*\
              !*** ./node_modules/core-js/internals/object-keys.js ***!
              \*******************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var internalObjectKeys = __webpack_require__(
                /*! ../internals/object-keys-internal */
                "./node_modules/core-js/internals/object-keys-internal.js"
              );
              var enumBugKeys = __webpack_require__(
                /*! ../internals/enum-bug-keys */
                "./node_modules/core-js/internals/enum-bug-keys.js"
              );
              module2.exports = Object.keys || function keys(O2) {
                return internalObjectKeys(O2, enumBugKeys);
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/object-property-is-enumerable.js": (
            /*!*************************************************************************!*\
              !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
              \*************************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
              var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
              var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);
              exports2.f = NASHORN_BUG ? function propertyIsEnumerable(V2) {
                var descriptor = getOwnPropertyDescriptor(this, V2);
                return !!descriptor && descriptor.enumerable;
              } : nativePropertyIsEnumerable;
            }
          ),
          /***/
          "./node_modules/core-js/internals/object-set-prototype-of.js": (
            /*!*******************************************************************!*\
              !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
              \*******************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var validateSetPrototypeOfArguments = __webpack_require__(
                /*! ../internals/validate-set-prototype-of-arguments */
                "./node_modules/core-js/internals/validate-set-prototype-of-arguments.js"
              );
              module2.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
                var correctSetter = false;
                var test = {};
                var setter;
                try {
                  setter = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set;
                  setter.call(test, []);
                  correctSetter = test instanceof Array;
                } catch (error) {
                }
                return function setPrototypeOf(O2, proto) {
                  validateSetPrototypeOfArguments(O2, proto);
                  if (correctSetter) setter.call(O2, proto);
                  else O2.__proto__ = proto;
                  return O2;
                };
              }() : void 0);
            }
          ),
          /***/
          "./node_modules/core-js/internals/own-keys.js": (
            /*!****************************************************!*\
              !*** ./node_modules/core-js/internals/own-keys.js ***!
              \****************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var global = __webpack_require__(
                /*! ../internals/global */
                "./node_modules/core-js/internals/global.js"
              );
              var getOwnPropertyNamesModule = __webpack_require__(
                /*! ../internals/object-get-own-property-names */
                "./node_modules/core-js/internals/object-get-own-property-names.js"
              );
              var getOwnPropertySymbolsModule = __webpack_require__(
                /*! ../internals/object-get-own-property-symbols */
                "./node_modules/core-js/internals/object-get-own-property-symbols.js"
              );
              var anObject = __webpack_require__(
                /*! ../internals/an-object */
                "./node_modules/core-js/internals/an-object.js"
              );
              var Reflect2 = global.Reflect;
              module2.exports = Reflect2 && Reflect2.ownKeys || function ownKeys(it) {
                var keys = getOwnPropertyNamesModule.f(anObject(it));
                var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
                return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/path.js": (
            /*!************************************************!*\
              !*** ./node_modules/core-js/internals/path.js ***!
              \************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              module2.exports = __webpack_require__(
                /*! ../internals/global */
                "./node_modules/core-js/internals/global.js"
              );
            }
          ),
          /***/
          "./node_modules/core-js/internals/redefine.js": (
            /*!****************************************************!*\
              !*** ./node_modules/core-js/internals/redefine.js ***!
              \****************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var global = __webpack_require__(
                /*! ../internals/global */
                "./node_modules/core-js/internals/global.js"
              );
              var shared = __webpack_require__(
                /*! ../internals/shared */
                "./node_modules/core-js/internals/shared.js"
              );
              var hide = __webpack_require__(
                /*! ../internals/hide */
                "./node_modules/core-js/internals/hide.js"
              );
              var has = __webpack_require__(
                /*! ../internals/has */
                "./node_modules/core-js/internals/has.js"
              );
              var setGlobal = __webpack_require__(
                /*! ../internals/set-global */
                "./node_modules/core-js/internals/set-global.js"
              );
              var nativeFunctionToString = __webpack_require__(
                /*! ../internals/function-to-string */
                "./node_modules/core-js/internals/function-to-string.js"
              );
              var InternalStateModule = __webpack_require__(
                /*! ../internals/internal-state */
                "./node_modules/core-js/internals/internal-state.js"
              );
              var getInternalState = InternalStateModule.get;
              var enforceInternalState = InternalStateModule.enforce;
              var TEMPLATE = String(nativeFunctionToString).split("toString");
              shared("inspectSource", function(it) {
                return nativeFunctionToString.call(it);
              });
              (module2.exports = function(O2, key, value, options) {
                var unsafe = options ? !!options.unsafe : false;
                var simple = options ? !!options.enumerable : false;
                var noTargetGet = options ? !!options.noTargetGet : false;
                if (typeof value == "function") {
                  if (typeof key == "string" && !has(value, "name")) hide(value, "name", key);
                  enforceInternalState(value).source = TEMPLATE.join(typeof key == "string" ? key : "");
                }
                if (O2 === global) {
                  if (simple) O2[key] = value;
                  else setGlobal(key, value);
                  return;
                } else if (!unsafe) {
                  delete O2[key];
                } else if (!noTargetGet && O2[key]) {
                  simple = true;
                }
                if (simple) O2[key] = value;
                else hide(O2, key, value);
              })(Function.prototype, "toString", function toString() {
                return typeof this == "function" && getInternalState(this).source || nativeFunctionToString.call(this);
              });
            }
          ),
          /***/
          "./node_modules/core-js/internals/require-object-coercible.js": (
            /*!********************************************************************!*\
              !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
              \********************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2) {
              module2.exports = function(it) {
                if (it == void 0) throw TypeError("Can't call method on " + it);
                return it;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/set-global.js": (
            /*!******************************************************!*\
              !*** ./node_modules/core-js/internals/set-global.js ***!
              \******************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var global = __webpack_require__(
                /*! ../internals/global */
                "./node_modules/core-js/internals/global.js"
              );
              var hide = __webpack_require__(
                /*! ../internals/hide */
                "./node_modules/core-js/internals/hide.js"
              );
              module2.exports = function(key, value) {
                try {
                  hide(global, key, value);
                } catch (error) {
                  global[key] = value;
                }
                return value;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/set-to-string-tag.js": (
            /*!*************************************************************!*\
              !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
              \*************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var defineProperty = __webpack_require__(
                /*! ../internals/object-define-property */
                "./node_modules/core-js/internals/object-define-property.js"
              ).f;
              var has = __webpack_require__(
                /*! ../internals/has */
                "./node_modules/core-js/internals/has.js"
              );
              var wellKnownSymbol = __webpack_require__(
                /*! ../internals/well-known-symbol */
                "./node_modules/core-js/internals/well-known-symbol.js"
              );
              var TO_STRING_TAG = wellKnownSymbol("toStringTag");
              module2.exports = function(it, TAG, STATIC) {
                if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
                  defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
                }
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/shared-key.js": (
            /*!******************************************************!*\
              !*** ./node_modules/core-js/internals/shared-key.js ***!
              \******************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var shared = __webpack_require__(
                /*! ../internals/shared */
                "./node_modules/core-js/internals/shared.js"
              );
              var uid = __webpack_require__(
                /*! ../internals/uid */
                "./node_modules/core-js/internals/uid.js"
              );
              var keys = shared("keys");
              module2.exports = function(key) {
                return keys[key] || (keys[key] = uid(key));
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/shared.js": (
            /*!**************************************************!*\
              !*** ./node_modules/core-js/internals/shared.js ***!
              \**************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var global = __webpack_require__(
                /*! ../internals/global */
                "./node_modules/core-js/internals/global.js"
              );
              var setGlobal = __webpack_require__(
                /*! ../internals/set-global */
                "./node_modules/core-js/internals/set-global.js"
              );
              var IS_PURE = __webpack_require__(
                /*! ../internals/is-pure */
                "./node_modules/core-js/internals/is-pure.js"
              );
              var SHARED = "__core-js_shared__";
              var store = global[SHARED] || setGlobal(SHARED, {});
              (module2.exports = function(key, value) {
                return store[key] || (store[key] = value !== void 0 ? value : {});
              })("versions", []).push({
                version: "3.1.3",
                mode: IS_PURE ? "pure" : "global",
                copyright: "\xA9 2019 Denis Pushkarev (zloirock.ru)"
              });
            }
          ),
          /***/
          "./node_modules/core-js/internals/string-at.js": (
            /*!*****************************************************!*\
              !*** ./node_modules/core-js/internals/string-at.js ***!
              \*****************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var toInteger = __webpack_require__(
                /*! ../internals/to-integer */
                "./node_modules/core-js/internals/to-integer.js"
              );
              var requireObjectCoercible = __webpack_require__(
                /*! ../internals/require-object-coercible */
                "./node_modules/core-js/internals/require-object-coercible.js"
              );
              module2.exports = function(that, pos, CONVERT_TO_STRING) {
                var S2 = String(requireObjectCoercible(that));
                var position = toInteger(pos);
                var size = S2.length;
                var first, second;
                if (position < 0 || position >= size) return CONVERT_TO_STRING ? "" : void 0;
                first = S2.charCodeAt(position);
                return first < 55296 || first > 56319 || position + 1 === size || (second = S2.charCodeAt(position + 1)) < 56320 || second > 57343 ? CONVERT_TO_STRING ? S2.charAt(position) : first : CONVERT_TO_STRING ? S2.slice(position, position + 2) : (first - 55296 << 10) + (second - 56320) + 65536;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/to-absolute-index.js": (
            /*!*************************************************************!*\
              !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
              \*************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var toInteger = __webpack_require__(
                /*! ../internals/to-integer */
                "./node_modules/core-js/internals/to-integer.js"
              );
              var max = Math.max;
              var min = Math.min;
              module2.exports = function(index, length) {
                var integer = toInteger(index);
                return integer < 0 ? max(integer + length, 0) : min(integer, length);
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/to-indexed-object.js": (
            /*!*************************************************************!*\
              !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
              \*************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var IndexedObject = __webpack_require__(
                /*! ../internals/indexed-object */
                "./node_modules/core-js/internals/indexed-object.js"
              );
              var requireObjectCoercible = __webpack_require__(
                /*! ../internals/require-object-coercible */
                "./node_modules/core-js/internals/require-object-coercible.js"
              );
              module2.exports = function(it) {
                return IndexedObject(requireObjectCoercible(it));
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/to-integer.js": (
            /*!******************************************************!*\
              !*** ./node_modules/core-js/internals/to-integer.js ***!
              \******************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2) {
              var ceil = Math.ceil;
              var floor = Math.floor;
              module2.exports = function(argument) {
                return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/to-length.js": (
            /*!*****************************************************!*\
              !*** ./node_modules/core-js/internals/to-length.js ***!
              \*****************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var toInteger = __webpack_require__(
                /*! ../internals/to-integer */
                "./node_modules/core-js/internals/to-integer.js"
              );
              var min = Math.min;
              module2.exports = function(argument) {
                return argument > 0 ? min(toInteger(argument), 9007199254740991) : 0;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/to-object.js": (
            /*!*****************************************************!*\
              !*** ./node_modules/core-js/internals/to-object.js ***!
              \*****************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var requireObjectCoercible = __webpack_require__(
                /*! ../internals/require-object-coercible */
                "./node_modules/core-js/internals/require-object-coercible.js"
              );
              module2.exports = function(argument) {
                return Object(requireObjectCoercible(argument));
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/to-primitive.js": (
            /*!********************************************************!*\
              !*** ./node_modules/core-js/internals/to-primitive.js ***!
              \********************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var isObject = __webpack_require__(
                /*! ../internals/is-object */
                "./node_modules/core-js/internals/is-object.js"
              );
              module2.exports = function(it, S2) {
                if (!isObject(it)) return it;
                var fn, val;
                if (S2 && typeof (fn = it.toString) == "function" && !isObject(val = fn.call(it))) return val;
                if (typeof (fn = it.valueOf) == "function" && !isObject(val = fn.call(it))) return val;
                if (!S2 && typeof (fn = it.toString) == "function" && !isObject(val = fn.call(it))) return val;
                throw TypeError("Can't convert object to primitive value");
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/uid.js": (
            /*!***********************************************!*\
              !*** ./node_modules/core-js/internals/uid.js ***!
              \***********************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2) {
              var id = 0;
              var postfix = Math.random();
              module2.exports = function(key) {
                return "Symbol(".concat(key === void 0 ? "" : key, ")_", (++id + postfix).toString(36));
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/validate-set-prototype-of-arguments.js": (
            /*!*******************************************************************************!*\
              !*** ./node_modules/core-js/internals/validate-set-prototype-of-arguments.js ***!
              \*******************************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var isObject = __webpack_require__(
                /*! ../internals/is-object */
                "./node_modules/core-js/internals/is-object.js"
              );
              var anObject = __webpack_require__(
                /*! ../internals/an-object */
                "./node_modules/core-js/internals/an-object.js"
              );
              module2.exports = function(O2, proto) {
                anObject(O2);
                if (!isObject(proto) && proto !== null) {
                  throw TypeError("Can't set " + String(proto) + " as a prototype");
                }
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/well-known-symbol.js": (
            /*!*************************************************************!*\
              !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
              \*************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var global = __webpack_require__(
                /*! ../internals/global */
                "./node_modules/core-js/internals/global.js"
              );
              var shared = __webpack_require__(
                /*! ../internals/shared */
                "./node_modules/core-js/internals/shared.js"
              );
              var uid = __webpack_require__(
                /*! ../internals/uid */
                "./node_modules/core-js/internals/uid.js"
              );
              var NATIVE_SYMBOL = __webpack_require__(
                /*! ../internals/native-symbol */
                "./node_modules/core-js/internals/native-symbol.js"
              );
              var Symbol2 = global.Symbol;
              var store = shared("wks");
              module2.exports = function(name) {
                return store[name] || (store[name] = NATIVE_SYMBOL && Symbol2[name] || (NATIVE_SYMBOL ? Symbol2 : uid)("Symbol." + name));
              };
            }
          ),
          /***/
          "./node_modules/core-js/modules/es.array.from.js": (
            /*!*******************************************************!*\
              !*** ./node_modules/core-js/modules/es.array.from.js ***!
              \*******************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              var $ = __webpack_require__(
                /*! ../internals/export */
                "./node_modules/core-js/internals/export.js"
              );
              var from = __webpack_require__(
                /*! ../internals/array-from */
                "./node_modules/core-js/internals/array-from.js"
              );
              var checkCorrectnessOfIteration = __webpack_require__(
                /*! ../internals/check-correctness-of-iteration */
                "./node_modules/core-js/internals/check-correctness-of-iteration.js"
              );
              var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function(iterable) {
                Array.from(iterable);
              });
              $({ target: "Array", stat: true, forced: INCORRECT_ITERATION }, {
                from
              });
            }
          ),
          /***/
          "./node_modules/core-js/modules/es.string.iterator.js": (
            /*!************************************************************!*\
              !*** ./node_modules/core-js/modules/es.string.iterator.js ***!
              \************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              var codePointAt = __webpack_require__(
                /*! ../internals/string-at */
                "./node_modules/core-js/internals/string-at.js"
              );
              var InternalStateModule = __webpack_require__(
                /*! ../internals/internal-state */
                "./node_modules/core-js/internals/internal-state.js"
              );
              var defineIterator = __webpack_require__(
                /*! ../internals/define-iterator */
                "./node_modules/core-js/internals/define-iterator.js"
              );
              var STRING_ITERATOR = "String Iterator";
              var setInternalState = InternalStateModule.set;
              var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);
              defineIterator(String, "String", function(iterated) {
                setInternalState(this, {
                  type: STRING_ITERATOR,
                  string: String(iterated),
                  index: 0
                });
              }, function next() {
                var state = getInternalState(this);
                var string = state.string;
                var index = state.index;
                var point;
                if (index >= string.length) return { value: void 0, done: true };
                point = codePointAt(string, index, true);
                state.index += point.length;
                return { value: point, done: false };
              });
            }
          ),
          /***/
          "./node_modules/webpack/buildin/global.js": (
            /*!***********************************!*\
              !*** (webpack)/buildin/global.js ***!
              \***********************************/
            /*! no static exports found */
            /***/
            function(module2, exports2) {
              var g;
              g = /* @__PURE__ */ function() {
                return this;
              }();
              try {
                g = g || Function("return this")() || (1, eval)("this");
              } catch (e) {
                if (typeof window === "object") g = window;
              }
              module2.exports = g;
            }
          ),
          /***/
          "./src/default-attrs.json": (
            /*!********************************!*\
              !*** ./src/default-attrs.json ***!
              \********************************/
            /*! exports provided: xmlns, width, height, viewBox, fill, stroke, stroke-width, stroke-linecap, stroke-linejoin, default */
            /***/
            function(module2) {
              module2.exports = { "xmlns": "http://www.w3.org/2000/svg", "width": 24, "height": 24, "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "stroke-width": 2, "stroke-linecap": "round", "stroke-linejoin": "round" };
            }
          ),
          /***/
          "./src/icon.js": (
            /*!*********************!*\
              !*** ./src/icon.js ***!
              \*********************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                      target[key] = source[key];
                    }
                  }
                }
                return target;
              };
              var _createClass = /* @__PURE__ */ function() {
                function defineProperties(target, props) {
                  for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                  }
                }
                return function(Constructor, protoProps, staticProps) {
                  if (protoProps) defineProperties(Constructor.prototype, protoProps);
                  if (staticProps) defineProperties(Constructor, staticProps);
                  return Constructor;
                };
              }();
              var _dedupe = __webpack_require__(
                /*! classnames/dedupe */
                "./node_modules/classnames/dedupe.js"
              );
              var _dedupe2 = _interopRequireDefault(_dedupe);
              var _defaultAttrs = __webpack_require__(
                /*! ./default-attrs.json */
                "./src/default-attrs.json"
              );
              var _defaultAttrs2 = _interopRequireDefault(_defaultAttrs);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                  throw new TypeError("Cannot call a class as a function");
                }
              }
              var Icon = function() {
                function Icon2(name, contents) {
                  var tags = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
                  _classCallCheck(this, Icon2);
                  this.name = name;
                  this.contents = contents;
                  this.tags = tags;
                  this.attrs = _extends({}, _defaultAttrs2.default, { class: "feather feather-" + name });
                }
                _createClass(Icon2, [{
                  key: "toSvg",
                  value: function toSvg() {
                    var attrs = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                    var combinedAttrs = _extends({}, this.attrs, attrs, { class: (0, _dedupe2.default)(this.attrs.class, attrs.class) });
                    return "<svg " + attrsToString(combinedAttrs) + ">" + this.contents + "</svg>";
                  }
                  /**
                   * Return string representation of an `Icon`.
                   *
                   * Added for backward compatibility. If old code expects `feather.icons.<name>`
                   * to be a string, `toString()` will get implicitly called.
                   *
                   * @returns {string}
                   */
                }, {
                  key: "toString",
                  value: function toString() {
                    return this.contents;
                  }
                }]);
                return Icon2;
              }();
              function attrsToString(attrs) {
                return Object.keys(attrs).map(function(key) {
                  return key + '="' + attrs[key] + '"';
                }).join(" ");
              }
              exports2.default = Icon;
            }
          ),
          /***/
          "./src/icons.js": (
            /*!**********************!*\
              !*** ./src/icons.js ***!
              \**********************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _icon = __webpack_require__(
                /*! ./icon */
                "./src/icon.js"
              );
              var _icon2 = _interopRequireDefault(_icon);
              var _icons = __webpack_require__(
                /*! ../dist/icons.json */
                "./dist/icons.json"
              );
              var _icons2 = _interopRequireDefault(_icons);
              var _tags = __webpack_require__(
                /*! ./tags.json */
                "./src/tags.json"
              );
              var _tags2 = _interopRequireDefault(_tags);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              exports2.default = Object.keys(_icons2.default).map(function(key) {
                return new _icon2.default(key, _icons2.default[key], _tags2.default[key]);
              }).reduce(function(object, icon) {
                object[icon.name] = icon;
                return object;
              }, {});
            }
          ),
          /***/
          "./src/index.js": (
            /*!**********************!*\
              !*** ./src/index.js ***!
              \**********************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              var _icons = __webpack_require__(
                /*! ./icons */
                "./src/icons.js"
              );
              var _icons2 = _interopRequireDefault(_icons);
              var _toSvg = __webpack_require__(
                /*! ./to-svg */
                "./src/to-svg.js"
              );
              var _toSvg2 = _interopRequireDefault(_toSvg);
              var _replace = __webpack_require__(
                /*! ./replace */
                "./src/replace.js"
              );
              var _replace2 = _interopRequireDefault(_replace);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              module2.exports = { icons: _icons2.default, toSvg: _toSvg2.default, replace: _replace2.default };
            }
          ),
          /***/
          "./src/replace.js": (
            /*!************************!*\
              !*** ./src/replace.js ***!
              \************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                      target[key] = source[key];
                    }
                  }
                }
                return target;
              };
              var _dedupe = __webpack_require__(
                /*! classnames/dedupe */
                "./node_modules/classnames/dedupe.js"
              );
              var _dedupe2 = _interopRequireDefault(_dedupe);
              var _icons = __webpack_require__(
                /*! ./icons */
                "./src/icons.js"
              );
              var _icons2 = _interopRequireDefault(_icons);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              function replace() {
                var attrs = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                if (typeof document === "undefined") {
                  throw new Error("`feather.replace()` only works in a browser environment.");
                }
                var elementsToReplace = document.querySelectorAll("[data-feather]");
                Array.from(elementsToReplace).forEach(function(element) {
                  return replaceElement(element, attrs);
                });
              }
              function replaceElement(element) {
                var attrs = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                var elementAttrs = getAttrs(element);
                var name = elementAttrs["data-feather"];
                delete elementAttrs["data-feather"];
                if (_icons2.default[name] === void 0) {
                  console.warn("feather: '" + name + "' is not a valid icon");
                  return;
                }
                var svgString = _icons2.default[name].toSvg(_extends({}, attrs, elementAttrs, { class: (0, _dedupe2.default)(attrs.class, elementAttrs.class) }));
                var svgDocument = new DOMParser().parseFromString(svgString, "image/svg+xml");
                var svgElement = svgDocument.querySelector("svg");
                element.parentNode.replaceChild(svgElement, element);
              }
              function getAttrs(element) {
                return Array.from(element.attributes).reduce(function(attrs, attr) {
                  attrs[attr.name] = attr.value;
                  return attrs;
                }, {});
              }
              exports2.default = replace;
            }
          ),
          /***/
          "./src/tags.json": (
            /*!***********************!*\
              !*** ./src/tags.json ***!
              \***********************/
            /*! exports provided: activity, airplay, alert-circle, alert-octagon, alert-triangle, align-center, align-justify, align-left, align-right, anchor, archive, at-sign, award, aperture, bar-chart, bar-chart-2, battery, battery-charging, bell, bell-off, bluetooth, book-open, book, bookmark, box, briefcase, calendar, camera, cast, chevron-down, chevron-up, circle, clipboard, clock, cloud-drizzle, cloud-lightning, cloud-rain, cloud-snow, cloud, codepen, codesandbox, code, coffee, columns, command, compass, copy, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, cpu, credit-card, crop, crosshair, database, delete, disc, dollar-sign, droplet, edit, edit-2, edit-3, eye, eye-off, external-link, facebook, fast-forward, figma, file-minus, file-plus, file-text, film, filter, flag, folder-minus, folder-plus, folder, framer, frown, gift, git-branch, git-commit, git-merge, git-pull-request, github, gitlab, globe, hard-drive, hash, headphones, heart, help-circle, hexagon, home, image, inbox, instagram, key, layers, layout, life-buoy, link, link-2, linkedin, list, lock, log-in, log-out, mail, map-pin, map, maximize, maximize-2, meh, menu, message-circle, message-square, mic-off, mic, minimize, minimize-2, minus, monitor, moon, more-horizontal, more-vertical, mouse-pointer, move, music, navigation, navigation-2, octagon, package, paperclip, pause, pause-circle, pen-tool, percent, phone-call, phone-forwarded, phone-incoming, phone-missed, phone-off, phone-outgoing, phone, play, pie-chart, play-circle, plus, plus-circle, plus-square, pocket, power, printer, radio, refresh-cw, refresh-ccw, repeat, rewind, rotate-ccw, rotate-cw, rss, save, scissors, search, send, settings, share-2, shield, shield-off, shopping-bag, shopping-cart, shuffle, skip-back, skip-forward, slack, slash, sliders, smartphone, smile, speaker, star, stop-circle, sun, sunrise, sunset, tablet, tag, target, terminal, thermometer, thumbs-down, thumbs-up, toggle-left, toggle-right, tool, trash, trash-2, triangle, truck, tv, twitch, twitter, type, umbrella, unlock, user-check, user-minus, user-plus, user-x, user, users, video-off, video, voicemail, volume, volume-1, volume-2, volume-x, watch, wifi-off, wifi, wind, x-circle, x-octagon, x-square, x, youtube, zap-off, zap, zoom-in, zoom-out, default */
            /***/
            function(module2) {
              module2.exports = { "activity": ["pulse", "health", "action", "motion"], "airplay": ["stream", "cast", "mirroring"], "alert-circle": ["warning", "alert", "danger"], "alert-octagon": ["warning", "alert", "danger"], "alert-triangle": ["warning", "alert", "danger"], "align-center": ["text alignment", "center"], "align-justify": ["text alignment", "justified"], "align-left": ["text alignment", "left"], "align-right": ["text alignment", "right"], "anchor": [], "archive": ["index", "box"], "at-sign": ["mention", "at", "email", "message"], "award": ["achievement", "badge"], "aperture": ["camera", "photo"], "bar-chart": ["statistics", "diagram", "graph"], "bar-chart-2": ["statistics", "diagram", "graph"], "battery": ["power", "electricity"], "battery-charging": ["power", "electricity"], "bell": ["alarm", "notification", "sound"], "bell-off": ["alarm", "notification", "silent"], "bluetooth": ["wireless"], "book-open": ["read", "library"], "book": ["read", "dictionary", "booklet", "magazine", "library"], "bookmark": ["read", "clip", "marker", "tag"], "box": ["cube"], "briefcase": ["work", "bag", "baggage", "folder"], "calendar": ["date"], "camera": ["photo"], "cast": ["chromecast", "airplay"], "chevron-down": ["expand"], "chevron-up": ["collapse"], "circle": ["off", "zero", "record"], "clipboard": ["copy"], "clock": ["time", "watch", "alarm"], "cloud-drizzle": ["weather", "shower"], "cloud-lightning": ["weather", "bolt"], "cloud-rain": ["weather"], "cloud-snow": ["weather", "blizzard"], "cloud": ["weather"], "codepen": ["logo"], "codesandbox": ["logo"], "code": ["source", "programming"], "coffee": ["drink", "cup", "mug", "tea", "cafe", "hot", "beverage"], "columns": ["layout"], "command": ["keyboard", "cmd", "terminal", "prompt"], "compass": ["navigation", "safari", "travel", "direction"], "copy": ["clone", "duplicate"], "corner-down-left": ["arrow", "return"], "corner-down-right": ["arrow"], "corner-left-down": ["arrow"], "corner-left-up": ["arrow"], "corner-right-down": ["arrow"], "corner-right-up": ["arrow"], "corner-up-left": ["arrow"], "corner-up-right": ["arrow"], "cpu": ["processor", "technology"], "credit-card": ["purchase", "payment", "cc"], "crop": ["photo", "image"], "crosshair": ["aim", "target"], "database": ["storage", "memory"], "delete": ["remove"], "disc": ["album", "cd", "dvd", "music"], "dollar-sign": ["currency", "money", "payment"], "droplet": ["water"], "edit": ["pencil", "change"], "edit-2": ["pencil", "change"], "edit-3": ["pencil", "change"], "eye": ["view", "watch"], "eye-off": ["view", "watch", "hide", "hidden"], "external-link": ["outbound"], "facebook": ["logo", "social"], "fast-forward": ["music"], "figma": ["logo", "design", "tool"], "file-minus": ["delete", "remove", "erase"], "file-plus": ["add", "create", "new"], "file-text": ["data", "txt", "pdf"], "film": ["movie", "video"], "filter": ["funnel", "hopper"], "flag": ["report"], "folder-minus": ["directory"], "folder-plus": ["directory"], "folder": ["directory"], "framer": ["logo", "design", "tool"], "frown": ["emoji", "face", "bad", "sad", "emotion"], "gift": ["present", "box", "birthday", "party"], "git-branch": ["code", "version control"], "git-commit": ["code", "version control"], "git-merge": ["code", "version control"], "git-pull-request": ["code", "version control"], "github": ["logo", "version control"], "gitlab": ["logo", "version control"], "globe": ["world", "browser", "language", "translate"], "hard-drive": ["computer", "server", "memory", "data"], "hash": ["hashtag", "number", "pound"], "headphones": ["music", "audio", "sound"], "heart": ["like", "love", "emotion"], "help-circle": ["question mark"], "hexagon": ["shape", "node.js", "logo"], "home": ["house", "living"], "image": ["picture"], "inbox": ["email"], "instagram": ["logo", "camera"], "key": ["password", "login", "authentication", "secure"], "layers": ["stack"], "layout": ["window", "webpage"], "life-buoy": ["help", "life ring", "support"], "link": ["chain", "url"], "link-2": ["chain", "url"], "linkedin": ["logo", "social media"], "list": ["options"], "lock": ["security", "password", "secure"], "log-in": ["sign in", "arrow", "enter"], "log-out": ["sign out", "arrow", "exit"], "mail": ["email", "message"], "map-pin": ["location", "navigation", "travel", "marker"], "map": ["location", "navigation", "travel"], "maximize": ["fullscreen"], "maximize-2": ["fullscreen", "arrows", "expand"], "meh": ["emoji", "face", "neutral", "emotion"], "menu": ["bars", "navigation", "hamburger"], "message-circle": ["comment", "chat"], "message-square": ["comment", "chat"], "mic-off": ["record", "sound", "mute"], "mic": ["record", "sound", "listen"], "minimize": ["exit fullscreen", "close"], "minimize-2": ["exit fullscreen", "arrows", "close"], "minus": ["subtract"], "monitor": ["tv", "screen", "display"], "moon": ["dark", "night"], "more-horizontal": ["ellipsis"], "more-vertical": ["ellipsis"], "mouse-pointer": ["arrow", "cursor"], "move": ["arrows"], "music": ["note"], "navigation": ["location", "travel"], "navigation-2": ["location", "travel"], "octagon": ["stop"], "package": ["box", "container"], "paperclip": ["attachment"], "pause": ["music", "stop"], "pause-circle": ["music", "audio", "stop"], "pen-tool": ["vector", "drawing"], "percent": ["discount"], "phone-call": ["ring"], "phone-forwarded": ["call"], "phone-incoming": ["call"], "phone-missed": ["call"], "phone-off": ["call", "mute"], "phone-outgoing": ["call"], "phone": ["call"], "play": ["music", "start"], "pie-chart": ["statistics", "diagram"], "play-circle": ["music", "start"], "plus": ["add", "new"], "plus-circle": ["add", "new"], "plus-square": ["add", "new"], "pocket": ["logo", "save"], "power": ["on", "off"], "printer": ["fax", "office", "device"], "radio": ["signal"], "refresh-cw": ["synchronise", "arrows"], "refresh-ccw": ["arrows"], "repeat": ["loop", "arrows"], "rewind": ["music"], "rotate-ccw": ["arrow"], "rotate-cw": ["arrow"], "rss": ["feed", "subscribe"], "save": ["floppy disk"], "scissors": ["cut"], "search": ["find", "magnifier", "magnifying glass"], "send": ["message", "mail", "email", "paper airplane", "paper aeroplane"], "settings": ["cog", "edit", "gear", "preferences"], "share-2": ["network", "connections"], "shield": ["security", "secure"], "shield-off": ["security", "insecure"], "shopping-bag": ["ecommerce", "cart", "purchase", "store"], "shopping-cart": ["ecommerce", "cart", "purchase", "store"], "shuffle": ["music"], "skip-back": ["music"], "skip-forward": ["music"], "slack": ["logo"], "slash": ["ban", "no"], "sliders": ["settings", "controls"], "smartphone": ["cellphone", "device"], "smile": ["emoji", "face", "happy", "good", "emotion"], "speaker": ["audio", "music"], "star": ["bookmark", "favorite", "like"], "stop-circle": ["media", "music"], "sun": ["brightness", "weather", "light"], "sunrise": ["weather", "time", "morning", "day"], "sunset": ["weather", "time", "evening", "night"], "tablet": ["device"], "tag": ["label"], "target": ["logo", "bullseye"], "terminal": ["code", "command line", "prompt"], "thermometer": ["temperature", "celsius", "fahrenheit", "weather"], "thumbs-down": ["dislike", "bad", "emotion"], "thumbs-up": ["like", "good", "emotion"], "toggle-left": ["on", "off", "switch"], "toggle-right": ["on", "off", "switch"], "tool": ["settings", "spanner"], "trash": ["garbage", "delete", "remove", "bin"], "trash-2": ["garbage", "delete", "remove", "bin"], "triangle": ["delta"], "truck": ["delivery", "van", "shipping", "transport", "lorry"], "tv": ["television", "stream"], "twitch": ["logo"], "twitter": ["logo", "social"], "type": ["text"], "umbrella": ["rain", "weather"], "unlock": ["security"], "user-check": ["followed", "subscribed"], "user-minus": ["delete", "remove", "unfollow", "unsubscribe"], "user-plus": ["new", "add", "create", "follow", "subscribe"], "user-x": ["delete", "remove", "unfollow", "unsubscribe", "unavailable"], "user": ["person", "account"], "users": ["group"], "video-off": ["camera", "movie", "film"], "video": ["camera", "movie", "film"], "voicemail": ["phone"], "volume": ["music", "sound", "mute"], "volume-1": ["music", "sound"], "volume-2": ["music", "sound"], "volume-x": ["music", "sound", "mute"], "watch": ["clock", "time"], "wifi-off": ["disabled"], "wifi": ["connection", "signal", "wireless"], "wind": ["weather", "air"], "x-circle": ["cancel", "close", "delete", "remove", "times", "clear"], "x-octagon": ["delete", "stop", "alert", "warning", "times", "clear"], "x-square": ["cancel", "close", "delete", "remove", "times", "clear"], "x": ["cancel", "close", "delete", "remove", "times", "clear"], "youtube": ["logo", "video", "play"], "zap-off": ["flash", "camera", "lightning"], "zap": ["flash", "camera", "lightning"], "zoom-in": ["magnifying glass"], "zoom-out": ["magnifying glass"] };
            }
          ),
          /***/
          "./src/to-svg.js": (
            /*!***********************!*\
              !*** ./src/to-svg.js ***!
              \***********************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var _icons = __webpack_require__(
                /*! ./icons */
                "./src/icons.js"
              );
              var _icons2 = _interopRequireDefault(_icons);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              function toSvg(name) {
                var attrs = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                console.warn("feather.toSvg() is deprecated. Please use feather.icons[name].toSvg() instead.");
                if (!name) {
                  throw new Error("The required `key` (icon name) parameter is missing.");
                }
                if (!_icons2.default[name]) {
                  throw new Error("No icon matching '" + name + "'. See the complete list of icons at https://feathericons.com");
                }
                return _icons2.default[name].toSvg(attrs);
              }
              exports2.default = toSvg;
            }
          ),
          /***/
          0: (
            /*!**************************************************!*\
              !*** multi core-js/es/array/from ./src/index.js ***!
              \**************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2, __webpack_require__) {
              __webpack_require__(
                /*! core-js/es/array/from */
                "./node_modules/core-js/es/array/from.js"
              );
              module2.exports = __webpack_require__(
                /*! /home/runner/work/feather/feather/src/index.js */
                "./src/index.js"
              );
            }
          )
          /******/
        })
      );
    });
  }
});

// node_modules/@rbardini/html/esm/mod.js
function html(strings, ...values) {
  return strings.reduce((acc, string, i) => {
    const value = values[i];
    if (Array.isArray(value))
      return acc + string + value.join("");
    if (value != null && !!value !== value)
      return acc + string + value;
    return acc + string;
  }, "");
}

// node_modules/jsonresume-theme-even/dist/index.js
var import_micromark = __toESM(require_micromark(), 1);
var import_striptags = __toESM(require_striptags(), 1);
var import_feather_icons = __toESM(require_feather(), 1);
var y = Object.freeze;
var z = Object.defineProperty;
var b = (t, i) => y(z(t, "raw", { value: y(i || t.slice()) }));
var C = `const pluralize = (num, str) => \`\${num} \${num === 1 ? str : str.concat('s')}\`

class TimeDuration extends HTMLElement {
  connectedCallback() {
    const dates = this.getAttribute('dates')
    if (!dates) return this.remove()

    const duration = dates.split('|').reduce((acc, _date, i, dates) => {
      if (i % 2) return acc
      const [startDate, endDate] = dates.slice(i)
      return acc + (startDate ? +new Date(endDate || Date.now()) - +new Date(startDate) : 0)
    }, 0)

    const diffDate = new Date(duration)
    const years = diffDate.getFullYear() - 1970
    const months = diffDate.getMonth()
    const days = diffDate.getDate() - 1

    const segments = [
      years && pluralize(years, 'yr'),
      months && pluralize(months, 'mo'),
      days && !years && !months && pluralize(days, 'day'),
    ].filter(Boolean)
    if (!segments.length) return

    this.textContent = segments.join(' ')
  }
}

customElements.define('time-duration', TimeDuration)
`;
var I = ':root{color-scheme:light dark;--color-background-light: #ffffff;--color-dimmed-light: #f3f4f5;--color-primary-light: #191e23;--color-secondary-light: #6c7781;--color-accent-light: #0073aa;--color-background-dark: #191e23;--color-dimmed-dark: #23282d;--color-primary-dark: #fbfbfc;--color-secondary-dark: #ccd0d4;--color-accent-dark: #00a0d2;--color-background: var(--color-background-light);--color-dimmed: var(--color-dimmed-light);--color-primary: var(--color-primary-light);--color-secondary: var(--color-secondary-light);--color-accent: var(--color-accent-light);--scale-ratio: 1.25;--scale0: 1rem;--scale1: calc(var(--scale0) * var(--scale-ratio));--scale2: calc(var(--scale1) * var(--scale-ratio));--scale3: calc(var(--scale2) * var(--scale-ratio));--scale4: calc(var(--scale3) * var(--scale-ratio));--scale5: calc(var(--scale4) * var(--scale-ratio))}@media (prefers-color-scheme: dark){:root{--color-background: var(--color-background-dark);--color-dimmed: var(--color-dimmed-dark);--color-primary: var(--color-primary-dark);--color-secondary: var(--color-secondary-dark);--color-accent: var(--color-accent-dark)}}*{box-sizing:border-box;margin:0;padding:0}html{font-size:14px}body{background:var(--color-background);color:var(--color-primary);display:grid;font:1em/1.5 Lato,sans-serif;gap:2em;grid-template-columns:[full-start] 1fr [main-start side-start] minmax(min-content,12em) [side-end content-start] minmax(min-content,36em) [main-end content-end] 1fr [full-end];grid-template-rows:auto [content] 0;margin-bottom:4em}body:before{content:"";grid-column:full;grid-row:content}ol,ul{padding-left:1em}:not(.icon-list,.tag-list)>li+li{margin-top:.4em}li::marker,.network{color:var(--color-secondary)}a{color:var(--color-accent);text-decoration:none}a:focus,a:hover{text-decoration:underline}h1,h2,h3,h5{font-weight:400}h1,h2,h3{line-height:1.2}h1{font-size:var(--scale5)}h2{color:var(--color-secondary);font-size:var(--scale4)}h3{color:var(--color-secondary);font-size:var(--scale3);grid-column:side;margin-bottom:1rem}h4{font-size:var(--scale2)}h5{font-size:var(--scale1)}h6{font-size:var(--scale0)}blockquote{border-left:.2em solid var(--color-dimmed);padding-left:1em}cite{color:var(--color-secondary);font-style:inherit}cite:before{content:"\u2014 "}svg{margin-right:.2em;vertical-align:text-bottom}.masthead{background:var(--color-dimmed);display:inherit;gap:inherit;grid-column:full;grid-template-columns:inherit;padding:4em 0;text-align:center}.masthead>*,section{grid-column:main}.masthead>img{border:4px solid;border-radius:50%;margin:0 auto;max-width:12em}article>*+*,blockquote>*+*,.timeline>div>*+*{margin-top:.6em}.meta{color:var(--color-secondary)}.stack{display:grid;gap:1.5em}.icon-list{display:flex;flex-wrap:wrap;gap:.4em 1em;justify-content:center;list-style:none;padding:0}.grid-list{display:grid;gap:1em}.tag-list{display:flex;flex-wrap:wrap;gap:.4em;list-style:none;padding:0}.tag-list>li{background:var(--color-dimmed);border-radius:.2em;padding:.2em .6em}.timeline>div{position:relative}.timeline>div:not(:last-child){padding-bottom:1rem}.timeline>div:not(:last-child):before{content:"";position:absolute;top:1rem;left:-15px;width:2px;height:100%;background:var(--color-secondary)}.timeline>div:not(:only-child):after{content:"";position:absolute;top:.6rem;left:-20px;width:8px;height:8px;background:var(--color-secondary);border:2px solid var(--color-background);border-radius:50%}@media print,(min-width: 48em){h3{text-align:right;margin-bottom:inherit}.masthead{text-align:inherit}.masthead>*,section{grid-column:content}.masthead img{grid-column:side;grid-row:span 2;max-width:100%}section{display:contents}.icon-list{flex-direction:column}.grid-list{grid-template-columns:repeat(auto-fit,minmax(calc((100% - 1em)/2),1fr))}}time+time-duration:before{content:"\xB7 "}@media print{time-duration{display:none}}';
function T(t = {}) {
  const i = t.themeOptions?.colors;
  return i && Object.entries(i).map(([o, [n, a = n]]) => `--color-${o}-light:${n}; --color-${o}-dark:${a};`).join(" ");
}
function d(t, i = false) {
  const o = (
    /** @type {string} */
    (0, import_micromark.default)(t)
  );
  return i ? (0, import_striptags.default)(o) : o;
}
var P = (t) => new Date(t).toLocaleDateString("en", {
  month: "short",
  year: "numeric",
  timeZone: "UTC"
});
function v(t) {
  return html`<time datetime="${t}">${P(t)}</time>`;
}
function R(t = []) {
  return t.length > 0 && html`
      <section id="awards">
        <h3>Awards</h3>
        <div class="stack">
          ${t.map(
    ({ awarder: i, date: o, summary: n, title: a }) => html`
              <article>
                <header>
                  <h4>${a}</h4>
                  <div class="meta">
                    ${i && html`<div>Awarded by <strong>${i}</strong></div>`} ${o && v(o)}
                  </div>
                </header>
                ${n && d(n)}
              </article>
            `
  )}
        </div>
      </section>
    `;
}
var q = (t) => t.replace(/^(https?:|)\/\//, "").replace(/\/$/, "");
function h(t, i) {
  return i ? t ? html`<a href="${t}">${i}</a>` : i : t && html`<a href="${t}">${q(t)}</a>`;
}
function A(t = []) {
  return t.length > 0 && html`
      <section id="certificates">
        <h3>Certificates</h3>
        <div class="stack">
          ${t.map(
    ({ date: i, issuer: o, name: n, url: a }) => html`
              <article>
                <header>
                  <h4>${h(a, n)}</h4>
                  <div class="meta">
                    ${o && html`<div>Issued by <strong>${o}</strong></div>`} ${i && v(i)}
                  </div>
                </header>
              </article>
            `
  )}
        </div>
      </section>
    `;
}
function w(t) {
  const i = t.map(({ startDate: o, endDate: n }) => [o || "", n || ""]).flat().join("|");
  return html`<time-duration dates="${i}"></time-duration>`;
}
function p(t, i) {
  return i === t ? v(i) : html`${v(t)} – ${i ? v(i) : "Present"} ${w([{ startDate: t, endDate: i }])}`;
}
function B(t = []) {
  return t.length > 0 && html`
      <section id="education">
        <h3>Education</h3>
        <div class="stack">
          ${t.map(
    ({ area: i, courses: o = [], institution: n, startDate: a, endDate: l, studyType: r, url: c }) => html`
              <article>
                <header>
                  <h4>${h(c, n)}</h4>
                  <div class="meta">
                    <div>${[r, i && html`<strong>${i}</strong>`].filter(Boolean).join(" in ")}</div>
                    ${a && html`<div>${p(a, l)}</div>`}
                  </div>
                </header>
                ${o.length > 0 && html`
                  <h5>Courses</h5>
                  <ul>
                    ${o.map((s) => html`<li>${d(s)}</li>`)}
                  </ul>
                `}
              </article>
            `
  )}
        </div>
      </section>
    `;
}
function u(t, i) {
  return (import_feather_icons.default.icons[
    /** @type {FeatherIconNames} */
    t.toLowerCase()
  ] || i && import_feather_icons.default.icons[
    /** @type {FeatherIconNames} */
    i.toLowerCase()
  ])?.toSvg({ width: 16, height: 16 });
}
var E = (t) => Intl.DisplayNames ? new Intl.DisplayNames(["en"], { type: "region" }).of(t) : t;
function S(t = {}) {
  const { email: i, image: o, label: n, location: a, name: l, phone: r, profiles: c = [], summary: s, url: $ } = t;
  return html`
    <header class="masthead">
      ${o && html`<img src="${o}" alt="" />`}
      <div>${l && html`<h1>${l}</h1>`} ${n && html`<h2>${n}</h2>`}</div>
      ${s && html`<article>${d(s)}</article>`}
      <ul class="icon-list">
        ${a?.city && html`
          <li>
            ${u("map-pin")} ${a.city}${a.countryCode && html`, ${E(a.countryCode)}`}
          </li>
        `}
        ${i && html`
          <li>
            ${u("mail")}
            <a href="mailto:${i}">${i}</a>
          </li>
        `}
        ${r && html`
          <li>
            ${u("phone")}
            <a href="tel:${r.replace(/\s/g, "")}">${r}</a>
          </li>
        `}
        ${$ && html`<li>${u("link")} ${h($)}</li>`}
        ${c.map(
    ({ network: m, url: g, username: f }) => html`
            <li>
              ${m && u(m, "user")} ${h(g, f)}
              ${m && html`<span class="network">(${m})</span>`}
            </li>
          `
  )}
      </ul>
    </header>
  `;
}
function F(t = []) {
  return t.length > 0 && html`
      <section id="interests">
        <h3>Interests</h3>
        <div class="grid-list">
          ${t.map(
    ({ keywords: i = [], name: o }) => html`
              <div>
                ${o && html`<h4>${o}</h4>`}
                ${i.length > 0 && html`
                  <ul class="tag-list">
                    ${i.map((n) => html`<li>${n}</li>`)}
                  </ul>
                `}
              </div>
            `
  )}
        </div>
      </section>
    `;
}
function M(t = []) {
  return t.length > 0 && html`
      <section id="languages">
        <h3>Languages</h3>
        <div class="grid-list">
          ${t.map(
    ({ fluency: i, language: o }) => html`<div>${o && html`<h4>${o}</h4>`} ${i}</div>`
  )}
        </div>
      </section>
    `;
}
function O(t = {}) {
  const { name: i, summary: o } = t;
  return html`
    ${i && html`<title>${i}</title>`}
    ${o && html`<meta name="description" content="${d(o, true)}" />`}
  `;
}
var W = (t) => Intl.ListFormat ? new Intl.ListFormat("en").format(t) : t.join(", ");
function H(t = []) {
  return t.length > 0 && html`
      <section id="projects">
        <h3>Projects</h3>
        <div class="stack">
          ${t.map(
    ({
      description: i,
      entity: o,
      highlights: n = [],
      keywords: a = [],
      name: l,
      startDate: r,
      endDate: c,
      roles: s = [],
      type: $,
      url: m
    }) => html`
              <article>
                <header>
                  <h4>${h(m, l)}</h4>
                  <div class="meta">
                    <div>
                      ${s.length > 0 && html`<strong>${W(s)}</strong>`}
                      ${o && html`at <strong>${o}</strong>`}
                    </div>
                    ${r && html`<div>${p(r, c)}</div>`}
                    ${$ && html`<div>${$}</div>`}
                  </div>
                </header>
                ${i && d(i)}
                ${n.length > 0 && html`
                  <ul>
                    ${n.map((g) => html`<li>${d(g)}</li>`)}
                  </ul>
                `}
                ${a.length > 0 && html`
                  <ul class="tag-list">
                    ${a.map((g) => html`<li>${g}</li>`)}
                  </ul>
                `}
              </article>
            `
  )}
        </div>
      </section>
    `;
}
function N(t = []) {
  return t.length > 0 && html`
      <section id="publications">
        <h3>Publications</h3>
        <div class="stack">
          ${t.map(
    ({ name: i, publisher: o, releaseDate: n, summary: a, url: l }) => html`
              <article>
                <header>
                  <h4>${h(l, i)}</h4>
                  <div class="meta">
                    ${o && html`<div>Published by <strong>${o}</strong></div>`}
                    ${n && v(n)}
                  </div>
                </header>
                ${a && d(a)}
              </article>
            `
  )}
        </div>
      </section>
    `;
}
function U(t = []) {
  return t.length > 0 && html`
      <section id="references">
        <h3>References</h3>
        <div class="stack">
          ${t.map(
    ({ name: i, reference: o }) => html`
              <blockquote>
                ${o && d(o)}
                ${i && html`
                  <p>
                    <cite>${i}</cite>
                  </p>
                `}
              </blockquote>
            `
  )}
        </div>
      </section>
    `;
}
function V(t = []) {
  return t.length > 0 && html`
      <section id="skills">
        <h3>Skills</h3>
        <div class="grid-list">
          ${t.map(
    ({ keywords: i = [], name: o }) => html`
              <div>
                ${o && html`<h4>${o}</h4>`}
                ${i.length > 0 && html`
                  <ul class="tag-list">
                    ${i.map((n) => html`<li>${n}</li>`)}
                  </ul>
                `}
              </div>
            `
  )}
        </div>
      </section>
    `;
}
function Y(t = []) {
  return t.length > 0 && html`
      <section id="volunteer">
        <h3>Volunteer</h3>
        <div class="stack">
          ${t.map(
    ({ highlights: i = [], organization: o, position: n, startDate: a, endDate: l, summary: r, url: c }) => html`
              <article>
                <header>
                  <h4>${h(c, o)}</h4>
                  <div class="meta">
                    <strong>${n}</strong>
                    ${a && html`<div>${p(a, l)}</div>`}
                  </div>
                </header>
                ${r && d(r)}
                ${i.length > 0 && html`
                  <ul>
                    ${i.map((s) => html`<li>${d(s)}</li>`)}
                  </ul>
                `}
              </article>
            `
  )}
        </div>
      </section>
    `;
}
function Z(t = []) {
  const i = t.reduce(
    (o, { description: n, name: a, url: l, ...r }) => {
      const c = o[o.length - 1];
      return c && c.name === a && c.description === n && c.url === l ? c.items.push(r) : o.push({ description: n, name: a, url: l, items: [r] }), o;
    },
    /** @type {NestedWork[]} */
    []
  );
  return t.length > 0 && html`
      <section id="work">
        <h3>Work</h3>
        <div class="stack">
          ${i.map(({ description: o, name: n, url: a, items: l = [] }) => {
    const r = l.length === 1 ? l[0] : void 0;
    return html`
              <article>
                <header>
                  <h4>${r ? r.position : h(a, n)}</h4>
                  <div class="meta">
                    ${r ? html`
                          <div>
                            ${[html`<strong>${h(a, n)}</strong>`, o].filter(Boolean).join(" \xB7 ")}
                          </div>
                          ${r.startDate && html`<div>${p(r.startDate, r.endDate)}</div>`}
                          ${r.location && html`<div>${r.location}</div>`}
                        ` : html`
                          ${o && html`<div>${o}</div>`}
                          ${l.some((c) => c.startDate) && html`<div>${w(l)}</div>`}
                        `}
                  </div>
                </header>
                <div class="timeline">
                  ${l.map(
      ({ highlights: c = [], location: s, position: $, startDate: m, endDate: g, summary: f }) => html`
                      <div>
                        ${!r && html`
                          <div>
                            <h5>${$}</h5>
                            <div class="meta">
                              ${m && html`<div>${p(m, g)}</div>`}
                              ${s && html`<div>${s}</div>`}
                            </div>
                          </div>
                        `}
                        ${f && d(f)}
                        ${c.length > 0 && html`
                          <ul>
                            ${c.map((D) => html`<li>${d(D)}</li>`)}
                          </ul>
                        `}
                      </div>
                    `
    )}
                </div>
              </article>
            `;
  })}
        </div>
      </section>
    `;
}
var x;
function _(t, { css: i, js: o } = {}) {
  return html`<!doctype html>
    <html lang="en" style="${T(t.meta)}">
      <head>
        <meta charset="utf-8" />
        ${O(t.basics)}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap" />
        ${i && html`<style>
          ${i}
        </style>`}
        ${o && html(x || (x = b([`<script type="module">
          `, `
        <\/script>`])), o)}
      </head>
      <body>
        ${S(t.basics)} ${Z(t.work)} ${Y(t.volunteer)} ${B(t.education)}
        ${H(t.projects)} ${R(t.awards)} ${A(t.certificates)}
        ${N(t.publications)} ${V(t.skills)} ${M(t.languages)}
        ${F(t.interests)} ${U(t.references)}
      </body>
    </html>`;
}
var tt = {
  mediaType: "print",
  printBackground: true
};
var et = (t) => _(t, { css: I, js: C });
export {
  tt as pdfRenderOptions,
  et as render
};
/*! Bundled license information:

feather-icons/dist/feather.js:
  (*!
    Copyright (c) 2016 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  *)
*/
