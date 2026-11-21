# Hải Trình Kỳ Thú — Prototype 1.0

> Trạng thái: **playtest**, chưa cân bằng. Đây là nguồn luật cho triển khai web; không tự ý thay đổi số liệu.

## Tổng quan
- 2–5 người, 6 ngày, 3 tầng biển, mỗi người 3 xúc xắc D6/ngày.
- Mục tiêu: nhiều Điểm Danh Tiếng (DT) nhất sau ngày thứ 6.
- Khởi đầu mỗi người: thuyền tại Cảng, 3 vàng, 0 DT, 0 Bão Tố.
- Giới hạn: 5 cá trong tay, 2 trang bị, 3 cá trưng bày.
- Ba tầng: Biển Nông (độ khó 3–5), Biển Sâu (6–9), Vực Huyền Bí (10–14).
- Prototype: 18 cá, 6 biến cố, 6 trang bị, 6 nhiệm vụ; không dùng số lượng của bản thương mại.

## Trình tự ngày
1. **Bình Minh**: thu hồi và tung 3 D6; giữ nguyên mặt xúc xắc đến khi sử dụng.
2. **Hải Trình**: lần lượt mỗi người thực hiện 1 hành động hoặc **qua lượt**. Ai đã qua lượt không trở lại trong ngày. Người cuối còn hoạt động có tối đa 2 lượt bổ sung.
3. **Hoàng Hôn**: bỏ các cá đã lật mà chưa bắt; sang ngày mới; người bắt đầu chuyển sang bên trái. Sau ngày 6 tính điểm.

## Hành động
- **Di chuyển**: Cảng → tầng I: tiêu 1 xúc xắc; I → II: 1; II → III: 1. Lùi lên tầng nông hơn 1 tầng miễn phí; từ bất kỳ tầng nào → Cảng miễn phí. Mỗi lần di chuyển là 1 hành động, kể cả miễn phí. Giá trị mặt xúc xắc không quan trọng khi dùng để di chuyển.
- **Câu cá**: ở tầng đang đứng, chọn 1 trong 3 chồng cá, lật lá đầu nếu chưa lật, giải quyết hiệu ứng *Khi xuất hiện*. Chọn 1–3 xúc xắc chưa dùng, cộng mặt xúc xắc và các bổ trợ, trừ phạt Bão Tố. Nếu tổng ≥ độ khó: bắt cá, áp dụng *Khi bắt*, chuyển cá vào tay (nếu chưa vượt 5). Nếu thất bại, lá vẫn ngửa và xúc xắc đã tiêu. Không lật lại hiệu ứng xuất hiện khi câu lại lá ngửa. Chồng hết bài không bổ sung.
- **Khám phá**: tiêu 1 xúc xắc, rút 1 biến cố và giải quyết ngay; xào lại chồng bỏ khi hết.
- **Bán cá**: ở Cảng, một hành động bán tùy số cá trong tay, nhận vàng in trên cá.
- **Mua trang bị**: ở Cảng, mỗi hành động mua 1 lá từ 3 trang bị đang mở, trả giá niêm yết; nếu đủ 2 ô phải bỏ 1 trang bị.
- **Nhiệm vụ**: ở Cảng, tối đa 1 nhiệm vụ/người/ngày, giao cá hoặc vàng theo yêu cầu để lấy DT; bổ sung lá thị trường.
- **Trưng bày**: ở Cảng, mỗi hành động đưa 1 cá từ tay vào 1 trong 3 ô trống; không thể bán hay dùng cho nhiệm vụ nữa; DT in trên cá được nhân đôi cuối ván.
- **Nghỉ**: ở Cảng, trả 2 vàng giảm 2 Bão Tố, một hành động.

## Bão Tố
Giới hạn 0–6. Bão 0–1: không phạt câu; 2–3: −1 sức câu; 4–6: −2 sức câu. Bão = 6 cuối ván: −2 DT.
**Liều Lĩnh**: trước một lần câu tuyên bố +3 sức câu, tăng +1 Bão sau khi giải quyết lần câu; tối đa 1 lần/lượt câu. Phạt bão của lần câu tính theo mức bão trước khi cộng Liều Lĩnh.

## Kết thúc
**DT cuối = DT đã kiếm + DT in trên cá trong tay + 2 × DT in trên cá trưng bày + floor(vàng/3) − (2 nếu Bão=6, ngược lại 0).**
Hòa điểm: ít Bão hơn thắng, tiếp đến nhiều vàng hơn, nếu vẫn hòa thì đồng thắng.

## Bộ thẻ chuẩn
- Sinh vật: Cá Chuồn Bạc (I,3,2 vàng,1 DT); Sao Biển Ánh Kim (I,5,3 vàng,2 DT; bắt giảm 1 Bão); Sứa Đèn Lồng (II,7,4 vàng,3 DT; bắt +1 vàng); Cua Giáp San Hô (II,9,5 vàng,4 DT; xuất hiện +1 Bão); Cá Đuối Ngân Hà (III,11,7 vàng,6 DT; bắt +2 DT); Long Ngư Hoàng Kim (III,14,10 vàng,9 DT; bắt −2 Bão). Đây là **6 lá minh họa**; prototype thực có 18 lá, phải đọc toàn bộ JSON trước khi code.
- Trang bị: Cần Câu Tre (2 vàng,+1 câu tầng I); Cần Câu San Hô (4,+2 tầng II); Cần Câu Vực Sâu (6,+3 tầng III); La Bàn Sao (3, lần đầu xuống tầng sâu mỗi ngày miễn phí); Áo Choàng Thủy Thủ (3, chặn lần đầu +1 Bão mỗi ngày); Cuộn Dây Thần Kỳ (5, mỗi ngày 1 lần +2 câu).
- Biến cố: Sóng Biếc (+1 vàng); Gió Thuận (di chuyển miễn phí 1 tầng ngay); Mưa Sao Biển (−1 Bão); Dòng Chảy Xiết (+1 Bão); Kho Báu Trôi Dạt (+2 vàng); Bóng Đen Dưới Đáy (+2 Bão, +2 DT).
- Nhiệm vụ: Bữa Tiệc Hải Sản (2 cá tầng I →4 DT); Ánh Sáng Đại Dương (Sứa Đèn Lồng→5); Bộ Sưu Tập San Hô (Cua Giáp San Hô→6); Nhà Khám Phá (1 cá mỗi tầng→10); Thương Gia Biển Cả (8 vàng→5); Huyền Thoại Vực Sâu (Long Ngư Hoàng Kim→12).

## Cần quyết định trước khi khóa luật 1.1
- Chia 18 cá thành 9 chồng × 2 cá (đề xuất để playtest), xáo ngẫu nhiên trong từng tầng.
- Quy định khi tay đủ 5 cá và câu thành công: cần thông báo và không cho chọn câu khi tay đã đầy, trừ khi luật sau này có cơ chế thay thế.
- Các hành động miễn phí không tiêu xúc xắc nhưng vẫn tiêu lượt; cần đảm bảo ngày kết thúc hữu hạn.
- Xác nhận thứ tự kích hoạt hiệu ứng đồng thời, làm mới thị trường và xử lý Gió Thuận ở Cảng/tầng III.
- Không tự đổi nội dung thẻ hay cân bằng trước khi người dùng duyệt.

## Kỹ thuật
- Website chính: https://game-hoi-ban.vercel.app
- Repo: buuhaucantho-ship-it/game-hoi-ban
- Giữ nguyên game cũ, chỉ làm việc trên `feature/boardgame-hub`.
- Game mới dưới `games/hai-trinh/`; offline pass-and-play trước, realtime sau.
- Logic thuần, kiểm thử luật, responsive, prefers-reduced-motion; không tự merge vào main.
