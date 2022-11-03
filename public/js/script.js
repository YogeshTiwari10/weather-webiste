const cityname = document.getElementById('cityname');
const city_name = document.getElementById('city_name');
const submitBtn = document.getElementById('submitBtn');
const temp_status = document.getElementById('temp_status');
const tempval = document.getElementById('tempval');
const datahide = document.querySelector('.mid-layer');
const todaydate = document.getElementById('todaydate');
const days = document.getElementById('day');

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const date = new Date();
let day = date.getDate();
let month = date.getMonth();

  var a = new Date();
  var weekdays = new Array(7);
  weekdays[0] = "Sunday";
  weekdays[1] = "Monday";
  weekdays[2] = "Tuesday";
  weekdays[3] = "Wednesday";
  weekdays[4] = "Thursday";
  weekdays[5] = "Friday";
  weekdays[6] = "Saturday";
  var r = weekdays[a.getDay()];
  days.innerText = r;

todaydate.innerText = `${day}, ${monthNames[month]}`;

const getInfo = async(event)=>{
    event.preventDefault();
    let cityval = cityname.value;
  
  
  if(cityval===""){
    city_name.innerText = "Please write a name to search";
    datahide.classList.add('data_hide');
  }
  else{
    try{
        // console.log(cityval)
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=65eca4e5ac7f90098eaaebde56552f60`;
        const response = await fetch(url);
        const data = await response.json();
        let a = data.main.temp;
        
        tempval.innerText = parseFloat((a-273.15)).toFixed(2);
        temp_status.innerText = data.weather[0].main;
        city_name.innerText = `${data.name}, ${data.sys.country}`;
        datahide.classList.remove('data_hide');
        
    }
    catch{
        city_name.innerText = "Please Enter the Correct City Name";
        datahide.classList.add('data_hide');
    }
  }

}
submitBtn.addEventListener('click',getInfo);