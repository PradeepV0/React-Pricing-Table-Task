import logo from './logo.svg';
import './App.css';

function App() {

  const data = [
    {
      header : "FREE",
      subHeader :"$0/month",
      user : "✔  Single User",
      storage :"✔  5GB Storage",
      publicProj:"✔ Unlimited Public Projects",
      access:"✔ Community Access",
      privateProj:"✖ Unlimited Private Projects",
      support :"✖ Dedicated Phone Support",
      subdomin:"✖ Free Subdomain",
      status : "✖ Monthly Status Repoarts",
      disable5 : "disable5",
      disable6: "disable6",
      disable7:"disable7",
      disable8: " disable8 ",
    },
    {
      header : "PLUS",
      subHeader :"$9/month",
      user : "✔  5 Users",
      storage :"✔  50GB Storage",
      publicProj:"✔ Unlimited Public Projects",
      access:"✔ Community Access",
      privateProj:"✔ Unlimited Private Projects",
      support :"✔ Dedicated Phone Support",
      subdomin:"✔ Free Subdomain",
      status : "✖ Monthly Status Repoarts",
      disable8: " disable8 ",
    },
    {
      header : "PRO",
      subHeader :"$49/month",
      user : "✔  Unlimited Users",
      storage :"✔  150GB Storage",
      publicProj:"✔ Unlimited Public Projects",
      access:"✔ Community Access",
      privateProj:"✔ Unlimited Private Projects",
      support :"✔ Dedicated Phone Support",
      subdomin:"✔ Unlimited Free Subdomain",
      status : "✔ Monthly Status Repoarts",
    }
  ]
  
  return (
    <div className="App">
      {data.map((value,index)=>(
        <PrizeCard
        key={index}
        header ={value.header}
        subHeader={value.subHeader}
        user={value.user}
        storage={value.storage}
        publicProj={value.publicProj}
        access={value.access}
        privateProj={value.privateProj}
        support={value.support}
        subdomin={value.subdomin}
        status={value.status}
        disable1={value.disable1}
        disable2={value.disable2}
        disable3={value.disable3}
        disable4={value.disable4}
        disable5={value.disable5}
        disable6={value.disable6}
        disable7={value.disable7}
        disable8={value.disable8}
        

        />
        ))}
     
    </div>
  );
}

export default App;



function PrizeCard(props){
  return(
    <div className="prizecard">
    <h2>{props.header}</h2>
    <h3>{props.subHeader}</h3>
    <hr></hr>
     <ul>
  <li className={props.disable1}>{props.user}</li>
  <br></br>
  <li className={props.disable2}>{props.storage}</li>
  <br></br>
  <li className={props.disable3}>{props.publicProj}</li>
  <br></br>
  <li className={props.disable4}>{props.access}</li>
  <br></br>
  <li className={props.disable5}>{props.privateProj}</li>
  <br></br>
  <li className={props.disable6}>{props.support}</li>
  <br></br>
  <li className={props.disable7}>{props.subdomin}</li>
  <br></br>
  <li className={props.disable8}>{props.status}</li>
</ul>
<br></br>
<button>BUTTON</button>
    </div>

  )
}
