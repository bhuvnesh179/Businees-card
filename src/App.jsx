
function App() {
  return (
    <>
    <CardComponent>
      <h1>Lokeshwar</h1>
      <p>A TA in the 100Xdevs cohort 2.0</p>
      <h3>Interests</h3>
      <p>Ionic</p>
      <p>Open Source</p>
      <p>App Dev</p>
      <button> LinkdedIn</button>
      <button> Twitter</button>
      </CardComponent>
    </>
  )
}

function CardComponent({children}){
  return <div style={{
    border: "2px solid black", 
    height:"300px",
    width:"300px",
    padding: "10px"
    }}>
    {children}
  </div>
}

export default App
