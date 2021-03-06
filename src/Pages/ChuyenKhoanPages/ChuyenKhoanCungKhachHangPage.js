import React, { Component } from 'react';
import AuthHeader from '../../Components/Common/AuthHeader';
import Footer from '../../Components/Common/Footer';
import ChuyenKhoanCungKhachHang from '../../Components/ChuyenKhoan/ChuyenKhoanCungKhachHang';

class ChuyenKhoanCungKhachHangPage extends Component {
  render() {
    return (
      <div>
        <AuthHeader />
        <ChuyenKhoanCungKhachHang />
        <Footer />
      </div>
    );
  }
}
export default ChuyenKhoanCungKhachHangPage;
