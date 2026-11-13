// Preserve the paper's LaTeX syntax, including \bm and numbered equations.
window.MathJax = {
  loader: { load: ['[tex]/boldsymbol'] },
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']],
    packages: { '[+]': ['boldsymbol'] },
    macros: { bm: ['\\boldsymbol{#1}', 1] },
    tags: 'ams'
  }
};
