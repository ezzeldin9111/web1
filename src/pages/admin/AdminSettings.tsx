import React from 'react';

export default function AdminSettings() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#F5F7FA', direction: 'rtl' }}>
      {/* القائمة الجانبية */}
      <div style={{ width: '250px', backgroundColor: 'white', borderLeft: '1px solid #E3E8F0', padding: '20px' }}>
        <h2 style={{ color: '#215CFF', marginBottom: '40px' }}>اسم متجرك</h2>
        <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2.5' }}>
          <li>المنتجات</li>
          <li>إضافة منتج</li>
          <li style={{ color: '#215CFF', fontWeight: 'bold' }}>إعدادات المتجر</li>
          <li>الصلاحيات</li>
        </ul>
      </div>

      {/* محتوى الصفحة */}
      <div style={{ flex: 1, padding: '40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h1>إعدادات المتجر والصلاحيات</h1>
          <button style={{ padding: '10px 20px', backgroundColor: '#215CFF', color: 'white', border: 'none', borderRadius: '8px' }}>حفظ الإعدادات</button>
        </div>

        {/* هوية المتجر */}
        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '12px', border: '1px solid #E3E8F0', marginBottom: '20px' }}>
          <h3>هوية المتجر</h3>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>اسم المتجر *</label>
            <input type="text" defaultValue="اسم متجرك" style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '5px' }}>اللون الأساسي</label>
            <input type="text" defaultValue="#215CFF" style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }} />
          </div>
        </div>

        {/* واتساب وروابط التواصل */}
        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '12px', border: '1px solid #E3E8F0' }}>
          <h3>واتساب وروابط التواصل</h3>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>رقم واتساب *</label>
            <input type="text" defaultValue="+20 15 5194 1042" style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }} />
          </div>
        </div>
      </div>
    </div>
  );
}