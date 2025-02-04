import { useState } from "react";

// const dummy = [
//   {id:1,isName:'sanjay',email:"s&gmail.com"}
// ]
function Curdoperation() {
  const [isName, setIsName] = useState("");
  const [email, setEmail] = useState("");
  const [isEditId, setIsEditId] = useState(null);
  const [isNameError, setIsNameError] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/;

  const [data, setData] = useState([]);

  // name onchange handler
  const isNameHandler = (e) => {
    let name = e.target.value;
    name = name.replace(/\s+/g, " ");

    // Prevent leading and trailing spaces
    name = name.trimStart();
    if (name.length <= 5) {
      setIsNameError(true);
    } else {
      setIsNameError(false);
    }
    setIsName(name);
  }; // email onchange handler
  const isEmailHandler = (e) => {
    const email = e.target.value;
    if (!email.match(emailRegex)) {
      setIsEmailError(true);
    } else {
      setIsEmailError(false);
    }
    setEmail(email);
  };
  // submit button
  const submitHandler = (e) => {
    e.preventDefault();

    if (isName.length <= 5 || !email.match(emailRegex)) {
      let name = e.target[0].value;
      name = name.replace(/\s+/g, " ");

      // Prevent leading and trailing spaces
      name = name.trimStart();
      if (name.length <= 5) {
        setIsNameError(true);
      } else {
        setIsNameError(false);
      }
      setIsName(name);

      const email = e.target[1].value;
      if (!email.match(emailRegex)) {
        setIsEmailError(true);
      } else {
        setIsEmailError(false);
      }
      return; // Stop further execution if validation fails
    } else {
      alert("Form Submit Sucessfully");
    }

    let userData = {
      id: Date.now(),
      isName: isName,
      email: email,
    };
    // let orignalData= [...data,userData]
    setData((prev) => [...prev, userData]);
    if (isEditId) {
      let updateUser = data.map((user) =>
        user.id === isEditId ? userData : user
      );
      setData(updateUser);
      setIsEditId(null);
    }
    setIsName("");
    setEmail("");
  };

  // delete user
  const deleteHandler = (id) => {
    const newdata = data.filter((val) => val.id !== id);
    setData(newdata);
  };
  // edit user
  const editHandler = (user) => {
    setIsName(user.isName);
    setEmail(user.email);
    setIsEditId(user.id);
  };
  return (
    <>
      <section class="text-gray-600 body-font relative">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-5">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              User Todo
            </h1>
          </div>
          <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <form class="flex flex-wrap -m-2" onSubmit={submitHandler}>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    value={isName}
                    onKeyDown={(e) =>
                      e.key === " " && isName.length === 0 && e.preventDefault()
                    }
                    onChange={isNameHandler}
                    type="text"
                    id="name"
                    name="name"
                    class="flex flex-row w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  {isNameError ? (
                    <span style={{ color: "red" }}>
                      name atleast requird 5 latter
                    </span>
                  ) : (
                    ""
                  )}
                </div>
              </div>  
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="email" class="leading-7 text-sm text-gray-600">
                    Email
                  </label>
                  <input
                    value={email}
                    onChange={isEmailHandler}
                    type="email"
                    id="email"
                    name="email"
                    class=" w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  {isEmailError ? (
                    <span style={{ color: "red" }}>email is invalid</span>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div class="p-2 w-full mb-9 mt-2">
                <button
                  type="submit"
                  class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  {isEditId ? "Update" : "Submit"}
                </button>
              </div>
            </form>
          </div>

          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    user id
                  </th>
                  <th scope="col" class="px-6 py-3">
                    user name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    email
                  </th>
                  <th scope="col" class="px-6 py-3">
                    edit
                  </th>
                  <th scope="col" class="px-6 py-3">
                    delete
                  </th>
                </tr>
              </thead>
              {data.map((user, index) => {
                return (
                  <tbody className="m-12" key={user.id}>
                    <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                      <td>{user.id}</td>
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {user.isName}
                      </th>
                      <td>{user.email}</td>
                      <td>
                        <button
                          onClick={() => editHandler(user)}
                          className=" rounded bg-blue-500 py-1 px-5 text-white hover:bg-blue-700"
                        >
                          Edit
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => deleteHandler(user.id)}
                          className=" m-2 rounded bg-red-500 py-1 px-5 text-white hover:bg-red-700"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

export default Curdoperation;
