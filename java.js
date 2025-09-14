document.addEventListener('DOMContentLoaded', () => {
    const pageTransition = document.querySelector('.page-transition');
    // ดักจับทุกลิงก์ในหน้าเว็บ ยกเว้นลิงก์ที่ใช้ในหน้าเดียวกัน
    const links = document.querySelectorAll('a:not([href*="#"]):not([href*="tel:"]):not([href*="mailto:"])');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            // ป้องกันการเปลี่ยนหน้าแบบปกติ
            e.preventDefault(); 
            
            // เพิ่มคลาส active เพื่อเริ่มแอนิเมชัน
            pageTransition.classList.add('active'); 

            // หน่วงเวลาการเปลี่ยนหน้าเป็น 1000 มิลลิวินาที (1 วินาที)
            setTimeout(() => {
                window.location.href = link.href;
            }, 1000);
        });
    });
});