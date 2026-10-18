import React from 'react';

export default function AdminProducts() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#F5F7FA' }}>
      {/* القائمة الجانبية */}
      <div style={{ width: '250px', backgroundColor: 'white', borderLeft: '1px solid #E3E8F0', padding: '20px' }}>
        <h2 style={{ color: '#215CFF', marginBottom: '40px' }}>اسم متجرك</h2>
        <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2.5' }}>
          <li style={{ color: '#215CFF', fontWeight: 'bold' }}>المنتجات</li>
          <li>إضافة منتج</li>
          <li>إعدادات المتجر</li>
          <li>الصلاحيات</li>
        </ul>
      </div>

      {/* محتوى الصفحة */}
      <div style={{ flex: 1, padding: '40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1>المنتجات</h1>
          <button style={{ padding: '10px 20px', backgroundColor: '#215CFF', color: 'white', border: 'none', borderRadius: '8px' }}>+ إضافة منتج جديد</button>
        </div>

        {/* الإحصائيات */}
        <div style={{ display: 'flex', gap: '20px', margin: '20px 0' }}>
          <div style={{ flex: 1, backgroundColor: 'white', padding: '20px', borderRadius: '12px', border: '1px solid #E3E8F0' }}>
            <h3>المنتجات المنشورة</h3>
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>8</p>
          </div>
          <div style={{ flex: 1, backgroundColor: 'white', padding: '20px', borderRadius: '12px', border: '1px solid #E3E8F0' }}>
            <h3>موبايلات</h3>
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>4</p>
          </div>
        </div>

        {/* جدول المنتجات */}
        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '12px', border: '1px solid #E3E8F0' }}>
          <table style={{ width: '100%', textAlign: 'right', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #E3E8F0' }}>
                <th style={{ padding: '10px' }}>المنتج</th>
                <th>القسم</th>
                <th>البراند</th>
                <th>السعر (ج.م)</th>
                <th>التوفر</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '15px 10px' }}>Samsung Galaxy S24 Ultra</td>
                <td>موبايلات</td>
                <td>Samsung</td>
                <td>46,900</td>
                <td style={{ color: 'green' }}>متوفر</td>
              </tr>
              {/* بقية المنتجات */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}