import { render } from '@testing-library/react';
import Country from "./Country";


const country = {
    name: "countryTest",
    capital: "capitalTest",
    region: "regionTest",
    nativeName: "nativeNameTest",
    callingCodes: "callingCodesTest"
}


test("Country render correctly", () => {
    render(<Country country= {country}/>);
})