// I added the promise to its own JS file and exported it like a Node environment export. However, this is not necessary. This code could simply be repeated in both files and that is fine too.

const birthdayParty = new Promise((resolve, reject) => {
  let isRaining = true;
  if (!isRaining) {
    const venue = {
      local: "Centennial Park",
      friends: 30,
    };
    resolve(venue);
  } else {
    const reason = new Error("Sorry, in house birthday party.");
    reject(reason);
  }
});

module.exports = birthdayParty;
