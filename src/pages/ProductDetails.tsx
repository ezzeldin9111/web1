import React from 'react';

export default function ProductDetails() {
  return (
    <div style={{ padding: '40px 80px', maxWidth: '1200px', margin: '0 auto' }}>
      <p style={{ color: '#667085', fontSize: '14px' }}>الرئيسية / الموبايلات / Samsung Galaxy S24 Ultra</p>
      
      <div style={{ display: 'flex', gap: '40px', marginTop: '20px' }}>
        {/* تفاصيل المنتج */}
        <div style={{ flex: 1 }}>
          <span style={{ backgroundColor: '#E3E8F0', padding: '4px 8px', borderRadius: '4px', fontSize: '12px' }}>متوفر • ضمان محلي</span>
          <h1 style={{ fontSize: '32px', margin: '10px 0' }}>Samsung Galaxy S24 Ultra</h1>
          <p style={{ color: '#667085' }}>قوة في الأداء، تفاصيل في كل صورة. تجربة فلاجشيب متكاملة مع قلم S Pen المدمج.</p>
          <h2 style={{ fontSize: '40px', color: '#121D31', margin: '20px 0' }}>46,900 ج.م</h2>
          
          <div style={{ margin: '20px 0' }}>
            <strong>السعة:</strong>
            <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
              <button style={{ padding: '10px 20px', backgroundColor: '#215CFF', color: 'white', border: 'none', borderRadius: '8px' }}>256 GB</button>
              <button style={{ padding: '10px 20px', backgroundColor: '#F5F7FA', border: '1px solid #E3E8F0', borderRadius: '8px' }}>512 GB</button>
            </div>
          </div>

          <button 
            onClick={() => window.open("https://wa.me/201551941042", "_blank")}
            style={{ width: '100%', padding: '15px', backgroundColor: '#215CFF', color: 'white', border: 'none', borderRadius: '8px', fontSize: '16px', cursor: 'pointer' }}>
            اسأل عن المنتج واتساب
          </button>
        </div>

        {/* صورة المنتج */}
        <div style={{ flex: 1, backgroundColor: '#F5F7FA', borderRadius: '16px', padding: '20px', textAlign: 'center' }}>
          <img src="/Product-photography4@2x.png" alt="S24 Ultra" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
      </div>
    </div>
  );
}