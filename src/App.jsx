import React, { useMemo, useState } from 'react'

const categories = ['全部', '分类待填写 1', '分类待填写 2', '分类待填写 3', '更多分类']

const products = [
  {
    id: 1,
    name: '商品待填写 1',
    category: '分类待填写 1',
    price: 0,
    stock: 999,
    badge: '可编辑',
    desc: '这里先放占位内容，后续你可以随时改成真实商品名称、价格和说明。',
  },
  {
    id: 2,
    name: '商品待填写 2',
    category: '分类待填写 2',
    price: 0,
    stock: 999,
    badge: '可编辑',
    desc: '这里先放占位内容，后续你可以随时改成真实商品名称、价格和说明。',
  },
  {
    id: 3,
    name: '商品待填写 3',
    category: '分类待填写 3',
    price: 0,
    stock: 999,
    badge: '可编辑',
    desc: '这里先放占位内容，后续你可以随时改成真实商品名称、价格和说明。',
  },
  {
    id: 4,
    name: '商品待填写 4',
    category: '更多分类',
    price: 0,
    stock: 999,
    badge: '可编辑',
    desc: '这里先放占位内容，后续你可以随时改成真实商品名称、价格和说明。',
  },
  {
    id: 5,
    name: '商品待填写 5',
    category: '更多分类',
    price: 0,
    stock: 999,
    badge: '可编辑',
    desc: '这里先放占位内容，后续你可以随时改成真实商品名称、价格和说明。',
  },
  {
    id: 6,
    name: '商品待填写 6',
    category: '分类待填写 1',
    price: 0,
    stock: 999,
    badge: '可编辑',
    desc: '这里先放占位内容，后续你可以随时改成真实商品名称、价格和说明。',
  },
]

const siteConfig = {
  siteName: '超人科技',
  domain: 'xxoo69.qzz.io',
  noticeTitle: '公告内容待填写',
  noticeText:
    '这里是公告占位区。后续你可以随时把这里改成购买说明、售后规则、活动通知或其他公告内容。',
  supportText: '客服方式待填写（例如 Telegram / QQ / 微信 / 邮箱）',
}

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-card-top">
        <div className="product-icon">▣</div>
        <span className="badge">{product.badge}</span>
      </div>

      <p className="category">{product.category}</p>
      <h3>{product.name}</h3>
      <p className="desc">{product.desc}</p>

      <div className="price-row">
        <div>
          <p className="muted">售价</p>
          <p className="price">¥{product.price.toFixed(2)}</p>
        </div>
        <div className="stock">
          <p className="muted">库存</p>
          <p>{product.stock} 件</p>
        </div>
      </div>

      <button className="primary-btn full">立即购买</button>
    </article>
  )
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState('全部')
  const [query, setQuery] = useState('')

  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const matchCategory = activeCategory === '全部' || item.category === activeCategory
      const matchQuery =
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.desc.toLowerCase().includes(query.toLowerCase())
      return matchCategory && matchQuery
    })
  }, [activeCategory, query])

  return (
    <main className="page">
      <div className="background">
        <div className="glow glow-left" />
        <div className="glow glow-right" />
        <div className="glow glow-bottom" />
        <div className="grid-bg" />
      </div>

      <section className="container hero-wrap">
        <nav className="nav">
          <div className="brand">
            <div className="brand-logo">✦</div>
            <div>
              <p className="brand-title">{siteConfig.siteName}</p>
              <p className="brand-domain">{siteConfig.domain}</p>
            </div>
          </div>

          <div className="nav-links">
            <a href="#products">商品</a>
            <a href="#flow">流程</a>
            <a href="#notice">公告</a>
            <a href="#support">客服</a>
          </div>

          <a className="ghost-btn" href="#notice">查询订单</a>
        </nav>

        <div className="hero">
          <div className="hero-copy">
            <div className="pill">⚡ 自动发货 · 实时库存 · 安全下单</div>
            <h1>更清爽的蓝白科技风数字卡密商城</h1>
            <p className="hero-desc">
              我已经把页面调整成更协调的蓝白科技风：整体背景更偏浅蓝，卡片和内容区更偏白色，同时把顶部“超人科技”几个字明显放大了。
            </p>

            <div className="hero-actions">
              <a className="primary-btn" href="#products">浏览商品</a>
              <a className="secondary-btn" href="#notice">查看购买说明 ↗</a>
            </div>

            <div className="stats">
              <div><strong>99.9%</strong><span>自动交付</span></div>
              <div><strong>24h</strong><span>订单查询</span></div>
              <div><strong>SSL</strong><span>安全访问</span></div>
            </div>
          </div>

          <div className="order-demo">
            <div className="demo-panel">
              <div className="demo-header">
                <div>
                  <p className="muted">当前订单</p>
                  <h2>自动发卡演示</h2>
                </div>
                <span className="online">在线</span>
              </div>

              <div className="steps">
                <div className="step"><span>💳</span><div><b>选择商品并填写邮箱</b><p>订单信息用于找回卡密</p></div></div>
                <div className="step"><span>✓</span><div><b>完成支付验证</b><p>支付成功后自动处理</p></div></div>
                <div className="step"><span>▣</span><div><b>系统即时交付卡密</b><p>无需等待人工确认</p></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="container section">
        <div className="section-head">
          <div>
            <p className="eyebrow">商品中心</p>
            <h2>商品信息先预留，后续随时替换</h2>
            <p>你以后只需要改上方的 categories 和 products 数组，就能把占位内容替换成真实商品。</p>
          </div>

          <label className="search">
            <span>⌕</span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="搜索商品名称"
            />
          </label>
        </div>

        <div className="tabs">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={activeCategory === category ? 'active' : ''}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section id="flow" className="container flow">
        <div className="feature-card"><span>#</span><h3>透明价格</h3><p>商品售价、库存、交付方式清晰展示，后期可接入真实数据。</p></div>
        <div className="feature-card"><span>⏱</span><h3>即时交付</h3><p>支付完成后自动生成订单，卡密可在订单页查看。</p></div>
        <div className="feature-card"><span>☏</span><h3>售后入口</h3><p>{siteConfig.supportText}</p></div>
      </section>

      <section id="notice" className="container notice">
        <div>
          <p className="eyebrow">站点公告</p>
          <h2>{siteConfig.noticeTitle}</h2>
          <p>{siteConfig.noticeText}</p>
        </div>
        <button className="white-btn">查看订单</button>
      </section>

      <footer id="support" className="footer">
        <div className="container footer-inner">
          <p>© 2026 {siteConfig.siteName} · {siteConfig.domain}</p>
          <div>
            <a href="#">服务条款</a>
            <a href="#">隐私政策</a>
            <a href="#">联系客服</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
