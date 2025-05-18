let arrayFromData = [];
let arrayoffLine = [];

    if (window.localStorage.getItem('newProject')!= null) {
        arrayFromData = JSON.parse(window.localStorage.getItem('newProject'))
        
    } 
    if (window.localStorage.getItem('arrayoffLine')!=null) {
        arrayoffLine = JSON.parse(window.localStorage.getItem('arrayoffLine'))
        
    } 
    
    console.log(arrayFromData)
    
    

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


    /// new Date Div
             // ... existing code ...
             const currentDate = new Date();
             let formattedDate = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`;
             let dateHours = currentDate.getHours();
             let dateMinutes = currentDate.getMinutes();
             let dateHous = dateHours.toString().padStart(2, '0');
             let dateSeconds = currentDate.getSeconds();
             console.log(dateSeconds)
             let timefull = dateHous>12 ? 'PM':'AM';
             console.log(timefull)

             let dateMinute = dateMinutes.toString().padStart(2, '0');
             let dateyear = ` ${dateHours}:${dateMinutes}`;

let finalDat = `${dateyear} ${timefull}`

let newDataNew = `${dateHours} : ${dateMinutes} : ${timefull}`

// تحقق من الوقت وإضافة التاريخ
function checkTimeAndAddDate() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const formattedDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;

    // التحقق من وجود العنصر لهذا اليوم
    const existingDateDiv = document.querySelector(`.stylish div[data-date="${formattedDate}"]`);

    if (!existingDateDiv) {
        // التحقق من قاعدة البيانات
        window.db.collection('date')
            .where('date', '==', formattedDate)
            .get()
            .then((querySnapshot) => {
                if (querySnapshot.empty) {
                    // إذا كان الوقت 7:58 صباحاً أو لم يتم إنشاء div لهذا اليوم بعد
                    if ((hours === 7 && minutes === 58) || (hours > 7)) {
                        window.db.collection('date').add({
                            date: formattedDate,
                            createdAt: formattedTime,
                            timestamp: firebase.firestore.FieldValue.serverTimestamp()
                        })
                        .then(() => {
                            let newDateDiv = document.createElement('div');
                            newDateDiv.id = 'date';
                            newDateDiv.setAttribute('data-date', formattedDate);
                            newDateDiv.style = `
                                margin-top: 13px;
                                padding: 4px;
                                background: #182229;
                                font-size: 18px;
                                border-radius: 23px;
                            `;

                            let dateHeader = document.createElement('h1');
                            dateHeader.innerHTML = `${formattedDate} - تم الإنشاء في ${formattedTime}`;
                            dateHeader.style = `
                                color: white;
                                font-size: 25px;
                                font-family: auto;
                                background: #182229;
                            `;

                            newDateDiv.appendChild(dateHeader);
                            document.querySelector('.stylish').appendChild(newDateDiv);
                        })
                        .catch(error => {
                            console.error("خطأ في إضافة التاريخ: ", error);
                        });
                    }
                }
            });
    }
}

// تشغيل الدالة كل دقيقة للتحقق من الوقت
setInterval(checkTimeAndAddDate, 60000); // 60000 مللي ثانية = دقيقة واحدة

// تشغيل الدالة عند تحميل الصفحة
checkTimeAndAddDate();
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

/////////////////////////////////////////////////////////////////////////////////////////////////////
let finalSum

btn.addEventListener("click", function (event) {
    if (moode === "create") {
finalSum =   sumAverage()
total= (finalSum / 8).toFixed(1)
sumAverage()

craetearray()
document.querySelector('.stylish').style.display = 'block'
remove()
document.getElementById('hiddenn').style.display = 'none'
const lineNumber = document.getElementById("divSelect").value;
updateLineDisplay(lineNumber);

}
else if (moode === "update") {

finalSum =   sumAverage()
total= (finalSum / 8).toFixed(1)
saveUpdateData()
remove()
const lineNumber = document.getElementById("divSelect").value;
updateLineDisplay(lineNumber);



document.querySelector('.stylish').style.display = 'block'

document.getElementById('form').style.display = "none"                
}
        
//window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
btn.innerHTML = 'إضافه البيانات'
updateLineDisplay()

})
                                                                
                        
document.getElementById("divSelect").addEventListener("change", function () {
    getNumberValue = this.value;
})


console.log(arrayFromData)



    


                        function craetearray(){

const user = firebase.auth().currentUser; // جلب المستخدم الحالي
if (!user) {
console.error("يجب تسجيل الدخول لإضافة البيانات");
return;
}



                                                        let newOptionValue= {};
                                                        let arrValueFromarr = [];
                                                        let arr = Array.from(document.getElementById('divSelection').childNodes)
                                                        arr.forEach((div)=>{
                                                        
                                                        let arrChild = Array.from(div.childNodes)
                                                        arrChild.forEach((child)=>{
                                                        
                                                            if (child.tagName === 'SELECT') {
                                                        const objectValue = {

                                                            id: child.id,
                                                            value: child.value,
                                                            uid: user.uid,
                                                        }

                                                        arrValueFromarr.push(objectValue)
                                                        }
                                                        newOptionValue = arrValueFromarr

                                                        })
                                                        
                                                        })


                            obj = {
                                uid: user.uid, // إضافة uid للمستخدم
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
                                newOptionValue :newOptionValue,
                                
                            }
                            
                        
                        arrayFromData.push(obj)
                            window.localStorage.setItem('newProject', JSON.stringify(arrayFromData))
                            
                            
                            
    }  

                        function getChangeData() {
                        
                        dia.addEventListener("change",function(){
                            valuethinkess = this.value;
                            
                        })
                            
                            specifications.addEventListener("change",function(){
                                getDataChangeSpecifitions = this.value;
                                console.log(getDataChangeSpecifitions)
                                
                                if (getDataChangeSpecifitions ==='DIN 8074/8075/2011-ES 1832/2008') {
                                    Array.from(document.getElementById("thivsDiam")).forEach((option)=>{
                                        option.value = '';
                                        option.innerHTML = '';
                                       option.value = `${option.value} * ${(((option.value) / 16.86)).toFixed(1)}`;
                                       option.innerHTML = option.value;
                                       
                                      
                                    })
                               
                                }
                               else if (getDataChangeSpecifitions.includes('DIN 8074/8075/2011')) {
                                    Array.from(document.getElementById("thivsDiam")).forEach((option)=>{
                                        option.value = '';
                                        option.innerHTML = '';
                                       option.value = `${option.value} * ${(((option.value) / 26.17)).toFixed(1)}`;
                                       option.innerHTML = option.value;
                                       
                                      
                                    })
                               
                                }
                            
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
                                console.log(anotherTimeop)
                                if (anotherTimeop == 'تاريخ اخر') {
                                    console.log('done')
                                    const createpop = document.createElement('div')
                                    const input = document.createElement('input')
                                    const btn = document.createElement('button')
                                    btn.innerHTML = 'أضافه تاريخ الماسوره'
                                    createpop.appendChild(input)


                                    createpop.id = 'createpop'
                            

                                    input.style = `
    width: 67%;
    padding: 28px;
    border: none;
    background: linear-gradient(120deg, #232526cc 0%, #414345cc 100%);
    margin: auto;
    margin-bottom: 22px;
                                    
                                    `
                                    btn.style = `
    width: 18%;
    padding: 20px;
    margin: auto;
    font-size: 27px;
                                    
                                    `
                                    createpop.appendChild(btn)
                                    document.getElementById('form').appendChild(createpop)
                                    btn.addEventListener('click',()=>{
                                        value= input.value.trim();
                                anotherTimeop = `${this.value}  [  بتاريخ : ${value}  ]`;
console.log(anotherTimeop)
                                        
                                        
                                    })
                                }
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
        document.getElementById("addHeight").style.display = "block"
        document.getElementById("chat").style.display = "none"

        document.getElementById("form").style.display = "block"
                document.getElementById('hiddenn').style.display = 'block';
                resize()
                            
                                window.scrollTo({
                                    top: 30,
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
                                window.db.collection('pipe').where('getNumberLine', '==', lineNumber).orderBy('finalData','asc') .get()
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
                                           
                                             querySnapshot.forEach((doc) => {
                                                const data = doc.data(); // جلب البيانات من Firestore

                            let resulpop = document.getElementById('resulpop');
                        

                                                let resulttwo = document.createElement('div');
                                                let ovNmety = (data.meterWeight * data.meter)
                                                let ov =Number(((data.weightaFely-ovNmety)/ovNmety)*100).toFixed(2)
                                                resulttwo.className = "resulttwo";
                                                resulttwo.innerHTML = `
                                        
                                                <div id="resultpop" value = "${data.getNumberLine}">
                                                   
         <div id = 'headTop'>
                                                                                                        <h1 id="time">${data.formattedDate}</h1>
                                                    <h1 class="numberLine">رقم الخط ${data.getNumberLine}</h1>
                                                <h1 class="timeHours"'> التوقيت ${data.finalData}</h1>

                                                    </div>   

                                                    
                                                    <div id="onesection">
                                                            <h1 id="thinkess">${data.thinkess} </h1>
                                                            <h1 id="ChangeSpecifitions">${data.specifications}</h1>
                                                            <h1 id="codeplay">${data.codeplay}</h1>
                                                            <h1 id="fakum">${data.diameterFakum}</h1>
                                                            <h1 id="anotherTimeop">${data.anotherTimeop}</h1>
                                                            <h1 id="nameload">${data.nameLoad}</h1>
                                                            <h1 id="getName">${data.getName}</h1>
                                                            <h1 id="meterWeight">${data.meterWeight}</h1>
                                                            <h1 id="NametyWeight">${(data.meterWeight * data.meter).toFixed(1)}</h1>
                                                            <h1 id="faely">${data.weightaFely}</h1>
                                                            <h1 id="averageSum">${(data.total)}</h1>
                                                            <h1 id="meter">${data.meter}</h1>
                                                            <h1 id="diametermoasafa">${data.diametermoasafa}</h1>
                                                            <h1 id="diameter">${data.diameter}</h1>
                                                            <h1 id="ovality">${data.ovality}</h1>
                                                            <h1 id="ovalityMoawswfa">${((data.thinkess)*0.035).toFixed(1)}</h1>
                                                            <h1 id="reject">${data.reject}</h1>
                                                            <h1 id="reasonRejct">${data.reasonRejct}</h1>
                                                            <h1 id="notic">${data.notic}</h1>

                                                            <div id = 'HideBtn'>
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
                                                    
                                                        
                                                            




                                                            //onesection
                                                            Array.from(div.children).forEach((div) => {
                                                                if (div.id === "onesection") {
                                                                    console.log(div.childNodes)

                                                                    Array.from(div.childNodes).forEach((div) => {
                                                                        if (div.id === "buuton") {
                                                                            console.log(div)
                                                                            div.style = `display: block;`
                                                                        }
                                                                    })























                                                                }
                                                            })



let ov = Number(((data.weightaFely - ovNmety) / ovNmety) * 100).toFixed(2);

let ovElement = document.createElement('h1');
ovElement.id = "ov";
ovElement.textContent = ov;

// تغيير لون الخلفية بناءً على القيمة
if (ov > -0.5) {
    ovElement.style.backgroundColor = "red"; // لون الخلفية أحمر إذا كانت القيمة أكبر من -0.5
} else {
    ovElement.style.backgroundColor = "green"; // لون الخلفية أخضر إذا كانت القيمة أقل من أو تساوي -0.5
}

resulttwo.querySelector("#onesection").appendChild(ovElement);

                                                        
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
                                        
                                                


                                               
  // ... existing code ...
  let divNew = document.createElement('div');

  divNew.id = 'newDivSelect';
  divNew.innerHTML = ''; 
  divNew.style = `
  display: flex
  ;
  gap: 10px;
  `
  if (Array.isArray(data.newOptionValue)) {
  data.newOptionValue.forEach((dataPlus) => {
  if (dataPlus.uid === data.uid) {
  const newH = document.createElement('div');
   newH.id = dataPlus.id;
  
              // إضافة خاصية data-id
              newH.setAttribute('data-id', dataPlus.id);
  
  newH.innerHTML = `<h3 style = '
  
              width: 100%;color: #3b82f6;margin: auto;
  
  '
  >${dataPlus.value}</h3>`;
  divNew.appendChild(newH);
  }
  });
  } else {
  console.error("newOptionValue is not an array:", data.newOptionValue);
  }
  
  let resultpop = resulttwo.querySelector('#resultpop'); // تأكد من تعريف resultpop هنا

if (resultpop) {
    const onesection = resultpop.querySelector('#onesection');
    if (onesection) {
        const buttonDiv = onesection.querySelector('#buuton');
        if (buttonDiv) {
            onesection.insertBefore(divNew, buttonDiv);
        } else {
            onesection.appendChild(divNew);
        }
    }
}

//const resultpop = resulttwo.querySelector('#resultpop');
if (resultpop) {
const onesection = resultpop.querySelector('#onesection');
if (onesection) {
const buttonDiv = onesection.querySelector('#buuton');
if (buttonDiv) {
onesection.insertBefore(divNew, buttonDiv);
} else {
onesection.appendChild(divNew);
}
}
}
// ... existing code ...
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









                            async function updateLineDisplay(lineNumber) {
document.querySelector(".stylish").innerHTML = '';

window.db.collection('pipe')
.where('getNumberLine', '==', lineNumber)
.orderBy('finalData', 'asc')
.get()
.then((querySnapshot) => {
if (querySnapshot.empty) {
let resulttwo = document.createElement('div');
resulttwo.className = "resulttwo";
resulttwo.innerHTML = `
<div id="anotherline" style="color:white">
<div>
<div class="lineoooo">
<h1 style="color:aqua" class="numberLine">رقم الخط ${lineNumber}</h1>
</div>
</div>
<div id="onesection">
<h1>لا توجد بيانات لهذا الخط</h1>
</div>
</div>
`;
document.querySelector(".stylish").appendChild(resulttwo);
} else {
querySnapshot.forEach((doc) => {
const data = doc.data();
let resulttwo = document.createElement('div');
resulttwo.className = "resulttwo";
resulttwo.innerHTML = `
<div id="resultpop" value = "${data.getNumberLine}">

<div id="onesection">
<h1 id="time">${data.formattedDate}</h1>
<h1 class="numberLine" style = 'width : 90%; margin-top:41px'>رقم الخط ${data.getNumberLine}</h1>
<h1 class="timeHours"'> التوقيت ${data.finalData}</h1>
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

document.querySelector(".stylish").appendChild(resulttwo);

let cro = Array.from(resulttwo.children);
cro.forEach((div) => {
if (div.id === "resultpop") {
Array.from(div.children).forEach((div) => {
if (div.id === "onesection") {
Array.from(div.childNodes).forEach((div) => {
if (div.id === "buuton") {
div.style = `display: block;`;
}
});
}
});

let onesection = Array.from(div.children);
onesection.forEach((onesection) => {
if (onesection.id === "styop") {
let op = Array.from(onesection.children);
op.forEach((element) => {
if (element.id === "cycle") {
let op = Array.from(element.children);
op.forEach((ele) => {
if (ele.className === "point") {
    ele.style.background = 'rgba(54, 47, 143, 22.09)';
    if ((data.thinkess/16.86).toFixed(1) > Number(ele.innerHTML)) {
        ele.style.color = 'rgb(199 15 15)';
    } else if ((data.thinkess/16.86).toFixed(1) < Number(ele.innerHTML)) {
        ele.style.color = "#09de09";
    } else if ((data.thinkess/16.86).toFixed(1) === ele.innerHTML) {
        ele.style.color = "yellow";
    }
}
});
}
});
}
});
}
});
});
}
document.getElementById('hidden').style.display = 'block';
})
.catch((error) => {
console.error("خطأ في استرجاع البيانات: ", error);
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
}








async function deleteop(id) {
console.log(id);

// Get the line number and delete immediately
window.db.collection('pipe').doc(id).get().then((doc) => {
const lineNumber = doc.data().getNumberLine;

// Delete the document
window.db.collection('pipe').doc(id).delete().then(() => {
// Update the display after successful deletion
updateLineDisplay(lineNumber);
}).catch((error) => {
console.error(error);
alert("فيه مشكله");
alert(error.message);
});
});
}




function dateData(id) {
    tmp = id;
    window.db.collection('pipe').doc(id).get().then((doc) => {
        if (doc.exists) {
            const data = doc.data();

            // تعيين القيم إلى الحقول
            document.getElementById('one').value = data.pointOne || '';
            document.getElementById('two').value = data.pointTwo || '';
            document.getElementById('three').value = data.pointThree || '';
            document.getElementById('four').value = data.pointFour || '';
            document.getElementById('five').value = data.pointFive || '';
            document.getElementById('six').value = data.pointSix || '';
            document.getElementById('seven').value = data.pointSeven || '';
            document.getElementById('eight').value = data.pointeight || '';
            document.getElementById('meter').value = data.meter || '';
            document.getElementById('specifications').value = data.specifications || '';
            document.getElementById('anotherTime').value = data.anotherTimeop || '';
            document.getElementById('ovality').value = data.ovality || '';
            document.getElementById('diameter').value = data.diameter || '';
            document.getElementById('meterWeight').value = data.meterWeight || '';
            document.getElementById('qualityName').value = data.getName || '';
            document.getElementById('qualityNameLoad').value = data.nameLoad || '';
            document.getElementById('diameterFakum').value = data.diameterFakum || '';
            document.getElementById('notic').value = data.notic || '';
            document.getElementById('codeplay').value = data.codeplay || '';
            document.getElementById('faely').value = data.weightaFely || '';
            document.getElementById('thivsDiam').value = data.thinkess || '';
            let valueGet =[];
            if (document.getElementById('newDivSelect')) {
                Array.from(document.getElementById('newDivSelect').children).forEach((div) => {


                    Array.from(div.childNodes).forEach((div) => {
                        valueGet.push(div.innerHTML)
                    })

                  
                })
              

                valueGet.forEach((arrayo) => {
                   
                    if (document.getElementById('divSelection')) {
                        Array.from(document.getElementById('divSelection').children).forEach((ele) => {
    
    Array.from(ele.childNodes[1]).forEach((element) => {
        Array.from(document.getElementById('newDivSelect').childNodes).forEach((div) => {   
            
            if (div.id === ele.childNodes[1].id) {
                Array.from(div.childNodes).forEach((child) => {
                    ele.childNodes[1].value = child.innerHTML
                    console.log(ele.childNodes[1].value)
                })
            
        } 
    })
    })
    
                        })
                    }
                })

              
            }
           
        } 
    }).catch((error) => {
        console.error("خطأ أثناء جلب البيانات:", error);
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
            anotherTimeop: anotherTimeop || "" ,
            diametermoasafa: Number((document.getElementById('thivsDiam').value)*1.009).toFixed(1) || "" ,
            op :total,
        };
if (document.getElementById('newDivSelect')) {
    Array.from(document.getElementById('newDivSelect').childNodes).forEach((ele)=>{
        console.log(ele.childNodes[0].innerHTML)




        Array.from(document.getElementById('newDivSelect').childNodes).forEach((div) => {   
            Array.from(document.getElementById('divSelection').childNodes).forEach((element) => {
                if (element.childNodes[1].id === div.id) {
                    div.childNodes[0].innerHTML = element.childNodes[1].value;
                    
                    updatedData[div.id] = element.childNodes[1].value;
                    
                    
                }
            })
          
    })


    })
}
        // تحديث البيانات في Firestore باستخدام tmp
        window.db.collection('pipe').doc(tmp).update(updatedData)
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
console.log(e.target.dataset.value)
                            document.getElementById('hiddenn').style.display = 'none';
                        //  document.getElementById('updateForm').style.display = 'block';
                            const value = e.target.dataset.value;
                        // جلب البيانات من Firestore
                            window.db.collection('pipe') // غيرت 'pipe' إلى 'pipeData' لتطابق اسم المجموعة
                                .where('getNumberLine', "==", value)
                                .orderBy('finalData', 'desc')
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
                                        document.getElementById('seven').value =  data.pointSeven;
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
                                        document.getElementById('datatime').value = data.pipeDate;  
                                        document.getElementById('thivsDiam').value = data.thicknessDiameter;  

                                
                                    
                                    })

                                    })
                        
                        
                        })
                
                    });








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
                window.db.collection('pipe').add(item).then(() => {
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
const verifyBtn = document.getElementById("verifyBtn");
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
function startChat(user) {
const messagesDiv = document.getElementById("messages");
messagesDiv.innerHTML = "";

database.ref("messages").off();

database.ref("messages").on("child_added", function (snapshot) {
const msg = snapshot.val();
const div = document.createElement("div");
const isCurrentUser = msg.uid === user.uid;

const messageTime = new Date(msg.timestamp).toLocaleTimeString('ar-EG', {
hour: '2-digit',
minute: '2-digit',
hour12: true
});

div.className = `message ${isCurrentUser ? 'sent' : 'received'}`;
div.innerHTML = `
<div class="message-content">
<div class="message-header">
<span class="message-sender">${msg.name}</span>
</div>
<div class="message-text">${msg.text}</div>
<div class="message-time">${messageTime}</div>
</div>
`;

messagesDiv.appendChild(div);
messagesDiv.scrollTop = messagesDiv.scrollHeight;
});

const styles = `
<style>
#messages {
padding: 20px;
overflow-y: auto;
height: 740px;
background: #182229;
border-radius: 15px;
}
.message {
margin: 15px 0;
max-width: 85%;
clear: both;
}
.message-content {
padding: 12px 16px;
border-radius: 18px;
position: relative;
word-wrap: break-word;
box-shadow: 0 2px 5px rgba(0,0,0,0.2);
font-size: 20px;
}
.sent {
float: right;
width: 100%;
}
.received {
float: left;
width :100%;
}
.sent .message-content {
background: #34495E;
color: white;
margin-right: 2%;
width: 70%;
}
.received .message-content {
background: #25384c;
color: white;
margin-right: 15%;

}
.message-header {
font-weight: bold;
margin-bottom: 8px;
font-size: 25px;
color: #3498db; // Changed from #ECF0F1 to a vibrant blue
text-shadow: 0 1px 2px rgba(0,0,0,0.2); // 
}
.message-text {
font-size: 1.2em;
line-height: 1.5;
color: #FFFFFF; // Changed to golden yellow
font-family: 'Cairo', sans-serif;
font-weight: 600;
letter-spacing: 0.5px;
text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}
.message-time {
font-size: 0.8em;
color: #BDC3C7;
text-align: left;
margin-top: 8px;
}
#messages::-webkit-scrollbar {
width: 8px;
}
#messages::-webkit-scrollbar-track {
background: #182229;
}
#messages::-webkit-scrollbar-thumb {
background: #2C3E50;
border-radius: 4px;
}
</style>
`;

if (!document.querySelector('#chat-styles')) {
const styleElement = document.createElement('div');
styleElement.id = 'chat-styles';
styleElement.innerHTML = styles;
document.head.appendChild(styleElement);
}
}
















    
document.getElementById('massegon').addEventListener('click', function () {

    let div = document.createElement('div');
    div.id = 'op'
    if (document.getElementById('chat').style.display === 'none') {
        document.getElementById('chat').style.display = 'block';
        document.getElementById('slider').style.display = 'none';

        div.style.display = 'block'
        existingSlider = document.querySelector('#op');
        if (existingSlider) {
            existingSlider.remove();

         


        }
        
        // استنى شوية بعد الفتح عشان المحتوى يظهر
        setTimeout(() => {
            const messages = document.getElementById('messages');
            messages.scrollTop = messages.scrollHeight;
        }, 100);
    } else {
        document.getElementById('chat').style.display = 'none';
        document.getElementById('slider').style.display = 'block';

    document.getElementById('grid-Template').style = `
    display: flex
;
    gap: 26px;
    `
    document.getElementById('slider').appendChild(div);
    let input = document.createElement('input');
    exportButton.addEventListener('click', function(){
        input.value = '';
    input.innerHTML=''
    const div = document.createElement('div');
    div.id = 'showPassword'
    const btn = document.createElement('button');
    btn.innerHTML = 'تأكيد';
    btn.id = 'btn';
    btn.style = `
            background: rgb(24, 34, 41);
        color: white;
        padding: -6px -7px;
        width: 15%;
        text-align: center;
        margin: 0;
        font-size: 29px;
        align-items: center;
    `
    input.type = 'password';
    input.style = `
        background: rgb(24, 34, 41);
        color: white;
        width: 15%;
        /* padding: 25px; */
        text-align: center;
        /* margin: 0px; */
        font-size: 29px;
        align-items: center;
    `
    
    btn.addEventListener('click', function(){
        if (input.value === '123456') {
            exportToExcel();
            prompt('تم تصدير الملف بنجاح');
            input.value = '';
            input.style.display = 'none';
            btn.style.display = 'none';
            div.style.display = 'none';
    
        }else{
            console.log('wrong password');
        }
    })
    
    div.appendChild(input);
    div.appendChild(btn);
    document.querySelector('').appendChild(div);
    });
    document.querySelector('#slider').appendChild(exportButton);
    
    // ... existing code ...
    
    









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
            background: #182229;
        `;

    
        div.style = `
        margin-top: 13px;
        padding: 4px;
        background: #182229;
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
        div.style.background = '#182229';
    });

    div.addEventListener('mouseleave', () => {
        div.style.transform = 'translateY(0) scale(1)';
        div.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
        div.style.background = '#182229';
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
            window.db.collection('pipe').get().then((snapshot) => {
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
                                    <h1 class="timeHours" > التوقيت ${data.finalData}</h1>
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
                                        <h1 class="minfour">${((data.pointFour)-(Number(data.thinkess )/16.86)).toFixed(1)}</h1>
                                        <h1 class="minfive">${((data.pointFive)-(Number(data.thinkess)/16.86)).toFixed(1)}</h1>
                                        <h1 class="minsix">${((data.pointSix)-(Number(data.thinkess)/16.86)).toFixed(1)}</h1>
                                        <h1 class="minseven">${((data.pointSeven)-(Number(data.thinkess)/16.86)).toFixed(1)}</h1>
                                        <h1 class="mineight">${((data.pointeight)-(Number(data.thinkess)/16.86)).toFixed(1)}</h1>
                                    </div>
                                </div>
                            </div>
                        `;
                        
                        // إضافة تأثيرات CSS هنا
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

function exportToExcel() {
    window.db.collection('pipe').get().then((snapshot) => {
        const data = [];
        
        // تجميع البيانات من Firebase
        snapshot.docs.forEach((doc) => {
            const pipeData = doc.data();
            data.push({
                'formattedDate': pipeData.formattedDate,
                'getNumberLine': pipeData.getNumberLine,
                'finalData': pipeData.finalData,
                'thinkess': pipeData.thinkess,
                'specifications': pipeData.specifications,
                'codeplay': pipeData.codeplay,
                'diameterFakum': pipeData.diameterFakum,
                'anotherTimeop': pipeData.anotherTimeop,
                'nameLoad': pipeData.nameLoad,
                'getName': pipeData.getName,
                'meterWeight': pipeData.meterWeight,
                'الوزن النظري': (pipeData.meterWeight * pipeData.meter).toFixed(1),
                'weightaFely': pipeData.weightaFely,
                'نسبة الانحراف': ((pipeData.weightaFely-(pipeData.meterWeight * pipeData.meter))/(pipeData.meterWeight * pipeData.meter)*100).toFixed(2),
                'total': pipeData.total,
                'meter': pipeData.meter,
                'diametermoasafa': pipeData.diametermoasafa,
                'diameter': pipeData.diameter,
                'ovality': pipeData.ovality,
                'overWeight': ((pipeData.thinkess)*0.035).toFixed(1),
                'reject': pipeData.reject,
                'reasonRejct': pipeData.reasonRejct,
                'notic': pipeData.notic,
                'pointOne': pipeData.pointOne,
                'pointTwo': pipeData.pointTwo,
                'pointThree': pipeData.pointThree,
                'pointFour': pipeData.pointFour,
                'pointFive': pipeData.pointFive,
                'pointSix': pipeData.pointSix,
                'pointSeven': pipeData.pointSeven,
                'pointeight': pipeData.pointeight
            });
        });

        // إنشاء ملف Excel
        const ws = XLSX.utils.json_to_sheet(data);
        console.log(ws)
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "تقرير المواسير");

        // تحميل الملف
        XLSX.writeFile(wb, `تقرير_المواسير_${new Date().toLocaleDateString()}.xlsx`);
    });
}

// إضافة زر للتصدير
const exportButton = document.createElement('button');

exportButton.innerHTML = `
    <span class="excel-icon">
        <img src="excel.jpg" alt="Excel" style="width: 58px; height: 58px; vertical-align: middle; margin-right: 8px;">
    </span>
    تصدير إلى Excel
`;


exportButton.id = 'exportExcel';
exportButton.style = `
        background: linear-gradient(120deg, rgb(21 35 54) 0%, rgb(64 46 204) 100%);;
    color: white;
    padding: 21px 20px;
    border-top: none;
    border-right: none;
    border-left: none;
    border-image: initial;
    cursor: pointer;
    margin: 10px;
    width: 87%;
    transition: 0.3s;
    border-radius: 8px;
    font-size: 22px;
    border-bottom: 1px solid rgb(51, 51, 51);
    display: block;
    margin: auto;
    margin-bottom: 20px;
`;

exportButton.addEventListener('mouseover', () => {
    exportButton.style.background = 'linear-gradient(120deg, rgb(27, 7, 100) 0%, rgb(21 11 99) 100%)';
});

exportButton.addEventListener('mouseout', () => {
    exportButton.style.background = 'background: linear-gradient(120deg, rgb(21 35 54) 0%, rgb(64 46 214) 100%);';
});

let input = document.createElement('input');
input.id = 'emptyinput'
exportButton.addEventListener('click', function(){
    if (document.getElementById('emptyinput')) {
        this.value = '';
        this.innerHTML = '';
    
    }
    input.value = '';
input.innerHTML=''
const div = document.createElement('div');
div.id = 'showPassword'
const btn = document.createElement('button');
btn.innerHTML = 'تأكيد';
btn.id = 'btn';
btn.style = `
        background: rgb(24, 34, 41);
    color: white;
    padding: -6px -7px;
    width: 15%;
    text-align: center;
    margin: 0;
    font-size: 29px;
    align-items: center;
    margin :auto;

`
input.type = 'password';
input.style = `
    background: rgb(24, 34, 41);
    color: white;
    width: 45%;
    /* padding: 25px; */
    text-align: center;
    /* margin: 0px; */
    font-size: 29px;
    align-items: center;
    margin :auto;
`

btn.addEventListener('click', function(){
    if (input.value === '123456') {
        exportToExcel();
        input.value = '';
        input.style.display = 'none';
        btn.style.display = 'none';
        div.style.display = 'none';

    }else{
        console.log('wrong password');
        prompt('كلمة المرور غير صحيحة');
    }
})

div.appendChild(input);
div.appendChild(btn);
document.querySelector('#container').appendChild(div);
const allDivs = document.createElement('div')
allDivs.appendChild(exportButton);


document.querySelector('#slider').appendChild(allDivs);
});

// ... existing code ...







document.getElementById("addHeight").addEventListener('click', function () {
let divMain = document.createElement('div')
    const pop = document.createElement('div');
    pop.addEventListener('drag',function(e){
        pop.style = `
        
        `
    })
    pop.id = 'pop';

        const input = document.createElement('input');
        input.value = '';   
        input.id = 'inputCreate';
        input.placeholder = "رجاءً الاختيار";
        
        const select = document.createElement('select');
        select.style = `
     padding: 0;
margin-bottom: 22px;
margin-right: 144px;
margin-top: 1rem;
width: 50%;
        `


        const btn = document.createElement('button');
        btn.id = 'btnCreate';
        btn.textContent = 'اضافه';

        




        for (let i = 0; i < 3; i++) {
    
                const option  = document.createElement('option');
            option.id = 'optionCreate';
            
            switch(i){
                case 0:
                    option.textContent = '-- إختر --';
                    option.selected = true;

                    break;
                case 1:
                    option.textContent = 'إضافه خيار جديد';
            option.value = `إضافه خيار جديد`;

                    break;
                case 2:
                    option.textContent = '  إضافه حقل جديد';
            option.value = `إضافه حقل جديد`;
                    break;
            
                
            }





            select.appendChild(option);
        }
        select.addEventListener('change', function () {
            if (this.value==='إضافه حقل جديد') {
            input.placeholder = `${this.value}`

            btn.addEventListener('click', function () {
                const selectValue = input.value;
    
            
                window.db.collection('witingSelectionAndOptions').add({
                    newSelect: selectValue,
                    id :selectValue,
                    
                })
               
            })
    
            }
            else if(this.value==='إضافه خيار جديد') {
                


                document.getElementById('hiddenn').addEventListener('click', (e) => {
                    if (e.target.tagName === 'SELECT') {
                        let id= e.target.id;
                        console.log(id)
                        input.placeholder = `${id}`
                
                
                
                btn.addEventListener('click',function(){

                window.db.collection('optionsValue').add({
                newOption: input.value,
                id: id
                })
                
                
            
                })
                }
                })


            }
        })
    

    
    
    





    
        
        
        
        
        
        
        







        
        

        
        
        
        
        
        divMain.style = `
            background-color: #032222;
            border-radius: 19px;
            width: 70%;
        `

const deleteBtn = document.createElement('span')
deleteBtn.textContent = 'x'
deleteBtn.id = 'deleteBtn'
deleteBtn.style = `
position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    color: white;
    font-size: 28px;
    padding: 13px;
    background: blueviolet;
    width: 9%;
    text-align: center;
`

deleteBtn.addEventListener('click',()=>{
    pop.style.display = 'none'
})






        pop.appendChild(deleteBtn)
        pop.appendChild(input);
pop.appendChild(select); 
    pop.appendChild(btn);
    //divMain.appendChild(pop);
    document.getElementById('grid-Template').appendChild(pop);




})



        
let selectNew;
let label ; 

let divSelection;
divSelection = document.createElement('div');
divSelection.id = 'divSelection'



            window.db.collection('Select').get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    selectNew = document.createElement('select');
                    const newDiv = document.createElement('div');

                    selectNew.id = data.id;
                    selectNew.style = `
                    
                        padding-top: 10px;
    padding-bottom: 10px;
                    `
            label = document.createElement('label');
            label.id = 'labelNewSelect'
            label.textContent = data.newSelect;
            label.style =`
            padding :5px;
            `








divSelection.id = 'divSelection'
                
newDiv.appendChild(label);
newDiv.appendChild(selectNew);
divSelection.appendChild(newDiv)
                })


                let getIdDiv ; 


document.getElementById('grid').addEventListener('click',(e)=>{
console.log(e.target.id)

if (e.target.id === 'colle3' ||e.target.id ==='collections' ||e.target.id ==='التصنيف') {
getIdDiv = e.target;
}
})
console.log(getIdDiv)

                document.getElementById('newField').appendChild(divSelection);                    
        
            })





            function resize(){
                const resize = document.createElement('span')
console.log(resize)

const icon = '<i class="fa-sharp-duotone fa-solid fa-down-left-and-up-right-to-center"></i>'
icon.style = `
font-size: 22px;
margin: auto;
`
resize.innerHTML = icon;
resize.id = 'resize'
document.getElementById('form').appendChild(resize)
    resize.style.display = 'block'
resize.addEventListener('click',()=>{
    resize.classList.toggle('active')
    document.getElementById('chat').style.display = 'none';
    document.getElementById('namePage').style.display = 'none';

    document.getElementById('hiddenn').style = `
    display: block;
    position: relative;
    max-width: 1993px;
    margin-right: 1%;
    top: -183px;
    z-index: 2147483647;
    right: 2%;
    transition: all 0.8s ease;

    `;
if (resize.className === 'active') {
console.log('done')  
}else{
    console.log('not done')
    document.getElementById('hiddenn').style = `
    
    display: block;
    position: relative;
    max-width: 1993px;
    margin-right: 1%;
    top: 0;
    z-index: 2147483647;
    right: 0;
    transition: 0.8s;
    `
}
})


}





window.db.collection('optionsValue').get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        const data = doc.data();
        const appe = document.getElementById(data.id);
        console.log(data.id)

        const option = document.createElement('option');
        option.value = data.newOption;
        option.innerHTML = data.newOption;
        if (appe) {
        if (appe === 'qualityNameLoad') {
            document.getElementById('qualityName').appendChild(option);
        }else if (appe === 'qualityName') {
            document.getElementById('qualityNameLoad').appendChild(option);
        }
            appe.appendChild(option); // هذا السطر يضيف الـ option فعلياً
        }else{
            console.log('not found')
        }
    });
});
function dragAddHeights(){
// Make element draggable and add necessary styles
document.getElementById('addHeight').setAttribute('draggable', 'true');
document.getElementById('addHeight').style.cursor = 'move';
document.getElementById('addHeight').style.userSelect = 'none';

let isDragging = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

document.getElementById('addHeight').addEventListener('mousedown', dragStart);
document.getElementById('grid-Template').addEventListener('mousemove', drag);
document.getElementById('grid-Template').addEventListener('mouseup', dragEnd);
document.getElementById('grid-Template').addEventListener('mouseleave', dragEnd);

function dragStart(e) {
initialX = e.clientX - xOffset;
initialY = e.clientY - yOffset;

if (e.target === document.getElementById('addHeight')) {
isDragging = true;
}
}

function drag(e) {
if (isDragging) {
e.preventDefault();
currentX = e.clientX - initialX;
currentY = e.clientY - initialY;

xOffset = currentX;
yOffset = currentY;

setTranslate(currentX, currentY, document.getElementById('addHeight'));
}
}

function setTranslate(xPos, yPos, el) {
el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
el.style.transition = 'transform 0.1s ease';
}

function dragEnd(e) {
initialX = currentX;
initialY = currentY;
isDragging = false;
}
}
dragAddHeights()



// show all Page
document.getElementById('namePage').addEventListener('click', function () {

const NewDiv = document.createElement('div')
if (document.getElementById('newDivPage')) {
document.getElementById('newDivPage').remove()
}

console.log('done')
NewDiv.innerHTML = ''
NewDiv.id = 'newDivPage'
const buttonPvc = document.createElement('button')
buttonPvc.innerHTML = 'PVC'
const buttonLoad = document.createElement('button')
buttonLoad.innerHTML = 'التحميل'
buttonPvc.style = `

margin-bottom: 20px;
width: 51%;
`
buttonLoad.style = `

margin-bottom: 20px;
width: 51%;
`

const closeButton = document.createElement('button');
closeButton.innerHTML = '×';
closeButton.id = 'closeNewDiv';
closeButton.style = `
        width: 76px;
    height: 76px;
    padding: 0px;
    border-radius: 50%;
    border: 1px solid rgb(82, 80, 80);
`;

closeButton.onclick = function() {
NewDiv.remove();
};






buttonPvc.id = 'buttonPvc'
buttonLoad.id = 'buttonLoad'




buttonPvc.addEventListener('click', function () {
window.open('PVC.html', '_blank');
})  

buttonLoad.addEventListener('click', function () {
window.location.href = 'load.html'
})  













NewDiv.appendChild(buttonPvc)
NewDiv.appendChild(buttonLoad)
NewDiv.appendChild(closeButton);








document.querySelector('#container').insertBefore(NewDiv, document.getElementById('addHeight'));

})










function Exit(){
    
// إنشاء الزر
const logoutButton = document.createElement('button');
logoutButton.id = 'logoutButton';
logoutButton.innerHTML = 'تسجيل الخروج من الموقع'; // علامة الخروج
logoutButton.style = `
    width: fit-content;
    height: fit-content;
    padding: 12px 24px;
    margin: 14px 62px;
    background: linear-gradient(135deg, rgb(255, 77, 77) 0%, rgb(255, 26, 26) 100%) rgb(255, 77, 77);
    color: white;
    font-size: 24px;
    font-weight: 600;
    font-family: Cairo, sans-serif;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: rgba(255, 77, 77, 0.3) 0px 4px 15px;
    transition: 0.3s;
    z-index: 2147483647;
    display: block;
    margin: auto;
    margin-top: 21px;
    /* تأثيرات التحويم */
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(255, 77, 77, 0.4);
        background: linear-gradient(135deg, #ff6666 0%, #ff3333 100%);
    }
    
    /* تأثيرات الضغط */
    &:active {
        transform: translateY(1px);
        box-shadow: 0 2px 10px rgba(255, 77, 77, 0.2);
    }
`;

// إضافة تأثير عند التمرير فوق الزر
logoutButton.addEventListener('mouseover', () => {
    logoutButton.style.backgroundColor = '#ff1a1a';
});
logoutButton.addEventListener('mouseout', () => {
    logoutButton.style.backgroundColor = '#ff4d4d';
});

// إضافة حدث عند الضغط على الزر
logoutButton.addEventListener('click', () => {
    // عرض رسالة تأكيد
    const confirmation = prompt('للتأكيد، اكتب "خروج"');
    if (confirmation === 'خروج') {
        // مسح nameUser من localStorage
        localStorage.removeItem('nameUser');
        // توجيه المستخدم إلى صفحة تسجيل الدخول
        window.location.href = 'index.html';
        window.localStorage.clear();
    } else {
        alert('تم إلغاء عملية الخروج.');
    }
});

// إضافة الزر إلى الصفحة
document.getElementById('slider').appendChild(logoutButton);

}
Exit()






function register() {
    const btn = document.createElement('button');
    btn.id = 'registerButton';
    btn.addEventListener('click', function () {
        window.open('register.html', '_blank');
    });
    document.getElementById('slider').appendChild(btn);
    btn.innerText = 'قسم الاداره';
    }
    register();




    function fitshNmaeAndNum(){
        const namesDiv = document.createElement('div');
        namesDiv.id = 'namesDiv';
        namesDiv.style = `
                background: rgb(24, 34, 41);
    color: white;
    padding: 20px;
    margin: 20px auto;
    border-radius: 10px;
    width: 69%;
    text-align: center;
    font-size: 18px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 8px;
        `;

        window.db.collection('total').get().then((querySnapshot)=>{
       
            const h = document.createElement('h1')
            h.innerHTML = 'المتصلين بالموقع';
            h.style = `
            color: white;
            `
            namesDiv.appendChild(h);
            querySnapshot.forEach((doc)=>{
                const data = doc.data();
                console.log('Document data:', data);
            
                if (data.text) {
                  
                    const textElement = document.createElement('p');
                    textElement.textContent = data.text;
                                        namesDiv.appendChild(textElement);
                }
                
           
            });
            
            // Add the namesDiv to the container after all data is processed
            const slider = document.getElementById('slider');
            if (slider) {
                slider.appendChild(namesDiv);
            } else {
                console.error('Container element not found');
            }
        }).catch(error => {
            console.error('Error fetching data:', error);
        });
    }

    // Call the function
    fitshNmaeAndNum();

// دالة إنشاء الأزرار
function createButton(text, title) {
    const button = document.createElement('button');
    button.textContent = text;
    button.title = title;
    button.style.cssText = `
        background: rgba(255,255,255,0.2);
        border: none;
        color: white;
        padding: 15px 30px;
        font-size: 28px;
        cursor: pointer;
        border-radius: 8px;
        transition: all 0.3s ease;
        margin: 0 5px;
        font-family: 'Cairo', sans-serif;
    `;
    
    button.addEventListener('mouseenter', () => {
        button.style.background = 'rgba(255,255,255,0.3)';
        button.style.transform = 'scale(1.1)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.background = 'rgba(255,255,255,0.2)';
        button.style.transform = 'scale(1)';
    });
    
    return button;
}

// دالة عرض PDF في تبويب جديد
function showPDFViewer() {
    const pdfPath = 'شامل.pdf';
    window.open(pdfPath, '_blank');
}

// إضافة زر لفتح PDF
const pdfButton = document.createElement('button');
pdfButton.innerHTML = '<i class="fa-solid fa-file-pdf"></i> عرض الملف الشامل';
pdfButton.className = 'pdf-button';
pdfButton.style.cssText = `
    background: linear-gradient(120deg, #2c3e50 0%, #3498db 100%);
    color: white;
    border: none;
    padding: 15px 30px;
    border-radius: 8px;
    cursor: pointer;
    font-family: 'Cairo', sans-serif;
    font-size: 18px;
    margin: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: all 0.3s ease;
`;

pdfButton.addEventListener('mouseenter', () => {
    pdfButton.style.transform = 'scale(1.05)';
});

pdfButton.addEventListener('mouseleave', () => {
    pdfButton.style.transform = 'scale(1)';
});

pdfButton.onclick = showPDFViewer;

// إضافة الزر إلى الصفحة
document.getElementById('form').appendChild(pdfButton);

// ... existing code ...


// ... existing code ...

// دالة استيراد ملف Excel
function importExcelToFirebase() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.xlsx, .xls';
    input.style.display = 'none';
    
    input.addEventListener('change', async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        try {
            const reader = new FileReader();
            reader.onload = async function(e) {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, { type: 'array' });
                const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
                const excelData = XLSX.utils.sheet_to_json(firstSheet, { 
                    raw: false,
                    defval: '' // القيمة الافتراضية للخلايا الفارغة
                });

                const user = firebase.auth().currentUser;
                if (!user) {
                    alert('يرجى تسجيل الدخول أولاً');
                    return;
                }

                const batch = firebase.firestore().batch();
                const collectionRef = firebase.firestore().collection('pipe');

                for (const row of excelData) {
                    if (!row || Object.keys(row).length === 0) continue; // تخطي الصفوف الفارغة

                    const docRef = collectionRef.doc();
                    const thinkessValue = row.thinkess || document.getElementById("thivsDiam").value || '';
                    
                    const data = {
                        uid: user.uid,
                        thinkess: thinkessValue,
                        pointOne: row.pointOne || '',
                        pointTwo: row.pointTwo || '',
                        pointThree: row.pointThree || '',
                        pointFour: row.pointFour || '',
                        pointFive: row.pointFive || '',
                        pointSix: row.pointSix || '',
                        pointSeven: row.pointSeven || '',
                        pointeight: row.pointeight || '',
                        getbar: row.getbar || getDataChangeBar || '',
                        specifications: row.specifications || getDataChangeSpecifitions || '',
                        getName: row.getName || getName || '',
                        nameLoad: row.nameLoad || nameLoad || '',
                        reasonRejct: row.reasonRejct || '',
                        reject: row.reject || '',
                        weightaFely: row.weightaFely || document.getElementById("faely")?.value || '',
                        notic: row.notic || document.getElementById("notic")?.value || '',
                        codeplay: row.codeplay || '',
                        meter: row.meter || '',
                        ovality: row.ovality || '',
                        date: row.date || dateyear || '',
                        meterWeight: row.meterWeight || document.getElementById("meterWeight")?.value || '',
                        allDate: row.allDate || allDate || '',
                        diametermoasafa: thinkessValue ? (Number(thinkessValue) * 1.009).toString() : '',
                        getNumberLine: row.getNumberLine || document.getElementById("divSelect")?.value || '',
                        thinkessBar: row.thinkessBar || thinkessBar || '',
                        anotherTimeop: row.anotherTimeop || anotherTimeop || '',
                        diameter: row.diameter || document.getElementById("diameter")?.value || '',
                        diameterFakum: row.diameterFakum || document.getElementById('diameterFakum')?.value || '',
                        diameterHeight: thinkessValue ? (Number(thinkessValue) / 0.991).toFixed(1) : '',
                        total: row.total || total || '',
                        minone: thinkessValue && row.pointOne ? (Number(thinkessValue)/16.86 - Number(row.pointOne)).toFixed(1) : '',
                        mintwo: thinkessValue && row.pointTwo ? (Number(thinkessValue)/16.86 - Number(row.pointTwo)).toFixed(1) : '',
                        minthree: thinkessValue && row.pointThree ? (Number(thinkessValue)/16.86 - Number(row.pointThree)).toFixed(1) : '',
                        minfour: thinkessValue && row.pointFour ? (Number(thinkessValue)/16.86 - Number(row.pointFour)).toFixed(1) : '',
                        minfive: thinkessValue && row.pointFive ? (Number(thinkessValue)/16.86 - Number(row.pointFive)).toFixed(1) : '',
                        minsix: thinkessValue && row.pointSix ? (Number(thinkessValue)/16.86 - Number(row.pointSix)).toFixed(1) : '',
                        minseven: thinkessValue && row.pointSeven ? (Number(thinkessValue)/16.86 - Number(row.pointSeven)).toFixed(1) : '',
                        mineight: thinkessValue && row.pointeight ? (Number(thinkessValue)/16.86 - Number(row.pointeight)).toFixed(1) : '',
                        finalData: finalData,
                        formattedDate: formattedDate,
                        newOptionValue: row.newOptionValue || {}
                    };

                    // التحقق من صحة البيانات قبل إضافتها
                    const validData = Object.entries(data).reduce((acc, [key, value]) => {
                        acc[key] = value === undefined || value === null ? '' : value;
                        return acc;
                    }, {});

                    batch.set(docRef, validData);
                }

                await batch.commit();
                alert('تم استيراد البيانات بنجاح!');
            };
            reader.readAsArrayBuffer(file);
        } catch (error) {
            console.error('خطأ في استيراد الملف:', error);
            alert('حدث خطأ أثناء استيراد الملف');
        }
    });

    document.body.appendChild(input);
    input.click();
    document.body.removeChild(input);
}

// إضافة زر الاستيراد
const importButton = document.createElement('button');
importButton.innerHTML = '<i class="fa-solid fa-file-excel"></i> استيراد من Excel';
importButton.className = 'import-button';
importButton.style.cssText = `
         background: linear-gradient(120deg, rgb(39, 174, 96) 0%, rgb(46, 204, 113) 100%);
    color: white;
    border: none;
    padding: 15px 30px;
    border-radius: 8px;
    cursor: pointer;
    font-family: Cairo, sans-serif;
    font-size: 25px;
    margin: 20px;
    display: flex
;
    align-items: center;
    gap: 10px;
    transition: 0.3s;
    transform: scale(1);
    width: 81%;
    display: block;
    margin: auto;

`;

importButton.addEventListener('mouseenter', () => {
    importButton.style.transform = 'scale(1.05)';
});

importButton.addEventListener('mouseleave', () => {
    importButton.style.transform = 'scale(1)';
});

importButton.onclick = importExcelToFirebase;

// إضافة مكتبة SheetJS
const sheetJsScript = document.createElement('script');
sheetJsScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js';
document.head.appendChild(sheetJsScript);

// إضافة الزر إلى الصفحة
document.getElementById('slider').appendChild(importButton);

// ... existing code ...