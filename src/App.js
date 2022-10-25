import React,{useState} from 'react';
import './index.css';
import overweight from './assets/overweight-img.jpg';
import underweight from './assets/underweight.jpg';
import healthy from './assets/healthy.png';
function App() {

  const[weight, setWeight] = useState(0);
  const[height, setHeight] = useState(0);
  const[bmi, setBmi] = useState();
  const[message, setMessage] = useState("");
  const[imgSrc, setImgSrc] = useState(null);


  const calBmi = (event) => {
    
    event.preventDefault();
    if(weight == 0 || height == 0){
      alert("Fill the inputs properly")
    }
    else{

      const bmi = weight/(height*height)*10000;
      setBmi(bmi.toFixed(1));

      if(bmi>25){
        setMessage("You are overweight");
        setImgSrc(overweight);
      }
      else if(bmi<18.5){
        setMessage("You are underweight");
        setImgSrc(underweight);
      }
      else if(bmi>=18.5 && bmi <= 25){
        setMessage("You are healty");
        setImgSrc(healthy);
      }
    }


    //show image based on bmi calculation
    

    // if(bmi<1){
    //    setImgSrc(null);
    // }else if(bmi>25){
      
    // }else if(bmi<18.5 && bmi<=25){
      
    // }else{
      
    // }
    
    
  }
  const reload =()=>{
    window.location.reload();
    
  }

  return (
    <div className="app">
      <div className="container">
        <h3>BMI Calculator</h3>
        <form onSubmit={calBmi}>
          <div className='mar weight'>
            <label>Weight(kg)</label><br/>
            <input type="text" value={weight} onChange={(e)=> setWeight(e.target.value)} />
          </div>
          <div className='mar height'>
            <label>Height(cm)</label><br/>
            <input type="text" value={height} onChange={(e)=> setHeight(e.target.value)}/>
          </div>
          <button type="submut" className='btn sb-btn'>Submit</button><br></br>
          <button onClick={reload} className='btn re-btn'>Reload</button>
        </form>

        <div className='mar bmi-sec'>
          Your BMI is : {bmi}
        </div>
        <div className='mar msg-sec'>
          {message}
        </div>
        <div className='mar img'>
          <img src={imgSrc} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
