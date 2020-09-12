// index types

interface ErrorContainer {
  id: string
  [prop: string]: string //i don't know the exact property name, but i'm telling ts to make sure it's a string
}

const errorBag: ErrorContainer = {
  email: 'not a valid email!',
  id: 'err1',
}

