let array = [];
if (window.localStorage.getItem('login') != null) {
    array = JSON.parse(localStorage.getItem('login'));
} else {
    array = [];
}

let textValue = document.getElementById('textValue');
let numValue = document.getElementById('numValue');
let form = document.getElementById('form');

// تنفيذ إجراء عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    console.log('تم فتح المتصفح أو تحميل الصفحة.');

    // جلب البيانات من Firestore عند فتح الصفحة
    window.db.collection('total').get().then((quersnap) => {
        quersnap.forEach(element => {
            const data = element.data();
            if (array.text === data.text && array.num === data.num) {
                form.remove();
                window.location.href = 'start.html';
            }
            if (window.localStorage.getItem('isLoggedIn') === 'true') {
                form.style.display = 'none'; // إخفاء النموذج
                window.location.href = 'start.html'; // التوجيه إلى صفحة البداية
                return;
            }
        });
    }).catch((error) => {
        console.error('خطأ أثناء جلب البيانات:', error);
    });
});

// إضافة بيانات عند الضغط على الزر
document.getElementById('btn').addEventListener('click', function () {
    const obj = {
        text: textValue.value.trim(), // إزالة المسافات الزائدة
        num: numValue.value.trim(), // الرقم السري
    };

    // التحقق من الاسم في Firestore
    window.db.collection('total').where('text', '==', obj.text).get().then((querySnapshot) => {
        if (!querySnapshot.empty) {
            // الاسم موجود، تحقق من الرقم السري
            const userData = querySnapshot.docs[0].data(); // جلب بيانات المستخدم
            if (userData.num === obj.num) {
                // الرقم السري صحيح
                alert('تم تسجيل الدخول بنجاح!');
                window.localStorage.setItem('nameUser', obj.text);
                window.location.href = 'start.html'; // التوجيه إلى الصفحة
            } else {
                // الرقم السري غير صحيح
                alert('الرقم السري غير صحيح!');
                const resetPasswordDiv = document.createElement('div');
                resetPasswordDiv.id = 'resetPasswordDiv';
                resetPasswordDiv.style = `
                    background: rgb(248, 215, 218);
                    color: rgb(114, 28, 36);
                    padding: 20px;
                    margin: 20px auto;
                    border-radius: 10px;
                    width: 25%;
                    text-align: center;
                    font-size: 16px;
                    position: absolute;
                `;
                resetPasswordDiv.innerHTML = `
                    <p>الرقم السري غير صحيح. يمكنك تغييره هنا:</p>
                    <input type="password" id="newPassword" placeholder="أدخل الرقم السري الجديد" style="padding: 10px; margin: 10px 0; width: 80%; border-radius: 5px; border: 1px solid #ccc;">
                    <button id="updatePasswordBtn" style="padding: 10px 20px; background: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer;">تحديث الرقم السري</button>
                `;
                document.body.appendChild(resetPasswordDiv);

                // تحديث الرقم السري في Firestore
                document.getElementById('updatePasswordBtn').addEventListener('click', () => {
                    const newPassword = document.getElementById('newPassword').value.trim();
                    if (newPassword) {
                        querySnapshot.docs[0].ref.update({ num: newPassword }).then(() => {
                            alert('تم تحديث الرقم السري بنجاح!');
                            resetPasswordDiv.remove(); // إزالة واجهة تغيير الرقم السري
                        }).catch((error) => {
                            console.error('خطأ أثناء تحديث الرقم السري:', error);
                        });
                    } else {
                        alert('يرجى إدخال الرقم السري الجديد.');
                    }
                });
            }
        } else {
            // الاسم غير موجود، تخزين البيانات والتوجيه إلى صفحة التسجيل
            alert('فى انتظار موافقه الإداره على طلبكم للانضمام');
            window.db.collection('witingName').add((
                {
                    text: obj.text,
                    num: obj.num,
                }
            ))
        }
    }).catch((error) => {
        console.error('خطأ أثناء التحقق من البيانات:', error);
    });
});
