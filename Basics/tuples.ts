const person3: {
  role: [number, string] //tuple type
} = {
  role: [1, 'author']
}

//tuple type, an array with exactly 2 items with exactly the types assigned
person3.role.push('admin'); //works b/c these methods work for tuples
person3.role[1] = 10; //error b/c not of sring type based on explicit assignment

person3.role = [0, 'admin', 'user'] // also throws error

