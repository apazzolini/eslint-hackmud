"use strict";

module.exports.processors = {
    ".js": {
        preprocess: function(text, filename) {
            var parsedText = text
              .replace(/#db\./g, '$db.')
              .replace(/#s\./g, '$s.')
            ;

            if (parsedText.indexOf('function') !== 0) return [parsedText];

            return ['(' + parsedText + ');\n'];
        },

        postprocess: function(messages, filename) {
           return messages[0];
       }
    }
};

module.exports.environments = {
    hackmud: {
        globals: {
            $db: false,
            $s: false,
        }
    }
};
