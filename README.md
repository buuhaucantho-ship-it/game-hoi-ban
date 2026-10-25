# Cờ Tỷ Phú Du Lịch

Trò chơi cờ tỷ phú chủ đề du lịch Việt Nam và thế giới, dành cho 2–10 người chơi. Chơi trực tiếp trên trình duyệt (điện thoại, iPad, máy tính), không cần cài đặt.

**Chơi ngay:** https://buuhaucantho-ship-it.github.io/co-ty-phu-du-lich/

## Hai cách chơi

- **Chung một máy:** chọn số người, đặt tên, bấm *Cất cánh*. Có thể thêm người chơi máy.
- **Online, mỗi người một máy:**
  1. Chủ phòng chọn số ghế, bản đồ, vốn, số vòng rồi bấm *Tạo phòng mới* → nhận mã phòng 5 ký tự.
  2. Bạn bè mở cùng link, nhập tên và mã phòng, bấm *Vào phòng*, chọn ghế trống.
  3. Chủ phòng bấm *Bắt đầu ván*.

  Các máy kết nối trực tiếp với nhau (WebRTC qua PeerJS); máy chủ phòng làm "trọng tài" nên **chủ phòng cần giữ trang mở suốt ván**. Nếu lỡ tắt, chủ phòng mở lại web và bấm *Mở lại phòng*.

## Luật chính

- Đi qua Khởi hành nhận 200K. Lần đầu dừng ở đất trống chỉ được mua đất; dừng lại lần sau mới mua nhà; đủ 4 nhà mới xây khách sạn.
- Giá nhà = 50% giá đất, khách sạn = 100% giá đất. Đất chia khu bình dân → trung lưu → cao cấp → hạng sang.
- Sở hữu trọn các ô cùng màu: tiền thuê ×2.
- Khu du lịch thu tiền theo số khu sở hữu (25K → 50K → 100K → 200K → 300K).
- Kẹt xe: phải đổ đôi mới ra, hoặc chờ đủ 3 lượt. Đang kẹt xe thì không thu được tiền thuê.
- Thiếu tiền có thể cầm cố đất (nhận 50%), chuộc lại 55%. Chỉ mua lại được đất đang cầm cố.
- Thắng khi gom đủ tất cả khu du lịch, hoặc trọn 3 tuyến màu, hoặc là người cuối cùng còn trụ lại; hết số vòng thì người giàu nhất thắng.

## Kỹ thuật

Một file `index.html` duy nhất, không cần build. Nhân vật và hình địa danh là SVG tự vẽ. Thư viện ngoài duy nhất là [PeerJS](https://peerjs.com/) cho chế độ online.
