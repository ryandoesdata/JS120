// Example to show the limitations of single inheritance and
// need for mixins

class Entree {}

class Forkable extends Entree {
  poke() {}
}

class Spoonable extends Entree {
  scoop() {}
}

class Steak extends Forkable {}

class Chili extends Spoonable {}

class Lasagna extends Forkable {}

class ShepardsPie extends Spoonable {}

// Stew and RiceCakes are forkable and spoonable. They need to
// have properties of both classes.

class Stew extends Forkable {
  scoop() {} // cannot access because scoop is defined in the
}            // spoonable class

class RiceCakes extends Forkable {
  scoop() {} // cannot access because scoop is defined in the
}            // spoonable class
