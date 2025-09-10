// โค้ดส่วนนี้จะซ่อนการ์ดที่ไม่ตรงกับคำค้นหา
foodItems.forEach(card => {
    const foodTitle = card.querySelector('.food-card-title').textContent.trim().toLowerCase();
    const foodSubtitle = card.querySelector('.food-card-subtitle').textContent.trim().toLowerCase();
    
    if (foodTitle.includes(searchQuery) || foodSubtitle.includes(searchQuery)) {
        card.style.display = 'block'; // แสดงการ์ดที่เจอ
        if (!firstMatchElement) {
            firstMatchElement = card.querySelector('.food-card');
        }
        found = true;
    } else {
        card.style.display = 'none'; // ซ่อนการ์ดที่ไม่เจอ
    }
});