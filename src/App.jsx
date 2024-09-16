  import { BusinessCard } from "./components/BusinessCard";
function App(){
let Card = {
"name": "Lokeshwar",
"description": "A TA in 100Xdevs cohort 2.0",
"interestList": ["Ionic", "Open Source", "App Dev"],
  "Linkedin": "https://www.linkedin.com/in/bhuvnesh-bansal-5126371b0/",
  "Twitter": "https://x.com/hustler_03_06",
}
return (
  <>
  <BusinessCard innerComponent={Card} />
    {/* <BusinessCard innerComponent={Card} /> */}

  </>
)
}
export default App;
