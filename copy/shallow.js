
// Shallow Copy
// Copies the top-level of the object or array.

// Nested objects/arrays are NOT copied, just referenced.

// So if you change a nested value in the copied object, it also affects the original.

const original = {
    name: "Naga",
    address: { city: "Hyderabad" }
  };
  
  const shallowCopy = { ...original };
  
  shallowCopy.name = "Sanam"; // only changes shallowCopy
  shallowCopy.address.city = "Delhi"; // changes both!
  
  console.log(original.address.city); // "Delhi"
  