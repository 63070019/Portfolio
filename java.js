const toggleButton = document.getElementById('toggle');
const sidebar = document.getElementById('sidebar');
sidebar.classList.toggle('hide');
toggleButton.addEventListener('click', function() {
	sidebar.classList.toggle('hide');
	toggleButton.classList.toggle('hide');
});

var dictionary = {
    "en": {
		"hello1": "Hello",
		"hello2": "I'm Jiraphat Wunpuan",
        "i": "I'm 3rd years student from King Mongkut's Institute of Technology Ladkrabang",
		"b": "Bachelor of Science Program in Information Technology (Multimedia and Game Development)",
		"h": "who is interested in web developer and ux / ui designer",
		"t": "this is my project and my experience, you can click image to view information",
		"4": `This is my and friends year 4 final project using React, nodeJS and PostgreSQL. This project is about displaying and showing floor plans and information or activities in the KMITL building and letting students book rooms. In the admin zone
		, it can display room usage to analyze data.`,
		"bangkok": "I had the opportunity to intern at Bangkok Web Solution Co.,Ltd. as a back end developer.",
		"fast": "this is education web site, by telling the story of the history of bus number 8.",
		"master": "This is a game multiplayer web site, which is an X/O game that has skills to make it more fun and challenging for the player.",
		"meb": "This is a mockup project, a mockup meb market website.",
		"java": "This is department store management system using the Java language, which lets users add products and manage them.",
		"yolo": "This is a card detection and count project using YOLO v.5, which can detect and count cards.",
		"game": "This is my game project using Unreal Engine 4.",
		"cl": "This is department store management system using the c language, which lets users add products and manage them.",
		"old": "This is a 3D animation project using Maya.",
		"c": "contact me",
		"tel": "tel : 093 091 0002",
		"email": "Email : jiraphat.deaw@gmail.com / 63070019@kmitl.ac.th",
		"face": "Facebook : Jiraphat Deaw",
    },
    "th": {
        "hello1": "สวัสดีครับ",
        "hello2": "ผมจิรพัฒน์ วุ่นพ้วน",
		"i": "ผมคือนักศึกษาชั้นปีที่ 4 ของสถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง คณะเทคโนโลยีสารสนเทศ",
		"b": "สาขาวิชา เทคโนโลยีสารสนเทศ แขนงวิชาการพัฒนาสื่อประสมและเกม",
		"h": "มีความสนใจในการพัฒนาเว็บ และการออกแบบ UX / UI",
		"t": "นี้คือโปรเจกต์ และประสบการณ์ที่ผ่านมาของผม พี่ๆสามารถกดที่รูปภาพเพื่อดูรายละเอียดเพิ่มเติม",
		"4": "นี้คือโปรเจกต์จบของผมและเพื่อน พัฒนาด้วย React, nodejs และ postgreSQL  โปรเจกต์นี้จะเกี่ยวกับการแสดงแผนผังและข้อมูลรายละเอียดและกิจกรรมของตึกคณะเทคโนโลยีสารสนเทศ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง โดยสามารถให้นักศึกษาจองใช้งานห้องภายคณะได้และในส่วนของ Admin จะมีการแสดงข้อมูลการใช้งานห้อง",
		"bangkok": "ผมได้มีโอกาสไปฝึกงานที่บริษัท บางกอก เว็บ โซลูชั่น จำกัด. ในตำแหน่ง back-end developer",
		"fast": "นี่คือโปรเจกต์เว็บไซต์ที่จะเล่าเรื่องราวเกี่ยวกับความเป็นมาของรถเมล์หมายเลข 8",
		"master": "นี่คือโปรเจกต์เกมเว็บไซต์ เป็น X / O ที่ทุกคนคุ้นเคยกันแต่จะมีการเพิ่มสกิลเพื่อเพิ่มความสนุกและท้าทาย",
		"meb": "นี่คือโปรเจกต์จำลองเว็บไซต์ โดยเว็บที่นำมาจำลองคือ meb market",
		"java": "นี้คือโปรเจกต์พัฒนาระบบจัดการร้านค้าด้วยภาษา java ผู้ใช้สามารถเพิ่มสินค้าและจัดการสินค้าที่มีในคลัง",
		"yolo": "นี้คือโปรเจกต์พัฒนาโปรแกรมตรวจสอบและคำนวณเลขบนหน้าไพ่ โดยใช้ YOLO V.5",
		"game": "นี้คือโปรเจกต์พัฒนาเกมด้วยโปรแกรม Unreal Engine 4",
		"cl": "นี้คือโปรเจกต์พัฒนาระบบจัดการร้านค้าด้วยภาษา c ผู้ใช้สามารถเพิ่มสินค้าและจัดการสินค้าที่มีในคลัง",
		"old": "นี้คือโปรเจกต์ 3D แอนิเมชัน สร้างด้วย Maya",
		"c": "ติดต่อ",
		"tel": "เบอร์ติดต่อ : 093 091 0002",
		"email": "อีเมล : jiraphat.deaw@gmail.com / 63070019@kmitl.ac.th",
		"face": "เฟซบุ๊ก : Jiraphat Deaw",
    }
};

function changeLanguage(language) {
    var elements = document.querySelectorAll("[data-translate]");

    elements.forEach(function(element) {
        var translation = dictionary[language][element.getAttribute("data-translate")];
        if (translation) {
            element.textContent = translation;
        }
    });
}
document.getElementById("changeLanguageButtonThai").addEventListener("click", function() {
    changeLanguage("th");
	document.getElementById("hello1").style.fontSize = '10vw'
	document.getElementById("hello2").style.fontSize = '10vw'
});
document.getElementById("changeLanguageButtonEng").addEventListener("click", function() {
    changeLanguage("en");
	document.getElementById("hello1").style.fontSize = '12vw'
	document.getElementById("hello2").style.fontSize = '12vw'
});
