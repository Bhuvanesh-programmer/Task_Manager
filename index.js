second=0;
minutes=0;
hours=0;
dur=0;
isRunning=false;

function startstop(){
    if(!isRunning){
        isRunning=true;
       timer= setInterval(()=>{
            second++;
            if(second>=60){
                minutes++;
                second=0;
                if(minutes>=60){
                    hours++;
                    minutes=0;
                }
            }
            let formattedTime=`${hours.toString()
            .padStart(2,"0")}:${minutes.toString().padStart(2,"0")}:${second.toString().padStart(2,"0")}`;
            document.getElementById("stopwatch").innerText= `${formattedTime}`;
            dur=formattedTime;
            document.getElementById("startstop").innerText="stop";
        },1000);
    }
    else{
        document.getElementById("startstop").innerText="Start";
        clearInterval(timer);
        isRunning=false;
    }
}
function Reset(){
    second=0;
    hours=0;
    minutes=0;
    let formattedTime=`${hours.toString().padStart(2,"0")}:${minutes.toString().padStart(2,"0")}:${second.toString().padStart(2,"0")}`;
    document.getElementById("stopwatch").innerText=formattedTime;
    document.getElementById("startstop").innerText="Start";
}



var content=[
    {
        Task:"Meeting",
        Description:"Client Meeting",
        Duration:"00:50:43"
    },
    {
        Task:"Project-abc",
        Description:"Developing-xyz",
        Duration:"01:42:02"
    },
    {
        Task:"Presonal Break",
        Description:"-",
        Duration:"00:22:15"
    },
    {
        Task:"Meeting",
        Description:"Daily Scrum",
        Duration:"00:32:28"
    }
]

var arr=content;


let selectedtask="";
var selectvalue=()=>{
    selectedtask=document.getElementById("selid").value;
    if(selectedtask=="None"){
        arr=content;
        Filter();
    }
    else{
    arr=content.filter(tsk => (tsk.Task == selectedtask));
    Filter();
}
    
}
Filter=()=>{
    var table=document.getElementById("myTable");
    table.innerHTML=" ";
    console.log(arr);
    var row=table.insertRow(0);
    var col1=row.insertCell(0);
    var col2=row.insertCell(1);
    var col3=row.insertCell(2);
    var col4=row.insertCell(3);
    col1.innerHTML="Task";
    col2.innerHTML="Description";
    col3.innerHTML="Duration";
    col4.innerHTML="Action";
    
    arr.map((item,i)=>{
        var row=table.insertRow(i+1);
        var col1=row.insertCell(0);
        var col2=row.insertCell(1);
        var col3=row.insertCell(2);
        var col4=row.insertCell(3);
        col1.innerHTML=item.Task;
        col2.innerHTML=item.Description;
        col3.innerHTML=item.Duration;
        col4.innerHTML=`<button class="del" onClick={handleDelete(${i})} >Delete</button><button class="update" onClick={handleUpdate(${i})} >Update</button>`
    }
);
};
Filter();

const handleDelete = (i)=>{
    arr.splice(i , 1);
    Filter();
}

const AddTask=()=>{
    var task=document.getElementById("Task").value
    var des=document.getElementById("Description").value
    var obj={
        Task:task,
        Description:des,
        Duration:dur,
    }
    content.push(obj)
    Filter();
    task.value="";
    des.value="";
    dur="";
}



// const handleUpdate = (i)=>{
//     var check = document.querySelector("#chk");
//     index = i;
//     document.querySelector("#Task").value = arr[index].Task;
//     document.querySelector("#Description").value =arr[index].Description;
//     document.querySelector("#Duration").value = arr[index].Duration;
    
    
// }













// document.querySelector("#meeting").addEventListener("click",()=>{
//     arr=content.filter((item)=>item.Task=="Meeting");
//     console.log(arr);
//     var table=document.getElementById("myTable");
//     table.innerHTML=" ";
//     Filter();
// })

// document.querySelector("#selid").addEventListener("click",()=>{
//     arr=content.filter((item)=>item.Task=="Project-abc");
//     console.log(arr);
//     var table=document.getElementById("myTable");
//     table.innerHTML=" ";
//     Filter();
// })

// document.querySelector("#selid").addEventListener("click",()=>{
//     arr=content.filter((item)=>item.Task=="Presonal Break");
//     console.log(arr);
//     var table=document.getElementById("myTable");
//     table.innerHTML=" ";
//     Filter();
// })
// document.querySelector("#selid").addEventListener("click",()=>{
//     // arr=content;
//     // console.log(arr);
//     var table=document.getElementById("myTable");
//     table.innerHTML=" ";
//     Filter();
// })


// },5000);













// timer=setInterval(()=>{console.log("Hi Makalae")},2000);

// setTimeout(()=>{
//     clearInterval(timer)