import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
interface Props {
  productId: string;
  closeModal: () => void; // Hàm đóng modal
}
const ProductDetailPage = ({ productId, closeModal }: Props) => {
  return (
    <>
      {/* Overlay nền đen mờ */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={closeModal} // Đóng modal khi nhấn ra ngoài
      ></div>

      {/* Modal chi tiết sản phẩm */}
      <div className="fixed inset-0 flex justify-center items-center z-50">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative">
          <h2 className="text-xl font-bold mb-4">
            Chi tiết sản phẩm {productId}
          </h2>
          <p>
            Thông tin chi tiết về sản phẩm {productId} sẽ được hiển thị ở đây.
          </p>
          <button
            onClick={()=>closeModal}
            className="absolute top-2 right-2 text-gray-500"
          >
            Đóng
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;
