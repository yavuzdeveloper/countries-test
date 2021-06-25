//import{axios, axiosMock} from "axios";
// //import { cleanup, render } from '@testing-library/react';
// import FetchCountries from "./FetchCountries";


// import React from 'react'
// import { rest } from 'msw' //moc servis working
// import { setupServer } from 'msw/node' //jest node üzerinde çaıştığı için (browser üzerinde değil)
//import { render, fireEvent, waitFor } from '@testing-library/react'
// import '@testing-library/jest-dom/extend-expect'
//import App from "./App";



// test("FetchCountry render corretly", () => {
//   render(<App />);
// })


// const server = setupServer(     //msw üzerinde server oluşturduk.  setupServer func kullanrak
//   rest.get("https://restcountries.eu/rest/v2/all", (req, res, ctx) => {
//     return res(ctx.json({ message: 'hello there' }))
//   })
// )

// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers())//herbir test çalıştıktan sonra hanle ler ları resetliyor.
// afterAll(() => server.close())//tüm testler çalıştıktan sonrada moc servis worker ı kapatıyor.

// test('displays message', async () => {
//   const { getByText } = render(<App />)

// //   const btnSendRequest = getByText(/send/i)//butonu bulduk

// //   fireEvent.click(btnSendRequest)//bulduğumuz butona tıkladık

//   await waitFor(() => getByText(/hello there/i))//react test lib. den waitFor func kullanyoruz. waitFor geriye promise döndürdüğü için await kulandık.
//   //yani belirli aralıklarla ekranda hello text var mı yok mu ona bakıoyor (default u 1000msn) jest te 5000 msn çalışyo sonra time out veriyor
//   //msw kulandığımız için işlem hiçbir zaman 100msn yi geçmeyecek
// })








// async function getUsers() {
//     try {
//       const response = await axiosMock.get("/users");
//       return response.data.users;
//     } catch (e) {
//       throw new Error("Something wrong happened");
//     }
// }

// jest.mock("axios");

// const fakeUsers = ["john", "Emma", "Tom"];
// axiosMock.get.mockResolvedValue({ data: { users: fakeUsers } });

// test("get the users", async () => {
//     const users = await getUsers();
//     expect(users).toEqual(fakeUsers);
// });



//******************************************************* */
// jest.mock("axios");

// async function getCountries() {
//     try {
//         const response = await axiosMock.get("https://restcountries.eu/rest/v2/all");
//         return response.data.countries;
//     } catch (err) {
//       console.log("Something wrong happened") 
//     }
// }

// const testCountries = ["country1", "country2", "country3"];

// axiosMock.get.mockResolvedValue({ data: { countries: testCountries } });

// test("get the countries", async () => {
//     const countries = await getCountries();
//     expect(countries).toEqual(testCountries);
// });
//******************************************************* */





import React from 'react';
import { render, cleanup, waitFor } from '@testing-library/react';
import App from './App';
import mockedAxios from 'axios';

afterEach(cleanup);

jest.fn().mockResolvedValue();

test('mocking axios request', async () => {
  const data = {
    counreies: [
      { name: 'country1' },
      { name: 'country2' },
      { name: 'country3' }
    ]
  };

  mockedAxios.get.mockResolvedValueOnce(data);
  const { getByText } = render(<App />);

  // await waitFor(() => {
  //   expect(getByText('country1'));
  // });

   await waitFor(() => getByText(/country1/i))
});




//******ivanov */;

// global.fetch = jest.fn(() => 
//   Promise.resolve({
//     json: () =>
//       Promise.resolve({
//         countries_url:"https://restcountries.eu/rest/v2/all",
//         value: "countries test"
//       }),
//   })
// );

// describe("App", () => {
//   it("loads country", async () => {
//     await act(async () => render(<App />));
//     expect(screen.getByText("country test")).toBeInTheDocument();
//   });
// });
//****leigh ********************************* */

// beforeEach(() => {
//   fetch.resetMocks();
// });


// global.fetch = jest.fn(() => 
//   Promise.resolve({
//     json: () =>
//       Promise.resolve({ 
//         data : {
//           countries: [
//             { name: 'country1' },
//             { name: 'country2' }
//           ]
//         }  
//       }),
//   })
// );

// it("converts correctly", async () => {
//   fetch.mockResponseOnce(JSON.stringify({  data : { countries:"country"
//           // countries: [
//           //   { name: 'country1' },
//           //   { name: 'country2' }
//           // ]
//         }  }));


// const data = await fetchCountries();

//   expect(data).toEqual("country");
//   // expect(fetch).toHaveBeenCalledTimes(1);
//   // expect(fetch).toHaveBeenCalledWith(
//   //   `https://restcountries.eu/rest/v2/all`
//   // );
// });


//**************************************************** */
// import axios from 'axios';
// import MockAdapter from 'axios-mock-adapter';
// //import chatbot from './chatbot';
// import fetchCountries from './FetchCountries';

// describe('fetchCountries', () => {
//     it('returns data when sendMessage is called', done => {
//         var mock = new MockAdapter(axios);
//         const data = { response: true };
//         mock.onGet('https://restcountries.eu/rest/v2/all').reply(200, data);

//         fetchCountries.sendMessage(0, 'any').then(response => {
//             expect(response).toEqual(data);
//             done();
//         });
//     });
// });

//******************************************* */