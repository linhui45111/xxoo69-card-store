import { useEffect, useMemo, useState } from "react";
import "./style.css";

const API_BASE = "https://admin.xxoo69.qzz.io/api/v1";

function pickLocale(value) {
  if (!value) return "";
  if (typeof value === "string") return value;
  return value["zh-CN"] || value["zh_CN"] || value.zh || value["en-US"] || value.en || Object.values(value)[0] || "";
}

function stripHtml(html) {
  return String(html || "")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .trim();
}

function formatPrice(product) {
  const price = product?.price_amount ?? product?.price ?? product?.skus?.[0]?.price_amount ?? "0";
  const n = Number(price);
  return Number.isNaN(n) ? `${price} CNY` : `${n.toFixed(2)} CNY`;
}

function stockText(product) {
  const available = Number(product?.auto_stock_available ?? product?.skus?.[0]?.auto_stock_available ?? 0);
  if (product?.is_sold_out) return "已售罄";
  return available > 0 ? `库存 ${available}` : "暂无库存";
}

export default function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let alive = true;

    async function loadData() {
      try {
        setLoading(true);
        setError("");

        const [productRes, categoryRes] = await Promise.all([
          fetch(`${API_BASE}/public/products?page=1&page_size=50`),
          fetch(`${API_BASE}/public/categories`),
        ]);

        if (!productRes.ok) throw new Error(`商品接口异常：HTTP ${productRes.status}`);

        const productJson = await productRes.json();
        const categoryJson = categoryRes.ok ? await categoryRes.json() : { data: [] };

        if (!alive) return;

        setProducts(Array.isArray(productJson?.data) ? productJson.data : []);
        setCategories(Array.isArray(categoryJson?.data) ? categoryJson.data : []);
      } catch (err) {
        if (!alive) return;
        setError(err?.message || "商品数据读取失败");
      } finally {
        if (alive) setLoading(false);
      }
    }

    loadData();
    return () => {
      alive = false;
    };
  }, []);

  const visibleProducts = useMemo(() => {
    if (activeCategory === "all") return products;
    return products.filter((item) => {
      const catSlug = item?.category?.slug || "";
      const catId = String(item?.category_id || item?.category?.id || "");
      return catSlug === activeCategory || catId === activeCategory;
    });
  }, [products, activeCategory]);

  const totalStock = products.reduce((sum, item) => sum + Number(item?.auto_stock_available || 0), 0);

  return (
    <main className="site-shell">
      <section className="hero-bg">
        <div className="nav-card">
          <div className="brand">
            <div className="brand-icon">✦</div>
            <div>
              <h1>超人科技</h1>
              <p>xxoo69.qzz.io</p>
            </div>
          </div>
          <nav>
            <a href="#products">商品</a>
            <a href="#flow">流程</a>
            <a href="#notice">公告</a>
            <a href="#support">客服</a>
          </nav>
          <a className="outline-button" href="#notice">查询订单</a>
        </div>

        <section className="hero">
          <div className="hero-copy">
            <div className="badge">⚡ 已连接后台 · 实时商品数据</div>
            <h2>更明亮、更清爽、更有科技感的数字卡密商城</h2>
            <p>
              当前商品数据已从 Dujiao-Next 后台接口读取。你在后台新增商品、修改价格、导入库存后，
              前台刷新即可同步显示。
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#products">浏览商品</a>
              <button
                className="ghost-button"
                onClick={() => document.getElementById("notice")?.scrollIntoView({ behavior: "smooth" })}
              >
                查看购买说明 ↗
              </button>
            </div>
            <div className="stats">
              <div>
                <strong>{products.length}</strong>
                <span>已同步商品</span>
              </div>
              <div>
                <strong>{totalStock}</strong>
                <span>可用库存</span>
              </div>
              <div>
                <strong>SSL</strong>
                <span>安全访问</span>
              </div>
            </div>
          </div>

          <div className="order-panel">
            <div className="panel-top">
              <div>
                <span>当前订单</span>
                <h3>自动发卡演示</h3>
              </div>
              <b>在线</b>
            </div>
            <div className="steps">
              <div>
                <i>▣</i>
                <div>
                  <strong>选择商品并填写邮箱</strong>
                  <span>订单信息用于找回卡密</span>
                </div>
              </div>
              <div>
                <i>✓</i>
                <div>
                  <strong>完成支付验证</strong>
                  <span>支付通道接入后自动处理</span>
                </div>
              </div>
              <div>
                <i>□</i>
                <div>
                  <strong>系统即时交付卡密</strong>
                  <span>无需等待人工确认</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section id="products" className="section">
        <div className="section-title">
          <div>
            <span>商品中心</span>
            <h2>后台商品实时同步</h2>
          </div>
          <button className="refresh-button" onClick={() => window.location.reload()}>刷新商品</button>
        </div>

        <div className="category-tabs">
          <button className={activeCategory === "all" ? "active" : ""} onClick={() => setActiveCategory("all")}>
            全部商品
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id || cat.slug}
              className={activeCategory === (cat.slug || String(cat.id)) ? "active" : ""}
              onClick={() => setActiveCategory(cat.slug || String(cat.id))}
            >
              {pickLocale(cat.name) || cat.slug || `分类 ${cat.id}`}
            </button>
          ))}
        </div>

        {loading && <div className="empty-card">正在读取后台商品数据...</div>}

        {!loading && error && (
          <div className="empty-card error">
            <strong>商品读取失败</strong>
            <p>{error}</p>
            <p>请确认后台接口、CORS 和 Dujiao-Next 服务是否正常。</p>
          </div>
        )}

        {!loading && !error && visibleProducts.length === 0 && (
          <div className="empty-card">暂无商品。请先到后台添加商品并确认商品已上架。</div>
        )}

        <div className="product-grid">
          {visibleProducts.map((item) => {
            const title = pickLocale(item.title) || item.slug || "未命名商品";
            const description =
              stripHtml(pickLocale(item.description) || pickLocale(item.content)) || "暂无商品说明";
            const categoryName = pickLocale(item?.category?.name) || "默认分类";
            const soldOut = item?.is_sold_out || Number(item?.auto_stock_available || 0) <= 0;

            return (
              <article className="product-card" key={item.id || item.slug}>
                <div className="product-cover">
                  <span>{title.slice(0, 2)}</span>
                </div>
                <div className="product-info">
                  <div className="product-meta">
                    <span>{categoryName}</span>
                    <span className={soldOut ? "stock danger" : "stock"}>{stockText(item)}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <div className="product-footer">
                    <strong>{formatPrice(item)}</strong>
                    <button onClick={() => setSelectedProduct(item)}>查看详情</button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="flow" className="section two-col">
        <div className="info-card">
          <span>购买流程</span>
          <h2>下单到交付，流程清晰</h2>
          <p>
            当前前台已完成商品展示接入。等你拿到真实支付接口后，可以继续接入下单、支付、回调和自动发卡完整流程。
          </p>
        </div>
        <div className="flow-list">
          <div><b>01</b><span>后台添加商品和卡密库存</span></div>
          <div><b>02</b><span>前台实时读取商品列表</span></div>
          <div><b>03</b><span>配置支付渠道并测试回调</span></div>
          <div><b>04</b><span>支付成功后自动展示卡密</span></div>
        </div>
      </section>

      <section id="notice" className="notice">
        <div>
          <span>站点公告</span>
          <h2>购买前请确认商品说明与邮箱信息</h2>
          <p>
            数字商品通常为虚拟权益或卡密，发货后不支持无理由退款。当前支付接口尚未接入，
            商品展示和库存读取已经打通。
          </p>
        </div>
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>返回顶部</button>
      </section>

      <footer id="support">
        <p>© 2026 超人科技 · xxoo69.qzz.io</p>
        <div>
          <a href="#notice">服务条款</a>
          <a href="#notice">隐私政策</a>
          <a href="#notice">联系客服</a>
        </div>
      </footer>

      {selectedProduct && (
        <div className="modal-mask" onClick={() => setSelectedProduct(null)}>
          <div className="modal" onClick={(event) => event.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProduct(null)}>×</button>
            <span className="modal-category">{pickLocale(selectedProduct?.category?.name) || "商品详情"}</span>
            <h2>{pickLocale(selectedProduct.title) || selectedProduct.slug}</h2>
            <p>{stripHtml(pickLocale(selectedProduct.description) || pickLocale(selectedProduct.content)) || "暂无商品说明"}</p>
            <div className="modal-lines">
              <div><span>价格</span><strong>{formatPrice(selectedProduct)}</strong></div>
              <div><span>库存</span><strong>{stockText(selectedProduct)}</strong></div>
              <div><span>交付</span><strong>自动发卡</strong></div>
            </div>
            <button className="disabled-buy" disabled>支付接口未接入，暂不可购买</button>
          </div>
        </div>
      )}
    </main>
  );
}
