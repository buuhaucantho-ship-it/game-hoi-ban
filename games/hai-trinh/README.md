# Hải Trình Kỳ Thú — Web Playtest

**Nhánh phát triển:** `feature/boardgame-hub` — không merge vào `main` trước khi nghiệm thu.

## Chạy thử
Phục vụ thư mục gốc repository qua HTTP (không mở trực tiếp bằng `file://` vì `cards.json` cần fetch):

```bash
python3 -m http.server 8000
```

Mở `http://localhost:8000/games/hai-trinh/`. Trên Vercel Preview, đường dẫn dự kiến là `/games/hai-trinh/` sau khi deployment nhánh được cấu hình.

## Đã có trong MVP alpha
- Bắt đầu 2–5 người, 6 ngày, ba tầng biển, 3 D6/người/ngày.
- Chia 18 sinh vật thành 9 chồng (mỗi tầng 3 chồng × 2 lá).
- Chọn xúc xắc, câu, tính phạt bão, Liều Lĩnh, hiệu ứng bắt/xuất hiện dạng cơ bản.
- Di chuyển, biến cố, bán cá, nghỉ, trưng bày, mua trang bị.
- Giao diện responsive, có giảm chuyển động theo cài đặt hệ điều hành.
- Tổng điểm tạm tính và kết thúc ngày 6.

## CHƯA HOÀN CHỈNH — không gọi là bản release
- Đã có nhiệm vụ tại cảng: kiểm tra điều kiện, trả cá/vàng, thưởng DT, giới hạn một lần/ngày. Cần kiểm thử tương tác nhiều người.
- Gió Thuận đã có quy tắc tạm thời: ưu tiên tiến sâu một tầng, nếu không được thì về Cảng; cần người thiết kế phê duyệt.
- Quy tắc người cuối còn hoạt động được thêm 2 lượt cần test kỹ.
- Chưa có modal riêng cho chọn/trả cá, thay trang bị, che thông tin khi chuyền máy.
- Có bộ kiểm thử đơn vị cho helpers; chưa có persistence, seed RNG, kiểm thử UI tự động hoặc kiểm thử trên thiết bị thật.
- Chưa có âm thanh và artwork minh họa riêng.
- Chưa có backend realtime; chỉ offline pass-and-play.
- Chưa có Vercel Preview URL được xác nhận.

## Kiến trúc tiếp theo
1. Tách game engine thuần sang module độc lập; xây bộ unit tests cho lượt, di chuyển, câu, bão, hiệu ứng, kết thúc.
2. Hoàn thành tất cả hành động của luật 1.0; ghi rõ các quy tắc chưa xác định để xin xác nhận.
3. Thêm UX chuyền máy, animation và đồ họa gốc.
4. Kiểm tra đường dẫn tài nguyên trên Vercel Preview và regression các game cũ.
5. Thiết kế server-authoritative multiplayer sau khi bản offline đạt kiểm thử.

## Nguồn tham chiếu
- `../../docs/hai-trinh/RULES_PROTOTYPE_1_0.md`
- `./cards.json`

Không chỉnh sửa các game cũ hoặc file `index.html` gốc trong giai đoạn alpha.

## Chạy kiểm thử luật thuần

Yêu cầu Node.js 18 trở lên:

```bash
node --test games/hai-trinh/engine.test.mjs
```

**Chưa xác nhận chạy thành công trên CI/Vercel**. Trước khi merge, kiểm tra toàn bộ test, chơi thử 6 ngày và kiểm tra màn hình điện thoại.

## Quyết định playtest tạm thời
- Bộ 18 cá được chia đều 3 tầng, mỗi tầng 3 chồng × 2 lá.
- Nếu tay đã đủ 5 cá, không được câu tiếp.
- Thẻ Gió Thuận tự di chuyển thêm một tầng nếu hợp lệ; nếu không thì về Cảng. Đây là quy tắc thử nghiệm, chưa khóa luật.
- Khi có hai trang bị, mua thêm sẽ tự bỏ trang bị cũ nhất (cần thay bằng hộp thoại lựa chọn).
- Nhiệm vụ được trả từ cá trong tay; cá trưng bày không hợp lệ.
