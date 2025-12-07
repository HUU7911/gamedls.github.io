// Dữ liệu chi tiết của TẤT CẢ các tài khoản
const accountDetails = {
	"A7X9T1": {
		id: "A7X9T1",
		title: "Tài khoản VIP Full Max 100",
		type: "VIP Full Max",
		rating: "98.6 OVR",
		stadium: "MAX (Sân Legendary)",
		coins: "500.000",
		gems: "12.000",
		price: "500.000 VNĐ",
		images: [
			"imggame/IMG_0128.PNG", 
			"imggame/IMG_0128.PNG",
			"imggame/IMG_0128.PNG",
			"imggame/IMG_0128.PNG",
		]
	},
	
	"TK001": {
		id: "TK001",
		title: "Tài khoản Ngoại Hạng Anh",
		type: "Tài khoản Thường",
		rating: "82.5 OVR",
		stadium: "Nâng cấp cấp 3",
		coins: "200.000",
		gems: "500",
		price: "450.000 VNĐ",
		images: [
			"imggame/IMG_0128.PNG",
			"imggame/IMG_0128.PNG",
			"imggame/IMG_0128.PNG",
		]
	},

	"B3K2R4": {
		id: "B3K2R4",
		title: "Tài khoản Siêu Tiết Kiệm",
		type: "Tài khoản Coin khủng",
		rating: "78.0 OVR",
		stadium: "Chưa nâng cấp",
		coins: "1.200.000",
		gems: "100",
		price: "290.000 VNĐ",
		images: [
			"imggame/IMG_0130.PNG",
			"imggame/IMG_0130.PNG",
			"imggame/IMG_0130.PNG",
			"imggame/IMG_0130.PNG"
		]
	},

	"TK003": {
		id: "TK003",
		title: "Tài khoản Bạc triệu",
		type: "Tài khoản Max Rating",
		rating: "99.0 OVR",
		stadium: "MAX (Sân Legendary)",
		coins: "99.000",
		gems: "20.000",
		price: "1.200.000 VNĐ",
		images: [
			"https://via.placeholder.com/300x450/FF9800/ffffff?text=TK003+Rating+Dọc",
			"https://via.placeholder.com/100x150/FFB74D/ffffff?text=TK003+A1",
			"https://via.placeholder.com/100x150/FFCC80/ffffff?text=TK003+A2",
			"https://via.placeholder.com/100x150/FFE0B2/ffffff?text=TK003+A3",
		]
	},
	"TK0892": {
		id: "TK8092",
		title: "Tài khoản full max chỉ số",
		typy: "Max ratting",
		rating: "96.5",
		stadium: "Max",
		coins: "120.000",
		gems: "3.000",
		price: "1.000.000",
		images: [
			"https://thethao.io/wp-content/uploads/2023/03/Haaland-DLS.jpg",
			"https://thethao.io/wp-content/uploads/2023/03/Haaland-DLS.jpg",
			"https://thethao.io/wp-content/uploads/2023/03/Haaland-DLS.jpg",
		]
	}
};


document.addEventListener('DOMContentLoaded', function() {
	let slideIndex = 0;
	const slides = document.querySelectorAll('.slide');
	const dots = document.querySelectorAll('.dot');
	const prevBtn = document.querySelector('.prev-btn');
	const nextBtn = document.querySelector('.next-btn');
	let autoSlideInterval;

	// Hàm hiển thị slide hiện tại
	function showSlides() {
		// Ẩn tất cả các slide và bỏ lớp 'active' khỏi dots
		slides.forEach(slide => {
			slide.classList.remove('active');
		});
		dots.forEach(dot => {
			dot.classList.remove('active');
		});

		// Đảm bảo chỉ số nằm trong phạm vi (0 đến n-1)
		if (slideIndex >= slides.length) {
			slideIndex = 0; // Quay lại slide đầu
		}
		if (slideIndex < 0) {
			slideIndex = slides.length - 1; // Quay lại slide cuối
		}

		// Hiển thị slide và dot hiện tại
		slides[slideIndex].classList.add('active');
		dots[slideIndex].classList.add('active');
	}

	// Hàm chuyển đến slide kế tiếp
	function nextSlide() {
		slideIndex++;
		showSlides();
	}

	// Hàm chuyển đến slide trước đó
	function prevSlide() {
		slideIndex--;
		showSlides();
	}

	// Hàm bắt đầu chuyển động tự động
	function startAutoSlide() {
		// Xóa interval cũ trước khi tạo interval mới để tránh lỗi
		clearInterval(autoSlideInterval);
		// Thiết lập chuyển động tự động mỗi 4 giây (4000ms)
		autoSlideInterval = setInterval(nextSlide, 4000); 
	}

	// 1. Xử lý nút điều hướng
	nextBtn.addEventListener('click', () => {
		nextSlide();
		startAutoSlide(); // Khởi động lại timer khi người dùng tương tác
	});

	prevBtn.addEventListener('click', () => {
		prevSlide();
		startAutoSlide(); // Khởi động lại timer khi người dùng tương tác
	});

	// 2. Xử lý dấu chấm chỉ số
	dots.forEach((dot, index) => {
		dot.addEventListener('click', () => {
			slideIndex = index;
			showSlides();
			startAutoSlide(); // Khởi động lại timer
		});
	});

	// Bắt đầu show slide đầu tiên và kích hoạt tự động chạy
	showSlides();
	startAutoSlide();
});

// Xử lý chức năng chuyển ảnh thumbnail trên trang chi tiết (detail.html)
if (document.querySelector('.image-gallery')) {
	const mainImage = document.querySelector('.main-image');
	const thumbnails = document.querySelectorAll('.thumbnail');

	thumbnails.forEach(thumbnail => {
		thumbnail.addEventListener('click', function() {
			// Đổi source (src) của ảnh chính bằng source của ảnh thumbnail
			mainImage.src = this.src;
			
			// Xóa border cũ và thêm border mới để làm nổi bật ảnh đang được chọn
			thumbnails.forEach(t => t.style.borderColor = '#ccc');
			this.style.borderColor = '#0d47a1';
		});
	});

	// Mặc định làm nổi bật ảnh thumbnail đầu tiên
	if (thumbnails.length > 0) {
		thumbnails[0].style.borderColor = '#0d47a1';
	}
}

// --- LOGIC XỬ LÝ TRANG CHI TIẾT SẢN PHẨM ---
function loadProductDetails() {
	// 1. Lấy ID từ URL (ví dụ: detail.html?id=A7X9T1)
	const urlParams = new URLSearchParams(window.location.search);
	const accountId = urlParams.get('id'); // Lấy giá trị của tham số 'id'
	
	// Nếu không có ID hoặc ID không tồn tại trong dữ liệu, thoát
	if (!accountId || !accountDetails[accountId]) {
		// Có thể chuyển hướng về trang 404 hoặc trang chủ
		console.error("Không tìm thấy ID tài khoản hoặc ID không hợp lệ.");
		return; 
	}

	const data = accountDetails[accountId];
	
	// 2. Chèn Mã tài khoản vào góc trên
	document.querySelector('.account-code-display').innerHTML = `
		Mã Tài Khoản: DLS-${data.id}
	`;
	
	// 3. Chèn Tiêu đề và Thông số chi tiết
	document.querySelector('.section-title').innerHTML = `
		CHI TIẾT TÀI KHOẢN - ${data.id}
	`;
	
	const specsHTML = `
		<li><i class="fas fa-tag"></i> **Loại Acc:** ${data.type} (${data.title})</li>
		<li><i class="fas fa-trophy"></i> **Rating Tổng:** ${data.rating}</li>
		<li><i class="fas fa-building"></i> **Sân Nâng Cấp:** ${data.stadium}</li>
		<li><i class="fas fa-coins"></i> **Số Vàng:** ${data.coins}</li>
		<li><i class="fas fa-gem"></i> **Số Kim Cương:** ${data.gems}</li>
		<li><i class="fas fa-money-bill-wave"></i> **Giá Bán:** <span class="final-price">${data.price}</span></li>
	`;
	document.querySelector('.acc-specs').innerHTML = specsHTML;
	
	// 4. Chèn Hình ảnh Gallery
	const mainImageContainer = document.querySelector('.main-image');
	const thumbnailStackContainer = document.querySelector('#dynamic-thumbnail-stack'); 
		
	let thumbnailHTML = '';
	// Lặp qua TẤT CẢ các ảnh từ index 0
	data.images.forEach((imgUrl, index) => {
		// Chèn ảnh dưới dạng ảnh lớn
		thumbnailHTML += `
			<img src="${imgUrl}" alt="Ảnh tài khoản ${index + 1}" class="product-image-stack">
		`;
	});
	thumbnailStackContainer.innerHTML = thumbnailHTML;
	
	// 5. Cập nhật lại sự kiện click cho các thumbnail mới được chèn
	const newThumbnails = document.querySelectorAll('.thumbnail');
	newThumbnails.forEach(thumbnail => {
		thumbnail.addEventListener('click', function() {
			mainImageContainer.src = this.dataset.fullSrc;
			newThumbnails.forEach(t => t.style.borderColor = '#ccc');
			this.style.borderColor = '#0d47a1';
		});
	});
	
	// Đánh dấu ảnh thumbnail đầu tiên
	if (newThumbnails.length > 0) {
		newThumbnails[0].style.borderColor = '#0d47a1';
	}
}

// --- LOGIC TẠO VÀ HIỂN THỊ CÁC TÀI KHOẢN KHÁC HIỆN CÓ ---
function loadRelatedAccounts() {
    const relatedSlider = document.getElementById('related-accounts-slider');
    if (!relatedSlider) return; 

    let relatedHTML = '';
    // Lặp qua TẤT CẢ các tài khoản trong Object accountDetails
    for (const id in accountDetails) {
        if (Object.hasOwnProperty.call(accountDetails, id)) {
            const data = accountDetails[id];
            
            // Xây dựng thẻ sản phẩm dưới dạng thẻ <a> liên kết đến trang chi tiết của chính nó
            relatedHTML += `
                <a href="detail.html?id=${data.id}" class="product-card">
                    <img src="${data.images[0]}" alt="Ảnh tài khoản ${data.id}">
                    <div class="product-info">
                        <p class="price">${data.price}</p>
                        <button class="buy-button">XEM CHI TIẾT</button>
                    </div>
                </a>
            `;
        }
    }
    relatedSlider.innerHTML = relatedHTML;
}

// Chỉ chạy hàm loadProductDetails nếu đang ở trang detail.html
if (document.querySelector('.product-detail-container')) {
	loadProductDetails();
}

// --- LOGIC CHO SLIDER NGANG (TÀI KHOẢN KHÁC HIỆN CÓ) ---
document.addEventListener('DOMContentLoaded', function() {
	const relatedSlider = document.getElementById('related-accounts-slider');
	const prevRelatedBtn = document.querySelector('.prev-related-btn');
	const nextRelatedBtn = document.querySelector('.next-related-btn');

	if (relatedSlider) { // Đảm bảo phần tử tồn tại trước khi xử lý
		const scrollAmount = 300; // Số pixel cuộn mỗi lần

		nextRelatedBtn.addEventListener('click', () => {
			relatedSlider.scrollBy({
				left: scrollAmount,
				behavior: 'smooth'
			});
		});

		prevRelatedBtn.addEventListener('click', () => {
			relatedSlider.scrollBy({
				left: -scrollAmount,
				behavior: 'smooth'
			});
		});

		// Tự động cuộn ngang (tùy chọn, giống slider trang chủ)
		let autoScrollInterval;
		function startAutoScroll() {
			clearInterval(autoScrollInterval); // Xóa interval cũ
			autoScrollInterval = setInterval(() => {
				// Nếu đã cuộn đến cuối, quay lại đầu
				if (relatedSlider.scrollLeft + relatedSlider.clientWidth >= relatedSlider.scrollWidth) {
					relatedSlider.scrollTo({
						left: 0,
						behavior: 'smooth'
					});
				} else {
					relatedSlider.scrollBy({
						left: scrollAmount,
						behavior: 'smooth'
					});
				}
			}, 5000); // Tự động cuộn mỗi 5 giây
		}
		startAutoScroll(); // Bắt đầu tự động cuộn khi tải trang

		// Dừng cuộn tự động khi hover vào slider
		relatedSlider.addEventListener('mouseenter', () => clearInterval(autoScrollInterval));
		relatedSlider.addEventListener('mouseleave', startAutoScroll);
	}

});
