const foods = [
 {id:1,name:"Rendang",region:"Sumatera Barat",category:"Makanan Berat",price:32000,emoji:"🍛",color:"#f9d9a5",tag:"Favorit",desc:"Daging sapi dimasak perlahan hingga bumbu meresap dan kaya rempah.",ingredients:"Daging sapi, santan, cabai, serai, lengkuas, jahe, bawang merah, bawang putih, kunyit, dan daun jeruk."},
 {id:2,name:"Pempek Kapal Selam",region:"Palembang, Sumatera Selatan",category:"Makanan Berat",price:22000,emoji:"🥟",color:"#d9e9d9",tag:"Khas Palembang",desc:"Olahan ikan dan sagu dengan isian telur, disajikan bersama cuko.",ingredients:"Ikan tenggiri, tepung sagu, telur, bawang putih, garam, gula merah, asam jawa, dan cabai."},
 {id:3,name:"Gudeg",region:"Yogyakarta",category:"Makanan Berat",price:26000,emoji:"🍲",color:"#f4d6b6",tag:"Legendaris",desc:"Nangka muda dimasak lama dengan santan dan rempah hingga bercita rasa manis gurih.",ingredients:"Nangka muda, santan, gula merah, daun jati, lengkuas, serai, bawang merah, bawang putih, telur, dan krecek."},
 {id:4,name:"Rawon",region:"Jawa Timur",category:"Makanan Berat",price:29000,emoji:"🥘",color:"#d8dfce",tag:"Kaya rempah",desc:"Sup daging berkuah hitam khas kluwek dengan aroma rempah yang kuat.",ingredients:"Daging sapi, kluwek, serai, daun jeruk, lengkuas, bawang merah, bawang putih, ketumbar, dan tauge."},
 {id:5,name:"Soto Betawi",region:"Jakarta",category:"Makanan Berat",price:28000,emoji:"🍜",color:"#f4dfb7",tag:"Gurih",desc:"Soto dengan kuah santan atau susu yang gurih, berisi potongan daging.",ingredients:"Daging sapi, santan atau susu, kentang, tomat, daun bawang, serai, jahe, kayu manis, dan emping."},
 {id:6,name:"Ayam Betutu",region:"Bali",category:"Makanan Berat",price:34000,emoji:"🍗",color:"#f4c7a7",tag:"Pedas rempah",desc:"Ayam berbumbu base genep khas Bali yang dimasak hingga bumbu meresap.",ingredients:"Ayam, bawang merah, bawang putih, cabai, kunyit, jahe, kencur, lengkuas, serai, dan daun jeruk."},
 {id:7,name:"Coto Makassar",region:"Sulawesi Selatan",category:"Makanan Berat",price:30000,emoji:"🍲",color:"#e8d6c2",tag:"Khas Makassar",desc:"Sup daging dan jeroan dengan kuah kaya rempah serta taburan kacang tanah.",ingredients:"Daging sapi, jeroan, kacang tanah, serai, lengkuas, ketumbar, jintan, bawang putih, dan tauco."},
 {id:8,name:"Papeda Kuah Ikan",region:"Papua & Maluku",category:"Makanan Berat",price:27000,emoji:"🥣",color:"#e6e4bb",tag:"Timur Indonesia",desc:"Papeda bertekstur kenyal disajikan bersama kuah ikan berbumbu kunyit.",ingredients:"Sagu, ikan tongkol atau mubara, kunyit, jeruk nipis, cabai, tomat, serai, dan daun kemangi."},
 {id:9,name:"Nasi Liwet",region:"Solo, Jawa Tengah",category:"Makanan Berat",price:24000,emoji:"🍚",color:"#f0dfb9",tag:"Gurih",desc:"Nasi gurih bersantan yang biasa disajikan dengan areh, labu siam, dan lauk.",ingredients:"Beras, santan, serai, daun salam, ayam suwir, telur, labu siam, dan areh."},
 {id:10,name:"Mie Aceh",region:"Aceh",category:"Makanan Berat",price:27000,emoji:"🍝",color:"#f4d4a2",tag:"Rempah kuat",desc:"Mi tebal dengan racikan rempah khas Aceh, tersedia goreng atau berkuah.",ingredients:"Mi kuning tebal, daging atau seafood, cabai, kapulaga, jintan, kunyit, bawang, tomat, dan emping."},
 {id:11,name:"Sate Madura",region:"Madura, Jawa Timur",category:"Makanan Berat",price:25000,emoji:"🍢",color:"#f4d5a8",tag:"Bumbu kacang",desc:"Potongan daging bakar yang disajikan dengan saus kacang dan kecap.",ingredients:"Daging ayam atau kambing, kacang tanah, kecap manis, bawang merah, bawang putih, jeruk limau, dan cabai."},
 {id:12,name:"Nasi Padang",region:"Sumatera Barat",category:"Makanan Berat",price:30000,emoji:"🍱",color:"#f1d5ae",tag:"Komplet",desc:"Nasi dengan pilihan lauk Minang berbumbu, sayur, dan sambal.",ingredients:"Nasi putih, pilihan lauk rendang atau ayam, daun singkong, gulai, sambal ijo, dan kuah."},
 {id:13,name:"Serabi",region:"Jawa Barat",category:"Kudapan",price:14000,emoji:"🥞",color:"#f5dfb5",tag:"Jajanan pasar",desc:"Kue bundar dari tepung beras dan santan, lembut dengan pinggiran khas.",ingredients:"Tepung beras, santan, kelapa parut, ragi, garam, dan gula; topping dapat berupa kinca."},
 {id:14,name:"Lumpia Semarang",region:"Semarang, Jawa Tengah",category:"Kudapan",price:16000,emoji:"🌯",color:"#e5dfba",tag:"Ikonik",desc:"Kulit tipis berisi rebung berbumbu, dapat disajikan goreng atau basah.",ingredients:"Kulit lumpia, rebung, telur, ayam atau udang, bawang putih, ebi, kecap, dan daun bawang."},
 {id:15,name:"Klepon",region:"Jawa",category:"Manis",price:12000,emoji:"🟢",color:"#d7e8cb",tag:"Manis legit",desc:"Bola ketan berisi gula merah cair dan dibalut kelapa parut.",ingredients:"Tepung ketan, air pandan, gula merah, kelapa parut, dan sedikit garam."},
 {id:16,name:"Bika Ambon",region:"Medan, Sumatera Utara",category:"Manis",price:18000,emoji:"🍰",color:"#f5d6a0",tag:"Berserat",desc:"Kue berongga dengan tekstur kenyal dan aroma khas daun jeruk serta serai.",ingredients:"Tepung tapioka, telur, santan, gula, ragi, serai, daun jeruk, dan kunyit."},
 {id:17,name:"Es Cendol",region:"Jawa Barat",category:"Minuman",price:13000,emoji:"🥤",color:"#d8e9c9",tag:"Segar",desc:"Minuman dingin berisi cendol, santan, dan gula merah cair.",ingredients:"Cendol dari tepung beras atau hunkwe, santan, gula merah, daun pandan, es, dan garam."},
 {id:18,name:"Wedang Uwuh",region:"Imogiri, Yogyakarta",category:"Minuman",price:12000,emoji:"🍵",color:"#ead8bd",tag:"Hangat",desc:"Minuman rempah berwarna kemerahan dengan aroma harum dan rasa hangat.",ingredients:"Jahe, kayu secang, kayu manis, cengkih, daun pala, daun cengkih, gula batu, dan serai."},
 {id:19,name:"Kue Putu",region:"Jawa",category:"Kudapan",price:11000,emoji:"🧁",color:"#d8e7ce",tag:"Tradisional",desc:"Kue berbahan tepung beras dengan isian gula merah, dikukus dalam cetakan bambu.",ingredients:"Tepung beras, kelapa parut, gula merah, garam, dan pandan."},
 {id:20,name:"Seruit",region:"Lampung",category:"Makanan Berat",price:28000,emoji:"🐟",color:"#f2d7b5",tag:"Khas Lampung",desc:"Hidangan ikan bakar atau goreng yang dinikmati bersama sambal terasi dan lalapan.",ingredients:"Ikan air tawar, terasi, cabai, tomat, mangga atau rampai, jeruk, dan lalapan."},
 {id:21,name:"Otak-otak",region:"Kepulauan Riau & Sumatera",category:"Kudapan",price:15000,emoji:"🍡",color:"#f1d9b8",tag:"Camilan gurih",desc:"Adonan ikan berbumbu yang dibungkus daun dan dipanggang.",ingredients:"Ikan tenggiri, tepung sagu, santan, bawang putih, lada, garam, dan daun pisang."},
 {id:22,name:"Kapurung",region:"Luwu, Sulawesi Selatan",category:"Makanan Berat",price:26000,emoji:"🥬",color:"#d9e5c7",tag:"Segar",desc:"Olahan sagu berbentuk bulatan kecil dalam kuah sayur dan ikan.",ingredients:"Sagu, ikan, kacang panjang, jagung, bayam, terong, cabai, dan jeruk."},
 {id:23,name:"Pisang Epe",region:"Makassar, Sulawesi Selatan",category:"Manis",price:14000,emoji:"🍌",color:"#f7dfa3",tag:"Manis",desc:"Pisang kepok bakar yang dipipihkan dan disiram saus gula merah.",ingredients:"Pisang kepok, gula merah, air, daun pandan, dan terkadang keju atau cokelat."},
 {id:24,name:"Es Pisang Ijo",region:"Makassar, Sulawesi Selatan",category:"Minuman",price:17000,emoji:"🍧",color:"#d9e8c9",tag:"Dingin",desc:"Pisang berbalut adonan hijau pandan disajikan dengan bubur sumsum dan sirup.",ingredients:"Pisang, tepung beras, tepung terigu, santan, pandan, bubur sumsum, sirup, dan es."}
];

const rupiah = n => new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",maximumFractionDigits:0}).format(n);
let cart = [];
let activeCategory = "Semua";
let activeDetail = null;

const menuGrid = document.getElementById("menuGrid");
const cartDrawer = document.getElementById("cartDrawer");
const overlay = document.getElementById("overlay");

function renderMenu(){
  const term = document.getElementById("searchInput").value.trim().toLowerCase();
  const shown = foods.filter(food => (activeCategory === "Semua" || food.category === activeCategory) &&
    (food.name.toLowerCase().includes(term) || food.region.toLowerCase().includes(term) || food.ingredients.toLowerCase().includes(term)));
  menuGrid.innerHTML = shown.map(food => `
    <article class="food-card">
      <div class="food-art" style="background:${food.color}"><span>${food.emoji}</span><label class="food-tag">${food.tag}</label></div>
      <div class="food-info">
        <h3>${food.name}</h3><div class="food-origin">📍 ${food.region}</div>
        <div class="food-description">${food.desc}</div>
        <div class="food-bottom"><span class="food-price">${rupiah(food.price)}</span>
          <div class="card-actions"><button class="detail-button" data-detail="${food.id}">Detail</button><button class="add-button" data-add="${food.id}" aria-label="Tambah ${food.name}">+</button></div>
        </div>
      </div>
    </article>`).join("");
  document.getElementById("resultCount").textContent = `Menampilkan ${shown.length} dari ${foods.length} menu`;
  document.getElementById("emptyState").classList.toggle("hidden", shown.length !== 0);
}
function addToCart(id){
  const item = cart.find(x=>x.id===id);
  if(item) item.qty++; else cart.push({id,qty:1});
  renderCart();
  const count = cart.reduce((sum,item)=>sum+item.qty,0);
  document.getElementById("cartCount").textContent=count;
}
function changeQty(id,delta){
  const item=cart.find(x=>x.id===id); if(!item)return;
  item.qty+=delta; if(item.qty<=0)cart=cart.filter(x=>x.id!==id);
  renderCart();
}
function totals(){
  const subtotal=cart.reduce((sum,item)=>sum+foods.find(f=>f.id===item.id).price*item.qty,0);
  const fee=subtotal>0?2000:0; return {subtotal,fee,total:subtotal+fee};
}
function renderCart(){
  const container=document.getElementById("cartItems");
  if(!cart.length) container.innerHTML='<div class="cart-empty">🧺<b>Keranjang masih kosong</b><span>Yuk, pilih makanan favoritmu!</span></div>';
  else container.innerHTML=cart.map(item=>{
    const food=foods.find(f=>f.id===item.id);
    return `<div class="cart-line"><div class="cart-emoji" style="background:${food.color}">${food.emoji}</div><div><h4>${food.name}</h4><small>${rupiah(food.price)} / porsi</small><div class="qty-control"><button data-qty="${food.id}" data-delta="-1">−</button><span>${item.qty}</span><button data-qty="${food.id}" data-delta="1">+</button></div></div><button class="remove-item" data-remove="${food.id}" aria-label="Hapus ${food.name}">✕</button></div>`;
  }).join("");
  const t=totals();
  document.getElementById("subtotal").textContent=rupiah(t.subtotal);
  document.getElementById("serviceFee").textContent=rupiah(t.fee);
  document.getElementById("grandTotal").textContent=rupiah(t.total);
  document.getElementById("checkoutTotal").textContent=rupiah(t.total);
  document.getElementById("checkoutButton").disabled=cart.length===0;
  document.getElementById("cartCount").textContent=cart.reduce((sum,item)=>sum+item.qty,0);
}
function openCart(){cartDrawer.classList.add("open");overlay.classList.add("show");cartDrawer.setAttribute("aria-hidden","false")}
function closeCart(){cartDrawer.classList.remove("open");overlay.classList.remove("show");cartDrawer.setAttribute("aria-hidden","true")}
function openModal(id){document.getElementById(id).classList.add("show");document.getElementById(id).setAttribute("aria-hidden","false")}
function closeModal(id){document.getElementById(id).classList.remove("show");document.getElementById(id).setAttribute("aria-hidden","true")}
function showDetail(id){
  const f=foods.find(x=>x.id===id); if(!f)return; activeDetail=id;
  const visual=document.getElementById("detailVisual");visual.textContent=f.emoji;visual.style.background=f.color;
  document.getElementById("detailCategory").textContent=f.category.toUpperCase();
  document.getElementById("detailName").textContent=f.name;
  document.getElementById("detailOrigin").textContent="📍 Asal: "+f.region;
  document.getElementById("detailDescription").textContent=f.desc;
  document.getElementById("detailIngredients").textContent=f.ingredients;
  document.getElementById("detailPrice").textContent=rupiah(f.price);
  openModal("detailModal");
}

menuGrid.addEventListener("click",e=>{
  const add=e.target.closest("[data-add]"); const detail=e.target.closest("[data-detail]");
  if(add)addToCart(Number(add.dataset.add));
  if(detail)showDetail(Number(detail.dataset.detail));
});
document.getElementById("categoryFilters").addEventListener("click",e=>{
  const chip=e.target.closest("[data-category]");if(!chip)return;
  activeCategory=chip.dataset.category;
  document.querySelectorAll(".category-chip").forEach(x=>x.classList.toggle("active",x===chip));
  renderMenu();
});
document.getElementById("searchInput").addEventListener("input",renderMenu);
document.getElementById("cartItems").addEventListener("click",e=>{
  const qty=e.target.closest("[data-qty]"),remove=e.target.closest("[data-remove]");
  if(qty)changeQty(Number(qty.dataset.qty),Number(qty.dataset.delta));
  if(remove){cart=cart.filter(x=>x.id!==Number(remove.dataset.remove));renderCart()}
});
document.getElementById("openCart").addEventListener("click",openCart);
document.getElementById("closeCart").addEventListener("click",closeCart);
overlay.addEventListener("click",closeCart);
document.getElementById("detailAdd").addEventListener("click",()=>{addToCart(activeDetail);closeModal("detailModal")});
document.querySelectorAll("[data-close]").forEach(btn=>btn.addEventListener("click",()=>closeModal(btn.dataset.close)));
document.querySelectorAll(".modal-wrap").forEach(modal=>modal.addEventListener("click",e=>{if(e.target===modal)closeModal(modal.id)}));
document.getElementById("checkoutButton").addEventListener("click",()=>{closeCart();openModal("checkoutModal")});
document.getElementById("checkoutForm").addEventListener("submit",e=>{
  e.preventDefault();
  if(!cart.length)return;
  const form=new FormData(e.currentTarget);
  const name=String(form.get("customerName")).trim();
  const payment=form.get("payment");
  const code="RN"+Math.random().toString(36).slice(2,8).toUpperCase();
  document.getElementById("successMessage").textContent=`Terima kasih, ${name}! Pesanan demo dengan metode ${payment} telah dicatat. Ini bukan transaksi atau pembayaran sungguhan.`;
  document.getElementById("orderCode").textContent="KODE DEMO: "+code;
  closeModal("checkoutModal");openModal("successModal");
  cart=[];renderCart();e.currentTarget.reset();
});
document.getElementById("finishOrder").addEventListener("click",()=>{closeModal("successModal");window.scrollTo({top:0,behavior:"smooth"})});
document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeCart();document.querySelectorAll(".modal-wrap.show").forEach(x=>closeModal(x.id))}});
renderMenu();renderCart();
