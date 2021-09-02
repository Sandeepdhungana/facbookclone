import asynchandler from "express-async-handler";

const getNames = asynchandler(async (users) => {
  try {
    const names = users.map((user) => {
      return {
        _id: user._id,
        firstname: user.firstname,
        profilePic: user.profilePic,
        surname: user.surname,
      };
    });
    // console.log(names);
    return names;
  } catch (err) {
    console.log(err);
  }
});

export { getNames };

// for (let i = 0; i < 20; i++) {
//     generateRandomUser();
//   }
