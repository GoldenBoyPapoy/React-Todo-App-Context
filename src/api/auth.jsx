/**
 * Des: aut API router
 * created_at: 2023.05.12
 * updated_at: 2023.05.12
 */

// import third-party libraries
const user = {
  email: "123@123.com",
  password: "123123",
};

export const auth = async (uri, values) => {
  if (user.email !== values.email) {
    return { code: 403, message: "Error login" };
  } else {
    if (user.password === values.password) {
      return { code: 200, message: "Welcome",token: "kionasdfqwe123asdf"};

    } else {
      return { code: 403, message: "Error login" };
    }
  }
};
