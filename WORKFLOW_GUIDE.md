# Hướng dẫn cài đặt chi tiết có thể xem tại đây

https://kvodb27hf3.feishu.cn/wiki/JjSmwf173iN3fqkjXakcGbvTnEf?from=from_copylink

# 🎬 Moyin Creator — Hướng dẫn Quy trình làm việc Cơ bản

> Hướng dẫn toàn diện quy trình sáng tạo từ kịch bản đến video hoàn chỉnh

Moyin Creator tích hợp nhiều quy trình làm việc khác nhau, các phân hệ có thể tự do kết hợp và sử dụng độc lập để đáp ứng nhu cầu của các kịch bản sáng tạo khác nhau. **Hướng dẫn này giới thiệu quy trình làm việc cơ bản được sử dụng phổ biến nhất, khuyến nghị người dùng mới bắt đầu từ đây.**

---

## 📋 Tổng quan quy trình

```
⚙️ Chuẩn bị → 📝 Kịch bản → 🔧 Hiệu chuẩn AI → 🌄 Cảnh / 🎭 Nhân vật (Tùy chọn) → 🎬 Đạo diễn / ⭐ Cấp S → 🎥 Tạo video
```

---

## Chuẩn bị: Cấu hình môi trường

Trước khi bắt đầu sáng tạo, bạn cần hoàn thành các cấu hình sau:

### 1. Thêm Nhà cung cấp dịch vụ API

Truy cập **Cài đặt → Cấu hình API → Thêm nhà cung cấp**, cấu hình tài khoản nhà cung cấp dịch vụ AI của bạn.

- Khuyến nghị thêm **càng nhiều API Key càng tốt**, hệ thống hỗ trợ cân bằng tải xoay vòng nhiều Key.
- Càng nhiều Key, **số luồng đồng thời càng cao**, tốc độ tạo hàng loạt càng nhanh.
- Các nhà cung cấp hỗ trợ: memefast, RunningHub, v.v.

### 2. Ánh xạ dịch vụ (Service Mapping)

Truy cập **Cài đặt → Ánh xạ dịch vụ**, chọn mô hình AI tương ứng cho từng tính năng:

- Chỉ định mô hình cụ thể cho các tính năng như "Văn bản sang ảnh", "Ảnh sang video", "Văn bản sang video", v.v.
- Chọn mô hình phù hợp dựa trên nhà cung cấp dịch vụ và nhu cầu của bạn.

> 💡 **Khuyến nghị cho người mới**: Khi thử nghiệm, nên sử dụng các mô hình sau trước:
> - **Tạo hình ảnh**: `gemini-3-pro-image-preview`
> - **Tạo video**: `doubao-seedance-1-5-pro-251215`

### 3. Cấu hình kho lưu trữ ảnh

Truy cập **Cài đặt → Cấu hình kho ảnh** để cấu hình dịch vụ lưu trữ hình ảnh:

- Đăng ký một dịch vụ lưu trữ ảnh (dùng để tải lên ảnh tham khảo, ảnh khung hình đầu tiên, v.v.).
- Tương tự, khuyến nghị cấu hình **nhiều Key** để tăng tốc độ tải lên đồng thời.

> ✅ Sau khi hoàn tất các cấu hình trên, bạn đã có thể bắt đầu sáng tạo.

---

## Bước 1: Phân hệ Kịch bản (Script Module)

Truy cập **Phân hệ Kịch bản**, có hai cách để bắt đầu:

- **A. Nhập kịch bản** — Dán hoặc nhập kịch bản hoàn chỉnh sẵn có vào vùng chỉnh sửa.
- **B. Sáng tác AI** — Sử dụng AI để hỗ trợ viết kịch bản từ con số 0.

> 📄 **Tham khảo định dạng kịch bản**: Xem [Ví dụ định dạng nhập kịch bản](./SCRIPT_FORMAT_EXAMPLE.md) để hiểu cách viết tiêu đề cảnh, đối thoại, chỉ dẫn sân khấu tiêu chuẩn, v.v.

Hệ thống sẽ tự động phân tích cấu trúc kịch bản, tách thành các yếu tố như cảnh, phân cảnh (storyboard), nhân vật, đối thoại, v.v.

---

## Bước 2: Hiệu chuẩn AI lần hai

Sau khi hệ thống hoàn tất phân tích tự động, nhấp lần lượt vào ba nút hiệu chuẩn sau để **tối ưu hóa chuyên sâu**:

1. **Hiệu chuẩn Cảnh bằng AI** — Tối ưu hóa mô tả môi trường, không khí, ánh sáng, v.v. cho từng cảnh.
2. **Hiệu chuẩn Phân cảnh bằng API** — Hiệu chuẩn chính xác ngôn ngữ ống kính, cỡ cảnh, bố cục của từng phân cảnh.
3. **Hiệu chuẩn Nhân vật bằng AI** — Làm chi tiết mô tả ngoại hình nhân vật, biểu cảm, hành động và các điểm neo nhất quán khác.

> Sau khi hiệu chuẩn, hệ thống sẽ tự động tạo các từ khóa gợi ý (prompt) chi tiết và chuyên nghiệp hơn cho từng bước, giúp nâng cao đáng kể chất lượng tạo hình ảnh/video sau đó.

---

## Bước 3: Tạo tài nguyên (Tùy chọn)

Sau khi hoàn tất hiệu chuẩn, bạn có thể lựa chọn tạo trước tài nguyên:

- **A. Tạo cảnh** — Tạo hàng loạt ảnh tham khảo cảnh dựa trên mô tả cảnh đã hiệu chuẩn.
- **B. Tạo nhân vật** — Tạo ảnh tham khảo nhân vật dựa trên mô tả nhân vật đã hiệu chuẩn.

> Bước này là tùy chọn. Nếu bạn trực tiếp vào phân hệ Đạo diễn hoặc cấp S, hệ thống cũng sẽ tự động gọi các tài nguyên liên quan.

---

## Bước 4: Vào Phân hệ Đạo diễn / Phân hệ Cấp S

Chuyển sang **Phân hệ Đạo diễn** hoặc **⭐ Phân hệ Cấp S**:

1. Nhấp vào **"Tải phân cảnh kịch bản" ở thanh bên phải** — Nhập tất cả phân cảnh trong kịch bản vào phân hệ hiện tại.
2. **Thanh bên trái** sẽ tự động điền cho mỗi phân cảnh:
   - Prompt khung hình đầu
   - Prompt khung hình cuối
   - Prompt video
3. Tất cả thông số có thể **tự do tinh chỉnh** theo sở thích cá nhân (như chuyển động camera, thời lượng, phong cách, v.v.).

---

## Bước 5: Tạo hình ảnh và video

Trong phần **Chỉnh sửa phân cảnh** của phân hệ Đạo diễn / cấp S (thanh bên trái):

### Cách tạo ảnh (Chọn 1 trong 2)

- **A. Tạo đơn cảnh** — Tạo hình ảnh riêng lẻ cho từng phân cảnh.
- **B. Tạo gộp (Khuyến nghị)** — Gộp nhiều phân cảnh để tạo hàng loạt.

> 💡 **Khuyến nghị sử dụng "Tạo gộp"**, hình ảnh sau khi tạo sẽ tự động được gán vào từng phân cảnh tương ứng.

### Tạo video

Sau khi hình ảnh được phân bổ xong, nhấp vào **"Tạo video"** để bắt đầu tạo hàng loạt video phân cảnh.

---

## Bước 6: Phân hệ Cấp S — Tính năng nâng cao Seedance 2.0

Phân hệ cấp S hỗ trợ tính năng tự sự ghép nhiều cảnh của **Seedance 2.0**:

1. Sau khi nhập kịch bản, bạn có thể tự do chọn **độ dài nhóm video**:
   - 1 phân cảnh → video ngắn 15 giây.
   - Ghép nhiều phân cảnh → đoạn phim tự sự 15 giây.
   - Điều chỉnh nhóm linh hoạt theo nhu cầu.
2. Hệ thống tự động thu thập các tham chiếu đa phương tiện (multimodal references) `@Image` / `@Video` / `@Audio`.
3. Chỉ cần nhấp vào **"Tạo video"**.

> Phân hệ cấp S sẽ tự động xử lý việc ghép ảnh khung hình đầu tiên, kết hợp prompt 3 lớp (hành động + ngôn ngữ ống kính + đồng bộ khẩu hình đối thoại), kiểm tra ràng buộc thông số, v.v.

---

## 💡 Mẹo nhỏ

- **Hiệu chuẩn trước, tạo sau** — Hiệu chuẩn lần hai giúp tăng đáng kể chất lượng đầu ra, đừng bỏ qua bước này.
- **Ưu tiên tạo gộp** — Tạo gộp có hiệu suất cao hơn tạo đơn cảnh và phong cách đồng nhất hơn.
- **Thông số có thể điều chỉnh** — Prompt, khung hình đầu, khung hình cuối của mỗi phân cảnh đều hỗ trợ tinh chỉnh thủ công.
- **Phân hệ Cấp S phù hợp với** — Các tình huống cần mạch tự sự liên tục giữa nhiều cảnh (phim ngắn, trailer anime, v.v.).
- **Phân hệ Đạo diễn phù hợp với** — Các tình huống cần kiểm soát chi tiết từng phân cảnh đơn lẻ.

---

> 📧 Có câu hỏi? Liên hệ [memecalculate@gmail.com](mailto:memecalculate@gmail.com) hoặc xem [README](../README.md)