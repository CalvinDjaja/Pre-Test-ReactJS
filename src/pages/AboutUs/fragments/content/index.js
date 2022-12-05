import './styles.css';
import logo from '../../../../Image/logo_company.png';

function Content (prop) {
  
  return(
    <div className='bodyAboutUs'>
      <h1 className='content'>{prop.data}</h1>

      <img src={logo} alt="logo" />
      
      <p className='content'>
        Toys Family merupakan toko retail mainan anak yang 
        berdiri sejak 2010. Pertama kali beroperasi di Grand Indonesia, 
        saat ini Toys Family telah beroperasi di seluruh Indonesia 
        dengan jumlah 58 toko. 
      </p>
      <p className='content'>
        Kami hadir untuk menjawab kebutuhan anak dan orang-tua atas mainan 
        anak dan memberikan fasilitas kemudahan berbelanja secara offline 
        dan online, kapanpun dan dimanapun Anda menginginkannya. 
      </p>
      <p className='content'>
        Kami berusaha membantu Anda dalam bertransaksi dan yang praktis 
        melalui berbagai kategori mainan anak yang lengkap, eksklusif, 
        berkualitas premium dengan harga yang kompetitif.
        
      </p>
      <p className='content'>
        Kami juga memberikan fasilitas cicilan 0% yang bisa Anda nikmati 
        melalui kerja sama dengan berbagai kartu kredit terkemuka. 
      </p>
      <p className='content'>
        Dapat dijangkau secara offline maupun secara online yang aman 
        menggunakan teknologi e-commerce dari Ruparupa.com dengan jaminan 
        orisinalitas untuk semua produk yang kami jual, transaksi dengan 
        proses yang cepat dan mudah, fasilitas penukaran dan pengembalian 
        produk, garansi resmi dari produsen mainan Internasional terkemuka 
        seperti LEGO, HASBRO, MATTEL, ZURU, FISHER-PRICE, Takara Tomy, dan lainnya. 
      </p>
      <p className='content'>
        Kami menghadirkan fitur pengambilan langsung di beberapa pick up 
        point yang berlokasi di berbagai tempat strategis di Indonesia 
        serta beragam pilihan fasilitas pembayaran yang lengkap, mudah dan aman. 
      </p>
      <p className='content'>
        Kami bagian dari Kawan Lama Group yang telah berpengalaman
        sejak 1950 dalam bisnis retail dan membawahi sejumlah anak perusahaan
        antara lain Ace Hardware, Informa Furnishings RupaRupa.com dan lainnya. 
      </p>
    </div>
  );
}

export default Content;