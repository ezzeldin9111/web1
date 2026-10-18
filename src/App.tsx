import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate, useParams, useLocation, Navigate } from "react-router-dom";
import StoreNavigation from "./components/StoreNavigation";
import StoreFooter from "./components/StoreFooter";
import { supabase } from "./supabaseClient";

interface Product {
  id: number;
  name: string;
  category: string;
  brand: string;
  price: string;
  discount_price?: string;
  discount_end_date?: string;
  specs: string;
  image: string;
  description: string;
  inStock: boolean;
}

interface AdminUser {
  id: number;
  username: string;
  password: string;
  role: "super_admin" | "admin";
}

const initialAdmins: AdminUser[] = [
  { id: 1, username: "admin", password: "123", role: "super_admin" },
];

const WHATSAPP_NUMBER = "201551941042";

// دالة لمعرفة هل الخصم ساري أم لا
const isDiscountValid = (product: Product) => {
  if (!product.discount_price) return false;
  if (!product.discount_end_date) return true;
  return new Date(product.discount_end_date) > new Date();
};

// --- 1. واجهة العميل ---
const HomePage = ({ products }: { products: Product[] }) => {
  const [selectedCategory, setSelectedCategory] = useState("الكل");
  
  const openWhatsApp = (productName?: string) => {
    const text = productName ? `السلام عليكم، بخصوص ${productName}...` : "السلام عليكم، حابب استفسر من متجر رنة تليفون...";
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
  };

  // فلترة المنتجات بناءً على القسم المختار
  const filteredProducts = selectedCategory === "الكل" 
    ? products 
    : selectedCategory === "إكسسوارات"
      ? products.filter(p => ["حماية الشاشة", "جرابات", "إكسسوارات"].includes(p.category))
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
      {/* البانر الرئيسي */}
      <section style={{ display: "flex", flexWrap: "wrap", backgroundColor: "#F5F7FA", borderRadius: "24px", overflow: "hidden", margin: "32px 0", alignItems: "center" }}>
        <div style={{ flex: 1, minWidth: "min(320px, 100%)" }}>
          <img src="/Campaign-photograph@2x.png" alt="عروض رنة تليفون" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        </div>
        <div style={{ flex: 1, minWidth: "min(320px, 100%)", padding: "clamp(24px, 6vw, 48px) clamp(20px, 5vw, 40px)", textAlign: "right" }}>
          <h1 style={{ fontSize: "clamp(26px, 7vw, 40px)", color: "#121D31", margin: "16px 0", lineHeight: "1.3" }}>اكتشف عالم التقنية،<br/>بأفضل الأسعار.</h1>
          <p style={{ color: "#667085", fontSize: "16px", marginBottom: "32px" }}>موبايلات، ساعات ذكية، وسماعات أصلية بضمان كامل.</p>
          <button onClick={() => openWhatsApp()} style={{ padding: "14px 24px", backgroundColor: "#215CFF", color: "#fff", border: "none", borderRadius: "8px", fontWeight: "bold", cursor: "pointer", fontSize: "16px" }}>اسألنا واتساب</button>
        </div>
      </section>

      {/* قسم المنتجات */}
      <section id="products-section" style={{ backgroundColor: "#F5F7FA", padding: "clamp(20px, 5vw, 40px) clamp(16px, 4vw, 32px)", borderRadius: "24px", marginBottom: "56px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px", flexWrap: "wrap", gap: "16px" }}>
          <h2 style={{ fontSize: "28px", margin: 0, color: "#121D31" }}>المنتجات المتاحة</h2>
          
          {/* أزرار الفلترة بالأقسام */}
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {["الكل", "موبايلات", "ساعات ذكية", "سماعات", "إكسسوارات"].map((cat) => (
              <button 
                key={cat} 
                onClick={() => setSelectedCategory(cat)} 
                style={{ 
                  padding: "8px 18px", 
                  borderRadius: "8px", 
                  border: selectedCategory === cat ? "1px solid #215CFF" : "1px solid #E3E8F0", 
                  backgroundColor: selectedCategory === cat ? "#215CFF" : "#fff", 
                  color: selectedCategory === cat ? "#fff" : "#121D31", 
                  cursor: "pointer", 
                  fontWeight: "bold",
                  transition: "all 0.2s"
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        
        {products.length === 0 ? (
          <div style={{ textAlign: "center", color: "#667085", padding: "40px 0" }}>جاري تحميل المنتجات أو لا توجد منتجات مضافة حالياً.</div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(260px, 100%), 1fr))", gap: "20px" }}>
            {filteredProducts.map((item) => (
              <div key={item.id} style={{ backgroundColor: "#fff", border: "1px solid #E3E8F0", borderRadius: "16px", padding: "16px", position: "relative", display: "flex", flexDirection: "column" }}>
                {isDiscountValid(item) && (
                  <span style={{ position: "absolute", top: "20px", right: "20px", backgroundColor: "#E53935", color: "white", padding: "6px 10px", borderRadius: "8px", fontSize: "12px", fontWeight: "bold", zIndex: 1, boxShadow: "0 2px 4px rgba(229, 57, 53, 0.2)" }}>عرض خاص 🔥</span>
                )}
                <Link to={`/product/${item.id}`} style={{ textDecoration: "none", color: "inherit", flex: 1 }}>
                  <img src={item.image} alt={item.name} style={{ width: "100%", height: "220px", objectFit: "contain", borderRadius: "12px", backgroundColor: "#FAFAFA", padding: "10px", boxSizing: "border-box" }} />
                  <div style={{ marginTop: "12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ color: "#215CFF", fontSize: "12px", fontWeight: "bold" }}>{item.category}</span>
                    <span style={{ color: "#667085", fontSize: "12px" }}>{item.brand}</span>
                  </div>
                  <h3 style={{ fontSize: "17px", color: "#121D31", margin: "8px 0" }}>{item.name}</h3>
                  <div style={{ marginBottom: "16px", display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                    {isDiscountValid(item) ? (
                      <>
                        <span style={{ fontSize: "22px", fontWeight: "bold", color: "#E53935" }}>{item.discount_price} ج.م</span>
                        <span style={{ fontSize: "14px", color: "#9ca3af", textDecoration: "line-through" }}>{item.price} ج.م</span>
                      </>
                    ) : (
                      <span style={{ fontSize: "22px", fontWeight: "bold", color: "#121D31" }}>{item.price} ج.م</span>
                    )}
                  </div>
                </Link>
                <button onClick={() => openWhatsApp(item.name)} style={{ width: "100%", padding: "12px", backgroundColor: "#EDF2FF", color: "#215CFF", border: "none", borderRadius: "8px", fontWeight: "bold", cursor: "pointer", marginTop: "auto" }}>تواصل للحجز والتوفر</button>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

const ProductDetailsPage = ({ products }: { products: Product[] }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <div style={{ textAlign: "center", padding: "40px" }}>المنتج غير موجود</div>;

  return (
    <div style={{ maxWidth: "1200px", margin: "40px auto", padding: "0 24px", minHeight: "60vh" }}>
      <div style={{ color: "#667085", fontSize: "14px", marginBottom: "24px" }}>
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>الرئيسية</Link> / {product.category} / <span style={{ color: "#121D31" }}>{product.name}</span>
      </div>
      <div style={{ display: "flex", gap: "48px", flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: "min(320px, 100%)" }}>
          {isDiscountValid(product) && <span style={{ backgroundColor: "#FEE2E2", color: "#E53935", padding: "6px 12px", borderRadius: "6px", fontSize: "14px", fontWeight: "bold", marginBottom: "12px", display: "inline-block" }}>🔥 تخفيض حصري لفترة محدودة</span>}
          <h1 style={{ fontSize: "clamp(24px, 6vw, 36px)", color: "#121D31", margin: "10px 0" }}>{product.name}</h1>
          <div style={{ color: "#215CFF", fontWeight: "bold", marginBottom: "16px" }}>الماركة: {product.brand}</div>
          <p style={{ color: "#667085", fontSize: "16px", lineHeight: "1.6" }}>{product.description}</p>
          <div style={{ padding: "16px", backgroundColor: "#F5F7FA", borderRadius: "8px", margin: "20px 0" }}>
            <h4 style={{ margin: "0 0 8px" }}>المواصفات:</h4>
            <p style={{ margin: 0, color: "#4B5563" }}>{product.specs}</p>
          </div>
          <div style={{ margin: "24px 0", display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
            {isDiscountValid(product) ? (
              <>
                <span style={{ fontSize: "36px", fontWeight: "bold", color: "#E53935" }}>{product.discount_price} ج.م</span>
                <span style={{ fontSize: "24px", color: "#9ca3af", textDecoration: "line-through" }}>{product.price} ج.م</span>
              </>
            ) : (
              <span style={{ fontSize: "36px", fontWeight: "bold", color: "#215CFF" }}>{product.price} ج.م</span>
            )}
          </div>
          <button onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`السلام عليكم، بخصوص ${product.name}، هل متاح للحجز؟`)}`, "_blank")} style={{ width: "100%", padding: "18px", backgroundColor: "#215CFF", color: "#fff", border: "none", borderRadius: "10px", fontSize: "18px", fontWeight: "bold", cursor: "pointer" }}>احجز عبر واتساب الآن</button>
        </div>
        <div style={{ flex: 1, minWidth: "min(320px, 100%)", backgroundColor: "#F5F7FA", borderRadius: "24px", padding: "32px", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src={product.image} alt={product.name} style={{ maxWidth: "100%", maxHeight: "500px", objectFit: "contain", mixBlendMode: "multiply" }} />
        </div>
      </div>
    </div>
  );
};

// --- 2. نظام لوحة الإدارة ---

const AdminLoginPage = ({ onLogin }: { onLogin: (u: string, p: string) => boolean }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!onLogin(username, password)) setError("اسم المستخدم أو كلمة المرور غير صحيحة!");
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", backgroundColor: "#F5F7FA" }}>
      <form onSubmit={handleSubmit} style={{ backgroundColor: "#fff", padding: "40px", borderRadius: "16px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)", width: "calc(100% - 32px)", maxWidth: "400px", textAlign: "center" }}>
        <h2 style={{ color: "#215CFF", marginBottom: "24px" }}>تسجيل الدخول للإدارة</h2>
        {error && <div style={{ color: "red", marginBottom: "16px", fontSize: "14px" }}>{error}</div>}
        <input type="text" placeholder="اسم المستخدم" value={username} onChange={(e) => setUsername(e.target.value)} style={{ width: "100%", padding: "12px", marginBottom: "16px", borderRadius: "8px", border: "1px solid #E3E8F0", boxSizing: "border-box" }} required />
        <input type="password" placeholder="كلمة المرور" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: "100%", padding: "12px", marginBottom: "24px", borderRadius: "8px", border: "1px solid #E3E8F0", boxSizing: "border-box" }} required />
        <button type="submit" style={{ width: "100%", padding: "14px", backgroundColor: "#215CFF", color: "#fff", border: "none", borderRadius: "8px", fontWeight: "bold", cursor: "pointer", fontSize: "16px" }}>دخول</button>
      </form>
    </div>
  );
};

const AdminLayout = ({ children, currentUser, onLogout }: { children: React.ReactNode, currentUser: AdminUser, onLogout: () => void }) => (
  <div style={{ display: "flex", flexWrap: "wrap", minHeight: "100vh", backgroundColor: "#F5F7FA" }}>
    <aside style={{ flex: "0 0 240px", maxWidth: "100%", backgroundColor: "#fff", borderLeft: "1px solid #E3E8F0", padding: "24px", display: "flex", flexDirection: "column", gap: "16px" }}>
      <h2 style={{ color: "#215CFF", margin: "0 0 32px", fontSize: "22px" }}>لوحة تحكم المتجر</h2>
      <nav style={{ display: "flex", flexDirection: "column", gap: "12px", flex: 1 }}>
        <Link to="/admin/products" style={{ color: "#121D31", textDecoration: "none", padding: "10px", fontWeight: "bold" }}>📦 المنتجات</Link>
        <Link to="/admin/product/new" style={{ color: "#121D31", textDecoration: "none", padding: "10px", fontWeight: "bold" }}>➕ إضافة منتج</Link>
        {currentUser.role === "super_admin" && (
          <Link to="/admin/users" style={{ color: "#121D31", textDecoration: "none", padding: "10px", fontWeight: "bold", backgroundColor: "#EDF2FF", borderRadius: "8px" }}>👥 إدارة المشرفين</Link>
        )}
        <Link to="/" style={{ color: "#667085", textDecoration: "none", padding: "10px", marginTop: "20px", borderTop: "1px solid #E3E8F0" }}>🌐 زيارة المتجر</Link>
      </nav>
      <button onClick={onLogout} style={{ padding: "12px", backgroundColor: "#FEE2E2", color: "red", border: "none", borderRadius: "8px", fontWeight: "bold", cursor: "pointer" }}>تسجيل الخروج</button>
    </aside>
    <main style={{ flex: "1 1 320px", minWidth: 0, padding: "clamp(16px, 4vw, 40px)", overflowY: "auto" }}>{children}</main>
  </div>
);

const AdminProductsPage = ({ products, setProducts }: { products: Product[]; setProducts: any }) => {
  const navigate = useNavigate();
  
  const deleteProduct = async (id: number) => {
    if (!window.confirm("هل أنت متأكد من حذف المنتج بشكل نهائي؟")) return;
    try {
      const { error } = await supabase.from('products').delete().eq('id', id);
      if (error) throw error;
      setProducts(products.filter(item => item.id !== id));
    } catch (err: any) {
      alert("حدث خطأ أثناء الحذف: " + err.message);
    }
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "28px", flexWrap: "wrap", gap: "12px" }}>
        <h1 style={{ fontSize: "28px", color: "#121D31" }}>المنتجات المنشورة ({products.length})</h1>
        <Link to="/admin/product/new" style={{ padding: "12px 20px", backgroundColor: "#215CFF", color: "#fff", textDecoration: "none", borderRadius: "8px", fontWeight: "bold" }}>+ إضافة منتج جديد</Link>
      </div>
      <div style={{ backgroundColor: "#fff", borderRadius: "16px", border: "1px solid #E3E8F0", overflowX: "auto" }}>
        <table style={{ width: "100%", textAlign: "right", borderCollapse: "collapse" }}>
          <thead style={{ backgroundColor: "#FAFAFA", borderBottom: "1px solid #E3E8F0" }}>
            <tr><th style={{ padding: "16px" }}>المنتج</th><th>القسم</th><th>السعر</th><th style={{ textAlign: "center" }}>إجراءات</th></tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} style={{ borderBottom: "1px solid #F0F2F5" }}>
                <td style={{ padding: "16px", fontWeight: "bold" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <img src={p.image} alt="" style={{ width: "40px", height: "40px", objectFit: "cover", borderRadius: "6px", border: "1px solid #E3E8F0" }} />
                    {p.name}
                  </div>
                </td>
                <td>{p.category}</td>
                <td>
                  {isDiscountValid(p) ? <span style={{ color: "#E53935", fontWeight: "bold" }}>{p.discount_price} ج.م</span> : <span style={{ color: "#215CFF", fontWeight: "bold" }}>{p.price} ج.م</span>}
                </td>
                <td style={{ textAlign: "center" }}>
                  <button onClick={() => navigate(`/admin/product/edit/${p.id}`)} style={{ padding: "6px 12px", color: "#215CFF", backgroundColor: "#EDF2FF", border: "none", borderRadius: "6px", cursor: "pointer", marginLeft: "8px", fontWeight: "bold" }}>تعديل</button>
                  <button onClick={() => deleteProduct(p.id)} style={{ padding: "6px 12px", color: "red", backgroundColor: "#FEE2E2", border: "none", borderRadius: "6px", cursor: "pointer", fontWeight: "bold" }}>حذف</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const AdminAddProductPage = ({ products, setProducts }: { products: Product[]; setProducts: any }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = Boolean(id);

  const [form, setForm] = useState({ name: "", category: "موبايلات", brand: "", price: "", discount_price: "", discount_end_date: "", specs: "", description: "", image: "" });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    if (isEdit) {
      const productToEdit = products.find(p => p.id === Number(id));
      if (productToEdit) {
        setForm({
          name: productToEdit.name,
          category: productToEdit.category,
          brand: productToEdit.brand,
          price: productToEdit.price,
          discount_price: productToEdit.discount_price || "",
          discount_end_date: productToEdit.discount_end_date || "",
          specs: productToEdit.specs,
          description: productToEdit.description,
          image: productToEdit.image
        });
      }
    }
  }, [id, products, isEdit]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file);
      setForm({ ...form, image: URL.createObjectURL(file) });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUploading(true);
    
    try {
      let finalImageUrl = form.image || "/Product-photography4@2x.png";

      if (imageFile) {
        const fileExt = imageFile.name.split('.').pop();
        const fileName = `${Date.now()}.${fileExt}`;
        const { error: uploadError } = await supabase.storage.from('product-images').upload(fileName, imageFile);
        if (uploadError) throw uploadError;
        const { data: publicUrlData } = supabase.storage.from('product-images').getPublicUrl(fileName);
        finalImageUrl = publicUrlData.publicUrl;
      }

      const productData = {
        name: form.name,
        category: form.category,
        brand: form.brand || "عام",
        price: form.price,
        discount_price: form.discount_price || null,
        discount_end_date: form.discount_end_date || null,
        specs: form.specs || "مواصفات قياسية",
        description: form.description || "منتج أصلي مع ضمان محلي كامل.",
        image: finalImageUrl,
        inStock: true
      };

      if (isEdit) {
        const { error } = await supabase.from('products').update(productData).eq('id', Number(id));
        if (error) throw error;
        setProducts(products.map(p => p.id === Number(id) ? { ...p, ...productData } : p));
        alert("تم تعديل المنتج بنجاح!");
      } else {
        const { data, error } = await supabase.from('products').insert([productData]).select();
        if (error) throw error;
        if (data) setProducts([data[0], ...products]);
        alert("تمت الإضافة بنجاح!");
      }
      navigate("/admin/products");
    } catch (err: any) {
      alert("حدث خطأ أثناء رفع البيانات: " + err.message);
      console.error(err);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div style={{ maxWidth: "800px" }}>
      <h1 style={{ fontSize: "28px", color: "#121D31", marginBottom: "24px" }}>{isEdit ? "تعديل المنتج" : "إضافة منتج جديد"}</h1>
      <form onSubmit={handleSubmit} style={{ backgroundColor: "#fff", padding: "clamp(16px, 4vw, 32px)", borderRadius: "16px", border: "1px solid #E3E8F0", display: "flex", flexDirection: "column", gap: "20px" }}>
        
        <input type="file" accept="image/*" onChange={handleImageUpload} style={{ padding: "12px", border: "1px dashed #215CFF", backgroundColor: "#EDF2FF", borderRadius: "8px", cursor: "pointer" }} />
        {form.image && <img src={form.image} alt="معاينة" style={{ width: "120px", height: "120px", objectFit: "contain", borderRadius: "8px", border: "1px solid #E3E8F0", padding: "4px" }} />}
        
        <input type="text" placeholder="اسم المنتج *" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required style={{ padding: "12px", borderRadius: "8px", border: "1px solid #CBD5E1" }} />
        
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: "200px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>القسم</label>
            <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #CBD5E1" }}>
              <option>موبايلات</option>
              <option>ساعات ذكية</option>
              <option>سماعات</option>
              <option>حماية الشاشة</option>
              <option>جرابات</option>
            </select>
          </div>
          
          <div style={{ flex: 1, minWidth: "200px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>البراند (اختر أو اكتب نوع جديد)</label>
            <input list="brands-list" placeholder="مثال: Samsung أو اكتب براند جديد" value={form.brand} onChange={(e) => setForm({ ...form, brand: e.target.value })} style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #CBD5E1" }} />
            <datalist id="brands-list">
              <option value="Samsung" />
              <option value="Apple" />
              <option value="Xiaomi" />
              <option value="Oppo" />
              <option value="Realme" />
              <option value="Joyroom" />
              <option value="Oraimo" />
            </datalist>
          </div>
        </div>

        <div>
          <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>السعر الأساسي (ج.م) *</label>
          <input type="text" placeholder="مثال: 25,000" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} required style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #CBD5E1" }} />
        </div>

        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", backgroundColor: "#FEF2F2", padding: "16px", borderRadius: "8px", border: "1px dashed #FCA5A5" }}>
          <div style={{ flex: 1, minWidth: "200px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold", color: "#B91C1C" }}>سعر الخصم (اختياري)</label>
            <input type="text" placeholder="مثال: 22,500" value={form.discount_price} onChange={(e) => setForm({ ...form, discount_price: e.target.value })} style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #FCA5A5" }} />
          </div>
          <div style={{ flex: 1, minWidth: "200px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold", color: "#B91C1C" }}>تاريخ انتهاء الخصم (اختياري)</label>
            <input type="datetime-local" value={form.discount_end_date} onChange={(e) => setForm({ ...form, discount_end_date: e.target.value })} style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #FCA5A5" }} />
            <span style={{ fontSize: "12px", color: "#EF4444", marginTop: "4px", display: "block" }}>اتركه فارغاً ليكون الخصم مستمراً بدون وقت محدد</span>
          </div>
        </div>

        <input type="text" placeholder="مواصفات سريعة *" value={form.specs} onChange={(e) => setForm({ ...form, specs: e.target.value })} style={{ padding: "12px", borderRadius: "8px", border: "1px solid #CBD5E1" }} />
        <textarea rows={4} placeholder="الوصف والمواصفات الكاملة..." value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} style={{ padding: "12px", borderRadius: "8px", border: "1px solid #CBD5E1" }} />
        
        <button type="submit" disabled={isUploading} style={{ padding: "14px", backgroundColor: isUploading ? "#9ca3af" : "#215CFF", color: "#fff", border: "none", borderRadius: "8px", fontWeight: "bold", cursor: isUploading ? "not-allowed" : "pointer", fontSize: "16px" }}>
          {isUploading ? "جاري الرفع..." : (isEdit ? "حفظ التعديلات" : "نشر المنتج")}
        </button>
      </form>
    </div>
  );
};

const AdminUsersPage = ({ admins, setAdmins, currentUser }: { admins: AdminUser[], setAdmins: any, currentUser: AdminUser }) => {
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newRole, setNewRole] = useState<"super_admin" | "admin">("admin");

  if (currentUser.role !== "super_admin") return <h2 style={{ color: "red" }}>عفواً، هذه الصفحة مخصصة للمدير العام فقط.</h2>;

  const handleAddAdmin = (e: React.FormEvent) => {
    e.preventDefault();
    if (admins.find(a => a.username === newUsername)) return alert("اسم المستخدم موجود بالفعل!");
    setAdmins([...admins, { id: Date.now(), username: newUsername, password: newPassword, role: newRole }]);
    setNewUsername(""); setNewPassword("");
    alert("تم إضافة المشرف بنجاح!");
  };

  return (
    <div style={{ maxWidth: "800px" }}>
      <h1 style={{ fontSize: "28px", color: "#121D31", marginBottom: "24px" }}>إدارة المشرفين والصلاحيات</h1>
      <form onSubmit={handleAddAdmin} style={{ backgroundColor: "#fff", padding: "24px", borderRadius: "16px", border: "1px solid #E3E8F0", marginBottom: "32px", display: "flex", gap: "16px", alignItems: "flex-end", flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: "150px" }}><label style={{ display: "block", marginBottom: "8px" }}>اسم المستخدم</label><input type="text" value={newUsername} onChange={(e) => setNewUsername(e.target.value)} required style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }} /></div>
        <div style={{ flex: 1, minWidth: "150px" }}><label style={{ display: "block", marginBottom: "8px" }}>كلمة المرور</label><input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }} /></div>
        <div style={{ flex: 1, minWidth: "150px" }}><label style={{ display: "block", marginBottom: "8px" }}>الصلاحية</label>
          <select value={newRole} onChange={(e) => setNewRole(e.target.value as any)} style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}><option value="admin">مشرف عادي</option><option value="super_admin">سوبر أدمن</option></select>
        </div>
        <button type="submit" style={{ padding: "12px 24px", backgroundColor: "#215CFF", color: "#fff", border: "none", borderRadius: "8px", fontWeight: "bold", cursor: "pointer" }}>+ إضافة</button>
      </form>
      <div style={{ backgroundColor: "#fff", borderRadius: "16px", border: "1px solid #E3E8F0", overflowX: "auto" }}>
        <table style={{ width: "100%", textAlign: "right", borderCollapse: "collapse" }}>
          <thead style={{ backgroundColor: "#FAFAFA", borderBottom: "1px solid #E3E8F0" }}>
            <tr><th style={{ padding: "16px" }}>اسم المستخدم</th><th>الصلاحية</th><th>كلمة المرور</th><th>إجراءات</th></tr>
          </thead>
          <tbody>
            {admins.map((a) => (
              <tr key={a.id} style={{ borderBottom: "1px solid #F0F2F5" }}>
                <td style={{ padding: "16px", fontWeight: "bold" }}>{a.username}</td>
                <td><span style={{ padding: "4px 8px", backgroundColor: a.role === "super_admin" ? "#FEF3C7" : "#EDF2FF", color: a.role === "super_admin" ? "#92400E" : "#215CFF", borderRadius: "4px", fontSize: "12px" }}>{a.role === "super_admin" ? "سوبر أدمن" : "مشرف"}</span></td>
                <td>••••••••</td>
                <td><button onClick={() => setAdmins(admins.filter(user => user.id !== a.id))} disabled={a.id === currentUser.id} style={{ padding: "6px 12px", color: a.id === currentUser.id ? "gray" : "red", backgroundColor: "#FEE2E2", border: "none", borderRadius: "6px", cursor: a.id === currentUser.id ? "not-allowed" : "pointer" }}>حذف</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [admins, setAdmins] = useState<AdminUser[]>(() => {
    const saved = localStorage.getItem("store_admins");
    return saved ? JSON.parse(saved) : initialAdmins;
  });
  const [currentUser, setCurrentUser] = useState<AdminUser | null>(() => {
    const saved = localStorage.getItem("store_current_user");
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from('products').select('*').order('created_at', { ascending: false });
      if (data && !error) setProducts(data);
    };
    fetchProducts();
  }, []);

  useEffect(() => { localStorage.setItem("store_admins", JSON.stringify(admins)); }, [admins]);
  useEffect(() => { 
    if (currentUser) localStorage.setItem("store_current_user", JSON.stringify(currentUser));
    else localStorage.removeItem("store_current_user");
  }, [currentUser]);

  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  useEffect(() => { window.scrollTo(0, 0); }, [location.pathname]);

  const handleLogin = (u: string, p: string) => {
    const user = admins.find(a => a.username === u && a.password === p);
    if (user) { setCurrentUser(user); return true; }
    return false;
  };

  return (
    <div style={{ direction: "rtl", fontFamily: "Inter, Arial, sans-serif", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {!isAdminRoute && <StoreNavigation />}
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage products={products} />} />
          <Route path="/product/:id" element={<ProductDetailsPage products={products} />} />
          <Route path="/admin/login" element={currentUser ? <Navigate to="/admin/products" /> : <AdminLoginPage onLogin={handleLogin} />} />
          <Route path="/admin/*" element={
            !currentUser ? <Navigate to="/admin/login" /> : (
              <AdminLayout currentUser={currentUser} onLogout={() => setCurrentUser(null)}>
                <Routes>
                  <Route path="products" element={<AdminProductsPage products={products} setProducts={setProducts} />} />
                  <Route path="product/new" element={<AdminAddProductPage products={products} setProducts={setProducts} />} />
                  <Route path="product/edit/:id" element={<AdminAddProductPage products={products} setProducts={setProducts} />} />
                  <Route path="users" element={<AdminUsersPage admins={admins} setAdmins={setAdmins} currentUser={currentUser} />} />
                  <Route path="*" element={<Navigate to="products" />} />
                </Routes>
              </AdminLayout>
            )
          } />
        </Routes>
      </div>
      {!isAdminRoute && <StoreFooter />}
    </div>
  );
}