import React, { useEffect, useState } from 'react'
import "./css/home.css"
import Loading from './Loading';

const HomePage = () => {
  

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);



  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
         <body className='asd'>
<audio autoPlay>
 <source src=".\assets\yusuf-miroglu-yasalari.mp3" type="audio/mpeg"/>
</audio>

<div className="yasalar">
<h1>Size Yusuf Miroğlu yasalarını bildiriyorum!</h1>
<p>Bir. Sizin âlem dediğiniz bu bitirim dünyasının bütün raconlarını şu andan itibaren tedavülden kaldırıyorum. Ayrıca racon kelimesinin telaffuz edilmesini dahi yasaklıyorum. Dalga geçmek için bile olsa bu kelimeyi ağzınıza almayacaksınız.</p>
<p>İki. Açlıktan nefesiniz koksa dahi benden başka kimseden hiçbir şekil ve ad altında para istemeyeceksiniz.</p>
<p>Üç. Gazozuna tavla oynamak dahil hiçbir zaman kumar oynamayacaksınız.</p>
<p>Dört. Nefsi müdafaa hariç hiçbir şekilde silah kullanmayacaksınız.</p>
<p>Beş. Uyuşturucu, kadın ticareti, tahsilatçılık, korumacılık, kolpacılık, değnekçilik, arabuluculuk, arazi yağması, park ağalığı, ihale tezgâhı gibi işlere bulaşmış bütün tanıdıklarınızla şu andan itibaren selamı, sabahı keseceksiniz.</p>
<p>Altı. Bu alemde, polis, asker, bürokrat ve siyasetçi; dostunuz da olmayacak, düşmanınız da</p>
<p>Yedi. Hiç kimseye hiçbir durumda yalan söylemeyeceksiniz.</p>
<p>Sekiz. Benimle yada bensiz yaptığınız her iyi işi unutacak bir daha anmayı bile aklınıza getirmeyeceksiniz.</p>
<p>Dokuz. Ben dahil aramızda bu yasalara uymayan herhangi biri için zinhar bağışlanma talebinde dahi bulunulmayacaktır.</p>
</div>
</body>
        </div>
      )}
    </div>
  );
};

export default HomePage
