import React, { useState, useEffect } from "react";
import { db } from "./firebase"; // تأكد من استيراد Firestore بشكل صحيح

const FirestoreComponent = () => {
    const [inputValue, setInputValue] = useState("");
    const [data, setData] = useState({ heights: [], moaswfas: [], qualityNames: [], rejects: [] });

    // دالة لإضافة البيانات إلى Firestore
    const addToFirestore = async (fieldName, value) => {
        try {
            await db.collection("pipe").add({ [fieldName]: value });
            console.log(`${fieldName} تمت إضافته بنجاح`);
            fetchData();
        } catch (error) {
            console.error("خطأ أثناء الإضافة: ", error);
        }
    };

    // جلب البيانات من Firestore
    const fetchData = async () => {
        try {
            const querySnapshot = await db.collection("pipe").get();
            console.log("جميع البيانات المسترجعة:", querySnapshot.docs.map(doc => doc.data()));
            
            const heights = new Set();
            const moaswfas = new Set();
            const qualityNames = new Set();
            const rejects = new Set();

            querySnapshot.forEach((doc) => {
                const docData = doc.data();
                if (docData.height) heights.add(docData.height);
                if (docData.moaswfa) moaswfas.add(docData.moaswfa);
                if (docData.qualityName) qualityNames.add(docData.qualityName);
                if (docData.reject) rejects.add(docData.reject);
            });

            setData({
                heights: Array.from(heights),
                moaswfas: Array.from(moaswfas),
                qualityNames: Array.from(qualityNames),
                rejects: Array.from(rejects),
            });
        } catch (error) {
            console.error("خطأ أثناء جلب البيانات: ", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <input
                type="text"
                placeholder="أدخل القيمة"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value.toUpperCase())}
            />
            <button onClick={() => addToFirestore("reject", inputValue)}>إضافة مشكله</button>
            
            <select>
                <option value="">--- اختر ---</option>
                {data.rejects.map((value, index) => (
                    <option key={index} value={value}>{value}</option>
                ))}
            </select>
        </div>
    );
};

export default FirestoreComponent;
