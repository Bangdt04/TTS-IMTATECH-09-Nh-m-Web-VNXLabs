export interface UserFollow {
  _id: string; // ID của người dùng
  email: string; // Địa chỉ email
  password: string; // Mật khẩu đã mã hóa
  name: string; // Tên người dùng
  avatar: string; // URL avatar
  role: "user" | "admin"; // Vai trò của người dùng
  isBlocked: boolean; // Trạng thái chặn người dùng
  count_follow: number; // Số lượng người theo dõi
  follow: string[]; // Mảng chứa ID của người theo dõi
  createdAt: string; // Thời gian tạo
  updatedAt: string; // Thời gian cập nhật
}
