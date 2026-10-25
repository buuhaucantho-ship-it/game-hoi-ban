# Game Hội Bạn

Trang board game cho hội bạn, chơi ngay trên trình duyệt (điện thoại, iPad, máy tính), không cần cài đặt hay tài khoản.

**Chơi ngay:** https://buuhaucantho-ship-it.github.io/game-hoi-ban/

| Trò chơi | Người chơi | Cách chơi |
|---|---|---|
| [Cờ Tỷ Phú Du Lịch](https://buuhaucantho-ship-it.github.io/game-hoi-ban/co-ty-phu.html) | 2–10 | Chung một máy, hoặc online mỗi người một máy theo mã phòng |
| [Ma Sói](https://buuhaucantho-ship-it.github.io/game-hoi-ban/ma-soi.html) | 5–18 + 1 quản trò | Chuyền máy xem vai; trang làm quản trò ảo |
| [Ai Là Gián Điệp](https://buuhaucantho-ship-it.github.io/game-hoi-ban/gian-diep.html) | 3–12 | Chuyền máy nhận từ khóa, mô tả và bỏ phiếu |

## Cờ Tỷ Phú Du Lịch

- Mua đất từ Cần Thơ đến New York. Lần đầu dừng ở đất trống chỉ được mua đất; dừng lại lần sau mới mua nhà; đủ 4 nhà mới xây khách sạn. Trọn tuyến cùng màu thu tiền ×2.
- Khu du lịch thu tiền theo số khu sở hữu. Kẹt xe phải đổ đôi hoặc chờ 3 lượt; đang kẹt xe không thu tiền thuê. Cầm cố đất khi thiếu tiền; chỉ mua lại được đất đang cầm cố.
- Online: chủ phòng bấm *Tạo phòng mới*, gửi mã cho bạn bè. Chủ phòng giữ trang mở suốt ván.

## Ma Sói

Một người làm quản trò cầm máy. Trang chia vai bí mật (chuyền máy, giữ để xem), sau đó dẫn từng bước:
đêm (Thần tình yêu → Bảo vệ → Sói → Tiên tri → Phù thủy) và ngày (công bố người chết → thảo luận có đếm giờ → treo cổ).
Trang tự tính người chết (bảo vệ, bình cứu, bình độc, cặp đôi chết theo, thợ săn bắn theo) và tự báo phe thắng. Có thể bật đọc to lời dẫn.

Vai: Sói, Dân làng, Tiên tri, Bảo vệ, Phù thủy, Thợ săn, Thần tình yêu.

## Ai Là Gián Điệp

Mỗi người nhận một từ khóa, gián điệp nhận từ gần nghĩa khác. Lần lượt mô tả, bỏ phiếu loại người.
Có thể thêm người Trắng (không có từ, bị loại được đoán từ để lật kèo), đổi số gián điệp, chọn chủ đề hoặc tự thêm cặp từ của nhóm. Có bảng điểm qua nhiều ván.

## Kỹ thuật

Các trang HTML tĩnh, không cần build: `index.html` (trang chủ), `co-ty-phu.html`, `ma-soi.html`, `gian-diep.html`, `hub.css`.
Nhân vật và hình minh họa là SVG tự vẽ. Thư viện ngoài duy nhất là [PeerJS](https://peerjs.com/) cho chế độ online của Cờ Tỷ Phú.
