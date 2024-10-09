// slide show image 
document.addEventListener('DOMContentLoaded', function () {
    const slider = document.getElementById('slider');
    /*
    getElementsByClassName trả về một HTMLCollection (một tập hợp các phần tử) 
    và bạn phải chọn phần tử từ tập hợp này.
    querySelector trả về phần tử đầu tiên khớp với bộ chọn, đơn giản hóa cú pháp.
    */
    // const textHeading = document.getElementsByClassName('text-heading')[0];
    const textHeading = slider.querySelector('.text-heading');
    const textDescription = slider.querySelector('.text-description');

    const slides = [
        {
            image: '/assets/img/slides/chicago.jpg',
            heading: 'Chicago',
            description: 'Thank you, Chicago - A night we won\'t forget.'
        },
        {
            image: '/assets/img/slides/la.jpg',
            heading: 'New York',
            description: 'The atmosphere in New York is lorem ipsum.'
        },
        {
            image: '/assets/img/slides/ny.jpg',
            heading: 'Los Angeles',
            description: 'We had the best time playing at Venice Beach!'
        }
    ];

    let currentIndex = 0;

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        const nextSlide = slides[currentIndex];

        // Dòng này thay đổi hình nền, và thuộc tính transition sẽ làm thay đổi này mượt mà
        slider.style.background = `url(${nextSlide.image}) top center / cover no-repeat`; 
        textHeading.textContent = nextSlide.heading;
        textDescription.textContent = nextSlide.description;
    }

    setInterval(showNextSlide, 3000); // Thay đổi slide mỗi 3 giây
});

// open/close modal 
const buyBtns = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.js-modal');
const closeModal = document.querySelector('.js-modal-close');
const modalContainer = document.querySelector('.js-modal-container')

// hàm để hiển thị modal (thêm class open vào modal)
function showBuyTicket() {
    modal.classList.add('open');
}

// hàm để đóng modal (xóa class open ra khỏi modal)
function closeBuyTicket(paras) {
    modal.classList.remove('open');
}

// Lặp qua từng thẻ button và nghe hành vi click
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTicket);
}

// Nghe hành vi click của button close
closeModal.addEventListener('click', closeBuyTicket);

// Nghe hành vi click của phần bên ngoài modal để đóng modal
modal.addEventListener('click', closeBuyTicket);

/* Ngăn chặn tình trạng nổi bọt (cụ thể là khi click vào bên ngoài của modal
    cũng đóng và bên trong cũng đóng) *Khắc phục là dùng stopPropagation cho 
    class của phần nổi bọt cụ thể ở đây là class js-modal-container
*/
modalContainer.addEventListener('click', function (event) {
    event.stopPropagation();
})









