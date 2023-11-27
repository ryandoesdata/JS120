// Example to show how using a mixin can overcome javascript's 
// single inheritance issue.

let Spoonable = {
  scoop() {}
}

class Entree {}

class Forkable extends Entree {
  poke() {}
}

class Steak extends Forkable {}

class Chili extends Entree {}
Object.assign(Chili.prototype, Spoonable);

class Lasagna extends Forkable {}

class ShepardsPie extends Entree {}
Object.assign(ShepardsPie.prototype, Spoonable);

class Stew extends Forkable {}
Object.assign(Stew.prototype, Spoonable);

class RiceCakes extends Forkable {}
Object.assign(RiceCakes.prototype, Spoonable);