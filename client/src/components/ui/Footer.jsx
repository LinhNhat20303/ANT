import React from 'react';

const Footer = () => {
  return (
    <div className="flex w-full justify-center bg-white pb-8 text-gray-800">
      <div className="flex w-full max-w-screen-xl flex-col items-center px-6">
        {/* Lưới liên kết */}
        <div className="grid w-full grid-cols-1 gap-4 py-8 text-sm md:grid-cols-4">
          {/* Phần Logo */}
          <div className="flex flex-col items-start gap-4">
            <img
              src="../assets/slogan.png" // Đảm bảo đường dẫn này đúng
              alt="Logo ANT"
              className="w-36"
            />
            {/* <p className="font-bold">Phiêu Lưu - Mạng Lưới - Công Nghệ</p> */}
          </div>

          {/* Phần Về ANT */}
          <div className="flex flex-col gap-1">
            <strong className="font-medium">Về ANT</strong>
            <p className="cursor-pointer hover:underline">Cách đặt vé</p>
            <p className="cursor-pointer hover:underline">Liên hệ</p>
            <p className="cursor-pointer hover:underline">Trung tâm trợ giúp</p>
            <p className="cursor-pointer hover:underline">Tuyển dụng</p>
            <p className="cursor-pointer hover:underline">Về chúng tôi</p>
            <p className="cursor-pointer hover:underline">Tải ứng dụng</p>
          </div>

          {/* Phần Sản phẩm */}
          <div className="flex flex-col gap-1">
            <strong className="font-medium">Sản phẩm</strong>
            <p className="cursor-pointer hover:underline">Homestay</p>
            <p className="cursor-pointer hover:underline">
              Lưu trú trải nghiệm
            </p>
            <p className="cursor-pointer hover:underline">
              Hoạt động trải nghiệm
            </p>
          </div>

          {/* Phần Khác */}
          <div className="flex flex-col gap-1">
            <strong className="font-medium">Khác</strong>
            <p className="cursor-pointer hover:underline">Cộng đồng ANT</p>
            <p className="cursor-pointer hover:underline">Chính sách bảo mật</p>
            <p className="cursor-pointer hover:underline">
              Điều khoản & Điều kiện
            </p>
            <p className="cursor-pointer hover:underline">
              Đăng ký chỗ ở của bạn
            </p>
            <p className="cursor-pointer hover:underline">
              Đăng ký doanh nghiệp trải nghiệm của bạn
            </p>
            <p className="cursor-pointer hover:underline">
              Đăng ký tiếp thị của bạn
            </p>
          </div>
        </div>
        <div className="my-4 w-full border-t border-gray-300"></div>

        {/* Phần dưới cùng của Footer */}
        <div className="flex w-full flex-col items-center justify-between gap-4 md:gap-0 lg:flex-row">
          <p className="text-sm">&copy; 2023 ANT, Inc. Bảo lưu mọi quyền.</p>
          <div className="flex items-center gap-6 text-sm">
            <p className="cursor-pointer hover:underline">Chính sách bảo mật</p>
            <p className="cursor-pointer hover:underline">Điều khoản</p>
            <p className="cursor-pointer hover:underline">Sơ đồ trang</p>
            <p className="cursor-pointer hover:underline">Chi tiết công ty</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
