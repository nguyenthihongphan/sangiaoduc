# sangiaoduc
# Web Về sàn giáo dục ( ReactJS)

WEb này được viết về chủ đề giáo dục và cung cấp các khóa học cho học viên. Để học dễ dàng kham khảo các khóa học. Có danh sách khóa học và thông tin chi tiết khóa học đó. Ngoài ra có các chức năng theo đề đưa ra.

## Installation

Tạo project sangiaoduc.

```bash
npx create-react-app sangiaoduc
cd sangiaoduc
```
Chạy trên localhost (mở trang) Có API
```
# Cài nodeJS
npm install  

npm start
json-server --watch db.json --port 8000

```
## Import những cái cần để phục vụ cho trang web

```
#bootrap
npm install react-bootstrap bootstrap

# fontawesome
npm install @fortawesome/fontawesome-free

# axios
npm install axios@0.27.2  

# stream
npm install stream-http --save-dev  

# cài file.json =>db.json chứa data (API)
npm install json-server --save-dev 

db.json bao gồm data
-User
-suggestions
-products
```
## Cách sử dụng

Đăng nhập tài khoản 
email : phannguyen2246@gmail.com
pass : 123456
-> Đăng nhập -> chuyển vào trang chủ Nav mặc định ( "Khóa học")
- Hiển thị danh sách khóa học
- Chức năng tìm kiếm và lọc cho phép người dùng thực hiện chức năng này. Lọc danh sách cần tìm.
- Nhấn xem chi tiết hiển thị modal nội dung chi tiết của khóa học
- Người dùng nhấn nút "khóa học gợi ý" sẽ hiển thị danh sách khóa học được gợi ý
- Chức năng cho phép người dùng nhấn nút yêu thích -> trang yêu thích hiển thị khóa học đã nhấn yếu thích của người dùng
## License
[MIT](http://localhost:3000/)
