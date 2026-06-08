/* global */const { useState, useEffect } = React;

/* ---------- atoms ---------- */
const PillButton = ({ children, onClick, ...props }) =>
<button className="btn btn-primary" onClick={onClick} {...props}>{children}</button>;

const GhostButton = ({ children, onClick, ...props }) =>
<button className="btn btn-ghost" onClick={onClick} {...props}>{children}</button>;

const DarkUtilityButton = ({ children, onClick, ...props }) =>
<button className="btn btn-dark" onClick={onClick} {...props}>{children}</button>;

const PearlButton = ({ children, onClick, ...props }) =>
<button className="btn btn-pearl" onClick={onClick} {...props}>{children}</button>;

const StoreHeroButton = ({ children, onClick, ...props }) =>
<button className="btn btn-store" onClick={onClick} {...props}>{children}</button>;

const TextLink = ({ children, onClick, ...props }) =>
<a className="link" onClick={onClick} style={{ cursor: "pointer" }} {...props}>{children}</a>;


const Icon = ({ name, ...rest }) =>
<i data-lucide={name} {...rest}></i>;


/* ---------- nav ---------- */
const GlobalNav = ({ navigate }) =>
<nav className="global-nav" data-screen-label="Global Nav">
    <div className="logo" onClick={() => navigate("home")}>
      <img src="../../assets/haykoze-logo.webp" alt="Haykozé" />
      <span style={{ fontWeight: 600, letterSpacing: 0.2 }}>Haykozé</span>
    </div>
    <ul>
      <li onClick={() => navigate("store")}>Home</li>
      <li onClick={() => navigate("ar49")}>Store</li>
      <li onClick={() => navigate("ar49")}>AR Technology</li>
      <li onClick={() => navigate("ar49")}>Explore</li>
      <li>FAQ</li>
      <li>Support</li>
    </ul>
    <div className="right">
      <Icon name="search" />
      <Icon name="shopping-bag" />
    </div>
  </nav>;


const SubNav = ({ category, links = [], cta, onCta }) =>
<nav className="sub-nav">
    <div className="cat">{category}</div>
    <div className="links">
      {links.map((l, i) => <a key={i} onClick={l.onClick}>{l.label}</a>)}
      {cta && <PillButton onClick={onCta} style={{ padding: "8px 16px", fontSize: 14 }}>{cta}</PillButton>}
    </div>
  </nav>;


/* ---------- tiles ---------- */
const Tile = ({ tone = "light", title, sub, ctaPrimary, ctaGhost, image, onPrimary, onGhost, children }) =>
<section className={`tile ${tone}`}>
    <h2>{title}</h2>
    {sub && <p className="sub">{sub}</p>}
    {(ctaPrimary || ctaGhost) &&
  <div className="ctas">
        {ctaPrimary && <PillButton onClick={onPrimary}>{ctaPrimary}</PillButton>}
        {ctaGhost && <GhostButton onClick={onGhost}>{ctaGhost}</GhostButton>}
      </div>
  }
    {image && <div className="render"><img src={image} alt="" /></div>}
    {children}
  </section>;


/* ---------- utility cards ---------- */
const UtilityCard = ({ image, name, price, onClick }) =>
<div className="utility-card" onClick={onClick}>
    <div className="img-wrap"><img src={image} alt="" /></div>
    <div className="name">{name}</div>
    <div className="price">{price}</div>
    <a className="link">Buy ›</a>
  </div>;


/* ---------- configurator ---------- */
const ConfigChip = ({ swatch, label, delta, selected, onClick }) =>
<span className={`chip ${selected ? "selected" : ""}`} onClick={onClick}>
    {swatch && <span className="swatch" style={{ background: swatch, border: swatch === "#ffffff" ? "1px solid #ddd" : "0" }}></span>}
    <span>{label}</span>
    {delta && <span className="delta">{delta}</span>}
  </span>;


const SearchInput = ({ placeholder = "Search accessories" }) =>
<div className="search">
    <Icon name="search" />
    <input placeholder={placeholder} />
  </div>;


/* ---------- floating sticky bar ---------- */
const FloatingStickyBar = ({ price, onAdd }) =>
<div className="sticky-bar">
    <div className="total">From <span className="price">{price}</span> · or {Math.round(parseInt(price.replace(/[^0-9]/g, "")) / 12)} /mo. for 12 mo.*</div>
    <PillButton onClick={onAdd}>Add to Bag</PillButton>
  </div>;


/* ---------- footer ---------- */
const Footer = () =>
<footer className="footer">
    <div className="cols">
      <div className="col">
        <h4>Shop & Learn</h4>
        <a>AR49 Helmet</a><a>AR49 Cap</a><a>Accessories</a><a>Replacement parts</a><a>Compare</a>
      </div>
      <div className="col">
        <h4>Site</h4>
        <a>Find a dealer</a><a>Bulk orders</a><a>Site safety</a><a>Engineering brief</a>
      </div>
      <div className="col">
        <h4>Account</h4>
        <a>Manage your AR49</a><a>Order status</a><a>Returns</a><a>Warranty</a>
      </div>
      <div className="col">
        <h4>About Haykozé</h4>
        <a>Mission</a><a>Newsroom</a><a>Careers</a><a>Contact</a>
      </div>
    </div>
    <div className="legal">
      <span>© 2026 Haykozé. All-climate Protective Wearables.</span>
      <span>Privacy · Terms · Site Map</span>
    </div>
  </footer>;


Object.assign(window, {
  PillButton, GhostButton, DarkUtilityButton, PearlButton, StoreHeroButton, TextLink, Icon,
  GlobalNav, SubNav, Tile, UtilityCard, ConfigChip, SearchInput, FloatingStickyBar, Footer
});