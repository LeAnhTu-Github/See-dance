Cập nhật ngày 7 tháng 3

Phiên bản V0.2.2

# <span>**QUAN TRỌNG, QUAN TRỌNG, QUAN TRỌNG: Hãy gỡ cài đặt phiên bản cũ trước khi cài đặt phiên bản mới, và cài đặt phiên bản mới ở một thư mục/đường dẫn khác!**</span>

Bản thử nghiệm nội bộ Web (Invite-only Beta):

<https://moyincreator.com/>

Địa chỉ tải về:

<https://github.com/MemeCalculate/moyin-creator>

Liên kết Baidu Netdisk: <https://pan.baidu.com/s/1ImH6tOIiuFxIDXC0fC-6Lg> 
Mã rút (Extraction code): 8888

Cập nhật hướng dẫn cài đặt và sử dụng:

<https://space.bilibili.com/612396586>

---

## Vấn đề 0: Cấu hình Token cho Mô hình

### Khi thực hiện "Ánh xạ dịch vụ" (Service Mapping), chọn mô hình nào thì bạn phải truy cập trang web API để tạo một Token (Mã thông báo) mới và chọn đúng Nhóm (Group) tương ứng với mô hình đó.

![](https://kvodb27hf3.feishu.cn/space/api/box/stream/download/asynccode/?code=OWI1MDBmYmRjOWMzZTA1OTc2YmIwZjA4MjZmNzdjMjZfNXFvUndHenRXenNFZDBIMVNteTNhOFpORXpSUm94czZfVG9rZW46T0ZSUGJiYnRZb1pEUHl4Z2p1RWNyeDhsbmRjXzE3ODAzOTM4NTc6MTc4MDM5NzQ1N19WNA)
*(Chú thích ảnh: Giao diện cấu hình Token trên trang API. Khi tạo token mới, hãy chọn nhóm tương ứng với mô hình bạn muốn dùng trong Service Mapping, ví dụ: Nhóm mô hình cao cấp, nhóm mô hình tạo ảnh, hoặc nhóm video).*

---

## Vấn đề 1: Cấu hình API

![](https://kvodb27hf3.feishu.cn/space/api/box/stream/download/asynccode/?code=YmY0MmZhNjEzZGNlMjI2YzY5MGUzNDQ4ZTk5NDFlYTBfQno5d3JhdEw3M3dDNVJsSkNWbmpvejhnZUV5bUZZcEdfVG9rZW46UDJ6c2J6dEtDb1NRdm14Um1sSWM2OVNzbnlnXzE3ODAzOTM4NTc6MTc4MDM5NzQ1N19WNA)
**Mọi vấn đề về cấu hình, hãy xem video hướng dẫn này:**

**Mọi vấn đề về cấu hình, hãy xem video hướng dẫn này:**

**Mọi vấn đề về cấu hình, hãy xem video hướng dẫn này:**

【Cách cấu hình API Moyin cho Moyin Creator V0.2.4】: <https://www.bilibili.com/video/BV1mDQoBKExY/?share_source=copy_web&vd_source=aff6c7a6385c421e47afb9569ea92a1f>

---

## Vấn đề 2: Tải lượng tạo Video và thêm nhiều Key

### Tải lượng máy chủ tạo video cũng tương tự, hiện tại máy chủ của ByteDance đang chịu tải lớn, hãy cấu hình thêm nhiều Token Key để hệ thống tự động chuyển đổi.

![](https://kvodb27hf3.feishu.cn/space/api/box/stream/download/asynccode/?code=YmIyNzAwMzMzYzJlYTg2YjIwOWI2MDJmZjViY2FkMjNfUFBTT202aGJvSmtTakRTUWc5MTR5dVYxMVNUZUJCNW5fVG9rZW46VzVrbWI2TmdOb1ZBWVh4aUU2dGNDMDRBbmRkXzE3ODAzOTM4NTc6MTc4MDM5NzQ1N19WNA)
*(Chú thích ảnh: Giao diện thiết lập API Key. Khuyến nghị thêm nhiều API Key khác nhau để hệ thống tự động xoay vòng (polling), giúp tăng tốc độ sinh video hàng loạt).*

---

## Vấn đề 3: Đơn luồng và Đa luồng

Khuyến nghị thêm nhiều API Key để hệ thống tự động chuyển đổi luân phiên. Bạn có thể bật/tắt chế độ đơn luồng hoặc đa luồng trực tiếp trong phần Cài đặt của ứng dụng.

---

## Vấn đề 4: Lỗi màn hình trắng (White Screen)

- Phiên bản dành cho macOS hiện đang được phát triển.
- Đối với Windows, nếu bạn gặp lỗi màn hình trắng khi mở ứng dụng, nguyên nhân là do phiên bản Windows của bạn bị rút gọn (thiếu thư viện hệ thống). Hãy tải và cài đặt thư viện **Microsoft Visual C++ 2015-2022 Redistributable (x64)**, sau đó khởi động lại máy tính là có thể sử dụng bình thường.

---

## Vấn đề 5: Định dạng kịch bản chuẩn khi nhập

Nếu bạn gặp lỗi khi nhập kịch bản hoàn chỉnh, hãy kiểm tra và định dạng văn bản kịch bản gốc theo cấu trúc chuẩn dưới đây:

<span style="color: rgb(216, 57, 49);">**Mẫu kịch bản có nội dung ví dụ:**</span>

```text
《Tiêu đề kịch bản》

Đại cương:
Viết tóm tắt nội dung câu chuyện của toàn bộ phim hoặc phần kịch bản được nhập tại đây.

Tiểu sử nhân vật:
Nhân vật A (25 tuổi): Thân thế, tính cách, ngoại hình, các mối quan hệ, bối cảnh.
Nhân vật B (32 tuổi): Thân thế, tính cách, ngoại hình, các mối quan hệ, bối cảnh.

Tập 1: Tiêu đề tập

1-1 Ngày Trong nhà Địa điểm
Nhân vật: Nhân vật A, Nhân vật B
【Phụ đề: Mùa hè năm 2002】
△Mô tả môi trường/hành động
Nhân vật A: (Hành động hoặc giọng điệu) Lời thoại
Nhân vật B: Lời thoại

1-2 Đêm Ngoài trời Địa điểm khác
Nhân vật: Nhân vật A
△Mô tả hành động
Nhân vật A: Lời thoại

Tập 2: Tiêu đề tập

2-1 Sáng Trong nhà Địa điểm
Nhân vật: Nhân vật C
△Mô tả hành động
Nhân vật C: Lời thoại
```

---

<span style="color: rgb(216, 57, 49);">**Khung định dạng trống (Template):**</span>

```text
《Tiêu đề kịch bản》

Đại cương:
Viết tóm tắt câu chuyện của toàn bộ phim tại đây.

Tiểu sử nhân vật:
Nhân vật A (Tuổi): Thân thế, tính cách, ngoại hình, bối cảnh.
Nhân vật B (Tuổi): Thân thế, tính cách, ngoại hình, bối cảnh.

Tập X: Tiêu đề tập

X-X Buổi Trong/Ngoài Địa điểm
Nhân vật: Nhân vật A, Nhân vật B
【Phụ đề: ...】
△Mô tả môi trường hoặc hành động
Nhân vật A: (Hành động/Giọng điệu) Lời thoại
Nhân vật B: Lời thoại
```

---

### Yêu cầu định dạng kịch bản:
- Bắt buộc phải có từ khóa **"Tập X"** (hoặc 第X集) để hệ thống nhận diện phân tập.
- Mỗi phân cảnh nên sử dụng tiêu đề cảnh có định dạng chuẩn như: **"1-1 Ngày Trong nhà Địa điểm"** (hoặc 1-1 日 内 地点).
- Nên liệt kê rõ danh sách nhân vật xuất hiện ở đầu mỗi phân cảnh, ví dụ: **Nhân vật: Nhân vật A, Nhân vật B** (人物：角色A、角色B).
- Lời thoại nên được viết dưới dạng: **Tên nhân vật: Lời thoại** hoặc **Tên nhân vật: (Hành động) Lời thoại**.
- Phần mô tả hành động nên bắt đầu bằng ký tự **△**.
- Phụ đề, hiệu ứng hồi tưởng nên viết dưới dạng **【Phụ đề: ...】**, **【Hồi tưởng】** (【字幕：...】, 【闪回】).
- Khuyến nghị bổ sung phần **Đại cương:** (大纲：) và **Tiểu sử nhân vật:** (人物小传：) để hệ thống nhận dạng nhân vật và cốt truyện một cách nhất quán nhất.

### Lưu ý bổ sung:
- Các nhãn như `Đại cương:`, `Tiểu sử nhân vật:`, `Tập X:`, và các `Tiêu đề cảnh` hỗ trợ định dạng viết in đậm.
- Nếu kịch bản nhập vào không chứa từ khóa phân tập `Tập X`, hệ thống sẽ tự động xử lý kịch bản đó dưới dạng "kịch bản đơn tập".
- Định dạng tiêu đề cảnh càng chuẩn hóa thì việc phân tách các cảnh sau khi nhập vào phần mềm sẽ càng chính xác.

---

### Mẹo nhanh:
Nếu bạn vẫn gặp khó khăn trong việc định dạng kịch bản, hãy copy kịch bản gốc gửi cho một chatbot AI (như ChatGPT, Claude, Ima...) nhờ chuyển đổi cấu trúc sang định dạng chuẩn như ví dụ trên, sau đó sao chép vào ứng dụng.

Ví dụ cách nhờ AI chuyển đổi định dạng:
<https://ima.qq.com/share/#/ai-chat/Y4MweaasJ>

---

## Vấn đề 6: Cài đặt mô hình và Phân nhóm tự động

![](https://kvodb27hf3.feishu.cn/space/api/box/stream/download/asynccode/?code=OWVhZGJhZGEyNGE2M2E4MWQ3ZGI0YjI3MGQwNDcwMzZfT21hT1FCQ0x1SWh2TDV1QVVnWWx3RVNGTDdMVFZEQlZfVG9rZW46QUhJWWJtZENOb25XUkh4cXJBaGNPdjZzbndoXzE3ODAzOTM4NTc6MTc4MDM5NzQ1N19WNA)
*(Chú thích ảnh: Giao diện chọn mô hình sinh video hoặc chọn tính năng phân nhóm tự động "Auto Grouping" trong phân hệ Cấp S).*

---

## Vấn đề 7: Lỗi tải ảnh lên kho ảnh (Image Bed Upload Failed)

Hệ thống đã được cập nhật tinh giản như sau:
Mặc định hệ thống sẽ chọn trực tiếp kho ảnh **SCDN**, các dịch vụ lưu trữ ảnh khác đã bị lược bỏ để tăng tính ổn định.

![](https://kvodb27hf3.feishu.cn/space/api/box/stream/download/asynccode/?code=MGM1YTYwOThhZjJhNjRjZjY4NjZkYmY5NWQzYzdhZWZfVTRtcTJSSFdwM2pMa1ZTaUpCcUxMUndFVEtMQnFrNGVfVG9rZW46UVowbGI5eDdXb1FLWXN4WUNxRmNRcjV3bm1kXzE3ODAzOTM4NTc6MTc4MDM5NzQ1N19WNA)
*(Chú thích ảnh: Cài đặt cấu hình kho lưu trữ ảnh, mặc định chọn SCDN).*

---

# # Hướng dẫn cơ bản cho Phân hệ Cấp S (Seedance 2.0)

<span style="color: rgb(216, 57, 49);">**LƯU Ý: Vui lòng cấu hình API đầy đủ trước khi sử dụng. Hiện tại tính năng tạo hình ảnh/video nhân vật nhất quán của Seedance 2.0 đang trong giai đoạn thử nghiệm giới hạn, tài khoản của bạn cần được cấp quyền (whitelist / 开白) mới có thể tạo được nhân vật.**</span>

**Dự án này là mã nguồn mở dùng cho mục đích tự thử nghiệm, hiện đang chạy thử nghiệm giới hạn (Gray-scale Testing). Rất mong nhận được nhiều ý kiến đóng góp từ các bạn.**

### Bước 1: Tải phân cảnh kịch bản vào phân hệ Cấp S
![](https://kvodb27hf3.feishu.cn/space/api/box/stream/download/asynccode/?code=YmU0YTc3NWM5ZGVlYjA3M2MyMGMxNTkyODBjZTYwOTlfMEpJTkc1b0NGNGdpcFlmNTUwZGRVZG9NY3lqa0t2bHBfVG9rZW46Rk4wVWI5V3lQb2RmVTF4eUdZSmM5MkxybjVmXzE3ODAzOTM4NTc6MTc4MDM5NzQ1N19WNA)
*(Chú thích ảnh: Nhấp nút để tải danh sách storyboard từ kịch bản vào phân hệ Cấp S).*

### Bước 2: Xem danh sách phân cảnh
![](https://kvodb27hf3.feishu.cn/space/api/box/stream/download/asynccode/?code=ZWFkNjcxNmFlZmI2MTU0MGE4ZGMyYzVmYjdiYTAzMjlfTElpQUF6ekZ1UDRpR3U0TVR3Y2tQaFdxMDJlWGlvRkpfVG9rZW46TWd3c2JxTERJb2NYUFB4aHhLMWNXdHBwbktmXzE3ODAzOTM4NTc6MTc4MDM5NzQ1N19WNA)
*(Chú thích ảnh: Giao diện trực quan hiển thị danh sách các phân cảnh đã được tải).*

### Bước 3: Cấu hình prompt chi tiết và camera movement cho phân cảnh
![](https://kvodb27hf3.feishu.cn/space/api/box/stream/download/asynccode/?code=MTEzNzAwNmI0NjYzOGVlNjViMWMxNTI4OTMwYWYzZGFfSDlmM2JURWo2ckNFTVhPVHpDTnlnY1VibVZPTTBjWElfVG9rZW46WmprOGJuOUttbzhkUjh4RFdjZGN2NHhmbjJlXzE3ODAzOTM4NTc6MTc4MDM5NzQ1N19WNA)
*(Chú thích ảnh: Cài đặt và chỉnh sửa prompt cho khung hình đầu, khung hình cuối, prompt video và chuyển động ống kính).*

### Bước 4: Chọn mô hình video hoạt động cùng tham số của mô hình
![](https://kvodb27hf3.feishu.cn/space/api/box/stream/download/asynccode/?code=MjI5NGEzNzZkODAxMDU3MTQ5NjM3ZWVmODllNTNkNGFfemt2Q1ZNelltZFg0dkxXMktKUmV1SDN5cTQ0eTY5TjdfVG9rZW46Q1U3dmJPQmJxb3VWVm14bjFHTmNrbmVmbldxXzE3ODAzOTM4NTc6MTc4MDM5NzQ1N19WNA)
*(Chú thích ảnh: Lựa chọn mô hình tạo video, ví dụ Seedance 2.0 hoặc SkyReels, và tinh chỉnh các tham số đầu ra).*

### Bước 5: Sinh trước và chọn ảnh nhân vật/bối cảnh mẫu
![](https://kvodb27hf3.feishu.cn/space/api/box/stream/download/asynccode/?code=M2I5NzQyZjUzNmFjMDI4Y2VkMTVjNmVhNDY1OGIwMDNfM24ya0pKcmZ1VWI0WnQxSUJsQ0ZQU2xMcFl1OU13S2hfVG9rZW46TFFWVWJFWk1Lb2JwWjd4OG5LMmNoZ0h2bm1mXzE3ODAzOTM4NTc6MTc4MDM5NzQ1N19WNA)
*(Chú thích ảnh: Thư viện quản lý nhân vật nhất quán và bối cảnh tham chiếu).*

### Bước 6: Chế độ 1 - Phân nhóm tiêu chuẩn (Standard Grouping)
![](https://kvodb27hf3.feishu.cn/space/api/box/stream/download/asynccode/?code=M2JjOGJlNmQ0NGFiZGFkY2U1ODIwOWM1YWVmZWRlMWJfWkJ1aWlRN2NSQmxFaVNqUkEwNzNPNUEycDd3ekI0M2xfVG9rZW46TUVtZmJacmtnb25sRjZ4SUpnT2NFb0dsblNtXzE3ODAzOTM4NTc6MTc4MDM5NzQ1N19WNA)
*(Chú thích ảnh: Gom nhiều phân cảnh đơn thành một nhóm tự sự có độ dài 15 giây theo cấu trúc tiêu chuẩn).*

### Bước 7: Chế độ 2 - Phân nhóm dạng lưới (Grid Grouping / N×N Layout)
![](https://kvodb27hf3.feishu.cn/space/api/box/stream/download/asynccode/?code=YTg1MGRjYjYxN2QwNWQ0ZDRhNzI3MTA1MTQ4ODJhNTFfYnJQQXFxemhJNm45ODd3WnloTzlzbDhLMlM5RjZCeXVfVG9rZW46VGtlcmJuZUlQb0VsS3p4NVR1Q2NweUtzbnZlXzE3ODAzOTM4NTc6MTc4MDM5NzQ1N19WNA)
*(Chú thích ảnh: Thiết lập kết hợp hình ảnh theo dạng lưới 9 ô để ghép nối khung hình).*

### Quá trình sinh Video:
1. **Bước 1 (Chuẩn bị sinh video)**:
   ![](https://kvodb27hf3.feishu.cn/space/api/box/stream/download/asynccode/?code=ODM5MjdlM2Q4ZGFmMmU5ODljNWE2Zjg3YmYyODQ0MDlfNDRIcmFkeDVGd3p1T1kwRzgxQnZoMVN5SVBVQ1ZjZE5fVG9rZW46TXhqNWJxRm9tb2ZybUF4NXZ2amNZcFAxbldmXzE3ODAzOTM4NTc6MTc4MDM5NzQ1N19WNA)
   *(Chú thích ảnh: Chọn các phân cảnh đã gom nhóm để tiến hành sinh video).*

2. **Bước 2 (Tiến hành gửi yêu cầu sinh video)**:
   ![](https://kvodb27hf3.feishu.cn/space/api/box/stream/download/asynccode/?code=YjFhYjljMzQ4M2UyMWQ4ZmMwMDk2MzQ0NmEyMWU2MjBfTk84TmtxWG92b28wYUp6Qks2cU1QaTNMTjRIdDE1ZzVfVG9rZW46SzNnc2JFWW5nbzFFWnB4bG5JbGM2RGd5bmViXzE3ODAzOTM4NTc6MTc4MDM5NzQ1N19WNA)
   *(Chú thích ảnh: Nhấp nút sinh video và xác nhận thông số).*

3. **Chế độ sinh 3 - Sinh đơn cảnh (Single Shot Generation)**:
   ![](https://kvodb27hf3.feishu.cn/space/api/box/stream/download/asynccode/?code=MzZhYTAwYzRiY2Q3NGNkN2YzMTgzMGQ2MjY0ZTM0YzNfTTBzY3k3RzRYRjVmTVV0REJmdjUyR0hTcndVYlY5MmRfVG9rZW46TDVsQ2J2Yzh1b0M2Ykh4Qm5Gc2M4a1FpbnhkXzE3ODAzOTM4NTc6MTc4MDM5NzQ1N19WNA)
   *(Chú thích ảnh: Sinh lẻ từng phân cảnh thay vì gom nhóm).*

4. **Theo dõi tiến độ trong hàng đợi**:
   ![](https://kvodb27hf3.feishu.cn/space/api/box/stream/download/asynccode/?code=MmQ1ZTBjNWNiZmFkNjZkZDcwNWEwODBjMzc1OTdiNzlfaEQxME41aTUyVFlaZkhPR3JZOGVkTjg0cGo3dG5VSGxfVG9rZW46V2tuMGJicjBUb0g3Rkt4SkJvbmNGNmc2bjVmXzE3ODAzOTM4NTc6MTc4MDM5NzQ1N19WNA)
   *(Chú thích ảnh: Danh sách các tác vụ sinh video đang chạy ngầm, bạn có thể theo dõi tiến độ tại đây).*