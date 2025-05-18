
let arrayFromData = [];
let arrayoffLine = [];

    if (window.localStorage.getItem('newProject')!= null) {
        arrayFromData = JSON.parse(window.localStorage.getItem('newProject'))
        
    } 
    if (window.localStorage.getItem('arrayoffLine')!=null) {
        arrayoffLine = JSON.parse(window.localStorage.getItem('arrayoffLine'))
        
    } 
    
    console.log(arrayFromData)
    const currentDate = new Date();
    let formattedDate = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`;
    let dateHours = currentDate.getHours();
    let dateMinutes = currentDate.getMinutes();
    let dateHous = dateHours.toString().padStart(2, '0');
    let timefull = dateHous>12 ? 'PM':'AM';

    let dateMinute = dateMinutes.toString().padStart(2, '0');
    let dateyear = ` ${dateHours}:${dateMinutes}`;
    console.log(dateyear)



let op;
let tmp;
let obj={};
let gethours;
let getminutes;
let dataminutes;
let allDate;
let day;
let month;
let year;
let moode = 'create'
let valuethinkess
let getdatafromEnd;
let thinkessBar;
let getIfromloop;
let deleteDiv;
let resultFinally;
let getNumberValue;
let getDataChangeBar ;
let getDataChangeSpecifitions;
let getName;
let nameLoad;
let getNumberLine;
let eTarget;
let globalI ;
let nametyfinall;
let faelysum;
let minance;
let total;
let getEvenAddven
let anotherTimeop
let getEtarget;
let btn = document.getElementById("btn")
let one  =  document.getElementById("one")
let two  =  document.getElementById("two")
let three  =  document.getElementById("three")
let four  =  document.getElementById("four")
let five  =  document.getElementById("five")
let sex  =  document.getElementById("six")
let seven  =  document.getElementById("seven")
let eight  =  document.getElementById("eight")

const parentDivop = document.getElementById("allDivionscontainer");
const parentDiv = document.querySelectorAll(".allDivionscontainer .countainer");

let bar = document.getElementById("bar")
let dia = document.getElementById("thivsDiam")
let specifications = document.getElementById("specifications")
let qualityName = document.getElementById("qualityName")
let qualityNameLoad = document.getElementById("qualityNameLoad")
let reasonRejct = document.getElementById("reasonRejct")
let faely = document.getElementById("faely")
let codeplay = document.getElementById("codeplay")
let reject = document.getElementById("reject")
let date = document.getElementById("date")
let notic = document.getElementById("notic")
let inputs = document.querySelectorAll("input")
let allDivionscontainer = document.getElementById('allDivionscontainer');
let data = new Date;

let hours = String(data.getHours()).padStart(2,'0')
let o = hours > 12 ? 'PM' : 'AM'
hours = hours % 12;
let minuate = String(data.getMinutes()).padStart(2,'0')
let finalData = `${hours} : ${minuate} ${o}`;
let fullyear= data.getFullYear()
let fullMonth = String((data.getMonth()) + 1).padStart(2,'0');
let dayTime = String(data.getDay()-1)
console.log(dayTime)



// تحسين دالة isEmpty
function isEmpty() {
    let btn = document.getElementById("btn");
    let inputs = Array.from(document.querySelectorAll("input"));
    inputs.forEach((input) => {
        input.addEventListener('input', () => {
            btn.disabled = inputs.some((input) => input.value.trim() === '');
        });
    });
}

                        window.addEventListener('keydown', function (e) {
                            if (e.key === "ArrowDown") {
                                this.window.scrollBy({
                                    top: 200,
                                    behavior:"smooth"
                                })
                            }
                        })
                        window.addEventListener('keydown', function (e) {
                            if (e.key === "ArrowUp") {
                                this.window.scrollBy({
                                    top: -200,
                                    behavior:"smooth"
                                })
                            }
                        })
                        
                        
                        // 1. إضافة التاريخ والتوقيت
                        function updateTime() {
                            const now = new Date();
                            const formattedTime = now.toLocaleString("ar-EG", { hour12: false });
                            document.getElementById('time').textContent = formattedTime;
                        }
                        setInterval(updateTime, 1000);
                        updateTime();
                        




// التحسين في nextfield لتجنب الوصول لنهاية المدخلات
function nextField() {
    const inputs = document.querySelectorAll("input");
    inputs.forEach((ele, index) => {
        ele.addEventListener("input", function () {
            if (ele.value.trim().length === 4 && inputs[index + 1]) {
                inputs[index + 1].focus();
            }
        });
    });
}

let totall;
let inputss = document.querySelectorAll("input");
let firstEightInputs = Array.from(inputs).slice(0, 8);
function sumAverage() {
return firstEightInputs.reduce((sum , current) => {

totall = (sum + Number(current.value))
return totall ;
}, 0)


}


let finalSum

btn.addEventListener("click", function (event) {
    if (moode === "create") {
    
finalSum =   sumAverage()
total= (finalSum / 8).toFixed(1)
craetearray()
document.querySelector('.stylish').style.display = 'block'
document.getElementById('form').style.display = 'none'
remove()
sumAverage()
        

}
else if (moode === "update") {

finalSum =   sumAverage()
total= (finalSum / 8).toFixed(1)
saveUpdateData()
remove()
document.querySelector('.stylish').style.display = 'block'

document.getElementById('form').style.display = "none"                
}
        
//window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
btn.innerHTML = 'إضافه البيانات'
})
                                                                
                        
document.getElementById("divSelect").addEventListener("change", function () {
    getNumberValue = this.value;
})



console.log(arrayFromData)


                        function craetearray(){
                            obj = {
                                thinkess: document.getElementById("thivsDiam").value || '',
                                pointOne : one.value || '',
                                pointTwo : two.value,
                                pointThree : three.value || '',
                                pointFour : four.value || '',
                                pointFive : five.value || '',
                                pointSix : sex.value || '',
                                pointSeven : seven.value || '',
                                pointeight: eight.value || '',
                                getbar : getDataChangeBar || '',
                                specifications : getDataChangeSpecifitions || '',
                                getName:getName || '',
                                nameLoad : nameLoad || '',
                                reasonRejct:reasonRejct.value || '',
                                reject : reject.value || '',
                                weightaFely : document.getElementById("faely").value,
                                notic:notic.value || '', 
                                codeplay:codeplay.value || '',
                                notic : document.getElementById("notic").value || '',
                                meter: meter.value || '',
                                ovality: ovality.value || '',
                                date: dateyear || '',
                                meterWeight :document.getElementById("meterWeight").value,
                                allDate: allDate || '',
                                diametermoasafa: valuethinkess*1.009 || '',
                                getNumberLine: document.getElementById("divSelect").value,
                                thinkessBar: thinkessBar || '',
                                anotherTimeop: anotherTimeop || '',
                                diameter: document.getElementById("diameter").value || '',
                                diameterFakum:document.getElementById('diameterFakum').value , 
                                diameterHeight: Number((document.getElementById("thivsDiam").value) / 0.991).toFixed(1),
                                total: total,
                                minone: (Number((document.getElementById("thivsDiam").value)/16.86) - (one.value)).toFixed(1),
                                mintwo: (Number((document.getElementById("thivsDiam").value)/16.86) - (two.value)).toFixed(1),
                                minthree: (Number((document.getElementById("thivsDiam").value)/16.86) - (three.value)).toFixed(1),
                                minfour: (Number((document.getElementById("thivsDiam").value)/16.86) - (four.value)).toFixed(1),
                                minfive: (Number((document.getElementById("thivsDiam").value)/16.86) - (five.value)).toFixed(1),
                                minsix: (Number((document.getElementById("thivsDiam").value)/16.86) - (six.value)).toFixed(1),
                                minseven: (Number((document.getElementById("thivsDiam").value)/16.86) - (seven.value)).toFixed(1),
                                mineight: (Number((document.getElementById("thivsDiam").value) / 16.86) - (eight.value)).toFixed(1),
                                finalData: finalData,
                                formattedDate:formattedDate,
                            }
                            
                            
                            const measurements = {
                                one: obj.pointOne || "",
                                minone: obj.minone,
                                two: obj.pointTwo || "",
                              //  mintwo:obj.mintwo,
                                three: obj.pointThree || "",
                                minthree:obj.minthree,
                                four: obj.pointFour || "",
                                minfour:obj.minfour,
                                five: obj.pointFive || "",
                                minfive:obj.minfive,
                                six: obj.pointSix || "",
                                minsix:obj.minsix,
                                seven: obj.pointSeven || "",
                                minseven:obj.minseven,
                                eight: obj.pointeight || "",
                                mineight:obj.mineight,
                            }
                        arrayFromData.push(obj)
                            window.localStorage.setItem('newProject', JSON.stringify(arrayFromData))
                            

                          
                                              
} 

                        
                        function getChangeData() {
                        
                        dia.addEventListener("change",function(){
                            valuethinkess = this.value;
                            
                        })
                            
                            specifications.addEventListener("change",function(){
                                getDataChangeSpecifitions = this.value
                            
                            })
                            qualityName.addEventListener("change",function(){
                                getName = this.value;
                                
                            })
                            qualityNameLoad.addEventListener("change",function(){
                                nameLoad = qualityNameLoad.value;
                        
                            })

                            /// Time
                            document.getElementById("anotherTime").addEventListener("change",function(){
                                anotherTimeop = this.value;
                            })
                        }
                        getChangeData()
                        

                        
                       
                            

                        
function isEmpty() {
let inpuopAll = document.querySelectorAll("input")
let arrinput = Array.from(inputs)
arrinput.forEach((div) => {
if (div.value.trim() === '') {
btn.disabled = true;
}
div.addEventListener('input', () => {
if (div.value.trim() === '') {
btn.disabled = true;
if (div.id === 'reject') {
btn.disabled = false;
console.log('yes')

}
} else {
if (div.value.trim()==='') {
btn.disabled = true
}

btn.disabled = false;

}

})
})

}
isEmpty()                                  
                                                                        
                        function remove(){
                            let inputs = document.querySelectorAll("input")
                            inputs.forEach((ele)=>{
                                if (ele.value !="") {
                                    ele.value = ""
                                }
                            })
                        }
                        
                        function nextfield(){
                            let nextfield;
                            let inputs = document.querySelectorAll("input")
                        inputs.forEach((ele,index)=>{
                            ele.addEventListener("input", function () {
                        
                                if (ele.value.trim().length === 4) {
                                    nextfield = inputs[index + 1]
                                
                            
                            if (nextfield != undefined) {
                            nextfield.focus()
                                
                            }
                        
                        }    })
                        })
                        }
                        nextfield()
                        
                        
                        
                        
                        
                        //******************************** */
                        let paththrowBut = document.createElement("div")
                        paththrowBut.innerHTML = 'top'
                        paththrowBut.classList.add("top")
                        document.body.appendChild(paththrowBut)
                        paththrowBut.addEventListener('click', function () {
                        paththrowBut.style.transform = 'rotate(360deg)'
                        
                            window.scrollTo({
                                top: 0,
                                behavior : 'smooth'
                            })
                            paththrowBut.style.transform = 'rotate(360deg)'
                        
                        })
                        //******************************** */

                
                        
                        let resulttwo;
                        
                    document.querySelector(".allDivionscontainer").addEventListener("click", (e) => {
                        
                        
                            document.getElementById('divSelect').value = Number(e.target.dataset.value);
                            getEtarget = Number(e.target.dataset.value)
                        if (e.target.id === "line") {
                                document.querySelector('.allDivionscontainer').style.display = 'block'
        document.getElementById("featuers1").style.display = "block"
                            document.getElementById("form").style.display = "block"
                document.getElementById('hiddenn').style.display = 'block';
                            
                            
                                window.scrollTo({
                                    top: '0',
                                    behavior :'smooth'
                                })
                                moode = 'create'
                            }
                            else if (e.target.id === 'show') {
                                e.preventDefault()
                            }
                        
                    })
                
                
let showSide = document.createElement('div')

let sideInside = document.createElement('div')

let newdivcreate;
async function showallData() {
                       
                        let showButton = Array.from(document.querySelectorAll('#Show'));
    showButton.forEach((showClick) => {
        showClick.addEventListener("click", function (e) {
            window.scrollTo({
                                    top: "10px",
                                    behavior:'smooth'
                                    
                                })
                
                                sideInside.style.display = 'block'
                                document.querySelector('.allDivionscontainer ').style.display = 'block'    
                                document.querySelector('.stylish ').style.display = 'block'    
                                    document.getElementById("form").style.display = 'block';
                                
                                document.getElementById("form").style.display = 'none';
                                if (window.matchMedia("(max-width: 767px)").matches) {
                                    document.querySelector('.allDivionscontainer ').style.display = 'none'    
                                    document.getElementById("form").style.display = 'none';
                                }
                                
                                else {

                                    
                                    document.querySelector('.allDivionscontainer ').style.display = 'block'

                                    document.querySelector('.allDivionscontainer').style.width = 'fit-content'
                                    document.getElementById('marginCenter').style.display = 'flex'

                                }

                                document.getElementById("form").style.display = 'none';
                                document.querySelector(".stylish").innerHTML = ``;
                           

                                const lineNumber = (e.target.dataset.value); // تحويل لـ Number لتطابق نوع البيانات في Firestore
                                
                           
                          // جلب البيانات من Firestore
                                window.db.collection('pvc').where('getNumberLine', '==', lineNumber).orderBy('finalData','asc') .get()
                                    .then((querySnapshot) => {
                                        document.getElementById("form").style.display = "block"
                                        document.querySelector(".stylish").innerHTML = ``; // مسح المحتوى القديم
                                        if (querySnapshot.empty) {
                                            let resulttwo = document.createElement('div');
                                            resulttwo.className = "resulttwo";
                                            resulttwo.innerHTML = `
                                                <div id="anotherline" style = "color:white">
                                                    <div>
                                                        <div class="lineoooo">
                                                            <h1 style ="color:aqua"  class="numberLine">رقم الخط ${lineNumber}</h1>
                                                        </div>
                                                    </div>
                                                    <div id="onesection">
                                                        <h1>لا توجد بيانات لهذا الخط</h1>
                                                    </div>
                                                </div>
                                            `;
                                            document.querySelector(".stylish").appendChild(resulttwo);
                                        } else {
                                            // عرض البيانات من Firestore مباشرة
                                            querySnapshot.forEach((doc) => {
                                                const data = doc.data(); // جلب البيانات من Firestore


                                                let resulttwo = document.createElement('div');
                                                let ovNmety = (data.meterWeight * data.meter)
                                                let ov =Number(((data.weightaFely-ovNmety)/ovNmety)*100).toFixed(2)
                                                resulttwo.className = "resulttwo";
                                                resulttwo.innerHTML = `
                                                    <div id="resultpop" value = "${data.getNumberLine}">
                                                    
                                                    <div id="onesection">
                                                    <h1 id="time">${data.formattedDate}</h1>
                                                    <h1 class="numberLine" style = 'width : 90%; margin-top:41px'>رقم الخط ${data.getNumberLine}</h1>
                                                   <h1 class="timeHours" style = 'position: absolute;
            top: -37px;
            right: 35%;
            background: #8a2be294;'>التوقيت${data.finalData}</h1>
                                                            <h1 id="thinkess">${data.thinkess} * ${((data.thinkess)/16.86).toFixed(1)} </h1>
                                                            <h1 id="ChangeSpecifitions">${data.specifications}</h1>
                                                            <h1 id="codeplay">${data.codeplay}</h1>
                                                            <h1 id="fakum">${data.diameterFakum}</h1>
                                                            <h1 id="anotherTimeop">${data.anotherTimeop}</h1>
                                                            <h1 id="nameload">${data.nameLoad}</h1>
                                                            <h1 id="getName">${data.getName}</h1>
                                                            <h1 id="meterWeight">${data.meterWeight}</h1>
                                                            <h1 id="NametyWeight">${(data.meterWeight * data.meter).toFixed(1)}</h1>
                                                            <h1 id="faely">${data.weightaFely}</h1>
                                                            <h1 id="ov">${ov}</h1>
                                                            <h1 id="averageSum">${(data.total)}</h1>
                                                            <h1 id="meter">${data.meter}</h1>
                                                            <h1 id="diametermoasafa">${data.diametermoasafa}</h1>
                                                            <h1 id="diameter">${data.diameter}</h1>
                                                            <h1 id="ovality">${data.ovality}</h1>
                                                            <h1 id="ovalityMoawswfa">${((data.thinkess)*0.035).toFixed(1)}</h1>
                                                            <h1 id="reject">${data.reject}</h1>
                                                            <h1 id="reasonRejct">${data.reasonRejct}</h1>
                                                            <h1 id="notic">${data.notic}</h1>

                                                            <div id = 'buuton'>
                                                            <button id="clicko" onclick="deleteop('${doc.id}')">Delete</button>
                                                                <button id="clickupdate" onclick="dateData('${doc.id}')">Update</button>
                                                                </div>
                                                        </div>
                                                            <div id="styop">
                                                            <div id="cycle">
                                                                <h1 class="point">${data.pointOne}</h1>
                                                                <h1 class="point">${data.pointTwo}</h1>
                                                                <h1 class="point">${data.pointThree}</h1>
                                                                <h1 class="point">${data.pointFour}</h1>
                                                                <h1 class="point">${data.pointFive}</h1>
                                                                <h1 class="point">${data.pointSix}</h1>
                                                                <h1 class="point">${data.pointSeven}</h1>
                                                                <h1 class="point">${data.pointeight}</h1>

                                                         

                                                                <h1 class="minone">${((data.pointOne)-(Number(data.thinkess)/16.86)).toFixed(1)}</h1>
                                                                <h1 class="mintwo">${((data.pointTwo)-(Number(data.thinkess)/16.86)).toFixed(1)}</h1>
                                                                <h1 class="minthree">${((data.pointThree)-(Number(data.thinkess)/16.86)).toFixed(1)}</h1>
                                                                <h1 class="minfour">${((data.pointFour)-(Number(data.thinkess )/16.86)).toFixed(1)}</h1>
                                                                <h1 class="minfive">${((data.pointFive)-(Number(data.thinkess)/16.86)).toFixed(1)}</h1>
                                                                <h1 class="minsix">${((data.pointSix)-(Number(data.thinkess)/16.86)).toFixed(1)}</h1>
                                                                <h1 class="minseven">${((data.pointSeven)-(Number(data.thinkess)/16.86)).toFixed(1)}</h1>
                                                                <h1 class="mineight">${((data.pointeight)-(Number(data.thinkess)/16.86)).toFixed(1)}</h1>
                                                            </div>
                                                        </div>
                                                            </div>
                                                        
                                                    </div>
                                                `;
                                             
                                                
                                                let cro = Array.from(resulttwo.children);
                                                arrayFromData.push(data)
                                                arrayFromData.forEach((div) => {

                                                    getThinkess = Number(div.thicknessDiameter / 16.86)
                                                })
                
                                                ////////////////////////////////////////////

                                                cro.forEach((div) => {
                                                    if (div.id==="resultpop") {
                                                        let onesection = Array.from(div.children)
                                                        onesection.forEach((onesection) => {


                                                            if (onesection.id === "styop") {
                                                            

                                                                let op = Array.from(onesection.children)
                                                                op.forEach((element) => {
                                                                    if (element.id === "cycle") {
                                                                        let op = Array.from(element.children)
                                                                        op.forEach((ele) => {
                                                                            if (ele.className === "point") {
                                                                                ele.style.background = 'rgba(54, 47, 143, 22.09)'
                                                                                if ((data.thinkess /16.86).toFixed(1) > Number(ele.innerHTML)  ) {
                                                                                    ele.style.color = 'rgb(199 15 15)'
                                                                
                                                                                } else if ((data.thinkess /16.86).toFixed(1)<Number(ele.innerHTML) ) {
                                                                                    ele.style.color = "#09de09"   
                                                                                    
                                                                                }else if ((data.thinkess /16.86).toFixed(1) === ele.innerHTML ) {
                                                                                    ele.style.color = "yellow"
                                                                                    
                                                                                }
                                                                            }
                                                                            
                                                                        })
                                                                    }
                                                                })
                                                                
                                                                
                                                            }
                                                            if (onesection.id==="onesection") {
                                                                 let op = Array.from(onesection.children)
                                                                op.forEach((element) => {
                                                               
                                                                    if (element.innerHTML === '') {
                                                                        element.style.display = 'none'
                                                                    }
                                                            })
                                                            }
                                                        })
                                                    }
                                                })
                                           
                                                
                                                
                                                document.querySelector(".stylish").appendChild(resulttwo);



                                            
                                            });
                                        }

                
                                        
                                        // إضافة حدث الإخفاء
                                        Array.from(document.querySelectorAll('#hidden')).forEach((btn) => {
                                            btn.addEventListener('click', function () {
                                                document.querySelector(".stylish").innerHTML = ``;
                                                document.getElementById('Show').style.display = 'block';
                                                window.location.reload();
                                              
                                            });
                                        });
                    
                                        // إخفاء codeplay إذا كان فارغًا
                                        Array.from(document.querySelectorAll('#onesection')).forEach((section) => {
                                            Array.from(section.children).forEach((div) => {
                                                if (div.id === "codeplay" && div.innerHTML === "") {
                                                    div.style.display = "none";
                                                }
                                            });
                                        });
                    
                                    
                                        // إخفاء زر Show
                                        document.getElementById('hidden').style.display = 'block';
                                    })
                                    .catch((error) => {
                                        console.error("خطأ في استرجاع البيانات من Firestore: ", error);
                                        let resulttwo = document.createElement('div');
                                        resulttwo.className = "resulttwo";
                                        resulttwo.innerHTML = `
                                            <div id="resultpop">
                                                <div>
                                                    <div class="lineoooo">
                                                        <h1 class="numberLine">رقم الخط ${lineNumber}</h1>
                                                    </div>
                                                </div>
                                                <div id="onesection">
                                                    <h1>خطأ في جلب البيانات: ${error.message}</h1>
                                                </div>
                                            </div>
                                        `;


                                        document.querySelector(".stylish").appendChild(resulttwo);
                                    });
                            });
                        });
                    }


async function deleteop(id) {

    console.log(id)
document.getElementById("resultpop").style.display = "block"
let newDivalert = document.createElement('div')
newDivalert.id = "newDivalert"
let hAlertText = document.createElement('h1')
hAlertText.id = 'hAlertText'
let buttonAccpet = document.createElement('button')
let buttonCancel = document.createElement('button')
let divButton = document.createElement('div')
divButton.appendChild(buttonAccpet)
divButton.appendChild(buttonCancel)
buttonAccpet.innerHTML = "Delete"
buttonAccpet.id = 'buttonAccpet'

buttonCancel.innerHTML = "Cancel"
buttonCancel.id = 'buttonCancel'
hAlertText.innerText = "   ? هل أنت متأكد انك تريد إزاله هذا العنصر"
newDivalert.appendChild(hAlertText)

divButton.id ="divButton"
newDivalert.appendChild(divButton)
document.getElementById('resultpop').appendChild(newDivalert)

buttonAccpet.addEventListener('click', function () {
newDivalert.style.display = 'none'
newDivalert.parentElement.style.display = 'none'


window.db.collection('pvc').doc(id).delete().then(() => {
}).catch((error) => {
console.error(error);
alert("فيه مشكله")
alert(error.message)
})
})
buttonCancel.addEventListener('click', function () {
newDivalert.style.display = "none"
document.getElementById('resultpop').style.opacity = 10;

})
newDivalert.parentElement.style.display = 'block'
newDivalert.style.display = 'block'


}




function dateData(id) {
    
    tmp = id;
    window.db.collection('pvc').doc(id).get().then((doc) => {
        if (doc.exists) {
            const data = doc.data();
            
            document.getElementById('one').value = data.pointOne;
            document.getElementById('two').value = data.pointTwo;
            document.getElementById('three').value = data.pointThree;
            document.getElementById('four').value = data.pointFour;
            document.getElementById('five').value = data.pointFive;
            document.getElementById('six').value = data.pointSix;
            document.getElementById('seven').value = data.pointSeven;
            document.getElementById('eight').value = data.pointeight;

            document.getElementById('meter').value = data.meter;
            document.getElementById('specifications').value = data.specifications;
            document.getElementById('anotherTime').value = data.anotherTime;
            
            document.getElementById('ovality').value = data.ovality;
            document.getElementById('diameter').value = data.diameter;
            document.getElementById('meterWeight').value = data.meterWeight;

            document.getElementById('qualityName').value = data.getName;
            document.getElementById('qualityNameLoad').value = data.nameLoad;
            document.getElementById('diameterFakum').value = data.diameterFakum;

            document.getElementById('notic').value = data.notic;
            document.getElementById('codeplay').value = data.codeplay;
            document.getElementById('reasonRejct').value = data.reasonRejct;
            document.getElementById('faely').value = data.weightaFely;   
            document.getElementById('anotherTime').value = data.anotherTimeop;   
            document.getElementById('thivsDiam').value = data.thinkess;  
            

            document.querySelector(".resulttwo").style.display = "none"
            document.getElementById("resultpop").style.display = "none"
            document.getElementById("DeleteAll").style.display = "block"
            if (document.getElementById("reasonRejct").value === '') {
                this.style.display = "none"
            }
        } else {
            alert("المستند غير موجود، ربما تم حذفه.");
        }
    }).catch((error) => {
    });

    moode = 'update';
    btn.innerHTML = 'تحديث البيانات';
    btn.classList.add("update");
    
    window.scrollTo({
        top: '0px',
        behavior: 'smooth'
    });
    document.getElementById('hiddenn').style.display = 'block';

}
    
document.getElementById("DeleteAll").addEventListener("click", function () {
    document.getElementById('one').value = ''
    document.getElementById('two').value = ''
document.getElementById('three').value = ''
document.getElementById('four').value = ''
document.getElementById('five').value = ''
    document.getElementById('six').value = ''
document.getElementById('seven').value = ''
    document.getElementById('eight').value = ''
    this.style.display = "none"
})




function saveUpdateData() {
    if (moode === 'update') {
        const updatedData = {

            
                pointOne: document.getElementById('one').value || "" ,
                pointTwo: document.getElementById('two').value || "" ,
                pointThree: document.getElementById('three').value || "" ,
                pointFour: document.getElementById('four').value || "" ,
                pointFive: document.getElementById('five').value || "" ,
                pointSix: document.getElementById('six').value || "" ,
                pointSeven: document.getElementById('seven').value || "" ,
                pointeight: document.getElementById('eight').value || "" ,
            
            thinkess: document.getElementById('thivsDiam').value || "" ,
            meter: document.getElementById('meter').value || "" ,
            specifications: document.getElementById('specifications').value || "" ,
            ovality: document.getElementById('ovality').value || "" ,
            diameter: document.getElementById('diameter').value || "" ,
            getName: document.getElementById('qualityName').value || "" ,
            nameLoad: document.getElementById('qualityNameLoad').value || "" ,
            reject: document.getElementById('reject').value || '' ,
            reasonRejct: document.getElementById('reasonRejct').value || "" ,
            notic: document.getElementById('notic').value || "" ,
            codeplay: document.getElementById('codeplay').value || "" ,
            weightaFely: document.getElementById('faely').value || "" ,
            anotherTimeop: document.getElementById('anotherTime').value || "" ,
            diametermoasafa: Number((document.getElementById('thivsDiam').value)*1.009).toFixed(1) || "" ,
            op :total,
        };

        // تحديث البيانات في Firestore باستخدام tmp
        window.db.collection('pvc').doc(tmp).update(updatedData)
            .then(() => {
                document.getElementById('updateForm').style.display = 'none';
                document.getElementById('hiddenn').style.display = 'block';
            })
            .catch((error) => {
            
            });
    }
        }
   

                    Array.from(document.querySelectorAll('#line')).forEach((div) => {
                        div.addEventListener('click', async (e) => {
                            document.querySelector('.stylish').style.display = 'none'

                            const value = e.target.dataset.value;
                         // جلب البيانات من Firestore
                            window.db.collection('pvc') // غيرت 'pipe' إلى 'pipeData' لتطابق اسم المجموعة
                                .where('line', "==", value)
                                .orderBy('timestamp', 'desc')
                                .get()
                                .then((querySnapshot) => { 

                                              querySnapshot.forEach((doc) => {
                                        let data = doc.data()
                                        document.getElementById('one').value = data.pointOne;
                                        document.getElementById('two').value = data.pointTwo;
                                        document.getElementById('three').value = data.pointThree;
                                        document.getElementById('four').value = data.pointFour;
                                        document.getElementById('five').value = data.pointFive;
                                        document.getElementById('six').value = data.pointSix;
                                        document.getElementById('seven').value = data.pointSeven;
                                        document.getElementById('eight').value = data.pointeight;
            
                                        document.getElementById('meter').value = data.meter;
                                        document.getElementById('specifications').value = data.specification;
                                        document.getElementById('anotherTime').value = data.anotherTime;
                                        
                                        document.getElementById('ovality').value = data.ovality;
                                        document.getElementById('diameter').value = data.diameter;
                                        document.getElementById('meterWeight').value = data.meterWeight;
            
                                        document.getElementById('qualityName').value = data.hallInspector;
                                        document.getElementById('qualityNameLoad').value = data.qualityInspector;
                                        document.getElementById('reasonRejct').value = data.reasonRejct;
                                        document.getElementById('diameterFakum').value = data.diameterFakum;
            
                                        document.getElementById('notic').value = data.notes;
                                        document.getElementById('codeplay').value = data.materialCode;
                                        document.getElementById('faely').value = data.actualWeight;   
                                        document.getElementById('datatime').value = data.pipeDate;  
                                        document.getElementById('thivsDiam').value = data.thicknessDiameter;  

                                   
                                    
                                    })

                                    })
                        
                        
                        })
                   
                    });




let objOptionHeight ;
document.getElementById("addHeight").addEventListener('click', function () {
        /////////////////////////////////////////
        select = document.createElement('select')
        select.id = "addOptions"

        optionEmpty = document.createElement("option")
        optionEmpty.innerHTML = "--- اختر ---"
        optionEmpty.disabled = true;
        optionsheight = document.createElement("option")
        optionsheight.innerHTML = "إضافه طول";
    
        optionmoasfa = document.createElement("option")
        optionmoasfa.innerHTML = "إضافه مواصفه";

        optionNameQuality = document.createElement("option")
        optionNameQuality.innerHTML = "إضافه مراقب جوده";
    

        select.appendChild(optionEmpty)
        select.appendChild(optionsheight)
        select.appendChild(optionmoasfa)
        select.appendChild(optionNameQuality)
        divOPtions = document.createElement("div");
        let inputCreate = document.createElement("input")
        inputCreate.id = 'inputCreate';
        inputCreate.placeholder = "رجاءً الاختيار"
        divOPtions.appendChild(inputCreate);
        divOPtions.appendChild(select)
        btno = document.createElement('button')
        btnDelete = document.createElement('button')
        btnDelete.innerHTML = "x"
        btnDelete.id = 'btnDelete'
        btno.innerHTML = "أضافه الحقل"
        btno.id = 'btno'
        divOPtions.appendChild(btno)
        divOPtions.appendChild(btnDelete)
        divOPtions.id = "divOPtions"
    
        btnDelete.addEventListener('click', function () {
            divOPtions.style.display = "none"
        })
        let tolowerCaseValue;
        let objOption;
        let valueOPions;
       

        ///////////////////////////////////////////////////////////////
        select.addEventListener('change', function () {
            inputCreate.value = ''
            inputCreate.innerHTML = ''
            inputCreate.placeholder = ''    
            valueOPions = this.value; 
            if (valueOPions) {
        inputCreate.placeholder = valueOPions;
                if (inputCreate.placeholder) {

                    if (inputCreate.placeholder === "إضافه طول") {
                        inputCreate.type = 'number'
                        

                    } else {
                        inputCreate.type = 'text'
                    
                        
                    }
                
                    inputCreate.focus()
                    inputCreate.addEventListener('keyup', function () {
                    tolowerCaseValue = this.value.toUpperCase()
                    
})

                    
                }
    
            }
        })

        btno.addEventListener('click', function () {
            inputCreate.value = ''
            let getValuefromInput = tolowerCaseValue;
            if (inputCreate.placeholder === "إضافه طول") {
                getValuefromInput = `${tolowerCaseValue} متر`
                objOptionHeight = {
                    textHeight: getValuefromInput,
                }
            
        
        
            
            }
        })
        

        document.getElementById("form").appendChild(divOPtions)

    
    })






document.getElementById('allDivionscontainer').addEventListener('touchmove', function () {
this.style.display='none'
document.querySelector('.stylish').style.display='block'
})
document.getElementById('btn').addEventListener('touchmove', () => {
console.log('done')
})



// دالة للكشف عن نوع الجهاز
function isMobileDevice() {
return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// تفريغ محتوى الزر إذا كان الجهاز موبايل
if (isMobileDevice()) {
let span = document.createElement('div')
span.id = 'swipe'
document.getElementById('btn').textContent = '';
document.getElementById('btn').appendChild(span);
span.addEventListener('touchmove', () => {

span.style.right = "35px"
span.style.transition = 'all ease 1m'

if (moode === "create") {
finalSum =   sumAverage()
  total= (finalSum / 8).toFixed(1)
      craetearray()
      document.querySelector('.stylish').style.display = 'block'
      document.getElementById('form').style.display = 'none'
      remove()
      sumAverage()
      //  showLastData()
      
      
  }
  else if (moode === "update") {
      
      finalSum =   sumAverage()
      total= (finalSum / 8).toFixed(1)
      saveUpdateData()
      remove()
     
      document.querySelector('.stylish').style.display = 'block'


  
      
                                                                                  
    

   
                                                                  document.getElementById('form').style.display = "none"                
                                                                              }
                                                                          
                                                                              //window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
                                                                              btn.innerHTML = 'إضافه البيانات'
                                                                              
                                                                            
                                                                              

})



} 
if (!isMobileDevice) {
btn.disabled = true;


}


function styleoffline() {
    let newdivonline = document.createElement('div')
    let h1Online = document.createElement('h1')
    newdivonline.appendChild(h1Online)
    newdivonline.id = 'newdivoffline'
    document.getElementById('header').appendChild(newdivonline)
}

function styleonline() {
    let newdivonline = document.createElement('div')
    let h1Online = document.createElement('h1')

    
    newdivonline.appendChild(h1Online)
    newdivonline.id = 'newdivonline'
    newdivonline.style.background = '129e0b'
    document.getElementById('header').appendChild(newdivonline) 
 
}


console.log(arrayFromData)

// offLine
if (!navigator.onLine) {
    styleoffline()

 
    console.log(arrayFromData)
   async function arrvf() {
    for (let i = arrayFromData.length -1 ; i < arrayFromData.length; i--) {
            let resulttwo =document.createElement('div')
            resulttwo.innerHTML = ''
            resulttwo.className = "resulttwo"
            resulttwo.innerHTML +=  `
            
                    <div id="resultpop">
                <div>
                   
                </div>
                    <div id = "onesection">
    <h1 id = "thinkess">${arrayFromData[i].thinkess} * ${(arrayFromData[i].thinkess/16.86).toFixed(1)}</h1>
                    <h1 id = "ChangeSpecifitions">${arrayFromData[i].specifications}</h1>
                    <h1  id = 'codeplay'>${arrayFromData[i].codeplay}</h1>
                    <h1 id = "anotherTimeop"> ${arrayFromData[i].anotherTimeop}</h1>
                    <h1 id = "nameload">${arrayFromData[i].nameLoad}</h1>
                    <h1 id = "getName">${arrayFromData[i].getName}</h1>
                    <h1 id = "averageSum">${arrayFromData[i].averageSum}</h1>
                    <h1 id = "meterWeight"></h1>
                            <h1 id = "meter">${arrayFromData[i].meter} </h1>
                        <h1 id = "ov"></h1>
                        <h1 id = "diametermoasafa">${arrayFromData[i].diameterHeight}</h1>
                        <h1 id = "diameter"> ${arrayFromData[i].diameter}</h1>
                        <h1 id = "ovality"> ${arrayFromData[i].ovality}</h1>
                        <h1 id = "ovalityMoawswfa"></h1>
                        <h1 id = "notic">${arrayFromData[i].notic}</h1>
                        <h1 id = "reject">${arrayFromData[i].reject} </h1>
                        <h1 id = "reasonRejct">${arrayFromData[i].reasonRejct}</h1>  
                            <button id ="clicko" onclick = delet(${i}) id="delete" >Delete</button>
                        <button id = "clicko" onclick =dateData(${i}) id="update">Update</button>
            </div>
                        <div id="styop">
            <div id="cycle">
                        <h2 class="point">${arrayFromData[i].pointOne}</h2> 
                        <h2 class="point">${arrayFromData[i].pointTwo}</h2> 
                        <h2 class="point">${arrayFromData[i].pointThree}</h2> 
                        <h2 class="point">${arrayFromData[i].pointFour}</h2> 
                        <h2 class="point">${arrayFromData[i].pointFive}</h2> 
                        <h2 class="point">${arrayFromData[i].pointSix}</h2> 
                        <h2 class="point">${arrayFromData[i].pointSeven}</h2> 
                        <h2 class="point">${arrayFromData[i].pointeight}</h2> 
                        </div>
                        </div>
    
                        
                    
                    </div>
                    
                    
                    `
                    document.querySelector(".stylish").appendChild(resulttwo);
            
            
        }
        arrvf()
    }
  

}


else {
    // OnLine
    
    styleonline()
    

    
}
window.addEventListener('online',()=> {
    location.reload()
    console.log('online')
})
window.addEventListener('offline', ()=> {
    location.reload()
    navigator.onLine = true;
    console.log('offline')
    
})

function delet(i){
    arrayFromData.slice(i, 1)
    
}
function addDatatoFireBse() {
    if (navigator.onLine) {

        arrayFromData.forEach((item) => {
            // نتحقق إذا كان العنصر ده مضاف قبل كده بناءً على خاصية فريدة، زي "id"
            const alreadyExists = arrayoffLine.some(
                el => JSON.stringify(el) === JSON.stringify(item)
            );

            if (!alreadyExists) {
                window.db.collection('pvc').add(item).then(() => {
                    console.log('Data added successfully!');
                    // بعد إضافة البيانات بنجاح، نضيفها إلى الـ localStorage
                    arrayoffLine.push(item);
                    console.log('arrayoffLine', arrayoffLine)
                    window.localStorage.setItem('arrayoffLine', JSON.stringify(arrayoffLine));
                });
            }
        });

    }

}
addDatatoFireBse()

showallData()



document.getElementById('icon-menu').addEventListener('click', function () { 
    document.getElementById('chat').style.display = 'none'
    if (allDivionscontainer.style.display === 'none') {
        
        allDivionscontainer.style.display ==='block'
    
        allDivionscontainer.style.transition = 'all 0.5s ease'
    
        allDivionscontainer.style.cssText = `
      
    display: block;
    width: 93%;
    position: absolute;
    top: 127px;
    z-index: 2147483647;
    border-radius: 27px;
    padding-top: 57px;
    right: 1px;
    background: rgba(121, 143, 169, 0.11);
    transition: 0.5s;
    box-shadow: rgb(11, 40, 137) 10px 10px 143px -42px;
    
        `;
    
    
        document.querySelectorAll('.countainer').forEach(container => {
            container.style = `
            width: 69%;
            right: -8px;
            position: relative;
            right: -57px;
            box-shadow: 10px 10px 143px -42px rgb(11, 40, 137);
            `;
        });
      

    } else {
        allDivionscontainer.style.display = 'none'
      
    }
    
})

// وظيفة للتحقق من عرض الشاشة وتطبيق التغييرات
function checkScreenWidth() {
    if (window.innerWidth <= 768) {
        let showButton = Array.from(document.querySelectorAll('#Show'));
        showButton.forEach((showClick) => {
            showClick.addEventListener("click", function (e) {

                console.log('done')
                document.querySelector('.allstylish').style.display = 'none'
             }
            )
        })      // أضف التغييرات هنا عندما يكون العرض أقل من أو يساوي 768 بيكسل
    } else {
      // التغييرات عندما يكون العرض أكبر من 768 بيكسل
        document.body.style.backgroundColor = "";  // إزالة اللون
        document.querySelector('.allstylish').style.display = 'block'
        if (window.innerHeight >682) {
            document.querySelector('.allstylish').style.width = '0%'

        
            
        }
        
    }
    
  }
  
  // استدعاء الوظيفة عند تحميل الصفحة
  window.onload = checkScreenWidth;
  
// استدعاء الوظيفة عند تغيير حجم النافذة
  


// chat


  // 2. المراجع الأساسية
  const auth = firebase.auth();
  const database = firebase.database();
  
  const loginBtn = document.getElementById("loginBtn");
  const logoutBtn = document.getElementById("logoutBtn");
  const userInfo = document.getElementById("userInfo");
  const chatSection = document.getElementById("chatSection");
  
  // 3. تسجيل الدخول بجوجل
  loginBtn.onclick = function () {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
      .then(result => {
        console.log("تم تسجيل الدخول", result.user.displayName);
      })
      .catch(error => {
        console.error("فشل تسجيل الدخول", error);
      });
  };
  
  logoutBtn.onclick = function () {
    auth.signOut();
  };
  
  // 4. متابعة حالة تسجيل الدخول
  auth.onAuthStateChanged(function (user) {
    if (user) {
      loginBtn.style.display = "none";
      logoutBtn.style.display = "inline";
      chatSection.style.display = "block";
      startChat(user);
    } else {
      userInfo.textContent = "";
      loginBtn.style.display = "inline";
      logoutBtn.style.display = "none";
      chatSection.style.display = "none";
    }
  });
  
  // 5. إرسال رسالة
  function sendMessage() {
    const input = document.getElementById("messageInput");
    const message = input.value;
    const user = auth.currentUser;
  
    if (message.trim() !== "" && user) {
      database.ref("messages").push({
        text: message,
        name: user.displayName,
        uid: user.uid,
        timestamp: Date.now()
      });
      input.value = "";
    }
  }
  
  // 6. عرض الرسائل لحظيًا
  function startChat(user) {
    const messagesDiv = document.getElementById("messages");
    messagesDiv.innerHTML = "";
  
    database.ref("messages").off(); // لإلغاء أي event قديم
  
    database.ref("messages").on("child_added", function (snapshot) {
      const msg = snapshot.val();
      const p = document.createElement("p");
      p.innerHTML = `<strong>${msg.name}:</strong> ${msg.text}`;
      messagesDiv.appendChild(p);
      messagesDiv.scrollTop = messagesDiv.scrollHeight;
    });
}
  


// إرسال الرسالة إلى Firebase
function sendMessage() {
    const input = document.getElementById("messageInput");
    const message = input.value;
    const user = auth.currentUser;

    if (message.trim() !== "" && user) {
        database.ref("messages").push({
            text: message,
            name: user.displayName,
            uid: user.uid,
            timestamp: Date.now()
        }).then(() => {
            input.value = "";  // مسح المدخل بعد الإرسال
        }).catch(error => {
            console.error("حدث خطأ أثناء إرسال الرسالة:", error);
        });
    }
}

// تحقق من إذن المستخدم لعرض الإشعارات
if (Notification.permission !== "granted") {
    Notification.requestPermission();
}

// الدالة الخاصة بعرض الإشعار
function showNotification(message) {
    if (Notification.permission === "granted") {
        const notification = new Notification("رسالة جديدة", {
            body: message,
            icon: 'path/to/your/icon.png',  // صورة صغيرة للإشعار (اختياري)
            requireInteraction: true  // الإشعار يظل مفتوح لحد ما المستخدم يغلقه (اختياري)
        });
    }
}

// تحقق من إذن المستخدم لعرض الإشعارات
if (Notification.permission !== "granted") {
    Notification.requestPermission();
}

// الدالة الخاصة بعرض الإشعار
function showNotification(message) {
    if (Notification.permission === "granted") {
        const notification = new Notification("رسالة جديدة", {
            body: message,
            icon: 'path/to/your/icon.png',  // صورة صغيرة للإشعار (اختياري)
            requireInteraction: true  // الإشعار يظل مفتوح لحد ما المستخدم يغلقه (اختياري)
        });
    }
}

// الدالة الخاصة بالبدء في عرض الرسائل

function startChat(user) {
    const messagesDiv = document.getElementById("messages");

    database.ref("messages").once("value", function (snapshot) {
        const messages = snapshot.val();
        if (messages) {
            Object.keys(messages).forEach(key => {
                const msg = messages[key];
                const div = document.createElement("div");
                const messageh = document.createElement("h1");
                const time = document.createElement("h1");
                
                // User name header
                div.innerHTML = `<h1 style="background: blueviolet;
                    font-size: 22px;
                    width: fit-content;
                    padding: 6px;
                    padding-right: 52px;
                    border-radius: 12px;
                    padding-left: 24px;">${msg.name}</h1>`;

                // Time formatting
                time.innerHTML = new Date(msg.timestamp).toLocaleTimeString('ar-EG', {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true
                });
                time.style = `
                    text-align: end;
                    font-size: 21px;
                    padding: 0;
                    margin: 0;
                    padding-bottom: 15px;
                    padding-left: 24px;`;

                // Message content
                messageh.innerHTML = msg.text;
                messageh.style = `
                    font-size: 25px;
                    font-family: auto;
                    padding: 6px 21px 6px 10px;
                    border-radius: 10px;
                    white-space: normal;
                    width: 100%;
                    overflow-wrap: break-word;
                    padding-bottom: 18px;
                    padding-right: 20px;
                    font-weight: 100;`;

                // Message container styling
                div.style = `
                    background: rgb(44, 62, 80);
                    border-radius: 13px;
                    width: 100%;
                    margin-top: 28px;
                    padding: 15px;
                    box-shadow: 0 2px 5px rgba(0,0,0,0.2);`;

                div.appendChild(messageh);
                div.appendChild(time);
                messagesDiv.appendChild(div);
            });
        }

        // Scroll to bottom after loading messages
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    });
}
document.getElementById('massegon').addEventListener('click', function () {
    if (document.getElementById('chat').style.display === 'none') {
        document.getElementById('chat').style.display = 'block';
        
        // استنى شوية بعد الفتح عشان المحتوى يظهر
        setTimeout(() => {
            const messages = document.getElementById('messages');
            messages.scrollTop = messages.scrollHeight;
        }, 100);
    } else {
        document.getElementById('chat').style.display = 'none';
    }
    console.log('done');
    document.getElementById('messageInput').onblur = function () {
        this.style = `
            border: 1px solid #ccc;
            transition: all 0.3s ease;
            border-radius: 8px;
            padding: 10px;
        `;
    }
});




// ... existing code ...

let finalDat = `${dateyear} ${timefull}`
console.log(finalDat)
if (finalDat === '7:55 AM') {
   window.db.collection('date').add({
    date: formattedDate
   })
}

// ... existing code ...
  
  window.db.collection('date').get().then((snapshot) => {
        snapshot.docs.forEach((doc) => {
        const data = doc.data();
getdata(data.date)

        })
    })

   


        let div = document.createElement('div');
        div.id = 'date';
    function getdata(data) {
       let div = document.createElement('div');
        div.id = 'date';
        div.style = `
            margin-top: 13px;
            padding: 4px;
            background: blueviolet;
            font-size: 18px;
            border-radius: 23px;
        `;
        
        const h = document.createElement('h1');
        h.innerHTML= '';
        h.innerHTML = data;
        h.style = `
            color: white;
            font-size: 25px;
            font-family: auto;
            background: blueviolet;
        `;
  
       
        div.style = `
        margin-top: 13px;
        padding: 4px;
        background: blueviolet;
        font-size: 18px;
        border-radius: 23px;
        transition: all 0.3s ease-in-out;
        cursor: pointer;
        transform-origin: center;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    `;



 allDivionscontainer.addEventListener('click', function() {
Array.from(allDivionscontainer.childNodes).forEach(function(div) {
Array.from(div.childNodes).forEach(function(child) {
    Array.from(child.childNodes).forEach(function(grandChild) {
       console.log(grandChild); // Do something with grandChild
       if (grandChild.id ==='hidden') {
    document.querySelector('.allstylish').style.display = 'block'
    div.style.display = 'block';
       }
    });
});
})


});






    // Add hover effect using event listeners
    div.addEventListener('mouseenter', () => {
        div.style.transform = 'translateY(-5px) scale(1.02)';
        div.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
        div.style.background = '#9932CC';
    });

    div.addEventListener('mouseleave', () => {
        div.style.transform = 'translateY(0) scale(1)';
        div.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
        div.style.background = 'blueviolet';
    });


        
        let isVisible = false;
        div.addEventListener('click', function() {
           
            console.log('done');
  
            
            div.style.display = 'block';
            // Remove any existing resulttwo elements
            const existingResultTwo = document.querySelectorAll('.resulttwo');
            existingResultTwo.forEach(el => el.remove());

           
        
            if (isVisible) {
                isVisible = false;
                return;
            }
    
            isVisible = true;
            window.db.collection('pvc').get().then((snapshot) => {
                snapshot.docs.forEach((doc) => {
                    const data = doc.data();
    
                    if (h.innerHTML === data.formattedDate) {
                        let resulttwo = document.createElement('div');
                        let ovNmety = (data.meterWeight * data.meter);
                        let ov = Number(((data.weightaFely-ovNmety)/ovNmety)*100).toFixed(2);
                        
                        resulttwo.className = "resulttwo";
                        resulttwo.innerHTML = `
                            <div id="resultpop" value="${data.getNumberLine}">
                                <div id="onesection">
                                    <h1 id="time">${data.formattedDate}</h1>
                                    <h1 class="numberLine" style="width: 90%; margin-top:41px">رقم الخط ${data.getNumberLine}</h1>
                                    <h1 class="timeHours" style="position: absolute; top: -37px; right: 35%; background: #8a2be294;">التوقيت${data.finalData}</h1>
                                    <h1 id="thinkess">${data.thinkess} * ${((data.thinkess)/16.86).toFixed(1)}</h1>
                                    <h1 id="ChangeSpecifitions">${data.specifications}</h1>
                                    <h1 id="codeplay">${data.codeplay}</h1>
                                    <h1 id="fakum">${data.diameterFakum}</h1>
                                    <h1 id="anotherTimeop">${data.anotherTimeop}</h1>
                                    <h1 id="nameload">${data.nameLoad}</h1>
                                    <h1 id="getName">${data.getName}</h1>
                                    <h1 id="meterWeight">${data.meterWeight}</h1>
                                    <h1 id="NametyWeight">${(data.meterWeight * data.meter).toFixed(1)}</h1>
                                    <h1 id="faely">${data.weightaFely}</h1>
                                    <h1 id="ov">${ov}</h1>
                                    <h1 id="averageSum">${data.total}</h1>
                                    <h1 id="meter">${data.meter}</h1>
                                    <h1 id="diametermoasafa">${data.diametermoasafa}</h1>
                                    <h1 id="diameter">${data.diameter}</h1>
                                    <h1 id="ovality">${data.ovality}</h1>
                                    <h1 id="ovalityMoawswfa">${((data.thinkess)*0.035).toFixed(1)}</h1>
                                    <h1 id="reject">${data.reject}</h1>
                                    <h1 id="reasonRejct">${data.reasonRejct}</h1>
                                    <h1 id="notic">${data.notic}</h1>
    
                                    <div id="buuton">
                                        <button id="clicko" onclick="deleteop('${doc.id}')">Delete</button>
                                        <button id="clickupdate" onclick="dateData('${doc.id}')">Update</button>
                                    </div>
                                </div>
                                <div id="styop">
                                    <div id="cycle">
                                        <h1 class="point">${data.pointOne}</h1>
                                        <h1 class="point">${data.pointTwo}</h1>
                                        <h1 class="point">${data.pointThree}</h1>
                                        <h1 class="point">${data.pointFour}</h1>
                                        <h1 class="point">${data.pointFive}</h1>
                                        <h1 class="point">${data.pointSix}</h1>
                                        <h1 class="point">${data.pointSeven}</h1>
                                        <h1 class="point">${data.pointeight}</h1>
    
                                        <h1 class="minone">${((data.pointOne)-(Number(data.thinkess)/16.86)).toFixed(1)}</h1>
                                        <h1 class="mintwo">${((data.pointTwo)-(Number(data.thinkess)/16.86)).toFixed(1)}</h1>
                                        <h1 class="minthree">${((data.pointThree)-(Number(data.thinkess)/16.86)).toFixed(1)}</h1>
                                        <h1 class="minfour">${((data.pointFour)-(Number(data.thinkess)/16.86)).toFixed(1)}</h1>
                                        <h1 class="minfive">${((data.pointFive)-(Number(data.thinkess)/16.86)).toFixed(1)}</h1>
                                        <h1 class="minsix">${((data.pointSix)-(Number(data.thinkess)/16.86)).toFixed(1)}</h1>
                                        <h1 class="minseven">${((data.pointSeven)-(Number(data.thinkess)/16.86)).toFixed(1)}</h1>
                                        <h1 class="mineight">${((data.pointeight)-(Number(data.thinkess)/16.86)).toFixed(1)}</h1>
                                    </div>
                                </div>
                            </div>
                        `;
                        resulttwo.style.cssText = `
                        opacity: 0;
                        transform: scale(0) rotate(-180deg);
                        animation: starAppear 0.7s ease forwards;
                    `;
                    
                    // Add the animation keyframes
                    const style = document.createElement('style');
                    style.textContent = `
                        @keyframes starAppear {
                            0% {
                                opacity: 0;
                                transform: scale(0) rotate(-180deg);
                            }
                            50% {
                                opacity: 0.5;
                                transform: scale(1.2) rotate(-90deg);
                            }
                            100% {
                                opacity: 1;
                                transform: scale(1) rotate(0);
                            }
                        }
                    `;
                    document.head.appendChild(style);
                    
                        // Style the points based on thickness
                        const points = resulttwo.querySelectorAll('.point');
                        points.forEach(point => {
                            point.style.background = 'rgba(54, 47, 143, 22.09)';
                            const thickness = (data.thinkess/16.86).toFixed(1);
                            const pointValue = Number(point.innerHTML);
                            
                            if (thickness > pointValue) {
                                point.style.color = 'rgb(199 15 15)';
                            } else if (thickness < pointValue) {
                                point.style.color = '#09de09';
                            } else {
                                point.style.color = 'yellow';
                            }
                        });
    

















                        
                        // Hide empty elements
                        resulttwo.querySelectorAll('#onesection *').forEach(element => {
                            if (element.innerHTML === '') {
                                element.style.display = 'none';
                            }
                        });
    








                        
                        document.querySelector('.stylish').appendChild(resulttwo);
                    }
                });
            });
        });
    
        
        div.appendChild(h);
        document.querySelector('.stylish').appendChild(div);
    }


   // ... existing code ...

window.db.collection('pvc')
.where('formattedDate'== 'value')
.orderBy('timestamp', 'desc')
.get()
.then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        let data = doc.data();
        // ... existing data handling code ...
    });
})
.catch((error) => {
    console.error("Error fetching data:", error);
    const indexUrl = error.message.match(/https:\/\/console\.firebase\.google\.com\/.*indexes\?create_composite=.*/);
    
    if (indexUrl) {
        let resulttwo = document.createElement('div');
        resulttwo.className = "resulttwo";
        resulttwo.innerHTML = `
            <div id="resultpop">
                <div id="onesection">
                    <h1>جاري إنشاء الفهرس...</h1>
                    <p>يرجى الانتظار قليلاً ثم المحاولة مرة أخرى</p>
                </div>
            </div>
        `;
        document.querySelector(".stylish").appendChild(resulttwo);
        
        window.open(indexUrl[0], '_blank');
    }
});

// ... rest of existing code ...