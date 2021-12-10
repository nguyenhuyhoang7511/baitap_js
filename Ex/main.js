
// BƯỚC 0 : ĐẶT ID CHO CÁC PHẦN TỬ CẦN THAO TÁC
// KHI ẤN VÀO, CÁC PHẦN TỬ MUỐN THAY ĐỔI

// BƯỚC 1 : XÁC ĐỊNH CÁC THÀNH PHẦN MÀ CHÚNG TA CẦN SỬ DỤNG => ĐẶT MỘT CÁI BIẾN ĐỂ ĐẠI DIỆN CHO PHẦN TỬ ĐẤY
// KIỂU DỮ LIỆU : INT/DOUBLE/FLOAT/BOOL/STRING 
// JS KHÔNG NHƯ THẾ. CÁC KIỂU BIẾN TRONG JS => Var/ let / const

// cú pháp đặt tên biến : kiểu dữ liệu + <name>
let value_input = document.getElementById('value_input'); // lấy thằng input

let btn_show = document.getElementById('btn_show'); // lấy ra thằng button

let img_fruit = document.getElementById('img_fruit');

let container = document.getElementById('js-container');

// BƯỚC 2 : BẮT SỰ KIỆN CHO NÚT BUTTON 
// CÁCH BẮT SỰ KIỆN : LẤY TÊN BIẾN. ADD SỰ KIỆN (TÊN SỰ KIỆN , SỰ THAY ĐỔI KHI MÀ ẤN VÀO)
btn_show.addEventListener('click', XulyThongTin );

// BƯỚC 3 : ĐỊNH NGHĨA SỰ THAY ĐỔI TRONG MỘT HÀM MÀ MÌNH TỰ ĐỊNH NGHĨA
// CÚ PHÁP CỦA HÀM : function + tên hàm() {nội dung hàm} 
function XulyThongTin(){
    // NỘI DUNG CODE

    // TẠO MỘT KHO HÀNG ĐỂ LƯU TRỮ CÁC LOẠI QUẢ => BẰNG CÁCH DÙNG MẢNG
    let List_fruit = ['orange', 'Apple' , 'Jack','peaches' ]; // 3

    // LẤY GIÁ TRỊ TỪ NGƯỜI DÙNG NHẬP VÀO (LẤY GIÁ TRỊ Ở input)
    let gia_tri = value_input.value; // nhập vào là abc => gán cho biến gia_tri = abc

    if(gia_tri == '' ){
        alert('Bạn chưa nhập cái gì cả - vui lòng nhập giá trị vào ô tìm kiếm');
    }
    else{
        // giải pháp tối ưu là sử dụng vòng lặp 

        // trường hợp này là giá trị khác rỗng 

        // khởi tạo một cái biến để check
        let check = false;

        // cấu trúc mảng index[0 -> length]
        for(let i = 0 ; i < List_fruit.length ; i++) // i++ => i tăng lên 1 đơn vị i = 1
        {
            if(gia_tri == List_fruit[i])
            {
                check = true;
                break;
            }
        }

        
        if (check == true) 
        {
            img_fruit.src = 'img/'  + gia_tri + '.jpg';
        } 
        else {
            alert('giá trị bạn vừa nhập không tồn tại trong kho hàng')
        }
    }
}



