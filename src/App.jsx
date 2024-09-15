
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
      
      <button style={{ 
        backgroundColor: "#04AA6D",
        border: "none",
        color: "white",
        padding: "20px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "16px",
        margin: "4px 4px",
        borderRadius: "8px",
          }}> LinkdedIn</button>
      <button style={{ 
          backgroundColor: "#04AA6D",
          border: "none",
          color: "white",
          padding: "20px",
          textAlign: "center",
          textDecoration: "none",
          display: "inline-block",
          fontSize: "16px",
          margin: "4px 4px",
          borderRadius: "8px",  
          }}> Twitter</button>
      
      
      </CardComponent>
    </>
  )
}

function CardComponent({children}){
  return <div style={{
    // border: "2px solid black", 
    height:"40%",
    width:"40%",
    padding: "10px",
    borderRadius: "8px",
    boxShadow: "1px 1px 10px 1px grey"

    }}>
    {children}
  </div>
}

export default App
