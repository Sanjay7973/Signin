
function Curdoperation() {
 
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
            <form class="flex flex-wrap -m-2" >
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="email" class="leading-7 text-sm text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-full mb-9 mt-2">
                <button
                  type="submit"
                  class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  Submit
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
                  <tbody className="m-12">
                    <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                      <td>1</td>
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        sanjay
                      </th>
                      <td>s@gmail.com</td>
                      <td>
                        <button
                          className=" rounded bg-blue-500 py-1 px-5 text-white hover:bg-blue-700"
                        >
                          Edit
                        </button>
                      </td>
                      <td>
                        <button
                          className=" m-2 rounded bg-red-500 py-1 px-5 text-white hover:bg-red-700"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

export default Curdoperation;
