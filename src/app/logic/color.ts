const colorShade = (col: any, amt: any) => {
  col = col.replace(/^#/, '');
  if (col.length === 3)
    col = col[0] + col[0] + col[1] + col[1] + col[2] + col[2];

  let [r, g, b] = col.match(/.{2}/g);
  [r, g, b] = [
    parseInt(r, 16) + amt,
    parseInt(g, 16) + amt,
    parseInt(b, 16) + amt,
  ];

  r = Math.max(Math.min(255, r), 0).toString(16);
  g = Math.max(Math.min(255, g), 0).toString(16);
  b = Math.max(Math.min(255, b), 0).toString(16);

  const rr = (r.length < 2 ? '0' : '') + r;
  const gg = (g.length < 2 ? '0' : '') + g;
  const bb = (b.length < 2 ? '0' : '') + b;

  return `#${rr}${gg}${bb}`;
};

function genderToColor(gender: string | undefined) {
  let colorVariable = 'var(--color-gender-default)';
  if (gender === 'm') {
    colorVariable = 'var(--color-male)';
  } else if (gender === 'f') {
    colorVariable = 'var(--color-female)';
  }
  return colorVariable;
}

function genderToColorTransparent(gender: string | undefined) {
  let colorVariable = 'var(--color-gender-default)';
  if (gender === 'm') {
    colorVariable = 'var(--color-male-transparent)';
  } else if (gender === 'f') {
    colorVariable = 'var(--color-female-transparent)';
  }
  return colorVariable;
}

function genderToColorDark(gender: string | undefined) {
  let colorVariable = 'var(--color-gender-default)';
  if (gender === 'm') {
    colorVariable = 'var(--color-male-dark)';
  } else if (gender === 'f') {
    colorVariable = 'var(--color-female-dark)';
  }
  return colorVariable;
}

function genderToColorDarkTransparent(gender: string | undefined) {
  let colorVariable = 'var(--color-gender-default)';
  if (gender === 'm') {
    colorVariable = 'var(--color-male-dark-transparent)';
  } else if (gender === 'f') {
    colorVariable = 'var(--color-female-dark-transparent)';
  }
  return colorVariable;
}

function isStringValidColor(color: string) {
  const s = new Option().style;
  s.color = color;
  return s.color !== '';
}

export {
  genderToColor,
  genderToColorTransparent,
  genderToColorDark,
  genderToColorDarkTransparent,
  isStringValidColor,
};
