/*
 * Copyright (c) 2012-2016 Dan Wheeler and Dropbox, Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */



class ZxcvbnAdjacencyGraphs {
  get qwerty() {
    return {
      "!": ["`~", null, null, "2@", "qQ", null],
      "\"": [";:", "[{", "]}", null, null, "/?"],
      "#": ["2@", null, null, "4$", "eE", "wW"],
      "$": ["3#", null, null, "5%", "rR", "eE"],
      "%": ["4$", null, null, "6^", "tT", "rR"],
      "&": ["6^", null, null, "8*", "uU", "yY"],
      "'": [";:", "[{", "]}", null, null, "/?"],
      "(": ["8*", null, null, "0)", "oO", "iI"],
      ")": ["9(", null, null, "-_", "pP", "oO"],
      "*": ["7&", null, null, "9(", "iI", "uU"],
      "+": ["-_", null, null, null, "]}", "[{"],
      ",": ["mM", "kK", "lL", ".>", null, null],
      "-": ["0)", null, null, "=+", "[{", "pP"],
      ".": [",<", "lL", ";:", "/?", null, null],
      "/": [".>", ";:", "'\"", null, null, null],
      "0": ["9(", null, null, "-_", "pP", "oO"],
      "1": ["`~", null, null, "2@", "qQ", null],
      "2": ["1!", null, null, "3#", "wW", "qQ"],
      "3": ["2@", null, null, "4$", "eE", "wW"],
      "4": ["3#", null, null, "5%", "rR", "eE"],
      "5": ["4$", null, null, "6^", "tT", "rR"],
      "6": ["5%", null, null, "7&", "yY", "tT"],
      "7": ["6^", null, null, "8*", "uU", "yY"],
      "8": ["7&", null, null, "9(", "iI", "uU"],
      "9": ["8*", null, null, "0)", "oO", "iI"],
      ":": ["lL", "pP", "[{", "'\"", "/?", ".>"],
      ";": ["lL", "pP", "[{", "'\"", "/?", ".>"],
      "<": ["mM", "kK", "lL", ".>", null, null],
      "=": ["-_", null, null, null, "]}", "[{"],
      ">": [",<", "lL", ";:", "/?", null, null],
      "?": [".>", ";:", "'\"", null, null, null],
      "@": ["1!", null, null, "3#", "wW", "qQ"],
      "A": [null, "qQ", "wW", "sS", "zZ", null],
      "B": ["vV", "gG", "hH", "nN", null, null],
      "C": ["xX", "dD", "fF", "vV", null, null],
      "D": ["sS", "eE", "rR", "fF", "cC", "xX"],
      "E": ["wW", "3#", "4$", "rR", "dD", "sS"],
      "F": ["dD", "rR", "tT", "gG", "vV", "cC"],
      "G": ["fF", "tT", "yY", "hH", "bB", "vV"],
      "H": ["gG", "yY", "uU", "jJ", "nN", "bB"],
      "I": ["uU", "8*", "9(", "oO", "kK", "jJ"],
      "J": ["hH", "uU", "iI", "kK", "mM", "nN"],
      "K": ["jJ", "iI", "oO", "lL", ",<", "mM"],
      "L": ["kK", "oO", "pP", ";:", ".>", ",<"],
      "M": ["nN", "jJ", "kK", ",<", null, null],
      "N": ["bB", "hH", "jJ", "mM", null, null],
      "O": ["iI", "9(", "0)", "pP", "lL", "kK"],
      "P": ["oO", "0)", "-_", "[{", ";:", "lL"],
      "Q": [null, "1!", "2@", "wW", "aA", null],
      "R": ["eE", "4$", "5%", "tT", "fF", "dD"],
      "S": ["aA", "wW", "eE", "dD", "xX", "zZ"],
      "T": ["rR", "5%", "6^", "yY", "gG", "fF"],
      "U": ["yY", "7&", "8*", "iI", "jJ", "hH"],
      "V": ["cC", "fF", "gG", "bB", null, null],
      "W": ["qQ", "2@", "3#", "eE", "sS", "aA"],
      "X": ["zZ", "sS", "dD", "cC", null, null],
      "Y": ["tT", "6^", "7&", "uU", "hH", "gG"],
      "Z": [null, "aA", "sS", "xX", null, null],
      "[": ["pP", "-_", "=+", "]}", "'\"", ";:"],
      "\\": ["]}", null, null, null, null, null],
      "]": ["[{", "=+", null, "\\|", null, "'\""],
      "^": ["5%", null, null, "7&", "yY", "tT"],
      "_": ["0)", null, null, "=+", "[{", "pP"],
      "`": [null, null, null, "1!", null, null],
      "a": [null, "qQ", "wW", "sS", "zZ", null],
      "b": ["vV", "gG", "hH", "nN", null, null],
      "c": ["xX", "dD", "fF", "vV", null, null],
      "d": ["sS", "eE", "rR", "fF", "cC", "xX"],
      "e": ["wW", "3#", "4$", "rR", "dD", "sS"],
      "f": ["dD", "rR", "tT", "gG", "vV", "cC"],
      "g": ["fF", "tT", "yY", "hH", "bB", "vV"],
      "h": ["gG", "yY", "uU", "jJ", "nN", "bB"],
      "i": ["uU", "8*", "9(", "oO", "kK", "jJ"],
      "j": ["hH", "uU", "iI", "kK", "mM", "nN"],
      "k": ["jJ", "iI", "oO", "lL", ",<", "mM"],
      "l": ["kK", "oO", "pP", ";:", ".>", ",<"],
      "m": ["nN", "jJ", "kK", ",<", null, null],
      "n": ["bB", "hH", "jJ", "mM", null, null],
      "o": ["iI", "9(", "0)", "pP", "lL", "kK"],
      "p": ["oO", "0)", "-_", "[{", ";:", "lL"],
      "q": [null, "1!", "2@", "wW", "aA", null],
      "r": ["eE", "4$", "5%", "tT", "fF", "dD"],
      "s": ["aA", "wW", "eE", "dD", "xX", "zZ"],
      "t": ["rR", "5%", "6^", "yY", "gG", "fF"],
      "u": ["yY", "7&", "8*", "iI", "jJ", "hH"],
      "v": ["cC", "fF", "gG", "bB", null, null],
      "w": ["qQ", "2@", "3#", "eE", "sS", "aA"],
      "x": ["zZ", "sS", "dD", "cC", null, null],
      "y": ["tT", "6^", "7&", "uU", "hH", "gG"],
      "z": [null, "aA", "sS", "xX", null, null],
      "{": ["pP", "-_", "=+", "]}", "'\"", ";:"],
      "|": ["]}", null, null, null, null, null],
      "}": ["[{", "=+", null, "\\|", null, "'\""],
      "~": [null, null, null, "1!", null, null]
    }
  }

  get dvorak() {
    return {
      "!": ["`~", null, null, "2@", "'\"", null],
      "\"": [null, "1!", "2@", ",<", "aA", null],
      "#": ["2@", null, null, "4$", ".>", ",<"],
      "$": ["3#", null, null, "5%", "pP", ".>"],
      "%": ["4$", null, null, "6^", "yY", "pP"],
      "&": ["6^", null, null, "8*", "gG", "fF"],
      "'": [null, "1!", "2@", ",<", "aA", null],
      "(": ["8*", null, null, "0)", "rR", "cC"],
      ")": ["9(", null, null, "[{", "lL", "rR"],
      "*": ["7&", null, null, "9(", "cC", "gG"],
      "+": ["/?", "]}", null, "\\|", null, "-_"],
      ",": ["'\"", "2@", "3#", ".>", "oO", "aA"],
      "-": ["sS", "/?", "=+", null, null, "zZ"],
      ".": [",<", "3#", "4$", "pP", "eE", "oO"],
      "/": ["lL", "[{", "]}", "=+", "-_", "sS"],
      "0": ["9(", null, null, "[{", "lL", "rR"],
      "1": ["`~", null, null, "2@", "'\"", null],
      "2": ["1!", null, null, "3#", ",<", "'\""],
      "3": ["2@", null, null, "4$", ".>", ",<"],
      "4": ["3#", null, null, "5%", "pP", ".>"],
      "5": ["4$", null, null, "6^", "yY", "pP"],
      "6": ["5%", null, null, "7&", "fF", "yY"],
      "7": ["6^", null, null, "8*", "gG", "fF"],
      "8": ["7&", null, null, "9(", "cC", "gG"],
      "9": ["8*", null, null, "0)", "rR", "cC"],
      ":": [null, "aA", "oO", "qQ", null, null],
      ";": [null, "aA", "oO", "qQ", null, null],
      "<": ["'\"", "2@", "3#", ".>", "oO", "aA"],
      "=": ["/?", "]}", null, "\\|", null, "-_"],
      ">": [",<", "3#", "4$", "pP", "eE", "oO"],
      "?": ["lL", "[{", "]}", "=+", "-_", "sS"],
      "@": ["1!", null, null, "3#", ",<", "'\""],
      "A": [null, "'\"", ",<", "oO", ";:", null],
      "B": ["xX", "dD", "hH", "mM", null, null],
      "C": ["gG", "8*", "9(", "rR", "tT", "hH"],
      "D": ["iI", "fF", "gG", "hH", "bB", "xX"],
      "E": ["oO", ".>", "pP", "uU", "jJ", "qQ"],
      "F": ["yY", "6^", "7&", "gG", "dD", "iI"],
      "G": ["fF", "7&", "8*", "cC", "hH", "dD"],
      "H": ["dD", "gG", "cC", "tT", "mM", "bB"],
      "I": ["uU", "yY", "fF", "dD", "xX", "kK"],
      "J": ["qQ", "eE", "uU", "kK", null, null],
      "K": ["jJ", "uU", "iI", "xX", null, null],
      "L": ["rR", "0)", "[{", "/?", "sS", "nN"],
      "M": ["bB", "hH", "tT", "wW", null, null],
      "N": ["tT", "rR", "lL", "sS", "vV", "wW"],
      "O": ["aA", ",<", ".>", "eE", "qQ", ";:"],
      "P": [".>", "4$", "5%", "yY", "uU", "eE"],
      "Q": [";:", "oO", "eE", "jJ", null, null],
      "R": ["cC", "9(", "0)", "lL", "nN", "tT"],
      "S": ["nN", "lL", "/?", "-_", "zZ", "vV"],
      "T": ["hH", "cC", "rR", "nN", "wW", "mM"],
      "U": ["eE", "pP", "yY", "iI", "kK", "jJ"],
      "V": ["wW", "nN", "sS", "zZ", null, null],
      "W": ["mM", "tT", "nN", "vV", null, null],
      "X": ["kK", "iI", "dD", "bB", null, null],
      "Y": ["pP", "5%", "6^", "fF", "iI", "uU"],
      "Z": ["vV", "sS", "-_", null, null, null],
      "[": ["0)", null, null, "]}", "/?", "lL"],
      "\\": ["=+", null, null, null, null, null],
      "]": ["[{", null, null, null, "=+", "/?"],
      "^": ["5%", null, null, "7&", "fF", "yY"],
      "_": ["sS", "/?", "=+", null, null, "zZ"],
      "`": [null, null, null, "1!", null, null],
      "a": [null, "'\"", ",<", "oO", ";:", null],
      "b": ["xX", "dD", "hH", "mM", null, null],
      "c": ["gG", "8*", "9(", "rR", "tT", "hH"],
      "d": ["iI", "fF", "gG", "hH", "bB", "xX"],
      "e": ["oO", ".>", "pP", "uU", "jJ", "qQ"],
      "f": ["yY", "6^", "7&", "gG", "dD", "iI"],
      "g": ["fF", "7&", "8*", "cC", "hH", "dD"],
      "h": ["dD", "gG", "cC", "tT", "mM", "bB"],
      "i": ["uU", "yY", "fF", "dD", "xX", "kK"],
      "j": ["qQ", "eE", "uU", "kK", null, null],
      "k": ["jJ", "uU", "iI", "xX", null, null],
      "l": ["rR", "0)", "[{", "/?", "sS", "nN"],
      "m": ["bB", "hH", "tT", "wW", null, null],
      "n": ["tT", "rR", "lL", "sS", "vV", "wW"],
      "o": ["aA", ",<", ".>", "eE", "qQ", ";:"],
      "p": [".>", "4$", "5%", "yY", "uU", "eE"],
      "q": [";:", "oO", "eE", "jJ", null, null],
      "r": ["cC", "9(", "0)", "lL", "nN", "tT"],
      "s": ["nN", "lL", "/?", "-_", "zZ", "vV"],
      "t": ["hH", "cC", "rR", "nN", "wW", "mM"],
      "u": ["eE", "pP", "yY", "iI", "kK", "jJ"],
      "v": ["wW", "nN", "sS", "zZ", null, null],
      "w": ["mM", "tT", "nN", "vV", null, null],
      "x": ["kK", "iI", "dD", "bB", null, null],
      "y": ["pP", "5%", "6^", "fF", "iI", "uU"],
      "z": ["vV", "sS", "-_", null, null, null],
      "{": ["0)", null, null, "]}", "/?", "lL"],
      "|": ["=+", null, null, null, null, null],
      "}": ["[{", null, null, null, "=+", "/?"],
      "~": [null, null, null, "1!", null, null]
    }
  }

  get azerty() {
    return {
      "!": ["77", null, null, "99", "oO", "iI"],
      "\"": ["22", null, null, "'4", "rR", "eE"],
      "#": ["`~", null, null, "&1", "aA", null],
      "$": ["pP", "a0", "))", "-_", "%%", "mM"],
      "%": ["mM", "$*", "-_", null, "=+", ":/"],
      "&": ["@#", null, null, "22", "zZ", "aA"],
      "'": ["\"3", null, null, "(5", "tT", "rR"],
      "(": ["'4", null, null, "66", "yY", "tT"],
      ")": ["a0", null, null, null, "-_", "$*"],
      "*": ["pP", "a0", "))", "-_", "%%", "mM"],
      "+": [":/", "%%", null, null, null, null],
      ",": ["nN", "kK", "lL", ";.", null, null],
      "-": ["$*", "))", null, null, null, "%%"],
      ".": [",?", "lL", "mM", ":/", null, null],
      "/": [";.", "mM", "%%", "=+", null, null],
      "0": ["99", null, null, "))", "$*", "pP"],
      "1": ["@#", null, null, "22", "zZ", "aA"],
      "2": ["&1", null, null, "\"3", "eE", "zZ"],
      "3": ["22", null, null, "'4", "rR", "eE"],
      "4": ["\"3", null, null, "(5", "tT", "rR"],
      "5": ["'4", null, null, "66", "yY", "tT"],
      "6": ["(5", null, null, "77", "uU", "yY"],
      "7": ["66", null, null, "!8", "iI", "uU"],
      "8": ["77", null, null, "99", "oO", "iI"],
      "9": ["!8", null, null, "a0", "pP", "oO"],
      ":": [";.", "mM", "%%", "=+", null, null],
      ";": [",?", "lL", "mM", ":/", null, null],
      "<": [null, "qQ", "sS", "wW", null, null],
      "=": [":/", "%%", null, null, null, null],
      ">": [null, "qQ", "sS", "wW", null, null],
      "?": ["nN", "kK", "lL", ";.", null, null],
      "@": ["`~", null, null, "&1", "aA", null],
      "A": [null, "@#", "&1", "zZ", "qQ", null],
      "B": ["vV", "hH", "jJ", "nN", null, null],
      "C": ["xX", "fF", "gG", "vV", null, null],
      "D": ["sS", "eE", "rR", "fF", "xX", "wW"],
      "E": ["zZ", "22", "\"3", "rR", "dD", "sS"],
      "F": ["dD", "rR", "tT", "gG", "cC", "xX"],
      "G": ["fF", "tT", "yY", "hH", "vV", "cC"],
      "H": ["gG", "yY", "uU", "jJ", "bB", "vV"],
      "I": ["uU", "77", "!8", "oO", "kK", "jJ"],
      "J": ["hH", "uU", "iI", "kK", "nN", "bB"],
      "K": ["jJ", "iI", "oO", "lL", ",?", "nN"],
      "L": ["kK", "oO", "pP", "mM", ";.", ",?"],
      "M": ["lL", "pP", "$*", "%%", ":/", ";."],
      "N": ["bB", "jJ", "kK", ",?", null, null],
      "O": ["iI", "!8", "99", "pP", "lL", "kK"],
      "P": ["oO", "99", "a0", "$*", "mM", "lL"],
      "Q": [null, "aA", "zZ", "sS", "<>", null],
      "R": ["eE", "\"3", "'4", "tT", "fF", "dD"],
      "S": ["qQ", "zZ", "eE", "dD", "wW", "<>"],
      "T": ["rR", "'4", "(5", "yY", "gG", "fF"],
      "U": ["yY", "66", "77", "iI", "jJ", "hH"],
      "V": ["cC", "gG", "hH", "bB", null, null],
      "W": ["<>", "sS", "dD", "xX", null, null],
      "X": ["wW", "dD", "fF", "cC", null, null],
      "Y": ["tT", "(5", "66", "uU", "hH", "gG"],
      "Z": ["aA", "&1", "22", "eE", "sS", "qQ"],
      "_": ["$*", "))", null, null, null, "%%"],
      "`": [null, null, null, "@#", null, null],
      "a": ["99", null, null, "))", "$*", "pP"],
      "b": ["vV", "hH", "jJ", "nN", null, null],
      "c": ["xX", "fF", "gG", "vV", null, null],
      "d": ["sS", "eE", "rR", "fF", "xX", "wW"],
      "e": ["zZ", "22", "\"3", "rR", "dD", "sS"],
      "f": ["dD", "rR", "tT", "gG", "cC", "xX"],
      "g": ["fF", "tT", "yY", "hH", "vV", "cC"],
      "h": ["gG", "yY", "uU", "jJ", "bB", "vV"],
      "i": ["uU", "77", "!8", "oO", "kK", "jJ"],
      "j": ["hH", "uU", "iI", "kK", "nN", "bB"],
      "k": ["jJ", "iI", "oO", "lL", ",?", "nN"],
      "l": ["kK", "oO", "pP", "mM", ";.", ",?"],
      "m": ["lL", "pP", "$*", "%%", ":/", ";."],
      "n": ["bB", "jJ", "kK", ",?", null, null],
      "o": ["iI", "!8", "99", "pP", "lL", "kK"],
      "p": ["oO", "99", "a0", "$*", "mM", "lL"],
      "q": [null, "aA", "zZ", "sS", "<>", null],
      "r": ["eE", "\"3", "'4", "tT", "fF", "dD"],
      "s": ["qQ", "zZ", "eE", "dD", "wW", "<>"],
      "t": ["rR", "'4", "(5", "yY", "gG", "fF"],
      "u": ["yY", "66", "77", "iI", "jJ", "hH"],
      "v": ["cC", "gG", "hH", "bB", null, null],
      "w": ["<>", "sS", "dD", "xX", null, null],
      "x": ["wW", "dD", "fF", "cC", null, null],
      "y": ["tT", "(5", "66", "uU", "hH", "gG"],
      "z": ["aA", "&1", "22", "eE", "sS", "qQ"],
      "~": [null, null, null, "@#", null, null]
    }
  }

  get keypad() {
    return {
      "*": ["/", null, null, null, "-", "+", "9", "8"],
      "+": ["9", "*", "-", null, null, null, null, "6"],
      "-": ["*", null, null, null, null, null, "+", "9"],
      ".": ["0", "2", "3", null, null, null, null, null],
      "/": [null, null, null, null, "*", "9", "8", "7"],
      "0": [null, "1", "2", "3", ".", null, null, null],
      "1": [null, null, "4", "5", "2", "0", null, null],
      "2": ["1", "4", "5", "6", "3", ".", "0", null],
      "3": ["2", "5", "6", null, null, null, ".", "0"],
      "4": [null, null, "7", "8", "5", "2", "1", null],
      "5": ["4", "7", "8", "9", "6", "3", "2", "1"],
      "6": ["5", "8", "9", "+", null, null, "3", "2"],
      "7": [null, null, null, "/", "8", "5", "4", null],
      "8": ["7", null, "/", "*", "9", "6", "5", "4"],
      "9": ["8", "/", "*", "-", "+", null, "6", "5"]
    }
  }

  get mac_keypad() {
    return {
      "*": ["/", null, null, null, null, null, "-", "9"],
      "+": ["6", "9", "-", null, null, null, null, "3"],
      "-": ["9", "/", "*", null, null, null, "+", "6"],
      ".": ["0", "2", "3", null, null, null, null, null],
      "/": ["=", null, null, null, "*", "-", "9", "8"],
      "0": [null, "1", "2", "3", ".", null, null, null],
      "1": [null, null, "4", "5", "2", "0", null, null],
      "2": ["1", "4", "5", "6", "3", ".", "0", null],
      "3": ["2", "5", "6", "+", null, null, ".", "0"],
      "4": [null, null, "7", "8", "5", "2", "1", null],
      "5": ["4", "7", "8", "9", "6", "3", "2", "1"],
      "6": ["5", "8", "9", "-", "+", null, "3", "2"],
      "7": [null, null, null, "=", "8", "5", "4", null],
      "8": ["7", null, "=", "/", "9", "6", "5", "4"],
      "9": ["8", "=", "/", "*", "-", "+", "6", "5"],
      "=": [null, null, null, null, "/", "9", "8", "7"]
    }
  }
}
