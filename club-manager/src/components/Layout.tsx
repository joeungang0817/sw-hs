import React from "react";
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout-container">
      <header className="layout-header">동아리 부원 관리 시스템</header>
      <main>{children}</main>
    </div>
  );
}
export default Layout;
