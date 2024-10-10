// import react, {useState, useEffect} from "react";
// import { number } from "zod";

// const useScrollProgress = () => {
//     const [completion, setCompletion] = useState(0);
    
//     useEffect(()=> {
//         const updateScrollCompletion = () => {
//             const currentProgress = window.scrollY;
//             const scrollHeight = document.body.scrollHeight - window.innerHeight;

//             if (scrollHeight) {
//                 setCompletion(number(currentProgress / scrollHeight).toFixed(2) * 100); 
//             }
//         };

//         //event
//         window.addEventListener('scroll', updateScrollCompletion);
//         //clear event
//         return () => window.removeEventListener('scroll', updateScrollCompletion);
//     }, []);
    
//     return completion;    
// }

// export default useScrollProgress
import { useState, useEffect } from "react";

const useScrollProgress = () => {
    const [completion, setCompletion] = useState(0);
    
    useEffect(() => {
        const updateScrollCompletion = () => {
            const currentProgress = window.scrollY; // Posisi scroll vertikal
            const scrollHeight = document.body.scrollHeight - window.innerHeight; // Total scrollable height

            if (scrollHeight > 0) { // Memastikan scrollHeight bukan nol
                // Hitung persentase kemajuan dan bulatkan hingga 2 desimal
                const newCompletion = (currentProgress / scrollHeight) * 100; 
                setCompletion(Number(newCompletion.toFixed(2))); // Menggunakan Number untuk memastikan hasilnya adalah angka
            }
        };

        // Event listener untuk menangani scroll
        window.addEventListener('scroll', updateScrollCompletion);

        // Membersihkan event listener saat komponen di-unmount
        return () => window.removeEventListener('scroll', updateScrollCompletion);
    }, []);
    
    return completion;    
}

export default useScrollProgress;
