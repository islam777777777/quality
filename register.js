// Function to add operations to the sidebar
function addOperationToSidebar(message) {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        const operation = document.createElement('div');
        operation.className = 'operation';
        operation.textContent = message;
        sidebar.insertBefore(operation, sidebar.firstChild);
    }
}

// Function to load accepted users in sidebar
function loadAcceptedUsers() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        window.db.collection('total').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                const operation = document.createElement('div');
                operation.className = 'operation accepted-user';
                operation.textContent = `المستخدم المقبول: ${data.text}`;
                sidebar.appendChild(operation);
            });
        }).catch((error) => {
            console.error('خطأ في تحميل المستخدمين المقبولين:', error);
        });
    }
}

// Call loadAcceptedUsers when the page loads
document.addEventListener('DOMContentLoaded', loadAcceptedUsers);

const box = document.createElement('div');
let name = document.createElement('h1');    
let buttonAccept = document.createElement('button');
let buttonRehect = document.createElement('button');

//newUser
let obj = {};
window.db.collection('witingName').get().then((quersnap) => {
    
    quersnap.forEach(element => {
        const data = element.data();
        console.log(data);
        obj.text = data.text;
        obj.num = data.num;
        

let registerContainer = document.getElementById('registerContainer');
buttonAccept.innerText =  'قبول';
buttonAccept.id = 'btnAccept';
buttonRehect.innerText =  'رفض';
buttonRehect.id = 'btnRehect';
const title = document.createElement('div');
title.appendChild(name);
name.innerText = `هل تريد إضافة ${data.text} إلى قاعدة البيانات؟`;
box.appendChild(title);
const divButton = document.createElement('div');
divButton.id = 'divButton'; 

divButton.appendChild(buttonAccept);
divButton.appendChild(buttonRehect);
box.appendChild(divButton);
    });
}).catch((error) => {
    console.error('خطأ أثناء جلب البيانات:', error);
}   );
name.style = `
    color: rgb(114, 28, 36);
    font-size: 20px;
    text-align: center;
`;


box.id = 'box';
registerContainer.appendChild(box);

let accept = 0;
buttonAccept.addEventListener('click', function () {
    // إضافة العملية إلى الشريط الجانبي
    addOperationToSidebar(`تم قبول المستخدم "${obj.text}" بنجاح`);
    
    alert('تم قبول الطلب بنجاح!');
    window.db.collection('total').add(obj).then(() => {
        window.db.collection('witingName').get().then((quersnap) => {
            quersnap.forEach((element) => {
                const data = element.data();
                window.db.collection('witingName').doc(element.id).delete().then(() => {
                    console.log('تم حذف الطلب من witingName');
                }).catch((error) => {
                    console.error('خطأ أثناء حذف الطلب:', error);
                });
            });
        }).catch((error) => {
            console.error('خطأ أثناء جلب البيانات:', error);
        });
    }).catch((error) => {
        console.error('خطأ أثناء إضافة المستخدم إلى total:', error);
        // إضافة رسالة خطأ إلى الشريط الجانبي
        addOperationToSidebar(`فشل في إضافة المستخدم "${obj.text}" - حدث خطأ`);
    });
});

buttonRehect.addEventListener('click', function () {
    window.localStorage.removeItem('newUser');
    buttonRehect.remove();
    buttonAccept.remove();
    name.remove();
    box.innerHTML = `<h1 id="rehect">
    'حسنا, لن يتم الموافقه على طلب تسجيل الدخول ! '</h1>`
    
    // Get the document reference first
    window.db.collection('witingName').get().then((quersnap) => {
        quersnap.forEach((doc) => {
            // Delete each document
            window.db.collection('witingName').doc(doc.id).delete().then(() => {
                console.log('تم حذف الطلب من witingName');
            }).catch((error) => {
                console.error('خطأ أثناء حذف الطلب:', error);
            });
        });
    }).catch((error) => {
        console.error('خطأ أثناء جلب البيانات:', error);
    });
});








function removeRegisterContainer() {

        window.localStorage.removeItem('newUser');
        buttonRehect.remove();
        buttonAccept.remove();
        name.remove();
        box.innerHTML = `<h1 id="rehect">'لا توجد طلبات حاليا'</h1>`
    }

    buttonRehect.addEventListener('click', function () {
    
        removeRegisterContainer();
        box.innerHTML = `<h1 id="rehect">'حسنا, لن يتم الموافقه على طلب تسجيل الدخول ! '</h1>`

    
    })
    
  
    removeRegisterContainer();


// إنشاء قسم إدارة الحقول
const formManagementSection = document.createElement('div');
formManagementSection.id = 'formManagementSection';

// إضافة عنوان القسم
const formTitle = document.createElement('h2');
formTitle.innerHTML = 'إدارة الحقول الجديدة';
formTitle.style = `
    color: #2196F3;
    text-align: center;
    margin: 20px 0;
    padding: 10px;
    border-bottom: 2px solid #2196F3;
`;
formManagementSection.appendChild(formTitle);
document.body.appendChild(formManagementSection);

// جلب البيانات من witingSelectionAndOptions
window.db.collection('witingSelectionAndOptions').get().then((quersnap) => {
    if (quersnap.empty) {
        formManagementSection.innerHTML = '<h3 style="text-align: center; color: #666;">لا توجد حقول جديدة للإضافة</h3>';
        return;
    }

    quersnap.forEach(element => {
        const data = element.data();
        const selectValue = data.newSelect;
        
        // إنشاء صندوق لكل حقل
        const fieldBox = document.createElement('div');
        fieldBox.style = `
            margin: 10px;
            padding: 15px;
            border: 1px solid #ddd;
            border-radius: 8px;
            background-color: #f9f9f9;
        `;

        const fieldQuestion = document.createElement('h3');
        fieldQuestion.innerHTML = `هل تريد إضافة حقل <span style="color: #2196F3; font-weight: bold;">${selectValue}</span> إلى النموذج؟`;
        fieldQuestion.style = `
        color: black;
        `
        const buttonContainer = document.createElement('div');
        buttonContainer.style = `
            display: flex;
            justify-content: center;
            gap: 10px;
            margin-top: 10px;
        `;

        const acceptButton = document.createElement('button');
        acceptButton.innerText = 'موافق';
        acceptButton.style = `
            padding: 8px 20px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: all 0.3s ease;
        `;

        const rejectButton = document.createElement('button');
        rejectButton.innerText = 'رفض';
        rejectButton.style = `
            padding: 8px 20px;
            background-color: #f44336;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: all 0.3s ease;
        `;

        // إضافة الحقل عند الموافقة
        acceptButton.addEventListener('click', () => {
            window.db.collection('Select').add({
                newSelect: selectValue,
                id: selectValue
            })
            .then(() => {
                // إنشاء رسالة النجاح
                const successMessage = document.createElement('div');
                successMessage.style = `
                    background-color: #4CAF50;
                    color: white;
                    padding: 15px;
                    border-radius: 8px;
                    margin: 10px;
                    text-align: center;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    font-size: 18px;
                `;
                successMessage.innerHTML = `
                    <span style="font-size: 24px;">✓</span>
                    تمت إضافة الحقل بنجاح!
                `;
                
                fieldBox.replaceWith(successMessage);
                
                // إخفاء رسالة النجاح بعد 3 ثواني
                setTimeout(() => {
                    successMessage.remove();
                    if (!formManagementSection.hasChildNodes()) {
                        formManagementSection.innerHTML = '<h3 style="text-align: center; color: #666;">لا توجد حقول جديدة للإضافة</h3>';
                    }
                }, 3000);

                window.db.collection('witingSelectionAndOptions').doc(element.id).delete();
            })
            window.db.collection('notification').add({
                newSelect: selectValue,
                statu : 'موافقة',
                date : new Date().toLocaleDateString('ar-EG'),
                time : new Date().toLocaleTimeString('ar-EG'),

                
            })


            .catch(error => {
                console.error('خطأ في إضافة الحقل:', error);
                alert('حدث خطأ أثناء إضافة الحقل');
            });
        });

        // حذف الطلب عند الرفض
        rejectButton.addEventListener('click', () => {
            window.db.collection('witingSelectionAndOptions').doc(element.id).delete()
                .then(() => {
                    fieldBox.remove();
                    if (!formManagementSection.hasChildNodes()) {
                        formManagementSection.innerHTML = '<h3 style="text-align: center; color: #666;">لا توجد حقول جديدة للإضافة</h3>';
                    }
                })
                .catch(error => {
                    console.error('خطأ في حذف الطلب:', error);
                    alert('حدث خطأ أثناء حذف الطلب');
                });
                window.db.collection('notification').add({
                    newSelect: selectValue,
                    statu : 'رفض',
                    date : new Date().toLocaleDateString('ar-EG'),
                    time : new Date().toLocaleTimeString('ar-EG'),
                    
                    
                })
        });

        buttonContainer.appendChild(acceptButton);
        buttonContainer.appendChild(rejectButton);
        fieldBox.appendChild(fieldQuestion);
        fieldBox.appendChild(buttonContainer);
        formManagementSection.appendChild(fieldBox);
    });
}).catch(error => {
    console.error('خطأ في جلب البيانات:', error);
    formManagementSection.innerHTML = '<h3 style="text-align: center; color: #f44336;">حدث خطأ في جلب البيانات</h3>';
});


// إنشاء الشريط الجانبي
const sidebar = document.createElement('div');
sidebar.id = 'sidebar';
sidebar.style = `
    position: fixed;
    left: -300px;
    top: 0;
    width: 300px;
    height: 100vh;
    background: #fff;
    box-shadow: 2px 0 5px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
    z-index: 1000;
    padding: 20px;
    direction: rtl;
`;

// إنشاء زر التبديل
const toggleButton = document.createElement('button');
toggleButton.innerHTML = '&#9776;'; // رمز القائمة
toggleButton.style = `
position: fixed;
    left: 1px;
    top: 10px;
    background: rgb(33, 150, 243);
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 14px;
    cursor: pointer;
    z-index: 1001;
    transition: 0.3s;
`;

// إنشاء عنوان للشريط الجانبي
const sidebarTitle = document.createElement('h2');
sidebarTitle.textContent = 'العمليات الأخيرة';
sidebarTitle.style = `
color: rgb(33, 150, 243);
    text-align: center;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 2px solid rgb(33, 150, 243);
    position: relative;
    right: -4%;
`;

// إضافة العناصر إلى الشريط الجانبي
sidebar.appendChild(sidebarTitle);

// إضافة العناصر إلى الصفحة
document.body.appendChild(sidebar);
document.body.appendChild(toggleButton);

// حالة الشريط الجانبي
let isSidebarOpen = false;

// وظيفة تبديل الشريط الجانبي
toggleButton.addEventListener('click', () => {
    isSidebarOpen = !isSidebarOpen;
    sidebar.style.left = isSidebarOpen ? '0' : '-300px';
    toggleButton.style.left = isSidebarOpen ? '310px' : '10px';
});




if (document.getElementById('sidebar')) {
    // Add scrolling styles to sidebar
    const sidebar = document.getElementById('sidebar');
    sidebar.style.maxHeight = '94vh'; // 80% of viewport height
    sidebar.style.overflowY = 'auto';
    sidebar.style.overflowX = 'hidden';
    sidebar.style.scrollbarWidth = 'thin';
    sidebar.style.scrollbarColor = '#6C5CE7 #F5F6FA';
    sidebar.style.borderRadius = '16px';
    
    window.db.collection('notification').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const operation = document.createElement('div');
            operation.style = `
                display: block;
                width: 92%;
                margin: 15px auto;
                text-align: right;
                padding: 18px;
                border-radius: 12px;
                box-shadow: 0 4px 15px rgba(0,0,0,0.05);
                border-right: 4px solid ${data.statu === 'موافقة' ? '#4CAF50' : '#f44336'};
                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                position: relative;
                overflow: hidden;
                backdrop-filter: blur(5px);
            `;
            
            operation.innerHTML = `
                <div class="notification-item" style="position: relative; padding: 20px;">
                    <div style="
                        position: absolute;
                        top: -30px;
                        right: -30px;
                        width: 60px;
                        height: 60px;
                        background: ${data.statu === 'موافقة' ? '#E8F5E9' : '#FFEBEE'};
                        opacity: 0.1;
                        border-radius: 50%;
                    "></div>
                    <h3 style="
                        font-size: 17px;
                        margin: 0 0 12px;
                        color: #1976D2;
                        font-weight: 600;
                        display: flex;
                        align-items: center;
                        gap: 8px;
                    ">
                        <span style="color: #2196F3;">📋</span>
                        الطلب: إضافة ${data.newSelect}
                    </h3>
                    <div style="
                        font-size: 15px;
                        margin: 10px 0;
                        color: ${data.statu === 'موافقة' ? '#4CAF50' : '#f44336'};
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        background: ${data.statu === 'موافقة' ? 'rgba(76, 175, 80, 0.1)' : 'rgba(244, 67, 54, 0.1)'};
                        padding: 8px 12px;
                        border-radius: 6px;
                    ">
                        <span style="
                            display: inline-flex;
                            align-items: center;
                            justify-content: center;
                            width: 24px;
                            height: 24px;
                            background: ${data.statu === 'موافقة' ? '#E8F5E9' : '#FFEBEE'};
                            border-radius: 50%;
                            font-size: 20px;
                        ">
                            ${data.statu === 'موافقة' ? '✓' : '✕'}
                        </span>
                        الحالة: ${data.statu}
                    </div>
                    <div style="
                        margin-top: 12px;
                        padding-top: 12px;
                        border-top: 1px solid rgba(0,0,0,0.05);
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        color: #666;
                        font-size: 13px;
                    ">
                        <div style="display: flex; align-items: center; gap: 6px;">
                            <span style="color: #999;">📅</span>
                            ${data.date}
                        </div>
                        <div style="display: flex; align-items: center; gap: 6px;">
                            <span style="color: #999;">⏰</span>
                            ${data.time}
                        </div>
                    </div>
                </div>
            `;

            // تحسين تأثيرات التحويم
            operation.addEventListener('mouseover', () => {
                operation.style.transform = 'translateY(-4px)';
                operation.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
            });

            operation.addEventListener('mouseout', () => {
                operation.style.transform = 'translateY(0)';
                operation.style.boxShadow = '0 4px 15px rgba(0,0,0,0.05)';
            });

            document.getElementById('sidebar').appendChild(operation);
        });
    });
}

// إنشاء زر تبديل الوضع
const darkModeToggle = document.createElement('button');
darkModeToggle.innerHTML = '🌑'; // رمز القمر المظلم للوضع الداكن
darkModeToggle.style = `
    position: fixed;
    left: 60px;
    top: 10px;
    background: #2196F3;
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 14px;
    cursor: pointer;
    z-index: 1001;
    transition: 0.3s;
    font-size: 16px;
`;

document.body.appendChild(darkModeToggle);

// تحديد الوضع الحالي
let isDarkMode = localStorage.getItem('darkMode') === 'true';

// تطبيق الوضع المحفوظ
if (isDarkMode) {
    enableDarkMode();
}

// دالة تفعيل الوضع الداكن
function enableDarkMode() {
    document.body.style.backgroundColor = '#1a1a1a';
    document.body.style.color = '#ffffff';
    sidebar.style.backgroundColor = '#2d2d2d';
    sidebar.style.boxShadow = '2px 0 5px rgba(255,255,255,0.1)';
    darkModeToggle.innerHTML = '🌑'; // رمز الشمس للوضع الفاتح
    
    // تحديث لون العناصر في الشريط الجانبي
    const operations = document.querySelectorAll('#sidebar .notification-item');
    operations.forEach(op => {
        op.closest('div').style.backgroundColor = '#3d3d3d';
        op.closest('div').style.color = '#ffffff';
        document.querySelectorAll('#sidebar.notification-item').forEach(op => {
         op.style = `
         
         position: relative;
    background-color: rgb(61, 61, 61);
    color: rgb(255, 255, 255);
    padding: 20px;
         `
        });
    });

    // تحديث لون عناصر النموذج
    const formBoxes = document.querySelectorAll('#formManagementSection > div');
    formBoxes.forEach(box => {
        if (box.tagName === 'DIV') {
            box.style.backgroundColor = '#2d2d2d';
            box.style.borderColor = '#444';
            box.style.color = '#ffffff';
        }
    });

    isDarkMode = true;
    localStorage.setItem('darkMode', 'true');
}

// دالة تفعيل الوضع الفاتح
function enableLightMode() {
    document.body.style.backgroundColor = '';
    document.body.style.color = '';
    sidebar.style.backgroundColor = '#fff';
    sidebar.style.boxShadow = '2px 0 5px rgba(0,0,0,0.1)';
    darkModeToggle.innerHTML = '🌑'; // رمز القمر المكتمل للوضع الفاتح
    
    // إعادة تعيين لون العناصر في الشريط الجانبي
    const operations = document.querySelectorAll('#sidebar .notification-item');
    operations.forEach(op => {
        op.closest('div').style.backgroundColor = '#f8f9fa';
        op.closest('div').style.color = '#333';
    });

    // إعادة تعيين لون عناصر النموذج
    const formBoxes = document.querySelectorAll('#formManagementSection > div');
    formBoxes.forEach(box => {
        if (box.tagName === 'DIV') {
            box.style.backgroundColor = '#f9f9f9';
            box.style.borderColor = '#ddd';
            box.style.color = 'black';
        }
    });

    isDarkMode = false;
    localStorage.setItem('darkMode', 'false');
}

// إضافة حدث النقر لتبديل الوضع
darkModeToggle.addEventListener('click', () => {
    if (isDarkMode) {
        enableLightMode();
    } else {
        enableDarkMode();
    }
});