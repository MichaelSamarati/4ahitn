const defaultColor = '#777777';

var favouriteSubjectMap = new Map<string, string>();
favouriteSubjectMap.set('D', 'red');
favouriteSubjectMap.set('AM', 'orange');
favouriteSubjectMap.set('E1', 'yellow');
favouriteSubjectMap.set('ITP2', 'Lime');
favouriteSubjectMap.set('NW2', 'green');
favouriteSubjectMap.set('SEW', 'cyan');
favouriteSubjectMap.set('NWT1', 'blue');
favouriteSubjectMap.set('GGP', 'purple');
favouriteSubjectMap.set('WIR2', 'indigo');
favouriteSubjectMap.set('WIR3', 'magenta');
favouriteSubjectMap.set('BSPK', '#DE3163');
favouriteSubjectMap.set('INSY', 'pink');

var phoneMap = new Map<string, string>();
phoneMap.set('iOS', '#8acaff');
phoneMap.set('Android', '#32de84');
phoneMap.set('Windows-Phone', '#fa6800');

var burgerPizzaAvocadoMap = new Map<string, string>();
burgerPizzaAvocadoMap.set('🍕', '#fb8b23');
burgerPizzaAvocadoMap.set('🍔', '#88472e');
burgerPizzaAvocadoMap.set('🥑', '#87a922');

function favouriteColorToColor(favouriteColor: string) {
  if (!favouriteColor) {
    return defaultColor;
  }
  return favouriteColor;
}

function favouriteSubjectToColor(favouriteSubject: string) {
  return attributeToColor(favouriteSubject, favouriteSubjectMap);
}

function phoneToColor(phone: string) {
  return attributeToColor(phone, phoneMap);
}

function burgerPizzaAvocadoToColor(burgerPizzaAvocado: string) {
  return attributeToColor(burgerPizzaAvocado, burgerPizzaAvocadoMap);
}

function attributeToColor(attribute: string, map: Map<string, string>) {
  try {
    let color = map.get(attribute);
    if (!color) {
      return defaultColor;
    }
    return color;
  } catch (e) {
    return defaultColor;
  }
}

export {
  favouriteColorToColor,
  favouriteSubjectToColor,
  phoneToColor,
  burgerPizzaAvocadoToColor,
};
