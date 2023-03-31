var favouriteSubjectMap = new Map<string, string>();
favouriteSubjectMap.set('ITP2', 'red');
favouriteSubjectMap.set('NW2', 'green');
favouriteSubjectMap.set('WIR_3', 'blue');

const defaultColor = 'gray';

function favouriteSubjectToColor(favouriteSubject: string) {
  let color = favouriteSubjectMap.get(favouriteSubject);
  if (!color) {
    color = defaultColor;
  }
  return color;
}

export { favouriteSubjectToColor };
