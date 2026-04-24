import React, { useMemo, useState } from 'react'

const categories = ['全部', '会员订阅', '游戏点卡', '软件授权', '数字服务']

const products = [
  {
    id: 1,
    name: '流媒体会员月卡',
    category: '会员订阅',
    price: 19.9,
    stock: 328,
    badge: '热卖',
    desc: '自动发货，适合个人娱乐订阅场景。',
  },
  {
    id: 2,
    name: '游戏充值兑换码',
    category: '游戏点卡',
    price: 50,
    stock: 126,
    badge: '秒发',
    desc: '卡密库存充足，购买后订单页即时查看。',
  },
  {
    id: 3,
    name: '办公软件授权码',
    category: '软件授权',
    price: 39.9,
    stock: 84,
    badge: '推荐',
    desc: '支持在线验证，适合学习与办公使用。',
  },
  {
    id: 4,
    name: '云工具高级版激活码',
    category: '数字服务',
    price: 29.9,
    stock: 57,
    badge: '限量',
    desc: '科技工具类数字权益，库存实时同步。',
  },
  {
    id: 5,
    name: 'AI 工具体验套餐',
    category: '数字服务',
    price: 15.9,
    stock: 210,
    badge: '新品',
    desc: '面向轻量体验用户，购买后自动展示使用说明。',
  },
  {
    id: 6,
    name: '音乐会员季卡',
    category: '会员订阅',
    price: 49.9,
    stock: 98,
    badge: '优惠',
    desc: '适合长期使用，订单支持邮箱找回。',
  },
]

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
        <div className="grid-bg" />
      </div>

      <section className="container hero-wrap">
        <nav className="nav">
          <div className="brand">
            <div className="brand-logo">✦</div>
            <div>
              <p className="brand-title">XXOO69 发卡中心</p>
              <p className="brand-domain">xxoo69.qzz.io</p>
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
            <h1>简约、快速、有科技感的数字卡密商城</h1>
            <p className="hero-desc">
              面向会员订阅、游戏点卡、软件授权和数字服务的自动化发卡平台。购买后自动展示卡密，支持订单查询与售后联系。
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
            <h2>选择你需要的数字商品</h2>
            <p>分类筛选、关键词搜索、库存展示与一键购买，适合直接接入发卡系统后端。</p>
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
        <div className="feature-card"><span>#</span><h3>透明价格</h3><p>商品售价、库存、交付方式清晰展示，减少购买疑问。</p></div>
        <div className="feature-card"><span>⏱</span><h3>即时交付</h3><p>支付完成后自动生成订单，卡密可在订单页查看。</p></div>
        <div className="feature-card"><span>☏</span><h3>售后入口</h3><p>预留在线客服、订单查询和公告说明位置。</p></div>
      </section>

      <section id="notice" className="container notice">
        <div>
          <p className="eyebrow">站点公告</p>
          <h2>购买前请确认商品说明与邮箱信息</h2>
          <p>
            数字商品通常为虚拟权益或卡密，发货后不支持无理由退换。请保存订单号或邮箱，便于后续查询与售后处理。
          </p>
        </div>
        <button className="white-btn">查看订单</button>
      </section>

      <footer id="support" className="footer">
        <div className="container footer-inner">
          <p>© 2026 XXOO69 发卡中心 · xxoo69.qzz.io</p>
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
