
module.exports = {
  "extends": [
    "stylelint-config-standard",
  ],
  "plugins":  [
    "@primer/stylelint-config/plugins/no-undefined-vars",
    "@primer/stylelint-config/plugins/no-unused-vars"
  ],
  "rules": {
    "no-descending-specificity": null
  }
};
