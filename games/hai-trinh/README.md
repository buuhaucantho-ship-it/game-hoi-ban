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
- Nhiệm vụ (dữ liệu có nhưng chưa có hành động nhận/trả).
- Hiệu ứng Gió Thuận và một số trường hợp timing chưa xử lý đầy đủ.
- Quy tắc người cuối còn hoạt động được thêm 2 lượt cần test kỹ.
- Chưa có modal riêng cho chọn/trả cá, thay trang bị, che thông tin khi chuyền máy.
- Chưa có persistence, seed RNG, unit tests, kiểm thử trên thiết bị thật.
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
