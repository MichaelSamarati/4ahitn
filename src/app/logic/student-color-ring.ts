const defaultColor = '#777777';

var favouriteSubjectMap = new Map<string, string>();
favouriteSubjectMap.set('ITP2', 'red');
favouriteSubjectMap.set('NW2', 'green');
favouriteSubjectMap.set('WIR_3', 'purple');

var phoneMap = new Map<string, string>();
phoneMap.set('IOS', '#8acaff');
phoneMap.set('Android', '#32de84');
phoneMap.set('Windows Phone', '#fa6800');

function favouriteSubjectToColor(favouriteSubject: string) {
  let color = favouriteSubjectMap.get(favouriteSubject);
  if (!color) {
    color = defaultColor;
  }
  return color;
}

function phoneToColor(phone: string) {
  let color = phoneMap.get(phone);
  if (!color) {
    color = defaultColor;
  }
  return color;
}

export { favouriteSubjectToColor, phoneToColor };
