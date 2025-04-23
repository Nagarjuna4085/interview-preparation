

// 🔸 Deep Copy
// Copies everything, including nested objects and arrays.

// The copied object is totally independent of the original.



const original = {
    name: "Nagarjuna",
    address: { city: "Hyderabad" }
  };
  
  const shallowCopy = JSON.parse(JSON.stringify(original));
  
  shallowCopy.name = "Sanam";
  shallowCopy.address.city = "Delhi"; 
  
  console.log(original.address.city); // hyderabad
  